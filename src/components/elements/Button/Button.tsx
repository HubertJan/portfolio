import { DefaultTheme, styled } from "goober";
import { useTheme } from "src";
import { ButtonText } from "src/styles/fonts";

export interface ButtonStyling {
    color?: string,
    hoverColor?: string;
    hoverBackgroundColor?: string;
    backgroundColor?: string;
    shouldHover?: boolean
}

const StyledButton = styled("div") <{
    color?: string,
    hoverColor?: string;
    hoverBackgroundColor?: string;
    backgroundColor?: string;
    shouldHover: boolean
}>`
    display: inline-block;
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

export function getPrimaryStylingBy(theme: DefaultTheme): ButtonStyling {
    return {
        color: theme.colors.onPrimary,
        hoverColor: theme.colors.background,
        hoverBackgroundColor: theme.colors.primaryVariants[50],
        backgroundColor: theme.colors.primary,
        shouldHover: true,
    };
}

export function usePrimaryButtonStyling(): ButtonStyling {
    const theme = useTheme();
    return getPrimaryStylingBy(theme);
}

export const Button: React.FC<
    TextButtonInterface
> = ({ label, onClick, color, hoverColor, hoverBackgroundColor, backgroundColor, shouldHover = true }) => {

    return (
        <StyledButton
            onClick={onClick}
            color={color}
            hoverColor={hoverColor}
            backgroundColor={backgroundColor}
            hoverBackgroundColor={hoverBackgroundColor}
            shouldHover={shouldHover}
        >
            <ButtonText>{label}</ButtonText>
        </StyledButton>
    );
}

export const PrimaryButton: React.FC<{ label: string }> = (
    { label }
) => {
    const theme = useTheme();
    const style = getPrimaryStylingBy(theme);
    return <Button {...style} label={label} />
}