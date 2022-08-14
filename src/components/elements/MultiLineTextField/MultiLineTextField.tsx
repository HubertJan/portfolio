import { styled } from "goober";
import { NormalText } from "src/styles/fonts";

const InputDiv = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;
const ErrorText = styled(NormalText)`
    color: #dd4848;
`;


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

export interface MultiLineTextFieldProps {
    placeHolder?: string,
    height?: string,
    onChange?: (text: string) => void,
    errorText?: string,
};

export const MultiLineTextField: React.FC<MultiLineTextFieldProps> = (
    { placeHolder = "", onChange, errorText }
) => {
    return (
        <InputDiv>
        <Input
            placeholder={placeHolder}
            rows={8}
            onChange={(e) => onChange !== null ? onChange!(e.target.value) : null}
        />

{errorText != null ? <ErrorText>
                {errorText}
            </ErrorText>
                : null}
    </InputDiv>

    );
}