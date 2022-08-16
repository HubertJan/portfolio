import { useTheme } from "src";
import { CustomHeader, ProjectHeader } from "src/components/blocks/CustomHeader/CustomHeader";

import { ReactComponent as EmailIcon } from 'src/assets/email.svg';

import { ReactComponent as AlarmClockIcon } from 'src/assets/icons/alarmClock.svg';

import { ReactComponent as PuzzlePieceIcon } from 'src/assets/icons/puzzlePiece.svg';
import { ReactComponent as CustomiseIcon } from 'src/assets/icons/customise.svg';
import { ReactComponent as WakeUpIcon } from 'src/assets/icons/wakeUp.svg';

import { Button } from "src/components/elements/Button/Button";
import { PortfolioProjectTemplate } from "src/components/templates/PortfolioProjectTemplate/PortfolioProjectTemplate";
import { FeatureParagraph } from "src/components/blocks/FeatureSection/FeatureSection";

const screenshot1 = "https://www.web29.s186.goserver.host/assets/MorningChessScreenshots/alarms.png";
const screenshot2 = "https://www.web29.s186.goserver.host/assets/MorningChessScreenshots/alarm.png";
const screenshot3 = "https://www.web29.s186.goserver.host/assets/MorningChessScreenshots/chess.png";
const screenshot4 = "https://www.web29.s186.goserver.host/assets/MorningChessScreenshots/puzzles.png";

export const MorningChessPage: React.FC<{}> = () => {
  const theme = useTheme();
  return (
    <PortfolioProjectTemplate
      behindNavigationBarColor={"#2196F3"}
      projectHeader={
        <ProjectHeader
          title="MorningChess"
          description="Eine Weckerapp für Schachfans"
          tags={["Flutter", "Dart"]}
          backgroundColor={"#121212"}
          color={"#1999B3"}
          buttons={
            [
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
          title="Ein Puzzle zum aufwecken"
          description="Stelle dein Wecker, der dich erst in Ruhe lässt, sobald du ein Schachpuzzle gelöst hast."
          renderIcon={(props)=> <WakeUpIcon {...props} />}
     
        />,
        <FeatureParagraph
          title="Einstellbare Puzzles"
          description="Stelle deine eigenes Puzzle Profil ein mit bestimmten Puzzlethemen und Schwierigkeitsgrad."
          renderIcon={(props)=> <CustomiseIcon {...props} />}
     
        />,
        <FeatureParagraph
          title="So viele Puzzles und so viel Zeit wie du willst"
          description="Du kannst entscheiden, wie viel Puzzle du lösen willst und wie viel Zeit du haben sollst."
          renderIcon={(props)=> <PuzzlePieceIcon {...props} />}
     
        />,
        <FeatureParagraph
          title="Freie Klingeltonwahl"
          description="Wähle frei zwischen eingebauten Klingeltönen."
          renderIcon={(props)=> <AlarmClockIcon {...props} />}
     
        />,
      ]}
      backgroundText="MorningChess enstand aus der Idee eine interessante Wecker App zu erstellen. Dabei wurde eine Wecker App mit dem Lösen von sogenannten Schach Puzzle verbunden. Die Umsetzung war komplexer als andere Projekte, da hier  der Zugriff auf Betriebsystemfunktionen notwendig war, um zum Beispiel einen Wecker stellen zu können. Aber auch die Umsetzung des Schachspiel selbst war komplexer als die meisten anderen UIs."
    />
  );
}