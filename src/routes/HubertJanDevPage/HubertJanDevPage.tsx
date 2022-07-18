import { useTheme } from "src";
import { CustomHeader, ProjectHeader } from "src/components/blocks/CustomHeader/CustomHeader";

import emailIcon from 'src/assets/email.svg';
import screenshot1 from "src/assets/AChessScreenshots/1.png";
import screenshot2 from "src/assets/AChessScreenshots/2.png";
import screenshot3 from "src/assets/AChessScreenshots/3.png";
import screenshot4 from "src/assets/AChessScreenshots/4.png";
import { Button } from "src/components/elements/Button/Button";
import { PortfolioProjectTemplate } from "src/components/templates/PortfolioProjectTemplate/PortfolioProjectTemplate";
import { FeatureParagraph } from "src/components/blocks/FeatureSection/FeatureSection";

export const HubertJanDevPage: React.FC<{}> = () => {
  const theme = useTheme();
  return (
    <PortfolioProjectTemplate
    behindNavigationBarColor={"#2196F3"}
      projectHeader={
        <ProjectHeader
          title="hubertJan.dev"
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
        motivationText="Als ich eines Tages."
    />
  );
}