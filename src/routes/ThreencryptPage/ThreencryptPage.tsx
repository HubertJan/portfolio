import { useTheme } from "src";
import { FeatureParagraph } from "src/components/blocks/FeatureSection/FeatureSection";
import { ProjectHeader } from "src/components/blocks/CustomHeader/CustomHeader";
import emailIcon from 'src/assets/email.svg';
import { Button } from "src/components/elements/Button/Button";
import { PortfolioProjectTemplate } from "src/components/templates/PortfolioProjectTemplate/PortfolioProjectTemplate";

export const ThreencryptPage: React.FC<{}> = () => {
  const theme = useTheme();
  return (
    <PortfolioProjectTemplate
      behindNavigationBarColor={theme.colors.primary}
      projectHeader={
        <ProjectHeader
          title="3ncrypt"
          description="Ver- und Entschlüsselungs App für Android und iOS"
          tags={["Flutter", "Dart"]}
          color="#14C1D5"
          backgroundColor={theme.colors.onPrimary}
          buttons={
            [<Button label="Github"
              color="#14C1D5"
              hoverBackgroundColor={theme.colors.primaryVariants[50]}
              hoverColor={theme.colors.background}
            />,
            <Button label="Live Demo"
              color="#14C1D5"
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
          icon={emailIcon}
          altIcon="email"
        />,
        <FeatureParagraph
          title="12 Algorithmen"
          description="Du kannst in wenigen Sekunden direkt in der N26 App anfragen, ob ein Überziehungskredit für dich zur Verfügung steht. Erhalte bis zu 10.000 € und verwalte deinen Kredit direkt in der App – so kannst du jederzeit einsehen, wie viel du aktuell nutzt und was die täglichen Gebühren sind."
          icon={emailIcon}
          altIcon="email"
        />,]}
        motivationText="Als Teil des Kryptografiethemas im Unterricht sollte eine Verschlüsselungsanwendung erstellt werden. Der Prototype für 3ncrypt entstand dabei und wurde später in der Freizeit dann zu einer Android App mit mehr Funktionen erweitert."
    />
  );
}