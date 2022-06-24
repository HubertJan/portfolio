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
function useSlider(sliderRef: React.RefObject<HTMLDivElement>) {
    const currentPageIndex = usePageIndex(sliderRef);
    const [isScrolling, setIsScrolling] = useState(false);
    useEffect(() => {
        console.log("First");
        sliderRef.current?.addEventListener("mousedown", (_) => {
            console.log("down");
            setIsScrolling(true);
        });
        sliderRef.current?.addEventListener("mouseup", (_) => {
            console.log("up");
            setIsScrolling(false);
        });
        sliderRef.current?.addEventListener("mousemove", (_) => {
            if (isScrolling) {
                console.log("move");
                setIsScrolling(false);
            }
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