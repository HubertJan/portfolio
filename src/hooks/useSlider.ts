import { time } from "console";
import React, { useEffect, useRef, useState } from "react";

function calculateCurrentPage(scrollableContainer: HTMLDivElement)
    : number {

    return Math.floor(scrollableContainer.scrollLeft / scrollableContainer.clientWidth);
}

function scrollToPageIndex(pageIndex: number, ref: HTMLDivElement) {
    ref.scrollTo({
        left: ref.clientWidth * (pageIndex),
        behavior: "smooth",
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
    const xPos = event.touches[0].clientX;
    const newPos = dragPoint.scrollLeft - (xPos - dragPoint.clientX);
    sliderRef.current!.scroll({
        left: newPos,
        behavior: "auto",
    });
}

function scrollByDragging(x: number, y: number,
    dragPoint: ScrollDragPointInterface,
    sliderRef: React.RefObject<HTMLDivElement>,
) {

    sliderRef.current!.scroll({
        left: dragPoint.scrollLeft - dragPoint.clientX + x,
        behavior: "auto",
    });
}

function useSlider(sliderRef: React.RefObject<HTMLDivElement>) {
    const currentPageIndex = usePageIndex(sliderRef);
    useEffect(() => {
        console.log("First");
        sliderRef.current?.addEventListener("mousedown", (event) => {
            console.log("set point");
            let dragPoint = {
                clientX: event.clientX,
                clientY: event.clientY,
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
                scrollSpeed = posDifference / timeDifference;
                console.log(`scrollSpeed: ${scrollSpeed}`);
            }, 100);
            let mouseMoveHandler = (e: MouseEvent) => {
                scrollByMouseDragging(e, dragPoint, sliderRef);
            }
            let removeAllListener = (_: MouseEvent) => {
                console.log("removed");
                sliderRef.current!.removeEventListener(
                    "mousemove",
                    mouseMoveHandler
                );
                document.removeEventListener("mouseup", removeAllListener);
                sliderRef.current!.removeEventListener("mousedown", removeAllListener);
                let momentum = setInterval(()=>{
                    if(Math.abs(scrollSpeed) < 0.01){
                        console.log("yo");
                        let closestPageIndex = Math.round(sliderRef.current!.scrollLeft / sliderRef.current!.clientWidth);
                        scrollToPageIndex(closestPageIndex, sliderRef.current!);
                        clearTimeout(momentum);
                        return;
                    }
                    sliderRef.current!.scrollBy({
                        left: scrollSpeed * 10,
                        behavior: "auto",
                    });
                    scrollSpeed *= 0.9
                    console.log(`scrollSpeed ${scrollSpeed.toFixed(4)}`);
                }, 1);
                clearTimeout(speedMeasure);
            }
            sliderRef.current!.addEventListener("mousemove", mouseMoveHandler);
            document.addEventListener("mouseup", removeAllListener);
            sliderRef.current!.addEventListener("mousedown", removeAllListener);
        });

        sliderRef.current?.addEventListener("touchstart", (event) => {
            console.log("set point");
            let dragPoint = {
                clientX: event.touches[0].clientX,
                clientY: event.touches[0].clientY,
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
                scrollSpeed = posDifference / timeDifference;
                console.log(`scrollSpeed: ${scrollSpeed}`);
            }, 1);
            let touchMoveHandler = (e: TouchEvent) => {
                scrollByTouchDragging(e, dragPoint, sliderRef);
            }
            let removeAllListener = (_: TouchEvent) => {
                console.log("removed");
                sliderRef.current!.removeEventListener(
                    "touchmove",
                    touchMoveHandler
                );

                document.removeEventListener("touchend", removeAllListener);
                sliderRef.current!.removeEventListener("touchstart", removeAllListener);
                let momentum = setInterval(()=>{
                    if(Math.abs(parseFloat(scrollSpeed.toFixed(4))) < 0.1){
                        console.log("yo");
                        let closestPageIndex = Math.round(sliderRef.current!.scrollLeft / sliderRef.current!.clientWidth);
                        scrollToPageIndex(closestPageIndex, sliderRef.current!);
                        clearTimeout(momentum);
                        return;
                    }
                    sliderRef.current!.scrollBy({
                        left: scrollSpeed * 10,
                        behavior: "auto",
                    });
                    scrollSpeed *= 0.95
                    console.log(`scrollSpeed ${scrollSpeed.toFixed(4)}`);
                }, 1);
                clearTimeout(speedMeasure);
            };
            sliderRef.current!.addEventListener("touchmove", touchMoveHandler);
            document.addEventListener("touchend", removeAllListener);
            sliderRef.current!.addEventListener("touchstart", removeAllListener);
        });

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