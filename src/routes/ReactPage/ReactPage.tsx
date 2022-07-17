import { useTheme } from "src";
import { CustomHeader, ProjectHeader } from "src/components/blocks/CustomHeader/CustomHeader";

import screenshot1 from "src/assets/VSCScreenshots/1.png";
import screenshot2 from "src/assets/VSCScreenshots/2.png";
import screenshot3 from "src/assets/VSCScreenshots/3.png";
import screenshot4 from "src/assets/VSCScreenshots/4.png";
import { Button } from "src/components/elements/Button/Button";
import { PortfolioProjectTemplate } from "src/components/templates/PortfolioProjectTemplate/PortfolioProjectTemplate";
import { SkillTemplate } from "src/components/templates/SkillTemplate/SkillTemplate";

export const ReactPage: React.FC<{}> = () => {
  const theme = useTheme();
  return (
    <SkillTemplate
      behindNavigationBarColor={"##61DBFB"}
      skillHeader={
        <CustomHeader
          subTitle="SKILL"
          title="React"
          description="Webseiten besser erstellen"
          backgroundColor={"#61DBFB"}
          color={"	#20232a"}
        />}
      experienceText="Ich muss zugeben, ich habe nicht die meiste Erfahrung mit React. Allerdings dafür habe ich umso mehr Erfahrung mit der Sprache hinter React: Javascript und viel wichtiger Typescript. Denn JavaScript ist meine erste Programmieresprache, die ich vor 7 Jahren gelernt habe. Zuerst genutzt habe ich JavaScript um einfache Browserspiele zu entwickeln. Heutzutage nutzte ich JavaScript, und häufiger TypeScript, um bessere Webseite zu entwickeln, wie auch diese hier :)"
    />
  );
}