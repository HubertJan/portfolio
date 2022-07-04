import { styled } from "goober";

export const Section = styled("div") <{ backgroundColor?: string }>`
display: flex;
flex-direction: column;
align-items: center;
padding: 32px;
background-color: ${(props) => props.backgroundColor ?? props.theme.colors.background};
`;