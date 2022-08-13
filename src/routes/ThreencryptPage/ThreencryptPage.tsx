import { useTheme } from "src";
import { FeatureParagraph } from "src/components/blocks/FeatureSection/FeatureSection";
import { ProjectHeader } from "src/components/blocks/CustomHeader/CustomHeader";
import { ReactComponent as DarkModeIcon } from 'src/assets/icons/darkMode.svg';
import { ReactComponent as DescriptionIcon } from 'src/assets/icons/description.svg';
import { ReactComponent as KeyIcon } from 'src/assets/icons/key.svg';
import { Button } from "src/components/elements/Button/Button";
import { PortfolioProjectTemplate } from "src/components/templates/PortfolioProjectTemplate/PortfolioProjectTemplate";

import screenshot1 from "src/assets/threencryptScreenshots/uebersicht.png";
import screenshot2 from "src/assets/threencryptScreenshots/encrypt.png";
import screenshot3 from "src/assets/threencryptScreenshots/textTool.png";
import screenshot4 from "src/assets/threencryptScreenshots/analyse.png";
import screenshot5 from "src/assets/threencryptScreenshots/darkMode.png";

export const ThreencryptPage: React.FC<{}> = () => {
  const primaryColor = "#006973";
  const theme = useTheme();
  return (
    <PortfolioProjectTemplate
      behindNavigationBarColor={theme.colors.primary}
      projectHeader={
        <ProjectHeader
          title="3ncrypt"
          description="Ver- und Entschlüsselungs App für Android und iOS"
          tags={["Flutter", "Dart"]}
          color={primaryColor}
          backgroundColor="white"
          buttons={
            [<Button label="Github"
              color={primaryColor}
              hoverBackgroundColor={theme.colors.primaryVariants[50]}
              hoverColor={theme.colors.background}
            />,
            <Button label="Live Demo"
              color={primaryColor}
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
          screenshot5
        ]
      }
      featureParagraphs={[
        <FeatureParagraph
          title="Viele Verschlüsselungsverfahren"
          description="Die App hat sowohl historische , wie Caeser oder Vigenere, aber auch moderne Verfahren, wie AES oder DES implementiert."
          renderIcon={(props)=> <KeyIcon {...props} />}
     
        />,
        <FeatureParagraph
          title="Dark Modus"
          description="Selbstverständlich ist die App auch komplett in einen Dark Modus erhältlich.."
          renderIcon={(props)=> <DarkModeIcon {...props} />}
        />,
        <FeatureParagraph
          title="Text Modus"
          description="Um besonders einfach größere Texte zu verschlüsseln, wurde ein Text Modus implementiert."
          renderIcon={(props)=> <DescriptionIcon {...props} />}
     
        />,
      ]}
      backgroundText="
      3ncrypt begann als Schuleprojekt und wurde dann zu einer Android App umgewandelt und veröffentlicht. Später wurde dann noch die UI an den Material 3 Anfoderungen angepasst. Inbesondere die große Anzahl von Algorithmen stellte eine Herausforderung dar. Da hier einige Algorithmen selbst implementiert und umgesetzt wurden, während andere komplexere Algorithmen per Library eingebaut wurden."
    />
  );
}