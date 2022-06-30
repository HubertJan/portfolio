import { ComponentMeta } from "@storybook/react";
import { MultiLineTextField } from "src/components/elements/MultiLineTextField/MultiLineTextField";
import { TextField } from "src/components/elements/TextField/TextField";
import { Labeled } from "./Labeled";



export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Labeled',
    component: Labeled,
} as ComponentMeta<typeof Labeled>;


export const LabeledTextField = () => {
    return (
        <Labeled label="Name">
            <TextField
                placeHolder="Obi-Wan" />
        </Labeled>
    )
};

export const LabeledMultiLineTextField = () => {
    return (
        <Labeled label="Name">
            <MultiLineTextField 
                placeHolder="Obi-Wan" />
        </Labeled>
    )
};

