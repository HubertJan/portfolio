import { css, styled } from "goober";
import { ButtonText } from "src/styles/fonts";

interface ButtonStyling {
    color?: string,
    hoverColor?: string;
    hoverBackgroundColor?: string;
    backgroundColor?: string;
    shouldHover?: boolean
}

const Button = styled("div") <{
    color?: string,
    hoverColor?: string;
    hoverBackgroundColor?: string;
    backgroundColor?: string;
    shouldHover: boolean
}>`
    padding: 8px 16px;
    color:  ${(props) => props.color ?? props.theme.colors.onBackground};
    ${(props) => props.backgroundColor === undefined ? "" :
    `
    background: ${props.backgroundColor};
    border-radius: 32px;
     `
    }

    ${(props) => props.shouldHover ? `
    &:hover {
        background-color: ${props.hoverBackgroundColor ?? props.theme.colors.background};
        border-radius: 32px;
        color:  ${props.hoverColor ?? props.theme.colors.onBackground};
        cursor: pointer;
    }
    ` : ""
    }
`;

interface TextButtonInterface extends ButtonStyling {
    label: string,
    onClick?: () => void,
}

export const TextButton: React.FC<
    TextButtonInterface
> = ({ label, onClick, color, hoverColor, hoverBackgroundColor, backgroundColor, shouldHover = true }) => {
    return (
        <Button
            onClick={onClick}
            color={color}
            hoverColor={hoverColor}
            backgroundColor={backgroundColor}
            hoverBackgroundColor={hoverBackgroundColor}
            shouldHover={shouldHover}
        >
            <ButtonText>{label}</ButtonText>
        </Button>
    );
}