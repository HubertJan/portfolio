import { ComponentMeta } from "@storybook/react";
import { useTheme } from "src";
import { Button, getPrimaryStylingBy } from "./Button";



export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;


export const Primary = () => {
    const theme = useTheme();
    return (
        <Button label="Hello there" {...getPrimaryStylingBy(theme)}/>
    )
};