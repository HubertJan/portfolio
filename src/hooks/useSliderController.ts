import React, { useEffect, useRef, useState } from "react";
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
    return (event: MouseEvent | TouchEvent) => {
        const dragPoint = {
            clientX: event instanceof TouchEvent ? event.touches[0].clientX : event.clientX,
            clientY: event instanceof TouchEvent ? event.touches[0].clientY : event.clientY,
            scrollLeft: element.current!.scrollLeft,
            scrollTop: element.current!.scrollTop,
        };
        const { getSpeed, stopMeasuring } = startMeasuringSpeed(element);
        return {
            onMove: (e: TouchEvent | MouseEvent) => scrollByDraggingEvent(e, dragPoint, element), onStop: (event: MouseEvent | TouchEvent) => {
                onEndDrag(element, getSpeed)(event);
                stopMeasuring();
            }
        };
    }
};



function onEndDrag(
    sliderRef: React.RefObject<HTMLDivElement>,
    getCurrentScrollSpeed: () => number,
) {
    return (event: MouseEvent | TouchEvent) => {
        const isMouse = isMouseEvent(event);
        const minimumScrollSpeedToScrollToNextPage = isMouse ? 100000000000 : 0;
        const scrollSpeed = getCurrentScrollSpeed();
        const currentPageIndex = calculateCurrentPage(sliderRef.current!);
        if (Math.abs(scrollSpeed) > minimumScrollSpeedToScrollToNextPage) {
            const nextPageIndex = scrollSpeed > 0 ? calculateCurrentPage(sliderRef.current!)! + 1 : currentPageIndex! - 1;
            scrollToPageIndex(nextPageIndex, sliderRef.current!);
        } else {
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
}

export function useSliderController(): SliderControllerProviderInterface {
    const sliderRef = useRef<HTMLDivElement>(null);
    const currentPageIndex = usePageIndex(sliderRef);
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
    return {
        pageIndex: currentPageIndex,
        scrollToPageIndex:
            (pageIndex: number) => {
                sliderRef.current != null && scrollToPageIndex(pageIndex, sliderRef.current);
            },
        setPageIndex: (pageIndex: number) => {
            sliderRef.current != null && scrollToPageIndexWithoutDelay(pageIndex, sliderRef.current);
        },
        isScrolling: isScrolling,
        sliderRef: sliderRef,
    };
}