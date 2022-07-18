import { useTheme } from "src";
import { FeatureParagraph } from "src/components/blocks/FeatureSection/FeatureSection";
import { ProjectHeader } from "src/components/blocks/CustomHeader/CustomHeader";
import { ReactComponent as DarkModeIcon } from 'src/assets/icons/darkMode.svg';
import { ReactComponent as DescriptionIcon } from 'src/assets/icons/description.svg';
import { ReactComponent as KeyIcon } from 'src/assets/icons/key.svg';
import { Button } from "src/components/elements/Button/Button";
import { PortfolioProjectTemplate } from "src/components/templates/PortfolioProjectTemplate/PortfolioProjectTemplate";

export const ThreencryptPage: React.FC<{}> = () => {
  const theme = useTheme();
  return (
    <PortfolioProjectTemplate
      behindNavigationBarColor={theme.colors.primary}
      projectHeader={
        <ProjectHeader
          title="3ncrypt"
          description="Ver- und Entschlüsselungs App für Android und iOS"
          tags={["Flutter", "Dart"]}
          color="#14C1D5"
          backgroundColor={theme.colors.onPrimary}
          buttons={
            [<Button label="Github"
              color="#14C1D5"
              hoverBackgroundColor={theme.colors.primaryVariants[50]}
              hoverColor={theme.colors.background}
            />,
            <Button label="Live Demo"
              color="#14C1D5"
              hoverBackgroundColor={theme.colors.primaryVariants[50]}
              hoverColor={theme.colors.background}
            />]
          }
        />}
      productImageUrls={
        [
          'http://placeimg.com/1200/800/nature',
          'http://placeimg.com/800/1200/nature',
          'http://placeimg.com/1920/1080/nature',
          'http://placeimg.com/1500/500/nature',
        ]
      }
      featureParagraphs={[
        <FeatureParagraph
          title="Viele Verschlüsselungsverfahren"
          description="Die App hat sowohl historische , wie Caeser oder Vigenere, aber auch moderne Verfahren, wie AES oder DES implementiert."
          renderIcon={(props)=> <KeyIcon {...props} />}
     
        />,
        <FeatureParagraph
          title="Dark Modus"
          description="Selbstverständlich ist die App auch komplett in einen Dark Modus erhältlich.."
          renderIcon={(props)=> <DarkModeIcon {...props} />}
        />,
        <FeatureParagraph
          title="Text Modus"
          description="Um besonders einfach größere Texte zu verschlüsseln, wurde ein Text Modus implementiert."
          renderIcon={(props)=> <DescriptionIcon {...props} />}
     
        />,
      ]}
      motivationText="Als Teil des Kryptografiethemas im Unterricht sollte eine Verschlüsselungsanwendung erstellt werden. Der Prototype für 3ncrypt entstand dabei und wurde später in der Freizeit dann zu einer Android App mit mehr Funktionen erweitert."
    />
  );
}