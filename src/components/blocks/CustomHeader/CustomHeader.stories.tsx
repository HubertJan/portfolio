import { ComponentMeta } from "@storybook/react";
import { useTheme } from "src";
import { Button } from "src/components/elements/Button/Button";
import { ProjectHeader } from "./ProjectHeader";


export default {

    title: 'ProjectHeader',
    component: ProjectHeader,
} as ComponentMeta<typeof ProjectHeader>;


export const Primary = () => {
    const theme = useTheme();
    return (
        <ProjectHeader
            title="3ncrypt"
            description="Ver- und Entschlüsselungs App für Android und iOS"
            tags={["Flutter", "Dart"]}
            backgroundColor={theme.colors.primaryVariants[500]}
            color= {theme.colors.onPrimary}
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
        />)
};