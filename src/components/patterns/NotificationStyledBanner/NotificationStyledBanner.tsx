import React, { forwardRef } from "react";
import styles from './StartNotificationStyledBanner.module.scss';
import icon from 'src/assets/heart.svg';
import { StandardContainer } from "src/components/elements/StandardContainer/StandardContainer";
import { NormalText, SubHeading2Text, SubHeading3Text } from "src/styles/fonts";
import { useTheme } from "src";
import { css, keyframes, styled } from "goober";
import shouldForwardProp from "goober/should-forward-prop";

const HeaderText = styled("div")`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
    @media screen {
        font-size: 12px;
    }
    @media screen and (min-width: 500px) {
        font-size: 14px;
    }
    @media screen and (min-width: 1300px) {
        font-size: 21px;
    }
`;

const MainText = styled(SubHeading2Text)`
    @media screen and (max-width: 500px) {
        font-size: 18px;
    }
`;

const SubMainText = styled(SubHeading2Text)`
    opacity: 0.6;
    @media screen and (max-width: 500px) {
        font-size: 18px;
    }
`;

function createGoingOffscreenKeyframes(startValueInPercentage: number) {
    return keyframes`
    from {
        position: relative;
        top: ${-60 + 60 * startValueInPercentage}%;
        opacity: 1;
    }

    to{
        position: relative;
        top: -60%;
        opacity: 0;
    }
`;
}
const Icon = styled("img")`
    width: 24px;
    height: 24px;
    @media screen {
        width: 16px;
        height: 16px;
    }
    @media screen and (min-width: 500px) {
        width: 16px;
        height: 16px;
    }
    @media screen and (min-width: 1300px) {
        width: 24px;
        height: 24px;
    }
`;

const NotificationBox = styled(StandardContainer) <{ fadeOptionsStyle: FadingOptions | null, fadeProgressStyle: number }>`
    display: flex;
    flex-direction: column;

    ${(props) => props.fadeOptionsStyle !== null ? "opacity: 0;" : ""}

    ${(props) => props.fadeOptionsStyle !== null
        ? `animation: ${createGoingOffscreenKeyframes(props.fadeOptionsStyle!.fadingStartValue)} ${props.fadeOptionsStyle!.timeInMs}ms normal;`
        : ""
    } 

    ${(props) => props.fadeProgressStyle !== 1 ? `
            position: relative;
            top: ${-60 * props.fadeProgressStyle}%;
            opacity: ${1 - 1 * props.fadeProgressStyle};
    ` : ""
    }

    @media screen and (max-width: 500px) {
        padding: 16px;
    }
`;

export interface FadingOptions {
    fadingStartValue: number,
    timeInMs: number,
}

export const NotificationStyledBanner: React.FC<{ fadingOptions?: FadingOptions, currentFadeProgress?: number }> = ({ fadingOptions = null, currentFadeProgress = 0 }) => {
    const theme = useTheme();
    return (
        <NotificationBox hasRoundedEdges={false}
            fadeOptionsStyle={fadingOptions}
            fadeProgressStyle={currentFadeProgress}>
            <HeaderText>
                <Icon src={icon} alt="Heart Icon" />
                Entwickler • Gerade
            </HeaderText>
            <MainText>
                Hallo, ich bin <span style={{
                    backgroundColor: theme.colors.primary,
                    paddingLeft: "8px",
                    paddingRight: "8px",
                }}>Hubert</span >
            </MainText>
            <SubMainText>Ich bin ein App Developer.</SubMainText>
        </NotificationBox>
    );
};