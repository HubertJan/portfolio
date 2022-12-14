import { styled } from "goober";

const StyledLabel = styled('label')`
    font-style: normal;
    font-weight: 400;
    font-size: ${((props) => props.theme.fonts.normalText.fontSize)};
    line-height: ${((props) => props.theme.fonts.normalText.lineHeight)};
    margin-bottom: 8px;
`;

export const FieldLabel: React.FC<{ text: string }> = (
    { text }
) => {
    return (
        <StyledLabel>{text}</StyledLabel>
    );
}