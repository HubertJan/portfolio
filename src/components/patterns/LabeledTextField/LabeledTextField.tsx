import { styled } from "goober";
import { Label } from "src/components/elements/Label/Label";
import { TextField, TextFieldProps } from "src/components/elements/TextField/TextField";

const Box = styled('div')`
    display: flex;
    flex-direction: column;
`;

interface LabeledTextFieldProps extends TextFieldProps{
    label: string
}

export const LabeledTextField: React.FC<LabeledTextFieldProps> = (
    { label, placeHolder }
) => {
    return (
        <Box>
            <Label text={label}/>
            <TextField placeHolder={placeHolder}/>
        </Box>
    );
}