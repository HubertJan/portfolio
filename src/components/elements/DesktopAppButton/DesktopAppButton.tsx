import { styled } from "goober";
import { shouldForwardProp } from 'goober/should-forward-prop';

const Content = styled("div")`
    display: inline-block;

    padding: 16px;
    @media screen and (max-width: 1000px) {
        padding: 8px;
    }

    &:hover{
        background-color: rgba(0,0,0,0.4);
    }
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
    margin: auto;
    margin-bottom: 8px;
    @media screen {
        height: 80px;
        width: 80px;
        background-size: cover, auto 65%;
    }
    @media screen and (min-width: 500px) {
        height: 128px;
        width: 128px;
        background-size: cover, auto 65%;
    }
    @media screen and (min-width: 1200px) {
        width: 256px;
        height: 256px;
        background-size: cover, auto 65%;
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
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined,
}> = ({
    title,
    backgroundImage,
    backgroundColor = "black",
    iconImage,
    onClick,
}) => {
        return (
            <Content onClick={onClick}>
                <Icon
                    backgroundImageStyle={backgroundImage ?? ""}
                    iconImageStyle={iconImage ?? ""}
                    backgroundColorStyle={backgroundColor}
                />
                <AppIconText>{title}</AppIconText>
            </Content>
        );
    }