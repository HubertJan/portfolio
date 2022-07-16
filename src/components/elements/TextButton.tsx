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
    colorStyle?: string,
    hoverColorStyle?: string;
    hoverBackgroundColorStyle?: string;
    backgroundColorStyle?: string;
    shouldHoverStyle: boolean
}>`
    padding: 8px 16px;
    color:  ${(props) => props.colorStyle ?? props.theme.colors.onBackground};
    ${(props) => props.backgroundColorStyle === undefined ? "" :
    `
    background: ${props.backgroundColorStyle};
    border-radius: 32px;
     `
    }

    ${(props) => props.shouldHoverStyle ? `
    &:hover {
        background-color: ${props.hoverBackgroundColorStyle ?? props.theme.colors.background};
        border-radius: 32px;
        color:  ${props.hoverColorStyle ?? props.theme.colors.onBackground};
        cursor: pointer;
    }
    ` : ""
    }
`;

interface TextButtonInterface extends ButtonStyling {
    label: string,
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined,
}

export const TextButton: React.FC<
    TextButtonInterface
> = ({ label, onClick, color, hoverColor, hoverBackgroundColor, backgroundColor, shouldHover = true }) => {
    return (
        <Button
            onClick={onClick}
            colorStyle={color}
            hoverColorStyle={hoverColor}
            backgroundColorStyle={backgroundColor}
            hoverBackgroundColorStyle={hoverBackgroundColor}
            shouldHoverStyle={shouldHover}
        >
            <ButtonText>{label}</ButtonText>
        </Button>
    );
}