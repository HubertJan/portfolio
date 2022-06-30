import { useTheme } from "src";
import { TextButton } from "./TextButton";

export const NavigationButton: React.FC<{
    label: string,
    currentPageIndex: number;
    buttonPageIndex: number;
    scrollToPageIndex: (index: number) => void;
}> = ({ label, currentPageIndex, buttonPageIndex, scrollToPageIndex }) => {
    const themeContext = useTheme();
    return (<TextButton
        backgroundColor={currentPageIndex === buttonPageIndex ? themeContext.colors.primary : undefined}
        color={themeContext.colors.onBackground}
        hoverBackgroundColor="var(--background-alt-color)"
        hoverColor={themeContext.colors.background}
        shouldHover={currentPageIndex !== buttonPageIndex}
        onClick={() => { scrollToPageIndex(buttonPageIndex) }}
        label={label} />);

}