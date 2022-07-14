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

export const SkillsSlide: React.FC<{}> = () => {
    const navigate = useNavigate();
    return (
        <StandardSlide>
            <Heading2Text>Meine Skills</Heading2Text>
            <AppIconRows>
                <AppIconRow>
                    <DesktopAppButton title={"Python"}
                        iconImage={pythonIcon}
                        backgroundColor={"#FFDA4E"}
                        onClick={()=>{
                            navigate("/threencrypt") 
                        }}
                    />
                    <DesktopAppButton title={"Flutter"}
                        backgroundColor={"var(--background-contrast-color)"}
                        iconImage={flutterIcon}
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