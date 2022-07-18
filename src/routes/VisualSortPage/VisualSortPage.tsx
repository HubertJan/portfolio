import { useTheme } from "src";
import { ProjectHeader } from "src/components/blocks/CustomHeader/CustomHeader";

import { ReactComponent as VisualIcon } from 'src/assets/icons/visual.svg';
import { ReactComponent as DiagramIcon } from 'src/assets/icons/diagram.svg';
import { ReactComponent as AnalyseIcon } from 'src/assets/icons/analyse.svg';
import { ReactComponent as CustomiseIcon } from 'src/assets/icons/customise.svg';
import screenshot1 from "src/assets/VSCScreenshots/1.png";
import screenshot2 from "src/assets/VSCScreenshots/2.png";
import screenshot3 from "src/assets/VSCScreenshots/3.png";
import screenshot4 from "src/assets/VSCScreenshots/4.png";
import { Button } from "src/components/elements/Button/Button";
import { PortfolioProjectTemplate } from "src/components/templates/PortfolioProjectTemplate/PortfolioProjectTemplate";
import { FeatureParagraph } from "src/components/blocks/FeatureSection/FeatureSection";

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
            />,
            <Button label="Live Demo"
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
        ]
      }
      featureParagraphs={[
        <FeatureParagraph
          title="Sechs verschiedene Algorithmen"
          description="Es gibt sechs sehr unterschiedliche Algorithmen, die man analysieren und durchführen kann."
          renderIcon={(props)=> <AnalyseIcon {...props} />}
     
        />,
        <FeatureParagraph
          title="Visualisierung"
          description="Jeder Algorithmus kann visualisiert werden, wodurch man den Algorithmus besser verstehen kann."
          renderIcon={(props)=> <VisualIcon {...props} />}
     
        />,
        <FeatureParagraph
          title="Laufzeitanalyse"
          description="Verschiedene Algorithmen können miteinander verglichen werden, wodurch man Vor- und Nachteile verdeutlichen kann."
          renderIcon={(props)=> <AnalyseIcon {...props} />}
     
        />,
        <FeatureParagraph
          title="Komplett einstellbare Eingabedaten"
          description="Verschiedene Eingabedaten können anhand von Parametern generiert werden. Dadurch können besondere Aspekte analysiert werden."
          renderIcon={(props)=> <CustomiseIcon {...props} />}
     
        />,
        <FeatureParagraph
          title="Responsive"
          description="Die App lässt sich sowohl im Vollbild als auch als kleines Fenster noch angenehm bedienen."
          renderIcon={(props)=> <VisualIcon {...props} />}
     
        />,
        <FeatureParagraph
          title="Laufzeitanalyse mit Zwei-Achsen Diagramm"
          description="Mithilfe vom Diagramm lassen sich die verschiedenen Algorithmen sehr einfach vergleichen."
          renderIcon={(props)=> <DiagramIcon {...props} />}
     
        />,
      ]}
      motivationText="VisualSort stellt ein Schuleprojekt dar, worin verschiedene Sortieralgorithmen dargestellt werden sollten. Es wurden einige Features weit über die Anforderungen hinaus implementiert. Dabei wurde auch auf ein gutes Design gedachtet, welches natürlich an der IDE VS Code orientiert ist."
    />
  );
}