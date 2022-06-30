import { styled } from "goober";

const Input = styled('input')`
    font-style: normal;
    font-weight: 400;
    font-size: ${((props) => props.theme.fonts.normalText.fontSize)};
    line-height: 26px;
    background: ${((props) => props.theme.colors.primaryVariants[50])};
    border-radius: 16px;
    border-color: transparent;
    padding: 16px;
`;

export interface TextFieldProps{ placeHolder?: string };

export const TextField: React.FC<TextFieldProps> = (
    { placeHolder = "" }
) => {
    return (
        <Input type="text"
            placeholder={placeHolder}
        />
    );
}