import { useTheme } from "src";
import { CustomHeader, ProjectHeader } from "src/components/blocks/CustomHeader/CustomHeader";

import { ReactComponent as EmailIcon } from 'src/assets/email.svg';
import screenshot1 from "src/assets/AChessScreenshots/1.png";
import screenshot2 from "src/assets/AChessScreenshots/2.png";
import screenshot3 from "src/assets/AChessScreenshots/3.png";
import screenshot4 from "src/assets/AChessScreenshots/4.png";
import { Button } from "src/components/elements/Button/Button";
import { PortfolioProjectTemplate } from "src/components/templates/PortfolioProjectTemplate/PortfolioProjectTemplate";
import { FeatureParagraph } from "src/components/blocks/FeatureSection/FeatureSection";

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
            [<Button label="Github"
              color="#1999B3"
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
          title="Ein Puzzle zum aufwecken"
          description="Stelle dein Wecker, der dich erst in Ruhe lässt, sobald du ein Schachpuzzle gelöst hast."
          renderIcon={(props)=> <EmailIcon {...props} />}
     
        />,
        <FeatureParagraph
          title="Einstellbare Puzzles"
          description="Stelle deine eigenes Puzzle Profil ein mit bestimmten Puzzlethemen und Schwierigkeitsgrad."
          renderIcon={(props)=> <EmailIcon {...props} />}
     
        />,
        <FeatureParagraph
          title="So viele Puzzles und so viel Zeit wie du willst"
          description="Du kannst entscheiden, wie viel Puzzle du lösen willst und wie viel Zeit du haben sollst.."
          renderIcon={(props)=> <EmailIcon {...props} />}
     
        />,
        <FeatureParagraph
          title="Freie Klingeltonwahl"
          description="Wähle frei zwischen eingebauten Klingeltönen."
          renderIcon={(props)=> <EmailIcon {...props} />}
     
        />,
      ]}
      motivationText="Als ich eines Tages."
    />
  );
}