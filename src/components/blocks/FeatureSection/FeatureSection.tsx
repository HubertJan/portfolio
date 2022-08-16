import { styled } from "goober";
import React from "react";
import { ComponentType, FunctionComponent, ReactElement, SVGProps } from "react";
import { useTheme } from "src";
import { Section } from "src/components/elements/Section/Section";
import { StandardContainer } from "src/components/elements/StandardContainer/StandardContainer";
import { addKeyToReactElement } from "src/helper/addKeyToReactElement";
import { BodyText, Heading3Text, SubTitleHeading } from "src/styles/fonts";

const Container = styled(StandardContainer)`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    margin-top: 64px;
    margin-bottom: 64px;
`;

const Heading = styled(Heading3Text)`
    color: ${(props) => props.theme.colors.background};
    text-align: center;
    margin-bottom: 16px;
    max-width: 300px;
`;


const FeaturesRows = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
`;

const FeatureRow = styled("div")`
    align-self: center;
    display: inline-flex;
    flex-direction: row;
    gap: 32px;
    justify-content: center;
    width: 100%;

    @media screen and (max-width: 1000px) {
        flex-direction: column;

    }
`;

const FeatureBox = styled("div")`
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.colors.background};
    gap: 8px;
    @media screen and (max-width: 1000px) {
        width: auto;
    }
    flex-basis: 0px;
    flex-grow: 1;
`;

function createFeatureRowsByFeatureParagraphs({ paragraphs }: { paragraphs: ReactElement<typeof FeatureParagraph>[], }) {
    const rows: ReactElement<typeof FeatureParagraph>[][] = [];
    let row: ReactElement<typeof FeatureParagraph>[] = [];
    const rowLength = paragraphs.length % 3 === 0 ? 3 : paragraphs.length % 2 === 0 ? 2 : 3;
    paragraphs.forEach((paragraph, index) => {
        row.push(addKeyToReactElement(paragraph, index.toString()));
        if (row.length === rowLength) {
            rows.push(row);
            row = [];
        }
    });
    if (row.length !== 0) {
        rows.push(row);
    }
    return (<FeaturesRows>
        {
            rows.map((paragraphs, index) =>
                <FeatureRow key={index}>
                    {paragraphs.map((paragraph) => paragraph)}
                </FeatureRow>
            )
        }
    </FeaturesRows>);
}

export const FeatureParagraph: React.FC<{
    title: string,
    description: string,
    renderIcon: (props: SVGProps<SVGSVGElement>) => ReactElement<SVGSVGElement>;
}> = ({ title, description, renderIcon
}) => {
        const theme = useTheme();

        return (
            <FeatureBox>
                {renderIcon({ fill: theme.colors.primary })}
                <SubTitleHeading>{title}</SubTitleHeading>
                <BodyText>
                    {description}
                </BodyText>
            </FeatureBox>
        );
    };



export const FeatureSection: React.FC<{
    title: string,
    paragraphs: ReactElement<typeof FeatureParagraph>[],
}> = ({ paragraphs, title }) => {
    const theme = useTheme();

    return (
        <Section>
            <Container backgroundColor={theme.colors.onBackground}>
                <Heading>
                    {title}
                </Heading>
                {createFeatureRowsByFeatureParagraphs({
                    paragraphs: paragraphs
                })}
            </Container>
        </Section>);
}