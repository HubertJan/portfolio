import { useTheme } from "src";
import { CustomHeader, ProjectHeader } from "src/components/blocks/CustomHeader/CustomHeader";

import screenshot1 from "src/assets/VSCScreenshots/1.png";
import screenshot2 from "src/assets/VSCScreenshots/2.png";
import screenshot3 from "src/assets/VSCScreenshots/3.png";
import screenshot4 from "src/assets/VSCScreenshots/4.png";
import { Button } from "src/components/elements/Button/Button";
import { PortfolioProjectTemplate } from "src/components/templates/PortfolioProjectTemplate/PortfolioProjectTemplate";
import { SkillTemplate } from "src/components/templates/SkillTemplate/SkillTemplate";

export const FlutterPage: React.FC<{}> = () => {
  const theme = useTheme();
  return (
    <SkillTemplate
      behindNavigationBarColor={"#2196F3"}
      skillHeader={
        <CustomHeader
          subTitle="SKILL"
          title="Flutter"
          description="Die UI-Framework der Zukunft"
          backgroundColor={"#2196F3"}
          color={theme.colors.onPrimary}
        />}
      experienceText="Flutter gehört zu meinen Lieblingsframeworks. Ich habe bereits über 5 Jahre Erfahrung mit Flutter. Angefangen habe ich mit einigen Tutorials, ein Kurs und der Dokumentation. Heutzutage ist es meine erste Wahl sowohl bei Android als auch Windows Anwendungen."
    />
  );
}