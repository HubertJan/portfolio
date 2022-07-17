import { useTheme } from "src";
import { ProjectHeader } from "src/components/blocks/CustomHeader/CustomHeader";

import emailIcon from 'src/assets/email.svg';
import screenshot1 from "src/assets/VSCScreenshots/1.png";
import screenshot2 from "src/assets/VSCScreenshots/2.png";
import screenshot3 from "src/assets/VSCScreenshots/3.png";
import screenshot4 from "src/assets/VSCScreenshots/4.png";
import { Button } from "src/components/elements/Button/Button";
import { PortfolioProjectTemplate } from "src/components/templates/PortfolioProjectTemplate/PortfolioProjectTemplate";
import { FeatureParagraph } from "src/components/blocks/FeatureSection/FeatureSection";

export const VisualSortPage: React.FC<{}> = () => {
  const theme = useTheme();
  return (
    <PortfolioProjectTemplate
      behindNavigationBarColor={"#2196F3"}
      projectHeader={
        <ProjectHeader
          title="VisualSort Complete"
          description="Tool zur Visualisierung von Sortieralgorithmen"
          tags={["Flutter", "Dart"]}
          backgroundColor={"#2196F3"}
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
          screenshot1,
          screenshot2,
          screenshot3,
          screenshot4,
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
        motivationText="VisualSort stellt ein Schuleprojekt dar, worin verschiedene Sortieralgorithmen dargestellt werden sollten. Es wurden einige Features weit über die Anforderungen hinaus implementiert. Dabei wurde auch auf ein gutes Design gedachtet, welches natürlich an der IDE VS Code orientiert ist."
    />
  );
}