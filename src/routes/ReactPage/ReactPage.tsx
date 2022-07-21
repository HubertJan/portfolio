import { CustomHeader } from "src/components/blocks/CustomHeader/CustomHeader";

import { SkillTemplate } from "src/components/templates/SkillTemplate/SkillTemplate";
import { FeatureParagraph } from "src/components/blocks/FeatureSection/FeatureSection";

import { ReactComponent as WebPageIcon } from 'src/assets/icons/webPage.svg';
import { ReactComponent as WebAppIcon } from 'src/assets/icons/webApp.svg';
import { ReactComponent as DesktopIcon } from 'src/assets/icons/desktop.svg';

export const ReactPage: React.FC<{}> = () => {
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
      experienceText="JavaScript ist meine erste Programmieresprache, die ich gelernt habe. Genauer gesagt habe ich JavaScript angefangen zu lernen vor sieben Jahren. Zuerst genutzt habe ich JavaScript um einfache Browserspiele zu entwickeln. Heutzutage nutzte ich JavaScript, und häufiger TypeScript, um Webseiten zu erstellen. React ist dabei aktuell die Framework meiner Wahl, wobei auch diese Webseite auf React basiert :)"
      featureParagraphs={[
        <FeatureParagraph
          title="Webseiten"
          description="React ist das etablierte Framework zur Erstellung von Webseiten. Besonders Webseiten mit viel dynamischen Content profitieren von React."
          renderIcon={(props) => <WebPageIcon {...props} />}
        />
        ,
        <FeatureParagraph
          title="Webanwendungen"
          description="Auch Anwendungen lassen sich mithilfe von React einfach umsetzen. Denn React ist sehr dynamisch und bietet viele Bibliotheken dafür."
          renderIcon={(props) => <WebAppIcon {...props} />}
        />
        ,
        <FeatureParagraph
          title="Desktop Anwendungen"
          description="Mithilfe von Electron lassen sich Webanwendungen in vollständige Desktopanwendungen ummünzen. Damit lässt sich viel Zeit sparen, besonders wenn sowohl eine Web- als auch Desktopapp erstellt werden muss."
          renderIcon={(props) => <DesktopIcon {...props} />}
        />
      ]}
    />
  );
}