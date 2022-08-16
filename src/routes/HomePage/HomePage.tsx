import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import styles from './HomePage.module.scss';
import backgroundImage from "src/assets/background_image.jpg";
import { FillScreenContainer } from "src/components/elements/FillScreenContainer/FillScreenContainer";
import { FadingOptions, NotificationStyledBanner } from "src/components/patterns/NotificationStyledBanner/NotificationStyledBanner";
import { ButtonText } from "src/styles/fonts";
import { useUpSwipe } from "src/hooks/useUpSwipe";
import { css } from "goober";

export const HomePage: React.FC<{}> = () => {
    const navigate = useNavigate();
    const [fadingOptions, setFadingStartValue] = useState<null | FadingOptions>(null);
    const { ref, clickedMouseHeightInPercentage } = useUpSwipe({
        onStop: (e, percentage) => {
            if (percentage < 0.8) {
                const fadeTime = percentage * 500;
                setFadingStartValue({
                    fadingStartValue: percentage,
                    timeInMs: fadeTime
                });
                setTimeout(function () {
                    navigate("/main/0");
                }, fadeTime);
            }
        }
    });

    return (
        <ReactScrollWheelHandler
            upHandler={(_) => {
                const fadeTime = 500;
                setFadingStartValue({
                    fadingStartValue: 1,
                    timeInMs: fadeTime
                });
                setTimeout(function () {
                    navigate("/main/0");
                }, fadeTime);
            }}
            downHandler={(_) => {
                const fadeTime = 500;
                setFadingStartValue({
                    fadingStartValue: 1,
                    timeInMs: fadeTime
                });
                setTimeout(function () {
                    navigate("/main/0");
                }, fadeTime);
            }}
            preventScroll={true}
        >
            <FillScreenContainer
                backgroundImage={backgroundImage}
                withBackgroundOverlay={true}
            >
                <div className={styles.portfolioPage}>
                    <div className={styles.banner}>
                        <NotificationStyledBanner fadingOptions={fadingOptions ?? undefined} currentFadeProgress={1 - (clickedMouseHeightInPercentage ?? 0)} />
                    </div>

                    <div ref={ref}>
                        <ButtonText className={css`
                          user-select: all;
                        -webkit-user-select: text; /* Safari fallback only */
                        -webkit-user-select: all; /* Chrome/Safari */
                        -moz-user-select: all; /* Firefox */
                        -ms-user-select: all; /* IE10+ */
                        `}>Zum Entsprechen nach oben wischen.</ButtonText>
                    </div>
                </div>
            </FillScreenContainer>
        </ReactScrollWheelHandler>
    );
};