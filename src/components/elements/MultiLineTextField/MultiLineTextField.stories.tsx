import { ComponentMeta } from "@storybook/react";
import { MultiLineTextField } from "./MultiLineTextField";



export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'MultiLineTextField',
    component: MultiLineTextField,
} as ComponentMeta<typeof MultiLineTextField>;


export const Primary = () => {
    return (
        <MultiLineTextField />
    )
};