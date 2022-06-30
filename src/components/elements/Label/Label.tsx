import { styled } from "goober";

const StyledLabel = styled('label')`
    font-style: normal;
    font-weight: 400;
    font-size: ${((props) => props.theme.fonts.normalText.fontSize)};
    line-height: 26px;
    margin-bottom: 4px;
`;

export const Label: React.FC<{ text: string }> = (
    { text }
) => {
    return (
        <StyledLabel>{text}</StyledLabel>
    );
}