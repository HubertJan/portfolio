
import React, { useRef } from "react";
import useSlider from "src/hooks/useSlider";
import { CurrentPageIndicator } from "../CurrentPageIndicator/CurrentPageIndicator";
import styles from "./SliderList.module.scss";

export const SliderList: React.FC<{ sliderRef?: React.RefObject<HTMLDivElement>, children?: React.ReactNode }>
    = ({sliderRef, children }) => {
        const hookRef = useRef<HTMLDivElement>(null);
        const usedSliderRef = sliderRef !== undefined ? sliderRef : hookRef; 

        const { pageIndex, scrollToPageIndex } = useSlider(usedSliderRef);
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
                    ref={usedSliderRef}>
                    {wrapppedChildren}
                </div>
                <div className={styles.indicator}>
                    <CurrentPageIndicator
                        currentIndex={pageIndex !== undefined ? pageIndex : 0} pageCount={slideCount}
                        onIndicatorClick={(index) => {
                            scrollToPageIndex(index);
                        }}
                    />
                </div>
            </div>);
    };

