import { styled } from "goober";

export const AppIconRow = styled('div')`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    @media screen {
        gap: 32px;
    }
    @media screen and (max-width: 1000px) {
        gap: 16px;
    }
`;
