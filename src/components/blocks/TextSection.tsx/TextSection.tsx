import { styled } from "goober";
import { useTheme } from "src";
import { Section } from "src/components/elements/Section/Section";
import { BodyText, Heading2Text } from "src/styles/fonts";
import { theme } from "src/theme";

export const Content = styled("div")`
    margin-top: 128px;
    margin-bottom: 128px;
    max-width: 1000px;
    width: 100%;
    color: ${(props) => theme.colors.background};
`;

const Heading2TextWithSpaceBelow = styled(Heading2Text)`
    margin-bottom: 16px;

`;


export const TextSection: React.FC<{
    title: string,
    text: string,
}> = ({ title, text }) => {
    const theme = useTheme();
    return (
        <Section backgroundColor={theme.colors.onBackground}>
            <Content>
                <Heading2TextWithSpaceBelow>{title}</Heading2TextWithSpaceBelow>
                <BodyText>{text}</BodyText>
            </Content>
        </Section>
    );
}