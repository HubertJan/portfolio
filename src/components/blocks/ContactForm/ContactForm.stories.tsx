import { ComponentMeta } from "@storybook/react";
import { ContactForm } from "./ContactForm";



export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'ContactForm',
    component: ContactForm,
} as ComponentMeta<typeof ContactForm>;


export const Primary = () => {
    return (
        <ContactForm />
        )
};