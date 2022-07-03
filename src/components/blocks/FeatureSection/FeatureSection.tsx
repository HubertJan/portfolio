import { styled } from "goober";
import { ReactElement } from "react";
import { useTheme } from "src";
import { StandardContainer } from "src/components/elements/StandardContainer/StandardContainer";
import { BodyText, Heading3Text, SubTitleHeading } from "src/styles/fonts";

const Section = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    background-color: ${(props) => props.theme.colors.background};
`;

const Container = styled(StandardContainer)`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
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
`;

const Feature = styled("div")`
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.colors.background};
    width: 300px;
    gap: 8px;
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
    return (<Section>
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