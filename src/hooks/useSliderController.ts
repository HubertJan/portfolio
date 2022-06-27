import { time } from "console";
import React, { useEffect, useRef, useState } from "react";

function calculateCurrentPage(scrollableContainer: HTMLDivElement)
    : number {

    return Math.round(scrollableContainer.scrollLeft / scrollableContainer.clientWidth);
}

function scrollToPageIndex(pageIndex: number, ref: HTMLDivElement, behavior: ScrollBehavior = "smooth") {
    ref.scrollTo({
        left: ref.clientWidth * (pageIndex),
        behavior: behavior,
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

function addDragSliderEventHandler(
    sliderRef: React.RefObject<HTMLDivElement>, device: InputDevice,) {
    const startEvent = device === InputDevice.mouse ? "mousedown" : "touchstart";
    const moveEvent = device === InputDevice.mouse ? "mousemove" : "touchmove";
    const stopEvent = device === InputDevice.mouse ? "mouseup" : "touchend";
    sliderRef.current?.addEventListener(startEvent, (event) => {
        let dragPoint = {
            clientX: event instanceof TouchEvent ? event.touches[0].clientX : event.clientX,
            clientY: event instanceof TouchEvent ? event.touches[0].clientY : event.clientY,
            scrollLeft: sliderRef.current!.scrollLeft,
            scrollTop: sliderRef.current!.scrollTop,
        };
        let lastScrollPos = sliderRef.current!.scrollLeft;
        let lastScrollPosTimeStamp = new Date();
        let scrollSpeed = 0;
        let speedMeasure = setInterval(() => {
            let currentTime = new Date();
            let currentScrollPos = sliderRef.current!.scrollLeft;
            let timeDifference = currentTime.getMilliseconds() - lastScrollPosTimeStamp.getMilliseconds();
            let posDifference = currentScrollPos - lastScrollPos;
            scrollSpeed = posDifference * 100000000000 / timeDifference;
            lastScrollPos = sliderRef.current!.scrollLeft;
            lastScrollPosTimeStamp = new Date();
        }, 10);
        let moveHandler = event instanceof TouchEvent ? (e: TouchEvent) => {
            scrollByTouchDragging(e, dragPoint, sliderRef);
        } : (e: MouseEvent) => {
            scrollByMouseDragging(e, dragPoint, sliderRef);
        }
        let removeAllListener = (_: MouseEvent | TouchEvent) => {
            console.log("removed");
            sliderRef.current!.removeEventListener(
                moveEvent,
                moveHandler as any, // Type always fits
            );
            document.removeEventListener(stopEvent, removeAllListener);
            sliderRef.current!.removeEventListener(stopEvent, removeAllListener);
            let currentPageIndex = calculateCurrentPage(sliderRef.current!);
            if (Math.abs(scrollSpeed) > 0) {
                let nextPageIndex = scrollSpeed > 0 ? calculateCurrentPage(sliderRef.current!)! + 1 : currentPageIndex! - 1;
                scrollToPageIndex(nextPageIndex, sliderRef.current!);
            } else {
                console.log(`Speed ${scrollSpeed * 1000}`);
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
    },
    );
}

function useSlider(sliderRef: React.RefObject<HTMLDivElement>) {
    const currentPageIndex = usePageIndex(sliderRef);
    const [hasBeenResized, setHasBeenResized] = useState(false);
    if (hasBeenResized) {
        setHasBeenResized(false);
        currentPageIndex && scrollToPageIndex(currentPageIndex, sliderRef.current!, "auto");
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
            }
    };
}


export interface SliderControllerProviderInterface {
    pageIndex: number | undefined;
    scrollToPageIndex: (pageIndex: number) => void;
    sliderRef: React.RefObject<HTMLDivElement>;
}


export function useSliderController(): SliderControllerProviderInterface {
    const sliderRef = useRef<HTMLDivElement>(null);
    const { pageIndex, scrollToPageIndex } = useSlider(sliderRef);
    return { pageIndex: pageIndex, scrollToPageIndex: scrollToPageIndex, sliderRef: sliderRef };
}