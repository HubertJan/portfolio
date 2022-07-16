import { styled } from "goober";
import { ReactElement } from "react";
import { useTheme } from "src";
import { FeatureParagraph, FeatureSection } from "src/components/blocks/FeatureSection/FeatureSection";
import { ImagesSection } from "src/components/blocks/ImagesSection/ImagesSection";
import { ProjectHeaderProps } from "src/components/blocks/ProjectHeader/ProjectHeader";
import { NavigationBar } from "src/components/elements/NavigationBar/NavigationBar";
import emailIcon from 'src/assets/email.svg';
import { TextSection } from "src/components/blocks/TextSection.tsx/TextSection";
import { useNavigate } from "react-router-dom";
import { TextButton } from "src/components/elements/TextButton";

const Page = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;



export const PortfolioProjectTemplate: React.FC<{
    projectHeader: ReactElement<ProjectHeaderProps>,
    productImageUrls: string[],
    behindNavigationBarColor: string,
}> = (
    {
        projectHeader,
        productImageUrls,
        behindNavigationBarColor,
    }
) => {
        const navigate = useNavigate();
        return (
            <Page>
                <NavigationBar
                backgroundColor={behindNavigationBarColor}
                >
                    <TextButton 
                    label="Schließen"
                    hoverColor="grey"
                    onClick={() => { navigate(-1) }} />
                </NavigationBar>
                {projectHeader}
                <ImagesSection
                    imageUrls={productImageUrls}
                />
                <TextSection
                    title="Motivation"
                    text="Ursprünglich wurde 3ncrypt als Teil eines Schuleprojekts entwickelt. Die Aufgabe war es ein Tool zu entwickeln, zum Verschlüsseln von Text mithilfe von verschiedenen Algorithmen.
                    Nach Fertigstellung des Projekts wurde die App nocheinmal erweitert und als vollständige Tool im Google Play Store veröffentlicht."
                />
                <FeatureSection
                    paragraphs={[<FeatureParagraph
                        title="12 Algorithmen"
                        description="Du kannst in wenigen Sekunden direkt in der N26 App anfragen, ob ein Überziehungskredit für dich zur Verfügung steht. Erhalte bis zu 10.000 € und verwalte deinen Kredit direkt in der App – so kannst du jederzeit einsehen, wie viel du aktuell nutzt und was die täglichen Gebühren sind."
                        icon={emailIcon}
                        altIcon="email"
                    />,
                    <FeatureParagraph
                        title="12 Algorithmen"
                        description="Du kannst in wenigen Sekunden direkt in der N26 App anfragen, ob ein Überziehungskredit für dich zur Verfügung steht. Erhalte bis zu 10.000 € und verwalte deinen Kredit direkt in der App – so kannst du jederzeit einsehen, wie viel du aktuell nutzt und was die täglichen Gebühren sind."
                        icon={emailIcon}
                        altIcon="email"
                    />
                    ]}
                />
            </Page>
        );
    }