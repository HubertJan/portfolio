import React, { useEffect, useRef, useState } from "react";
import { AppTouchEvent } from "src/helper/compatibility";
import { isMouseEvent } from "src/helper/isMouseEvent";
import { scrollByDraggingEvent, scrollToPageIndex, scrollToPageIndexWithoutDelay } from "src/helper/scrollElement";
import { startMeasuringSpeed } from "src/helper/startMeasuringSpeed";
import { addDragListenersAndReturnRemover } from "../helper/addDragListenersAndReturnRemover";
import { useResize } from "./useResize";

function calculateCurrentPage(scrollableContainer: HTMLDivElement)
    : number {
    return Math.round(scrollableContainer.scrollLeft / scrollableContainer.clientWidth);
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

function createOnDragStart(
    element: React.RefObject<HTMLDivElement>,
) {
    return (event: MouseEvent | AppTouchEvent) => {
        const dragPoint = {
            clientX: event instanceof MouseEvent ? event.clientX : event.touches[0].clientX,
            clientY: event instanceof MouseEvent ? event.clientY : event.touches[0].clientY,
            scrollLeft: element.current!.scrollLeft,
            scrollTop: element.current!.scrollTop,
        };
        const currentPage = calculateCurrentPage(element.current!);
        const { getSpeed, stopMeasuring } = startMeasuringSpeed(element);
        return {
            onMove: (e: AppTouchEvent | MouseEvent) => scrollByDraggingEvent(e, dragPoint, element), onStop: (_: MouseEvent | AppTouchEvent) => {
                onEndDrag(element, getSpeed, currentPage)(event);
                stopMeasuring();
            }
        };
    }
};



function onEndDrag(
    sliderRef: React.RefObject<HTMLDivElement>,
    getCurrentScrollSpeed: () => number,
    currentPageIndex: number,
) {
    return (event: MouseEvent | AppTouchEvent) => {
        const isMouse = isMouseEvent(event);
        const minimumScrollSpeedToScrollToNextPage = isMouse ? 100000000000 : 0;
        const scrollSpeed = getCurrentScrollSpeed();
        if (Math.abs(scrollSpeed) > minimumScrollSpeedToScrollToNextPage) {
            const nextPageIndex = scrollSpeed > 0 ? currentPageIndex + 1 : currentPageIndex - 1;
            console.log(`currentPage: ${currentPageIndex}, nextPage: ${nextPageIndex}`);
            scrollToPageIndex(nextPageIndex, sliderRef.current!);
        } else {
            console.log(`currentPage: ${currentPageIndex}`);
            scrollToPageIndex(currentPageIndex, sliderRef.current!);
        }
    }

}

export interface SliderControllerProviderInterface {
    pageIndex: number | undefined;
    scrollToPageIndex: (pageIndex: number) => void;
    sliderRef: React.RefObject<HTMLDivElement>;
    isScrolling: boolean;
    setPageIndex: (pageIndex: number) => void;
    setIsAllowedToSlide: (isAllowedToSlide: boolean) => void,
}

export function useSliderController(): SliderControllerProviderInterface {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isAllowedToSlide, setIsAllowedToSlide] = useState<boolean>(true);
    const currentPageIndex = usePageIndex(sliderRef);
    const [lastPageIndexBeforeNoSliding, setLastPageIndexBeforeNoSliding] = useState(0);
    const { hasBeenResized, acknowledgeResize } = useResize();
    const container = sliderRef.current;
    let isScrolling = false;

    if (container !== null) {
        const difference = (container.scrollLeft % container.clientWidth) / container.clientWidth;
        isScrolling = difference > 0.01 && difference < 0.99;
    }
    if (hasBeenResized) {
        acknowledgeResize();
        currentPageIndex && scrollToPageIndex(currentPageIndex, sliderRef.current!);
    }
    useEffect(() => {
        return addDragListenersAndReturnRemover({
            element: sliderRef,
            onStartReturnOnMoveAndOnEnd: createOnDragStart(sliderRef),
        });
    }, []);

    useEffect(() => {
        if (!isAllowedToSlide) {
            scrollToPageIndexWithoutDelay(lastPageIndexBeforeNoSliding!, sliderRef.current!);
        }
    }, [currentPageIndex]);

    useEffect(() => {
        if (!isAllowedToSlide) {
            setLastPageIndexBeforeNoSliding(currentPageIndex!);
        }
    }, [isAllowedToSlide]);
    return {
        pageIndex: currentPageIndex,
        setIsAllowedToSlide,
        scrollToPageIndex:
            (pageIndex: number) => {
                if (!isAllowedToSlide) {
                    return;
                }
                sliderRef.current != null && scrollToPageIndex(pageIndex, sliderRef.current);
            },
        setPageIndex: (pageIndex: number) => {
            sliderRef.current != null && scrollToPageIndexWithoutDelay(pageIndex, sliderRef.current);
        },
        isScrolling: isScrolling,
        sliderRef: sliderRef,
    };
}