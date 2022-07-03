import { styled } from "goober";

export interface StandardContainerProps {
    hasRoundedEdges?: boolean,
    backgroundColor?: string,
};

export const StandardContainer = styled("div") <StandardContainerProps>`
    color:  ${(props) => props.theme.colors.onBackground};
    background:  ${(props) =>
        props.backgroundColor ?? props.theme.colors.background
    };
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: ${(props) => (props.hasRoundedEdges ?? true) ? "16px" : "0px"};
    @media screen {
        padding: 32px 32px;
    }
    @media screen and (max-width: 1000px) {
        padding: 16px 16px;
    }
    display: inline-block;
`;