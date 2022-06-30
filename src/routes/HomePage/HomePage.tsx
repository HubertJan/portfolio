import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import styles from './HomePage.module.scss';
import backgroundImage from "src/assets/background_image.jpg";
import { FillScreenContainer } from "src/components/elements/FillScreenContainer/FillScreenContainer";
import { NotificationStyledBanner } from "src/components/patterns/NotificationStyledBanner/NotificationStyledBanner";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export const HomePage: React.FC<{}> = () => {
    const navigate = useNavigate();

    return (
        <FillScreenContainer
            backgroundImage={backgroundImage}
            withBackgroundOverlay={true}
        >
            <div className={styles.portfolioPage}>
                <div className={styles.banner}>
                    <NotificationStyledBanner />
                </div>
                <div>
                    <button onClick={() => {
                        navigate("/main");
                    }}>Hi</button>
                </div>
            </div>
        </FillScreenContainer>

    );
};