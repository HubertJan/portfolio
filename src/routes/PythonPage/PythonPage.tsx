import { useTheme } from "src";
import { CustomHeader, ProjectHeader } from "src/components/blocks/CustomHeader/CustomHeader";

import screenshot1 from "src/assets/VSCScreenshots/1.png";
import screenshot2 from "src/assets/VSCScreenshots/2.png";
import screenshot3 from "src/assets/VSCScreenshots/3.png";
import screenshot4 from "src/assets/VSCScreenshots/4.png";
import { Button } from "src/components/elements/Button/Button";
import { PortfolioProjectTemplate } from "src/components/templates/PortfolioProjectTemplate/PortfolioProjectTemplate";
import { SkillTemplate } from "src/components/templates/SkillTemplate/SkillTemplate";

export const PythonPage: React.FC<{}> = () => {
  const theme = useTheme();
  return (
    <SkillTemplate
      behindNavigationBarColor={"#dfb209"}
      skillHeader={
        <CustomHeader
          subTitle="SKILL"
          title="Python"
          description="Scriptsprache für alle Fälle"
          backgroundColor={"#dfb209"}
          color={theme.colors.onPrimary}
        />}
      experienceText="Zuerst genutzt habe ich Python nicht wegen ihrer einfachen Syntax, sondern aus einen banaleren Grund. Python kann alles und jeder nutzt es. Ich nutzte bereits Python seit vier Jahren und Pythons größter Vorteil war immer, die vielen Packages und die vielen Menschen, die Python nutzen. Dadurch lassen sich viele sehr verschiedene Aufgaben oft am schnellsten und einfachsten lösen."
    />
  );
}