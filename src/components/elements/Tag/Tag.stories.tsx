import { ComponentMeta } from "@storybook/react";
import { Tag } from "./Tag";



export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Tag',
    component: Tag,
} as ComponentMeta<typeof Tag>;


export const Primary = () => {
    return (
        <Tag label="Flutter"
        backgroundColor="rgba(255,255,255,0.9)"
        color="#14C1D5"
        />
    )
};