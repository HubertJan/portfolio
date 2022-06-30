import { ComponentMeta } from "@storybook/react";
import { DesktopNavigation } from "./DesktopNavigation";

import javascriptIcon from "src/assets/javascript.png";


export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'DesktopNavigation',
    component: DesktopNavigation,
} as ComponentMeta<typeof DesktopNavigation>;


export const Primary = () => {
    return (
        <DesktopNavigation
            pageNames={[
                "Über mich",
                "Skills",
                "Projekte",
                "Kontakt"
            ]}
            currentPageIndex={0}
            scrollToPageIndex={(_)=>{}}
        />
    )
};