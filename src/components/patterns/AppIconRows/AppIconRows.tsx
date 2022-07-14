import { styled } from "goober";

export const AppIconRows = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    @media screen and (max-width: 1000px) {
        gap: 0px;
    }
`;
