import { ComponentMeta } from "@storybook/react";
import { useTheme } from "src";
import { ProjectHeader } from "src/components/blocks/ProjectHeader/ProjectHeader";
import { Button } from "src/components/elements/Button/Button";
import { PortfolioProjectTemplate } from "./PortfolioProjectTemplate";


export default {

  title: 'PortfolioProjectTemplate',
  component: PortfolioProjectTemplate,
} as ComponentMeta<typeof PortfolioProjectTemplate>;


export const Primary = () => {
  const theme = useTheme();
  return (
    <PortfolioProjectTemplate
      projectHeader={
        <ProjectHeader
          title="3ncrypt"
          description="Ver- und Entschlüsselungs App für Android und iOS"
          tags={["Flutter", "Dart"]}
          backgroundColor={theme.colors.primaryVariants[500]}
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
          'http://placeimg.com/1200/800/nature',
          'http://placeimg.com/800/1200/nature',
          'http://placeimg.com/1920/1080/nature',
          'http://placeimg.com/1500/500/nature',
        ]
      }
    />);
}