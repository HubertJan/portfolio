import { useTheme } from "src";
import {  ProjectHeader } from "src/components/blocks/CustomHeader/CustomHeader";

import screenshot1 from "src/assets/AChessScreenshots/1.png";
import screenshot2 from "src/assets/AChessScreenshots/2.png";
import screenshot3 from "src/assets/AChessScreenshots/3.png";
import screenshot4 from "src/assets/AChessScreenshots/4.png";
import { Button } from "src/components/elements/Button/Button";
import { PortfolioProjectTemplate } from "src/components/templates/PortfolioProjectTemplate/PortfolioProjectTemplate";

export const HubertJanDevPage: React.FC<{}> = () => {
  const theme = useTheme();
  return (
    <PortfolioProjectTemplate
    behindNavigationBarColor={"#2196F3"}
      projectHeader={
        <ProjectHeader
          title="hubertJan.de"
          description="Meine Portfolio Webseite"
          tags={["TypeScript", "React"]}
          backgroundColor={theme.colors.primary}
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

     ]}
        backgroundText="Entwickelt wurde die Webseite mithilfe von React und soll insbesondere durch ein einzigartiges Konzept überzeugen. Das App Homescreen Design war dabei schwieriger umzusetzen als gedacht, da HTML ganz offensichtlich nicht für ein solches Design ausgelegt ist."
    />
  );
}