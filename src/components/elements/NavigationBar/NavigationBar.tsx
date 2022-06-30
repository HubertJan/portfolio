import { styled } from "goober";

const Container = styled("div")`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 16px;
    padding-bottom: 16px;
    border-radius: 0px 0px 4px 4px;
    background: ${(props)=> props.theme.colors.background};
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
    gap: 16px;
`;

export const NavigationBar: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (<Container>{children}</Container>);
}