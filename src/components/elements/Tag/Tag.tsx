import { styled } from "goober";
import { BodyText } from "src/styles/fonts";

export const Box = styled("div") <{ backgroundColorStyle: string, color: string }>`
    padding: 12px;
    border-radius: 4px;
    background-color: ${(props) => props.backgroundColorStyle};
    color:  ${(props) => props.color};
    border-color: transparent;
    width: fit-content;
    height: fit-content;
`;

export const Tag: React.FC<{
    label: string,
    backgroundColor: string,
    color: string,
}> = ({ label, backgroundColor, color }) => {
    return (<Box backgroundColorStyle={backgroundColor} color={color} ><BodyText>{label}</BodyText></Box>);
}