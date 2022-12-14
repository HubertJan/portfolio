import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import styles from './HomePage.module.scss';

import { FillScreenContainer } from "src/components/elements/FillScreenContainer/FillScreenContainer";
import { FadingOptions, NotificationStyledBanner } from "src/components/patterns/NotificationStyledBanner/NotificationStyledBanner";
import { ButtonText } from "src/styles/fonts";
import { useUpSwipe } from "src/hooks/useUpSwipe";
import { css, keyframes, styled } from "goober";

const resizeForAttention = keyframes`
    from, to  {
        transform: scale(1);

    }

    50% {
        transform: scale(1.1);
        padding-top: -16px;
        padding-bottom: 16px;
    }
`;

const CallToSwipeText = styled(ButtonText)`
    animation: ${resizeForAttention} 5s ease;
    animation-iteration-count: infinite;

    user-select: all;
    -webkit-user-select: text; /* Safari fallback only */
    -webkit-user-select: all; /* Chrome/Safari */
    -moz-user-select: all; /* Firefox */
    -ms-user-select: all; /* IE10+ */
`;





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
                    navigate("/desktop/0");
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
                    navigate("/desktop/0");
                }, fadeTime);
            }}
            downHandler={(_) => {
                const fadeTime = 500;
                setFadingStartValue({
                    fadingStartValue: 1,
                    timeInMs: fadeTime
                });
                setTimeout(function () {
                    navigate("/desktop/0");
                }, fadeTime);
            }}
            preventScroll={true}
        >
            <FillScreenContainer
                backgroundImage={"https://www.web29.s186.goserver.host/assets/mountains.jpg"}
                backgroundImagePlaceholder={"https://www.web29.s186.goserver.host/assets/mountains-min.jpg"}
                withBackgroundOverlay={true}
            >
                <div className={styles.portfolioPage}>
                    <div className={styles.banner}>
                        <NotificationStyledBanner fadingOptions={fadingOptions ?? undefined} currentFadeProgress={1 - (clickedMouseHeightInPercentage ?? 0)} />
                    </div>

                    <div ref={ref}>
                        <CallToSwipeText className={css`

                        `}>Zum Entsperren nach oben wischen.</CallToSwipeText>
                    </div>
                </div>
            </FillScreenContainer>
        </ReactScrollWheelHandler>
    );
};