import { useTheme } from "src";
import { ProjectHeader } from "src/components/blocks/ProjectHeader/ProjectHeader";

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
        <ProjectHeader
          title="VisualSort Complete"
          description="Tool zur Visualisierung von Sortieralgorithmen"
          backgroundColor={"#2196F3"}
          color={theme.colors.onPrimary}
        />}
    />
  );
}