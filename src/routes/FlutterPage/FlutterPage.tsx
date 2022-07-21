import { useTheme } from "src";
import { CustomHeader } from "src/components/blocks/CustomHeader/CustomHeader";

import { SkillTemplate } from "src/components/templates/SkillTemplate/SkillTemplate";
import { FeatureParagraph } from "src/components/blocks/FeatureSection/FeatureSection";

import { ReactComponent as PhoneIcon } from 'src/assets/icons/icons/phone.svg';
import { ReactComponent as DesktopIcon } from 'src/assets/icons/desktop.svg';
import { ReactComponent as WebAppIcon } from 'src/assets/icons/webApp.svg';

export const FlutterPage: React.FC<{}> = () => {
  const theme = useTheme();
  return (
    <SkillTemplate
      behindNavigationBarColor={"#2196F3"}
      skillHeader={
        <CustomHeader
          subTitle="SKILL"
          title="Flutter"
          description="Die UI-Framework der Zukunft"
          backgroundColor={"#2196F3"}
          color={theme.colors.onPrimary}
        />}
      experienceText="Flutter gehört zu meinen Lieblingsframeworks. Ich habe bereits über 5 Jahre Erfahrung mit Flutter. Angefangen habe ich mit einigen Tutorials, ein Kurs und der Dokumentation. Heutzutage ist es meine erste Wahl sowohl bei Android als auch Windows Anwendungen."
      featureParagraphs={[
        <FeatureParagraph
          title="Android und iOS Apps"
          description="Flutter ist als eine Crossplattform Framework perfekt für Apps, die sowohl auf iOS als auch Android laufen müssen. Besonders Apps, die mit viel angepasster UI arbeiten, profitieren von Flutter.."
          renderIcon={(props) => <DesktopIcon {...props} />}
        />
        ,
        <FeatureParagraph
          title="Desktop Anwendungen"
          description="Auch Apps für Windows, Mac und auch Linux sind mithilfe von Flutter mittlerweile sehr einfach zu erstellen und auch sehr performant."
          renderIcon={(props) => <DesktopIcon {...props} />}
        />
        ,
        <FeatureParagraph
          title="Webanwendungen"
          description="Wenn ein Tool ebenfalls im Browser laufen soll, dann ist Flutter perfekt dafür geeignet. Selbst rechenintensive Anwendungen können mithilfe von Flutter Web umgesetzt werden."
          renderIcon={(props) => <WebAppIcon {...props} />}
        />
      ]}
    />
  );
}