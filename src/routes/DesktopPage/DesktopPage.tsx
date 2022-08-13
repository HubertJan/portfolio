import styles from "./MainPage.module.scss";

import backgroundImage from "src/assets/galaxy.jpg";
import { SliderList } from "src/components/blocks/SliderList/SliderList";
import { useSliderController } from "src/hooks/useSliderController";
import { AboutMeSlide } from "./slides/AboutMeSlide";
import { SkillsSlide } from "./slides/SkillsSlide";
import { ProjectsSlide } from "./slides/ProjectsSlide";
import { ContactSlide } from "./slides/ContactSlide";
import { NavigationButton } from "../../components/elements/NavigationButton";
import { FillScreenContainer } from "src/components/elements/FillScreenContainer/FillScreenContainer";
import { NavigationMenuTitle } from "src/components/elements/NavigationMenuTitle/NavigationMenuTitle";
import { NavigationBar } from "src/components/elements/NavigationBar/NavigationBar";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "goober";


const ImpressumText = styled("div")`
  position: fixed;
  right: 8px;
  bottom: 8px;
  color: white;
  text-align: center;
`


export const DesktopPage: React.FC<{}> = () => {
    const sliderController = useSliderController();
    const { pageIndex, scrollToPageIndex, setPageIndex, isScrolling } = sliderController;
    const navigate = useNavigate();
    const { currentPageId } = useParams();
   

    useEffect(() => {
        if (currentPageId === undefined) {
            return;
        }
        const currentIdAsNumber = parseInt(currentPageId);
        setPageIndex(currentIdAsNumber);
    }, []);

    const currentPageIndex = (pageIndex === undefined && currentPageId !== undefined) ? parseInt(currentPageId) : pageIndex;

    useEffect(() => {
        window.history.pushState('', '', `/main/${pageIndex}`)
    }, [pageIndex]);

    
    return (
        <FillScreenContainer
            backgroundImage={backgroundImage}
            withBackgroundOverlay={true}
        >
            {<div className={styles.navigationBar}>
                <NavigationBar
                    backgroundColor="black"
                >
                    <NavigationMenuTitle>hubertJan.dev</NavigationMenuTitle>
                    <NavigationButton
                        currentPageIndex={currentPageIndex ?? 0}
                        buttonPageIndex={0}
                        scrollToPageIndex={scrollToPageIndex}
                        label="Über Mich" />
                    <NavigationButton
                        currentPageIndex={currentPageIndex ?? 0}
                        buttonPageIndex={1}
                        scrollToPageIndex={scrollToPageIndex}
                        label="Skills" />
                    <NavigationButton
                        currentPageIndex={currentPageIndex ?? 0}
                        buttonPageIndex={2}
                        scrollToPageIndex={scrollToPageIndex}
                        label="Projekte" />
                    <NavigationButton
                        currentPageIndex={currentPageIndex ?? 0}
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
                <SkillsSlide isScrolling={isScrolling} />
                <ProjectsSlide isScrolling={isScrolling} />
                <ContactSlide />
            </SliderList>
            {pageIndex === 3 ? <ImpressumText onClick={()=>{navigate("/impressum")}}>Impressum</ImpressumText> : null}
        </FillScreenContainer >

    );
};