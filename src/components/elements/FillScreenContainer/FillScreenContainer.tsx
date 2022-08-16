import React, { useEffect, useState } from "react";

import { LazyLoadImage } from 'react-lazy-load-image-component';


import styles from "./FillScreenContainer.module.scss";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

const useProgressiveImage = (src: string, placeHolder: string) => {
    const [sourceLoaded, setSourceLoaded] = useState<string>(placeHolder)

    useEffect(() => {
        const img = new Image()
        img.src = src
        img.onload = () => setSourceLoaded(src)
    }, [src])

    return sourceLoaded
}

export const FillScreenContainer: React.FC<{
    backgroundImage: string,
    backgroundImagePlaceholder: string,
    withBackgroundOverlay?: boolean,
    children?: React.ReactNode,
}> = ({ backgroundImage, backgroundImagePlaceholder, withBackgroundOverlay = false, children }) => {
    const image = useProgressiveImage(backgroundImage, backgroundImagePlaceholder);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div

            className={`${styles.container} ${withBackgroundOverlay ? styles.backgroundOverlay : ""}`}
            style={
                {
                    height: windowDimensions.height,
                    width: windowDimensions.width,
                    backgroundImage: `url(${image})`,
                }
            }>
            <div className={`${withBackgroundOverlay ? styles.backgroundOverlay : ""}`}
            >
                {children}
            </div>
        </div>
    );
};