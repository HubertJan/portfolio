import { styled } from "goober";

const Input = styled('textarea')`
    font-style: normal;
    font-weight: 400;
    font-size: ${((props) => props.theme.fonts.normalText.fontSize)};
    line-height: 26px;
    background: ${((props) => props.theme.colors.primaryVariants[50])};
    border-radius: 16px;
    border-color: transparent;
    padding: 16px;
    resize: none;
`;

export interface MultiLineTextFieldProps { placeHolder?: string, height?: string };

export const MultiLineTextField: React.FC<MultiLineTextFieldProps> = (
    { placeHolder = "" }
) => {
    return (
        <Input
            placeholder={placeHolder}
            rows={8}
        />

    );
}