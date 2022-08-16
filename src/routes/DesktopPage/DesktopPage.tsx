import styles from "./MainPage.module.scss";


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
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "goober";

const backgroundImage = "https://www.web29.s186.goserver.host/assets/galaxy.jpg";
const backgroundImagePlaceholder = "https://www.web29.s186.goserver.host/assets/galaxy-min.jpg";


const ImpressumText = styled("div")`
  position: fixed;
  right: 8px;
  bottom: 8px;
  color: white;
  text-align: center;
`


export const DesktopPage: React.FC<{}> = () => {
    const sliderController = useSliderController();
    const { pageIndex, scrollToPageIndex, setPageIndex, isScrolling, setIsAllowedToSlide } = sliderController;
    const navigate = useNavigate();
    const { currentPageId } = useParams();

    // Prevent MacBook touchpad to scroll immediatily to next page, after transitioning to desktop page by touchpad scrolling from home page.
    const [canScrollWheel, setCanScrollWheel] = useState(false);


    useEffect(() => {
        if (currentPageId === undefined) {
            return;
        }
        const currentIdAsNumber = parseInt(currentPageId);
        setPageIndex(currentIdAsNumber);
        setTimeout(() => {
            setCanScrollWheel(true);
        }, 1000);
    }, []);

    const currentPageIndex = (pageIndex === undefined && currentPageId !== undefined) ? parseInt(currentPageId) : pageIndex;

    useEffect(() => {
        window.history.pushState('', '', `/desktop/${pageIndex}`)
    }, [pageIndex]);


    return (
        <ReactScrollWheelHandler
            downHandler={(_) => {
                if (!canScrollWheel) {
                    return;
                }
                if (currentPageIndex !== 3) {
                    scrollToPageIndex((currentPageIndex ?? 0) + 1);
                }
            }}
            upHandler={(_) => {
                if (!canScrollWheel) {
                    return;
                }
                if (currentPageIndex !== 0) {
                    scrollToPageIndex((currentPageIndex ?? 0) - 1);
                }
            }}
        >
            <FillScreenContainer
                backgroundImage={backgroundImage}
                backgroundImagePlaceholder={backgroundImagePlaceholder}
                withBackgroundOverlay={true}
            >
                {<div className={styles.navigationBar}>
                    <NavigationBar
                        backgroundColor="black"
                    >
                        <NavigationMenuTitle>hubertJan.de</NavigationMenuTitle>
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
                    <ContactSlide setIsAllowedToSlide={setIsAllowedToSlide} />
                </SliderList>
                {pageIndex === 3 ? <ImpressumText onClick={() => { navigate("/impressum") }}>Impressum</ImpressumText> : null}
            </FillScreenContainer >
        </ReactScrollWheelHandler>
    );
};