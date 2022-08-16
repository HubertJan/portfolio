import { useTheme } from "src";
import {  ProjectHeader } from "src/components/blocks/CustomHeader/CustomHeader";

import { ReactComponent as EmailIcon } from 'src/assets/email.svg';
import { ReactComponent as PythonIcon } from 'src/assets/icons/python.svg';
import { ReactComponent as GearIcon } from 'src/assets/icons/gear.svg';
import { Button } from "src/components/elements/Button/Button";
import { PortfolioProjectTemplate } from "src/components/templates/PortfolioProjectTemplate/PortfolioProjectTemplate";
import { FeatureParagraph } from "src/components/blocks/FeatureSection/FeatureSection";

export const ItspylearningPage: React.FC<{}> = () => {
  const theme = useTheme();
  return (
    <PortfolioProjectTemplate
      behindNavigationBarColor={"#2196F3"}
      projectHeader={
        <ProjectHeader
          title="ItspyLearning"
          description="Eine API für die Schule Plattform itsLearning."
          tags={["Python",]}
          backgroundColor={"#D86D1F"}
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

        ]
      }
      featureParagraphs={[
        <FeatureParagraph
          title="Einfach auf itslearing API zugreifen"
          description="Nutze die API, ohne die komplizierte Dokumentation lesen zu müssen.."
          renderIcon={(props) => <GearIcon {...props} />}
     
        />,
        <FeatureParagraph
          title="Nutzbar mit jeder itslearning Plattform"
          description="Wechsel einfach zwischen verschiedenen itslearning Plattformen."
          renderIcon={(props) => <EmailIcon {...props} />}
     
        />,
        <FeatureParagraph
          title="Komplett für Python geschrieben"
          description="Alle Ergebnisse der API werden als Python Objekte zurückgegeben, um möglichst einfach mit den Daten arbeiten zu können."
          renderIcon={(props) => <PythonIcon {...props} />}
     
        />,
      ]}
      backgroundText="itsLearning wurde viel auf meiner ehemaligen Schule genutzt, allerdings fehlt es ihr an einer guten API. Die Web-API war nur unzureichend dokumentiert. Um die API für den Schuleserver nützlich zu machen, entschiede ich mich dazu eine Library in Python dafür zu schreiben."
    />
  );
}