import { styled } from "goober";
import { text } from "stream/consumers";
import styles from "./CustomButton.module.scss";

const StyledButton = styled('button') <{
    buttonColor: string;
    textColor: string;
}>`
    align-self: center;
    border: 4px solid ${(props) => props.buttonColor};
    color: ${(props) => props.textColor};
    border-radius: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 24px;
    padding: 16px;
    background-color: ${(props) => props.buttonColor};
    
    &:hover {
        background-color: var(--secondary-color);
        border-color: var(--secondary-color);
        cursor: pointer;
    }

`;

export const CustomButton: React.FC<{
    onClick?: () => void,
    label: string,
    textColor?: string,
    buttonColor?: string,
}> = (
    { onClick, label = "", buttonColor = "var(--primary-color)", textColor = "var(--background-color)" }
) => {
        return (
            <StyledButton
                buttonColor={buttonColor}
                onClick={onClick}
                textColor={textColor}>
                {label}
            </StyledButton>
        );
    }