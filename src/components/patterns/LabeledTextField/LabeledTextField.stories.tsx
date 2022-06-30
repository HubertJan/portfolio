import { ComponentMeta } from "@storybook/react";
import { LabeledTextField } from "./LabeledTextField";



export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'LabeledTextField',
    component: LabeledTextField,
} as ComponentMeta<typeof LabeledTextField>;


export const Primary = () => {
    return (
        <LabeledTextField label="Name" placeHolder="Obi-Wan" />
    )
};