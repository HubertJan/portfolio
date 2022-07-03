import { ComponentMeta } from "@storybook/react";
import { MultiLineTextField } from "src/components/elements/MultiLineTextField/MultiLineTextField";
import { TextField } from "src/components/elements/TextField/TextField";
import { FieldLabeled } from "./FieldLabeled";



export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'FieldLabeled',
    component: FieldLabeled,
} as ComponentMeta<typeof FieldLabeled>;


export const LabeledTextField = () => {
    return (
        <FieldLabeled label="Name">
            <TextField
                placeHolder="Obi-Wan" />
        </FieldLabeled>
    )
};

export const LabeledMultiLineTextField = () => {
    return (
        <FieldLabeled label="Name">
            <MultiLineTextField 
                placeHolder="Obi-Wan" />
        </FieldLabeled>
    )
};

