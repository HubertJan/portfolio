import styles from "./MainPage.module.scss";
import { FillScreenContainer } from "src/components/FillScreenContainer/FillScreenContainer";

import backgroundImage from "src/assets/galaxy.jpg";
import { SliderList } from "src/routes/DesktopPage/components/SliderList/SliderList";
import { NavigationBar } from "src/components/NavigationBar/NavigationBar";
import { NavigationMenuTitle } from "src/components/NavigationMenuTitle/NavigationMenuTitle";
import { useSliderController } from "src/hooks/useSliderController";
import { AboutMeSlide } from "./slides/AboutMeSlide";
import { SkillsSlide } from "./slides/SkillsSlide";
import { ProjectsSlide } from "./slides/ProjectsSlide";
import { ContactSlide } from "./slides/ContactSlide";
import { NavigationButton } from "./components/NavigationButton";


export const DesktopPage: React.FC<{}> = () => {
    const sliderController = useSliderController();
    const { pageIndex, scrollToPageIndex } = sliderController;

    return (
        <FillScreenContainer
            backgroundImage={backgroundImage}
            withBackgroundOverlay={true}
        >
            {<div className={styles.navigationBar}>
                <NavigationBar>
                    <NavigationMenuTitle>hubertJan.dev</NavigationMenuTitle>
                    <NavigationButton
                        currentPageIndex={pageIndex ?? 0}
                        buttonPageIndex={0}
                        scrollToPageIndex={scrollToPageIndex}
                        label="Über Mich" />
                    <NavigationButton
                        currentPageIndex={pageIndex ?? 0}
                        buttonPageIndex={1}
                        scrollToPageIndex={scrollToPageIndex}
                        label="Skills" />
                    <NavigationButton
                        currentPageIndex={pageIndex ?? 0}
                        buttonPageIndex={2}
                        scrollToPageIndex={scrollToPageIndex}
                        label="Projekte" />
                    <NavigationButton
                        currentPageIndex={pageIndex ?? 0}
                        buttonPageIndex={3}
                        scrollToPageIndex={scrollToPageIndex}
                        label="Kontakt" />
                </NavigationBar>
            </div>
            }
            <SliderList
                sliderController={sliderController}
            >
                <AboutMeSlide />
                <SkillsSlide />
                <ProjectsSlide />
                <ContactSlide />
            </SliderList>
        </FillScreenContainer >
    );
};