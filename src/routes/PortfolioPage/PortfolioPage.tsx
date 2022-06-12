import React, { useState } from "react";
import { BottomPopUpNavigationBar } from "src/components/BottomPopUpNavigationBar/BottomPopUpNavigationBar";
import { StartNotificationStyledBanner } from "../../components/StartNotificationStyledBanner/StartNotificationStyledBanner";
import styles from './PortfolioPage.module.css';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export const PortfolioPage: React.FC<{}> = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    return (
        <div className={styles.portfolioPage}>
            <div className={styles.introSection}>
                <div className={styles.fillFirstScreen} style={
                    {
                        height: windowDimensions.height
                    }
                }>
                    <StartNotificationStyledBanner />
                </div>
                <BottomPopUpNavigationBar/>
            </div>
        </div>
    );
};