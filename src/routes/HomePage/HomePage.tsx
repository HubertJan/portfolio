import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import styles from './HomePage.module.scss';
import backgroundImage from "src/assets/background_image.jpg";
import { FillScreenContainer } from "src/components/elements/FillScreenContainer/FillScreenContainer";
import { NotificationStyledBanner } from "src/components/patterns/NotificationStyledBanner/NotificationStyledBanner";
import { ButtonText } from "src/styles/fonts";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export const HomePage: React.FC<{}> = () => {
    const navigate = useNavigate();
    const [isLeaving, setIsLeaving] = useState<boolean>(false);

    return (
        <FillScreenContainer
            backgroundImage={backgroundImage}
            withBackgroundOverlay={true}
        >
            <div className={styles.portfolioPage}>
                <div className={styles.banner}>
                    <NotificationStyledBanner shouldFade={isLeaving} />
                </div>
                <div>
                    <ButtonText onClick={() => {
                        setIsLeaving(true);
                        setTimeout(function () {
                            navigate("/main");
                        }, 500);
                    }}>Zum Entsprechen nach oben wischen.</ButtonText>
                </div>
            </div>
        </FillScreenContainer>

    );
};