import { ComponentMeta } from "@storybook/react";
import { NavigationBar } from "./NavigationBar";


export default {
    title: 'NavigationBar',
    component: NavigationBar,
} as ComponentMeta<typeof NavigationBar>;


export const Primary = () => {
    return (
        <NavigationBar
        backgroundColor="transparent"
        />
    )
};