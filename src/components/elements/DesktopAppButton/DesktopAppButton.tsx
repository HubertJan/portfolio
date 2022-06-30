import { styled } from "goober";

const Content = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    gap: 8px;
`;

const Icon = styled("div") <{
    backgroundImage: string,
    iconImage: string,
    backgroundColor: string,
}>`
    border-radius: 25%;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${(props) => props.backgroundImage}), url( ${(props) => props.iconImage});
    background-color: ${(props) => props.backgroundColor};
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
                    backgroundImage={backgroundImage ?? ""}
                    iconImage={iconImage ?? ""}
                    backgroundColor={backgroundColor}
                />
                <AppIconText>{title}</AppIconText>
            </Content>
        );
    }