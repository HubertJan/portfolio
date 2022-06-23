import React, { useEffect, useState } from "react";

import styles from "./FillScreenContainer.module.scss";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}


export const FillScreenContainer: React.FC<{
    backgroundImage?: string,
    withBackgroundOverlay?: boolean,
    children?: React.ReactNode,
}> = ({ backgroundImage, withBackgroundOverlay = false, children }) => {
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
                    backgroundImage: `url(${backgroundImage})`
                }
            }>
            <div className={`${withBackgroundOverlay ? styles.backgroundOverlay : ""}`}
            >
                {children}
            </div>
        </div>
    );
};