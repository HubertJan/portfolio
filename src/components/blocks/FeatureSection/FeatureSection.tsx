import { styled } from "goober";
import { ReactElement } from "react";
import { useTheme } from "src";
import { Section } from "src/components/elements/Section/Section";
import { StandardContainer } from "src/components/elements/StandardContainer/StandardContainer";
import { BodyText, Heading3Text, SubTitleHeading } from "src/styles/fonts";

const Container = styled(StandardContainer)`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    width: 1000px;
    margin-top: 128px;
    margin-bottom: 128px;
`;

const Heading = styled(Heading3Text)`
    color: ${(props) => props.theme.colors.background};
    text-align: center;
    margin-bottom: 16px;
    max-width: 300px;
`;

const Features = styled("div")`
    align-self: center;
    display: inline-flex;
    flex-direction: row;
    gap: 32px;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        flex-direction: column;

    }
`;

const Feature = styled("div")`
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.colors.background};
    gap: 8px;
    @media screen and (max-width: 1000px) {
        width: auto;
    }
`;

const Icon = styled("img")`
    width: 48px;
    height: 48px;
`;

export const FeatureParagraph: React.FC<{
    title: string,
    description: string,
    icon: string,
    altIcon: string,
}> = ({ title, description, icon, altIcon
}) => {
        return (
            <Feature>
                <Icon src={icon} alt={altIcon} />
                <SubTitleHeading>{title}</SubTitleHeading>
                <BodyText>
                    {description}
                </BodyText>
            </Feature>
        );
    };

export const FeatureSection: React.FC<{
    paragraphs: ReactElement<typeof FeatureParagraph>[]
}> = ({ paragraphs }) => {
    const theme = useTheme();
    return (
        <Section>
            <Container backgroundColor={theme.colors.onBackground}>
                <Heading>
                    Funktion
                </Heading>
                <Features>
                    {paragraphs.map((paragraph) => paragraph)}
                </Features>
            </Container>
        </Section>);
}