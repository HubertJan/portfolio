
import { styled } from 'goober';
import { BodyText, Heading3Text, SubTitleHeading } from 'src/styles/fonts';

const Content = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    gap: 8px;
`;

const Icon = styled("div") <{
    backgroundImageStyle: string,
    iconImageStyle: string,
    backgroundColorStyle: string,
}>`
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


export const AppIconButton: React.FC<{
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

export const AppIconRows = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
`;

export const AppIconRow = styled('div')`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    @media screen {
        gap: 32px;
    }
    @media screen and (max-width: 1000px) {
        gap: 16px;
    }
`;
