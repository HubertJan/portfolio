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
    children?: React.ReactNode,
}> = ({ backgroundImage, children }) => {
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
            className={styles.container}
            style={
                {
                    height: windowDimensions.height,
                    backgroundImage:`url(${backgroundImage})`
                }
            }>
            {children}
        </div>
    );
};