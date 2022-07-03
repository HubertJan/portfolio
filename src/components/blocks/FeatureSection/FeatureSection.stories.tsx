import { ComponentMeta } from "@storybook/react";
import { useTheme } from "src";
import emailIcon from 'src/assets/email.svg';
import { FeatureParagraph, FeatureSection } from "./FeatureSection";


export default {
    title: 'FeatureSection',
    component: FeatureSection,
} as ComponentMeta<typeof FeatureSection>;


export const Primary = () => {
    const theme = useTheme();
    return (<FeatureSection
        paragraphs={
            [<FeatureParagraph
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
    ></FeatureSection>);

};