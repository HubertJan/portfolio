import { styled } from "goober";

export const Section = styled("div") <{ backgroundColorStyle?: string }>`
display: flex;
flex-direction: column;
align-items: center;
padding: 32px;
background-color: ${(props) => props.backgroundColorStyle ?? props.theme.colors.background};
`;