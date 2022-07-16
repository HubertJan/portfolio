import { time } from "console";
import { off } from "process";
import React, { useEffect, useRef, useState } from "react";

function calculateCurrentPage(scrollableContainer: HTMLDivElement)
    : number {

    return Math.round(scrollableContainer.scrollLeft / scrollableContainer.clientWidth);
}

function scrollToPageIndex(pageIndex: number, ref: HTMLDivElement) {
    ref.scrollTo({
        left: ref.clientWidth * (pageIndex),
        behavior: "smooth",
    });
}

function scrollToPageIndexWithoutDelay(pageIndex: number, ref: HTMLDivElement) {
    ref.scrollTo({
        left: ref.clientWidth * (pageIndex),
        behavior: "auto",
    });
}

function usePageIndex(ref: React.RefObject<HTMLDivElement>) {
    const [scrollingStopTimeoutId, setScrollingStopTimeoutId] = useState<number>();
    const [pageIndex, setPageIndex] = useState<number>();
    useEffect(() => {
        setPageIndex(calculateCurrentPage(ref.current!));
        ref.current?.addEventListener("scroll",
            (_) => {
                if (scrollingStopTimeoutId !== undefined) {
                    clearTimeout(scrollingStopTimeoutId);
                }
                setScrollingStopTimeoutId(window.setTimeout(() => {
                    setPageIndex(calculateCurrentPage(ref.current!));
                }, 1));
            }
        );
    }, []);
    return pageIndex;
}

interface ScrollDragPointInterface {
    scrollLeft: number;
    scrollTop: number;
    clientX: number;
    clientY: number;
}

function scrollByMouseDragging(event: MouseEvent,
    dragPoint: ScrollDragPointInterface,
    sliderRef: React.RefObject<HTMLDivElement>,
) {
    scrollByDragging(event.clientX, event.clientY, dragPoint, sliderRef);
}

function scrollByTouchDragging(event: TouchEvent,
    dragPoint: ScrollDragPointInterface,
    sliderRef: React.RefObject<HTMLDivElement>,
) {
    scrollByDragging(event.touches[0].clientX, event.touches[0].clientY, dragPoint, sliderRef);
}

function scrollByDragging(x: number, y: number,
    dragPoint: ScrollDragPointInterface,
    sliderRef: React.RefObject<HTMLDivElement>,
) {
    const newPos = dragPoint.scrollLeft - (x - dragPoint.clientX);
    sliderRef.current!.scroll({
        left: newPos,
        behavior: "auto",
    });
}

enum InputDevice {
    mouse,
    touch
}


function slideByDragEventStart(
    sliderRef: React.RefObject<HTMLDivElement>,
    startEvent: "mousedown" | "touchstart",
    moveEvent: "mousemove" | "touchmove",
    stopEvent: "mouseup" | "touchend",
    minimumScrollSpeedToScrollToNextPage: number
) {
    return (event: MouseEvent | TouchEvent) => {
        const dragPoint = {
            clientX: event instanceof TouchEvent ? event.touches[0].clientX : event.clientX,
            clientY: event instanceof TouchEvent ? event.touches[0].clientY : event.clientY,
            scrollLeft: sliderRef.current!.scrollLeft,
            scrollTop: sliderRef.current!.scrollTop,
        };
        let lastScrollPos = sliderRef.current!.scrollLeft;
        let lastScrollPosTimeStamp = new Date();
        let scrollSpeed = 0;
        const speedMeasure = setInterval(() => {
            let currentTime = new Date();
            let currentScrollPos = sliderRef.current!.scrollLeft;
            let timeDifference = currentTime.getMilliseconds() - lastScrollPosTimeStamp.getMilliseconds();
            let posDifference = currentScrollPos - lastScrollPos;
            scrollSpeed = posDifference * 100000000000 / timeDifference;
            lastScrollPos = sliderRef.current!.scrollLeft;
            lastScrollPosTimeStamp = new Date();
        }, 10);
        const moveHandler = event instanceof TouchEvent ? (e: TouchEvent) => {
            scrollByTouchDragging(e, dragPoint, sliderRef);
        } : (e: MouseEvent) => {
            scrollByMouseDragging(e, dragPoint, sliderRef);
        }
        const removeAllListener = (_: MouseEvent | TouchEvent) => {
            sliderRef.current!.removeEventListener(
                moveEvent,
                moveHandler as any, // Type always fits
            );
            document.removeEventListener(stopEvent, removeAllListener);
            sliderRef.current!.removeEventListener(startEvent, removeAllListener);
            const currentPageIndex = calculateCurrentPage(sliderRef.current!);
            if (Math.abs(scrollSpeed) > minimumScrollSpeedToScrollToNextPage) {
                const nextPageIndex = scrollSpeed > 0 ? calculateCurrentPage(sliderRef.current!)! + 1 : currentPageIndex! - 1;
                scrollToPageIndex(nextPageIndex, sliderRef.current!);
            } else {
                scrollToPageIndex(currentPageIndex, sliderRef.current!);
            }
            clearTimeout(speedMeasure);
        }
        sliderRef.current!.addEventListener(
            moveEvent,
            moveHandler as any // Type always fits
        );

        document.addEventListener(stopEvent, removeAllListener);
        sliderRef.current!.addEventListener(startEvent, removeAllListener);
    };
}

function addDragSliderEventHandler(
    sliderRef: React.RefObject<HTMLDivElement>, device: InputDevice,) {
    const isMouse = device === InputDevice.mouse;
    const startEventName = isMouse ? "mousedown" : "touchstart";
    const moveEventName = isMouse ? "mousemove" : "touchmove";
    const stopEventName = isMouse ? "mouseup" : "touchend";
    const minimumScrollSpeedForScrollToNextPage = isMouse ? 100000000000 : 0;
    const startEvent = slideByDragEventStart(sliderRef, startEventName, moveEventName, stopEventName, minimumScrollSpeedForScrollToNextPage);
    sliderRef.current?.addEventListener(startEventName, startEvent);
}

function useSlider(sliderRef: React.RefObject<HTMLDivElement>) {
    const currentPageIndex = usePageIndex(sliderRef);
    const [hasBeenResized, setHasBeenResized] = useState(false);
    if (hasBeenResized) {
        setHasBeenResized(false);
        currentPageIndex && scrollToPageIndex(currentPageIndex, sliderRef.current!);
    }
    useEffect(() => {
        addDragSliderEventHandler(sliderRef, InputDevice.mouse);
        addDragSliderEventHandler(sliderRef, InputDevice.touch);

        const onResize = () => {
            setHasBeenResized(true);
        }
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);
    return {
        pageIndex: currentPageIndex,
        scrollToPageIndex:
            (pageIndex: number) => {
                sliderRef.current != null && scrollToPageIndex(pageIndex, sliderRef.current);
            },
        setPageIndex: (pageIndex: number) => {
            sliderRef.current != null && scrollToPageIndexWithoutDelay(pageIndex, sliderRef.current);
        },
    };
}


export interface SliderControllerProviderInterface {
    pageIndex: number | undefined;
    scrollToPageIndex: (pageIndex: number) => void;
    sliderRef: React.RefObject<HTMLDivElement>;
    isScrolling: boolean;
    setPageIndex: (pageIndex: number) => void;
}


export function useSliderController(): SliderControllerProviderInterface {
    const sliderRef = useRef<HTMLDivElement>(null);
    const { pageIndex, scrollToPageIndex, setPageIndex } = useSlider(sliderRef);
    const container = sliderRef.current;
    let isScrolling = false;
    if (container !== null) {
        const difference = (container.scrollLeft % container.clientWidth) / container.clientWidth;
        isScrolling = difference > 0.01 && difference < 0.99;
    }
    return {
        pageIndex: pageIndex,
        scrollToPageIndex: scrollToPageIndex,
        sliderRef: sliderRef,
        isScrolling: isScrolling,
        setPageIndex: setPageIndex,
    };
}