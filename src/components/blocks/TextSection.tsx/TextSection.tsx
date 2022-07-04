import { styled } from "goober";
import { useTheme } from "src";
import { Section } from "src/components/elements/Section/Section";
import { BodyText, Heading2Text } from "src/styles/fonts";
import { theme } from "src/theme";

export const Content = styled("div")`

    width: 800px;
    color: ${(props) => theme.colors.background};
`;

export const TextSection: React.FC<{
    title: string,
    text: string,
}> = ({ title, text }) => {
    const theme = useTheme();
    return (
        <Section backgroundColor={theme.colors.onBackground}>
            <Content>
                <Heading2Text>{title}</Heading2Text>
                <BodyText>{text}</BodyText>
            </Content>
        </Section>
    );
}