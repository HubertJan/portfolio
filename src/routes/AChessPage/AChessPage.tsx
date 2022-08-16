import { useTheme } from "src";
import { ProjectHeader } from "src/components/blocks/CustomHeader/CustomHeader";

import { ReactComponent as LogIcon } from 'src/assets/icons/log.svg';
import { ReactComponent as ManualIcon } from 'src/assets/icons/manual.svg';
import { ReactComponent as MultiplayerIcon } from 'src/assets/icons/multiplayer.svg';
import { ReactComponent as TimeIcon } from 'src/assets/icons/time.svg';

import { Button } from "src/components/elements/Button/Button";
import { PortfolioProjectTemplate } from "src/components/templates/PortfolioProjectTemplate/PortfolioProjectTemplate";
import { FeatureParagraph } from "src/components/blocks/FeatureSection/FeatureSection";

const screenshot1 = "https://www.web29.s186.goserver.host/assets/AChessScreenshots/1.png";
const screenshot2 = "https://www.web29.s186.goserver.host/assets/AChessScreenshots/2.png";
const screenshot3 = "https://www.web29.s186.goserver.host/assets/AChessScreenshots/3.png";
const screenshot4 = "https://www.web29.s186.goserver.host/assets/AChessScreenshots/4.png";

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
              onClick={() => {
                window.open("https://github.com/HubertJan/tkinter-chess")
              }
              }
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
          title="Verschiedene Zeitlimits"
          description="Es ist möglich sowohl 1 min, 10 min, aber auch 60 min Matches zu spielen."
          renderIcon={(props) => <TimeIcon {...props} />}
        />,
        <FeatureParagraph
          title="Log über vergangene Spiele"
          description="Alle Ergebnisse von allen Spielen werden abgespeichert und können abgerufen werden."
          renderIcon={(props) => <LogIcon {...props} />}
        />,
        <FeatureParagraph
          title="Anleitung"
          description="Wer Schach nicht kennt, kann die Regeln nachlesen."
          renderIcon={(props) => <ManualIcon {...props} />}
        />,
        <FeatureParagraph
          title="2 Spieler Modus"
          description="Man kann zu zweit gegeneinander spielen."
          renderIcon={(props) => <MultiplayerIcon {...props} />}
        />,
      ]}
      backgroundText="aChess ist als ein Schuleprojekt entstanden, wobei die Aufgabe es war ein Brettspiel umzusetzen. Tkinter wurde für die Umsetzung genutzt, da diese Teil der Anforderung war. Bei der Entwicklung wurde auf eine strikte Trennung von Logik und UI geachtet, um den Code möglichst leserlich und flexibel zu halten."
    />
  );
}