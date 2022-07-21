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



export const ImpressumPage: React.FC<{
}> = (

    ) => {
        const navigate = useNavigate();
        return (
            <Page>
                <NavigationBar
                    backgroundColor="white"
                >
                    <TextButton
                        label="Schließen"
                        hoverColor="grey"
                        onClick={() => { navigate(-1) }} />
                </NavigationBar>
                <TextSection
                    title="Impressum"
                    text={"experienceText"}
                />
            </Page>
        );
    }