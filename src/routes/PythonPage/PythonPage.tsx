import { useTheme } from "src";
import { CustomHeader, ProjectHeader } from "src/components/blocks/CustomHeader/CustomHeader";

import { ReactComponent as ServerIcon } from 'src/assets/icons/server.svg';
import { ReactComponent as ScienceIcon } from 'src/assets/icons/science.svg';
import { ReactComponent as ToolsIcon } from 'src/assets/icons/tools.svg';
import { SkillTemplate } from "src/components/templates/SkillTemplate/SkillTemplate";
import { FeatureParagraph } from "src/components/blocks/FeatureSection/FeatureSection";

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
      experienceText="Ich nutzte bereits Python seit vier Jahren und Pythons größter Vorteil war immer, die vielen Packages und die große Community. Insbesondere bei Aufgaben mit ungewöhnlichen Anforderungen, bietet Python oft Vorteile im Vergleich zu anderen Sprache, durch die vielen Python Packages. Ich selbst habe bereits Python für Backendserver, Spiele, Algorithmen und Webscrappler genutzt."
      featureParagraphs={[
        <FeatureParagraph 
        title="Backend"
        description="Python ist eine etablierte Wahl zum Erstellen von Webanwendungen, aber auch Serveranwendungen im Allgemeinen. Einige gute Backendframeworks wie Flask oder Django beweisen diese."
        renderIcon={(props)=> <ServerIcon {...props} />}
       />
       ,
       <FeatureParagraph 
       title="Data Science"
       description="Danke vielen Packages ist Python die Sprache für Wissenschaftler. Mithilfe von Python lassen sich einfach Daten analysieren und visualisieren."
       renderIcon={(props)=> <ScienceIcon {...props} />}
      />
      ,
      <FeatureParagraph 
      title="Tools"
      description="Egal ob ein Webscrapper oder ein PDF Tool, wenn es darum geht ein schnelles Script zu schreiben, dann ist Python immer eine gute Wahl."
      renderIcon={(props)=> <ToolsIcon {...props} />}
     />
      ]}
    />
  );
}