import { styled } from "goober";
import { shouldForwardProp } from 'goober/should-forward-prop';

const Content = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    gap: 8px;
`;

interface IconProps {
    backgroundImageStyle: string,
    iconImageStyle: string,
    backgroundColorStyle: string,
}

const Icon = styled("div") <IconProps> `
    border-radius: 25%;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${(props) => props.backgroundImageStyle}), url( ${(props) => props.iconImageStyle});
    background-color: ${(props) => props.backgroundColorStyle};
    @media screen {
        height: 80px;
        width: 80px;
        background-size: cover, 52px;
    }
    @media screen and (min-width: 500px) {
        height: 128px;
        width: 128px;
        background-size: cover, 84px;
    }
    @media screen and (min-width: 1200px) {
        width: 256px;
        height: 256px;
        background-size: cover, 164px;
    }
`;

const AppIconText = styled("h3")`
    color: ${(props) => props.theme.colors.onPrimary};
    text-align: center;
    word-wrap: break-word;

    @media screen {
        width: 100px;
        font-size: 14px;
    }
    @media screen and (min-width: 500px) {
        width: 150px;
        font-size: 16px;
    }
    @media screen and (min-width: 1200px) {
        width: 256px;
        font-size: 24px;
    }
`;


export const DesktopAppButton: React.FC<{
    title: string,
    backgroundImage?: string,
    backgroundColor?: string,
    iconImage?: string,
}> = ({
    title,
    backgroundImage,
    backgroundColor = "black",
    iconImage,
}) => {
        return (
            <Content>
                <Icon
                    backgroundImageStyle={backgroundImage ?? ""}
                    iconImageStyle={iconImage ?? ""}
                    backgroundColorStyle={backgroundColor}
                />
                <AppIconText>{title}</AppIconText>
            </Content>
        );
    }