
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

function scrollToPageIndex(pageIndex: number, ref: HTMLDivElement) {
    console.log("yo");
    ref.scrollTo({
        left: ref.clientWidth * (pageIndex),
        behavior: "smooth",
    });
}

export const SliderList: React.FC<{ initialIndex?: number, children?: React.ReactNode, getCurrentIndex?: (index: number) => void }>
    = ({ initialIndex, children, getCurrentIndex,}) => {
        const containerRef = useRef<HTMLDivElement>(null);
        const pageIndex = usePageIndex(containerRef);
        const [lastIndexByPropUsed, setLastIndex] = useState<number | undefined>(undefined);
        let wrapppedChildren = React.Children.map(children, child => (
            <div className={styles.slide}>{child}</div>
        ));
        if (wrapppedChildren === undefined || wrapppedChildren === null) {
            return null;
        }
        if (pageIndex !== undefined && initialIndex !== undefined
            && lastIndexByPropUsed !== initialIndex && initialIndex !== pageIndex) {
            scrollToPageIndex(initialIndex!, containerRef.current!);
            setLastIndex(initialIndex);
        }
        getCurrentIndex && containerRef.current && getCurrentIndex(calculateCurrentPage(containerRef.current!));
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

