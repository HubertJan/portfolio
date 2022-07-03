import { styled } from "goober";


export const Column: React.FC<{ children?: React.ReactNode }> = styled('div')`
    display: flex;
    flex-direction: column;
`;