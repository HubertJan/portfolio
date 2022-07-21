import { styled } from "goober";
import { ReactElement } from "react";
import { FeatureParagraph, FeatureSection } from "src/components/blocks/FeatureSection/FeatureSection";
import { ProjectHeaderProps } from "src/components/blocks/CustomHeader/CustomHeader";
import { NavigationBar } from "src/components/elements/NavigationBar/NavigationBar";
import { ReactComponent as EmailIcon } from 'src/assets/email.svg';
import { TextSection } from "src/components/blocks/TextSection.tsx/TextSection";
import { useNavigate } from "react-router-dom";
import { TextButton } from "src/components/elements/TextButton";

const Page = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;



export const SkillTemplate: React.FC<{
    skillHeader: ReactElement<ProjectHeaderProps>,
    behindNavigationBarColor: string,
    experienceText: string,
    featureParagraphs: ReactElement<typeof FeatureParagraph>[],
}> = (
    {
        skillHeader: projectHeader,
        behindNavigationBarColor,
        experienceText,
        featureParagraphs
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
                <TextSection
                    title="Erfahrungen"
                    text={experienceText}
                />
                <FeatureSection
                    title="Anwendungsfälle"
                    paragraphs={featureParagraphs}
                />
            </Page>
        );
    }