import { useTheme } from "src";
import {  ProjectHeader } from "src/components/blocks/CustomHeader/CustomHeader";


import { Button } from "src/components/elements/Button/Button";
import { PortfolioProjectTemplate } from "src/components/templates/PortfolioProjectTemplate/PortfolioProjectTemplate";

const screenshot1 = "https://www.web29.s186.goserver.host/assets/HubertJanScreenshots/1.png";
const screenshot2 = "https://www.web29.s186.goserver.host/assets/HubertJanScreenshots/2.png";
const screenshot3 = "https://www.web29.s186.goserver.host/assets/HubertJanScreenshots/3.png";
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
        ]
      }
      featureParagraphs={[

     ]}
        backgroundText="Entwickelt wurde die Webseite mithilfe von React und soll insbesondere durch ein einzigartiges Konzept überzeugen. Das Design ist dabei inspiriert von Smartphone Homescreens. Die Replikation eines Homescreens stellte einen vor Herausforderungen, da HTML/CSS nicht für solche Anwendungen konzipiert wurde."
    />
  );
}