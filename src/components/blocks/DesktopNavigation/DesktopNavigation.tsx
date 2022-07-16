import { styled } from "goober";
import { NavigationBar } from "src/components/elements/NavigationBar/NavigationBar";
import { NavigationButton } from "src/components/elements/NavigationButton";
import { NavigationMenuTitle } from "src/components/elements/NavigationMenuTitle/NavigationMenuTitle";

export const DesktopNavigation: React.FC<{
    pageNames: string[]
    currentPageIndex: number,
    scrollToPageIndex: (index: number) => void,
}> = ({
    pageNames,
    currentPageIndex,
    scrollToPageIndex
}) => {
        return (
            <NavigationBar
            backgroundColor="black"
            >
                <NavigationMenuTitle>hubertJan.dev</NavigationMenuTitle>
                {pageNames.map((name, index) => {
                    return (<NavigationButton
                        buttonPageIndex={index}
                        currentPageIndex={currentPageIndex}
                        scrollToPageIndex={() => {scrollToPageIndex(index)}}
                        label={name}
                    />);
                })
                }
            </NavigationBar>
        );
    }