import { styled } from "goober";

export const StandardContainer = styled("div")`
    color:  ${(props) => props.theme.colors.onBackground};
    background:  ${(props) => props.theme.colors.background};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    @media screen {
        padding: 32px 32px;
    }
    @media screen and (max-width: 1000px) {
        padding: 16px 16px;
    }
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;