import { ComponentMeta } from "@storybook/react";
import { Column } from "./Column";



export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Column',
    component: Column,
} as ComponentMeta<typeof Column>;


export const Primary = () => {
    return (
        <Column>
            <p>Hi</p>
            <p>Hello</p>
        </Column>
    )
};