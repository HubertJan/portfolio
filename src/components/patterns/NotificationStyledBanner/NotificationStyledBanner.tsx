import React from "react";
import styles from './StartNotificationStyledBanner.module.scss';
import icon from 'src/assets/heart.svg';
import { StandardContainer } from "src/components/elements/StandardContainer/StandardContainer";
import { NormalText, SubHeading2Text } from "src/styles/fonts";
import { useTheme } from "src";
import { styled } from "goober";

export const HeaderText = styled("div")`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
    @media screen {
        font-size: 12px;
    }
    @media screen and (min-width: 500px) {
        font-size: 18px;
    }
    @media screen and (min-width: 1300px) {
        font-size: 21px;
    }
`;

export const Icon = styled("img")`
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

export const NotificationBox = styled(StandardContainer)`
    display: flex;
    flex-direction: column;
`;

export const NotificationStyledBanner: React.FC<{}> = () => {
    const theme = useTheme();
    return (
        <NotificationBox hasRoundedEdges={false}>
            <HeaderText>
                <Icon src={icon} alt="Heart Icon" />
                <NormalText>Entwickler • Gerade</NormalText>
            </HeaderText>
            <SubHeading2Text>
                Hallo, ich bin <span style={{
                    backgroundColor: theme.colors.primary,
                    paddingLeft: "8px",
                    paddingRight: "8px",
                }}>Hubert</span >
            </SubHeading2Text>
            <SubHeading2Text>Ich bin ein App Developer.</SubHeading2Text>
        </NotificationBox>
    );
};