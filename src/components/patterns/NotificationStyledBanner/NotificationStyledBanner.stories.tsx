import { ComponentMeta } from "@storybook/react";
import { NotificationStyledBanner } from "./NotificationStyledBanner";




export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'NotificationStyledBanner',
    component: NotificationStyledBanner,
} as ComponentMeta<typeof NotificationStyledBanner>;


export const Primary = () => {
    return (
        <NotificationStyledBanner shouldFade={false} />
    )
};


