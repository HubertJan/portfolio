import { ComponentMeta } from "@storybook/react";
import { CallToActionButtonBox } from "./CallToActionButtonBox";


import emailIcon from 'src/assets/email.svg';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'CallToActionButtonBox',
    component: CallToActionButtonBox,
} as ComponentMeta<typeof CallToActionButtonBox>;


export const Primary = () => {
    return (
        <CallToActionButtonBox
            label="E-Mail kopieren"
            icon={emailIcon}
            altIcon="Email"
            onClick={() => { }}
        />
    )
};