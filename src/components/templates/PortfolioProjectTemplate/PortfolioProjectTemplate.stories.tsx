import { ComponentMeta } from "@storybook/react";
import { useTheme } from "src";
import { ProjectHeader } from "src/components/blocks/CustomHeader/CustomHeader";
import { ReactComponent as EmailIcon } from 'src/assets/email.svg';
import { Button } from "src/components/elements/Button/Button";
import { PortfolioProjectTemplate } from "./PortfolioProjectTemplate";
import { FeatureParagraph } from "src/components/blocks/FeatureSection/FeatureSection";

export default {

  title: 'PortfolioProjectTemplate',
  component: PortfolioProjectTemplate,
} as ComponentMeta<typeof PortfolioProjectTemplate>;


export const Primary = () => {
  const theme = useTheme();
  return (
    <PortfolioProjectTemplate
    behindNavigationBarColor={theme.colors.primaryVariants[500]}
      projectHeader={
        <ProjectHeader
          title="3ncrypt"
          description="Ver- und Entschlüsselungs App für Android und iOS"
          tags={["Flutter", "Dart"]}
          backgroundColor={theme.colors.primaryVariants[500]}
          color={theme.colors.onPrimary}
          buttons={
            [<Button label="Github"
              hoverBackgroundColor={theme.colors.primaryVariants[50]}
              hoverColor={theme.colors.background}
            />,
            <Button label="Live Demo"
              hoverBackgroundColor={theme.colors.primaryVariants[50]}
              hoverColor={theme.colors.background}
            />]
          }
        />}
      productImageUrls={
        [
          'http://placeimg.com/1200/800/nature',
          'http://placeimg.com/800/1200/nature',
          'http://placeimg.com/1920/1080/nature',
          'http://placeimg.com/1500/500/nature',
        ]
      }
      featureParagraphs={[
        <FeatureParagraph
          title="12 Algorithmen"
          description="Du kannst in wenigen Sekunden direkt in der N26 App anfragen, ob ein Überziehungskredit für dich zur Verfügung steht. Erhalte bis zu 10.000 € und verwalte deinen Kredit direkt in der App – so kannst du jederzeit einsehen, wie viel du aktuell nutzt und was die täglichen Gebühren sind."
          renderIcon={(props) => <EmailIcon {...props} />}
        />,
        <FeatureParagraph
          title="12 Algorithmen"
          description="Du kannst in wenigen Sekunden direkt in der N26 App anfragen, ob ein Überziehungskredit für dich zur Verfügung steht. Erhalte bis zu 10.000 € und verwalte deinen Kredit direkt in der App – so kannst du jederzeit einsehen, wie viel du aktuell nutzt und was die täglichen Gebühren sind."
          renderIcon={(props) => <EmailIcon {...props} />}
     
        />,]}
        backgroundText="Ursprünglich wurde 3ncrypt als Teil eines Schuleprojekts entwickelt. Die Aufgabe war es ein Tool zu entwickeln, zum Verschlüsseln von Text mithilfe von verschiedenen Algorithmen.
        Nach Fertigstellung des Projekts wurde die App nocheinmal erweitert und als vollständige Tool im Google Play Store veröffentlicht."
    />);
}