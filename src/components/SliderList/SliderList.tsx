
import React, { ReactElement, useEffect, useRef, useState } from "react";
import internal from "stream";
import { CurrentPageIndicator } from "../CurrentPageIndicator/CurrentPageIndicator";
import styles from "./SliderList.module.scss";


function calculateCurrentPage(scrollableContainer: HTMLDivElement)
    : number {

    return Math.floor(scrollableContainer.scrollLeft / scrollableContainer.clientWidth);
}


let scrollingHasStopTimeoutId: number | undefined;


function usePageIndex(ref: React.RefObject<HTMLDivElement>) {
    const [pageIndex, setPageIndex] = useState<number>();
    useEffect(() => {
        setPageIndex(calculateCurrentPage(ref.current!));
        ref.current?.addEventListener("scroll",
            (_) => {
                if (scrollingHasStopTimeoutId !== undefined) {
                    clearTimeout(scrollingHasStopTimeoutId);
                }
                scrollingHasStopTimeoutId = window.setTimeout(() => {
                    setPageIndex(calculateCurrentPage(ref.current!));
                }, 150);
            }
        );
    });
    return pageIndex;
}

function scrollToNextSlide(ref: HTMLDivElement) {
    ref.scrollBy({
        left: 100,
        behavior: "smooth"
    });
};

function scrollToPreviousSlide(ref: HTMLDivElement) {
    ref.scrollBy({
        left: -100,
        behavior: "smooth"
    });
}

function scrollToPageIndex(pageIndex: number, ref: HTMLDivElement) {
    let currentPageIndex = calculateCurrentPage(ref);
    console.log("yo");
    ref.scrollTo({
        left: ref.clientWidth * (pageIndex),
        behavior: "smooth",
    });
}

export const SliderList: React.FC<{ children?: React.ReactNode }>
    = ({ children,
    }) => {
        const containerRef = useRef<HTMLDivElement>(null);
        const pageIndex = usePageIndex(containerRef);
        let wrapppedChildren = React.Children.map(children, child => (
            <div className={styles.slide}>{child}</div>
        ));
        if (wrapppedChildren === undefined || wrapppedChildren === null) {
            return null;
        }
        const slideCount = wrapppedChildren?.length;
        return (
            <div className={styles.container}>
                <div className={styles.scrollable}
                    ref={containerRef}>
                    {wrapppedChildren}
                </div>
                <div className={styles.indicator}>
                    <CurrentPageIndicator
                        currentIndex={pageIndex !== undefined ? pageIndex : 0} pageCount={slideCount}
                        onIndicatorClick={(index) => {
                            scrollToPageIndex(index!, containerRef.current!);

                        }}
                    />
                </div>
            </div>);
    };

