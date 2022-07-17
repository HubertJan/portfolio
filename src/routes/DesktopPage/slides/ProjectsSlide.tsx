import { styled } from "goober";

import javascriptIcon from "src/assets/javascript.png";
import threencrypt from "src/assets/3ncrypt.png";
import vssort from "src/assets/VSSort.png";
import pychess from "src/assets/pychess.png";
import hubertJan from "src/assets/hubertJan.png";
import itspy from "src/assets/itspy.png";
import morningChess from "src/assets/morningChess.png";
import { DesktopAppButton } from "src/components/elements/DesktopAppButton/DesktopAppButton";
import { StandardSlide } from "src/components/elements/StandardSlide";
import { AppIconRow } from "src/components/patterns/AppIconRow/AppIconRow";
import { AppIconRows } from "src/components/patterns/AppIconRows/AppIconRows";

import { Heading2Text } from "src/styles/fonts";
import { useNavigate } from "react-router-dom";


export const ProjectsSlide: React.FC<{ isScrolling?: boolean }> = ({ isScrolling = false }) => {
    const navigate = useNavigate();
    const navigateTo = (route: string) => {
        if (isScrolling) {
            return;
        }
        navigate(route);
    }
    return (
        <StandardSlide>
            <Heading2Text>Meine Projekte</Heading2Text>
            <AppIconRows>
                <AppIconRow>
                    <DesktopAppButton title={`3ncrypt`}
                        iconImage={threencrypt}
                        backgroundColor={"white"}
                        onClick={() => {
                            navigateTo("/threencrypt")
                        }}
                    />
                    <DesktopAppButton title={"MorningChess"}
                        backgroundImage={"#121212"}
                        iconImage={morningChess}
                        onClick={() => {
                            navigateTo("/morningChess")
                        }}
                    />
                    <DesktopAppButton title={`VisualSort`}
                        iconImage={vssort}
                        backgroundColor={"#1F2124"}
                        onClick={() => {
                            navigateTo("/visualSort")
                        }}
                    />
                </AppIconRow>
                <AppIconRow>
                    <DesktopAppButton title={"hubertJan.dev"}
                        backgroundColor="#434656"
                        iconImage={hubertJan}
                        onClick={() => {
                            navigateTo("/hubertJanDev")
                        }}
                    />
                    <DesktopAppButton title={"Itspylearning"}
                        backgroundColor={"#D86D1F"}
                        iconImage={itspy}
                        onClick={() => {
                            navigateTo("/itspylearning")
                        }}
                    />
                    <DesktopAppButton title={"aChess"}
                        backgroundColor={"#F5F5F5"}
                        iconImage={pychess}
                        onClick={() => {
                            navigateTo("/aChess")
                        }}
                    />
                </AppIconRow>
            </AppIconRows>

        </StandardSlide>
    );
}