import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { StartNotificationStyledBanner } from "../../components/StartNotificationStyledBanner/StartNotificationStyledBanner";

import styles from './HomePage.module.scss';


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export const HomePage: React.FC<{}> = () => {
    const [windowDimensions] = useState(getWindowDimensions());
    const navigate = useNavigate();

    return (
        <div className={styles.portfolioPage} style={
            {
                height: windowDimensions.height
            }
        }>
            <div className={styles.banner}>
                <StartNotificationStyledBanner />
            </div>
            <div>
                <button onClick={() => {
                    navigate("/main");
                }}>Hi</button>
            </div>
        </div>
    );
};