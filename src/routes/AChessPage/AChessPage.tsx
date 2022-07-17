import { useTheme } from "src";
import { CustomHeader, ProjectHeader } from "src/components/blocks/CustomHeader/CustomHeader";

import emailIcon from 'src/assets/email.svg';
import screenshot1 from "src/assets/AChessScreenshots/1.png";
import screenshot2 from "src/assets/AChessScreenshots/2.png";
import screenshot3 from "src/assets/AChessScreenshots/3.png";
import screenshot4 from "src/assets/AChessScreenshots/4.png";
import { Button } from "src/components/elements/Button/Button";
import { PortfolioProjectTemplate } from "src/components/templates/PortfolioProjectTemplate/PortfolioProjectTemplate";
import { FeatureParagraph } from "src/components/blocks/FeatureSection/FeatureSection";

export const AChessPage: React.FC<{}> = () => {
  const theme = useTheme();
  return (
    <PortfolioProjectTemplate
    behindNavigationBarColor={"#2196F3"}
      projectHeader={
        <ProjectHeader
          title="aChess"
          description="Ein Schachspiel."
          tags={["Python", "Tkinter"]}
          backgroundColor={"#417D9E"}
          color={theme.colors.onPrimary}
          buttons={
            [<Button label="Github"
              hoverBackgroundColor={theme.colors.primaryVariants[50]}
              hoverColor={theme.colors.background}
            />,
          ]
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
        motivationText="aChess ist als ein Schuleprojekt entstanden, wobei die Aufgabe es war ein Brettspiel umzusetzen. Tkinter wurde für die Umsetzung genutzt, da diese Teil der Anforderung war. Auch wenn Tkinter klar nicht für so eine Aufgabe gedacht war, konnte ich und mein Partner eine schöne Version von Schach erstellen."
    />
  );
}