import { ComponentMeta } from "@storybook/react";
import { DesktopAppButton } from "./DesktopAppButton";

import javascriptIcon from "src/assets/javascript.png";


export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'DesktopAppButton',
    component: DesktopAppButton,
} as ComponentMeta<typeof DesktopAppButton>;


export const Primary = () => {
    return (
        <DesktopAppButton
            title="PyChess"
            backgroundImage={javascriptIcon}
        />
    )
};