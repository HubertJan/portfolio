import { styled } from "goober";

export interface StandardContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    hasRoundedEdges?: boolean,
    backgroundColor?: string,
};

export const StandardContainer = styled((
    { hasRoundedEdges, backgroundColor, ...rest }
        : StandardContainerProps) =>
    <div {...rest} />)`
    color:  ${(props) => props.theme.colors.onBackground};
    background:  ${(props) =>
        props.backgroundColor ?? props.theme.colors.background
    };
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: ${(props) => (props.hasRoundedEdges ?? true) ? "16px" : "0px"};
    @media screen {
        padding: 32px 32px;
    }

    display: inline-block;
`;