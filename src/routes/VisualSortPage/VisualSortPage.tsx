import { useTheme } from "src";
import { ProjectHeader } from "src/components/blocks/CustomHeader/CustomHeader";

import { ReactComponent as VisualIcon } from 'src/assets/icons/visual.svg';
import { ReactComponent as DiagramIcon } from 'src/assets/icons/diagram.svg';
import { ReactComponent as AnalyseIcon } from 'src/assets/icons/analyse.svg';
import { ReactComponent as CustomiseIcon } from 'src/assets/icons/customise.svg';
import { ReactComponent as PhoneIcon } from 'src/assets/icons/phone.svg';

import { Button } from "src/components/elements/Button/Button";
import { PortfolioProjectTemplate } from "src/components/templates/PortfolioProjectTemplate/PortfolioProjectTemplate";
import { FeatureParagraph } from "src/components/blocks/FeatureSection/FeatureSection";

const screenshot1 = "https://www.web29.s186.goserver.host/assets/VSCScreenshots/1.png";
const screenshot2 = "https://www.web29.s186.goserver.host/assets/VSCScreenshots/2.png";
const screenshot3 = "https://www.web29.s186.goserver.host/assets/VSCScreenshots/3.png";
const screenshot4 = "https://www.web29.s186.goserver.host/assets/VSCScreenshots/4.png";

export const VisualSortPage: React.FC<{}> = () => {
  const theme = useTheme();
  return (
    <PortfolioProjectTemplate
      behindNavigationBarColor={"#2196F3"}
      projectHeader={
        <ProjectHeader
          title="VisualSort Complete"
          description="Tool zur Visualisierung von Sortieralgorithmen"
          tags={["Flutter", "Dart"]}
          backgroundColor={"#2196F3"}
          color={theme.colors.onPrimary}
          buttons={
            [<Button label="Github"
              hoverBackgroundColor={theme.colors.primaryVariants[50]}
              hoverColor={theme.colors.background}
              onClick={() => {
                window.open("https://github.com/HubertJan/visual_sort_complete")
              }
              }
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
          title="Sechs verschiedene Algorithmen"
          description="Es gibt sechs unterschiedliche Algorithmen, die man analysieren und durchf??hren kann."
          renderIcon={(props) => <AnalyseIcon {...props} />}

        />,
        <FeatureParagraph
          title="Visualisierung"
          description="Jeder Algorithmus kann visualisiert werden, wodurch man den Algorithmus besser verstehen kann."
          renderIcon={(props) => <VisualIcon {...props} />}

        />,
        <FeatureParagraph
          title="Laufzeitanalyse"
          description="Verschiedene Algorithmen k??nnen miteinander verglichen werden, wodurch man Vor- und Nachteile verdeutlichen kann."
          renderIcon={(props) => <AnalyseIcon {...props} />}

        />,
        <FeatureParagraph
          title="Komplett einstellbare Eingabedaten"
          description="Verschiedene Eingabedaten k??nnen anhand von Parametern generiert werden. Dadurch k??nnen besondere Aspekte analysiert werden."
          renderIcon={(props) => <CustomiseIcon {...props} />}

        />,
        <FeatureParagraph
          title="Responsive"
          description="Die App l??sst sich sowohl im Vollbild als auch als kleines Fenster noch angenehm bedienen."
          renderIcon={(props) => <PhoneIcon {...props} />}

        />,
        <FeatureParagraph
          title="Laufzeitanalyse mit Zwei-Achsen Diagramm"
          description="Mithilfe vom Diagramm lassen sich die verschiedenen Algorithmen sehr einfach vergleichen."
          renderIcon={(props) => <DiagramIcon {...props} />}

        />,
      ]}
      backgroundText="VisualSort stellt ein Schulprojekt dar, worin verschiedene Sortieralgorithmen dargestellt werden sollten. Hierbei wurden einige Funktionen eingebaut, die beim Verstehen der Algorithmen helfen sollen. Dabei entschied ich mich f??r ein Design, welches eine Hommage auf die VS Code IDE ist."
    />
  );
}