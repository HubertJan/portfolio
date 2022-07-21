import { styled } from "goober";
import { ReactElement } from "react";
import { FeatureParagraph, FeatureSection } from "src/components/blocks/FeatureSection/FeatureSection";
import { ImagesSection } from "src/components/blocks/ImagesSection/ImagesSection";
import { ProjectHeaderProps } from "src/components/blocks/CustomHeader/CustomHeader";
import { NavigationBar } from "src/components/elements/NavigationBar/NavigationBar";

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
    featureParagraphs: ReactElement<typeof FeatureParagraph>[],
    motivationText: string,
}> = (
    {
        featureParagraphs,
        projectHeader,
        productImageUrls,
        behindNavigationBarColor,
        motivationText,
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
                        onClick={() => { 
                            navigate(-1) ;
                        }} />
                </NavigationBar>
                {projectHeader}
                {productImageUrls.length !== 0 ? <ImagesSection
                    imageUrls={productImageUrls}
                /> : null}
                <TextSection
                    title="Motivation"
                    text={motivationText}
                />
                {featureParagraphs.length !== 0 ? <FeatureSection
                    paragraphs={featureParagraphs}
                /> : null}

            </Page>
        );
    }