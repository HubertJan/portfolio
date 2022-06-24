import React, { useEffect, useState } from "react";

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

export default function useSlider(sliderRef: React.RefObject<HTMLDivElement>) {
    const currentPageIndex = usePageIndex(sliderRef);
    return {
        pageIndex: currentPageIndex,
        scrollToPageIndex:
            (pageIndex: number) => {
                sliderRef.current != null && scrollToPageIndex(pageIndex, sliderRef.current);
            }
    };
}