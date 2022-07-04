import { ComponentMeta } from "@storybook/react";
import { useTheme } from "src";
import { Button } from "src/components/elements/Button/Button";
import { TextSection } from "./TextSection";


export default {

    title: 'TextSection',
    component: TextSection,
} as ComponentMeta<typeof TextSection>;


export const Primary = () => {
    return (
        <TextSection
            title="Motivation"
            text="Ursprünglich wurde 3ncrypt als Teil eines Schuleprojekts entwickelt. Die Aufgabe war es ein Tool zu entwickeln, zum Verschlüsseln von Text mithilfe von verschiedenen Algorithmen.
            Nach Fertigstellung des Projekts wurde die App nocheinmal erweitert und als vollständige Tool im Google Play Store veröffentlicht."
        />)
};