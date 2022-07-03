import { ComponentMeta } from "@storybook/react";
import { FieldLabel } from "./FieldLabel";


export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'FieldLabel',
    component: FieldLabel,
} as ComponentMeta<typeof FieldLabel>;


export const Primary = () => {
    return (
        <FieldLabel text="hi" />
    )
};