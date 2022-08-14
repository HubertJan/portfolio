import { styled } from "goober";
import { BodyText, NormalText } from "src/styles/fonts";

const InputDiv = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

const ErrorText = styled(NormalText)`
    color: #dd4848;
`;

const Input = styled('input')`
    font-style: normal;
    font-weight: 400;
    font-size: ${((props) => props.theme.fonts.normalText.fontSize)};
    line-height: 26px;
    background: ${((props) => props.theme.colors.primaryVariants[50])};
    border-radius: 16px;
    border-color: transparent;
    padding: 16px;

    &:invalid {
        border: red solid 1px;
    }
`;

export interface TextFieldProps {
    placeHolder?: string,
    onChange?: (text: string) => void,
    errorText?: string,
};

export const TextField: React.FC<TextFieldProps> = (
    { placeHolder = "", onChange, errorText }
) => {
    return (
        <InputDiv>
            <Input type="text"
                placeholder={placeHolder}
                onChange={(e) => onChange !== null ? onChange!(e.target.value) : null}
            />
            {errorText != null ? <ErrorText>
                {errorText}
            </ErrorText>
                : null}
        </InputDiv>


    );
}