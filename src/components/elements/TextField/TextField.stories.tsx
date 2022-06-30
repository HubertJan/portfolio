import { ComponentMeta } from "@storybook/react";
import { TextField } from "./TextField";



export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'TextField',
    component: TextField,
} as ComponentMeta<typeof TextField>;


export const Primary = () => {
    return (
        <TextField />
    )
};