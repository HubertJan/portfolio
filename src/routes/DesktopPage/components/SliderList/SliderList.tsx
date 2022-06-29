
import React, { useRef } from "react";

import { SliderControllerProviderInterface } from "src/hooks/useSliderController";
import { CurrentSlideIndicator } from "../CurrentSlideIndicator/CurrentSlideIndicator";
import styles from "./SliderList.module.scss";


export const SliderList: React.FC<{ sliderController: SliderControllerProviderInterface, children?: React.ReactNode }>
    = ({ sliderController, children }) => {
        const { pageIndex, scrollToPageIndex, sliderRef } = sliderController;
        let wrapppedChildren = React.Children.map(children, child => (
            <div className={styles.slide}>{child}</div>
        ));
        if (wrapppedChildren === undefined || wrapppedChildren === null) {
            return null;
        }
        const slideCount = wrapppedChildren?.length;
        return (
            <div className={styles.container}>
                <div
                    className={styles.scrollable}
                    ref={sliderRef} >
                    {wrapppedChildren}
                </div>
                <div className={styles.indicator}>
                    <CurrentSlideIndicator
                        currentIndex={pageIndex !== undefined ? pageIndex : 0} pageCount={slideCount}
                        onIndicatorClick={(index) => {
                            scrollToPageIndex(index);
                        }}
                    />
                </div>
            </div>);
    };

