import { styled } from "goober";

import pythonIcon from "src/assets/python.png";
import reactjsIcon from "src/assets/reactjs.png";
import flutterIcon from "src/assets/flutter.png";

import { Heading2Text } from "src/styles/fonts";
import { StandardSlide } from "../../../components/elements/StandardSlide";
import { DesktopAppButton } from "src/components/elements/DesktopAppButton/DesktopAppButton";
import { AppIconRows } from "src/components/patterns/AppIconRows/AppIconRows";
import { AppIconRow } from "src/components/patterns/AppIconRow/AppIconRow";
import { useNavigate } from "react-router-dom";

export const SkillsSlide: React.FC<{ isScrolling?: boolean }> = ({ isScrolling = false }) => {
    const navigate = useNavigate();
    const navigateTo = (route: string) => {
        if (isScrolling) {
            return;
        }
        navigate(route);
    }
    return (
        <StandardSlide>
            <Heading2Text>Meine Skills</Heading2Text>
            <AppIconRows>
                <AppIconRow>
                    <DesktopAppButton title={"Python"}
                        iconImage={pythonIcon}
                        backgroundColor={"#FFDA4E"}
                        onClick={() => {
                            navigateTo("/flutter")
                        }}
                    />
                    <DesktopAppButton title={"Flutter"}
                        backgroundColor={"var(--background-contrast-color)"}
                        iconImage={flutterIcon}
                        onClick={() => {
                            navigateTo("/flutter")
                        }}
                    />
                    <DesktopAppButton title={"React"}
                        iconImage={reactjsIcon}
                        backgroundColor={"#20232a"}
                    />
                </AppIconRow>
            </AppIconRows>
        </StandardSlide>
    );
}