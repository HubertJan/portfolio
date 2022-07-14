import { styled } from "goober";

import javascriptIcon from "src/assets/javascript.png";
import threencrypt from "src/assets/3ncrypt.png";
import { DesktopAppButton } from "src/components/elements/DesktopAppButton/DesktopAppButton";
import { StandardSlide } from "src/components/elements/StandardSlide";
import { AppIconRow } from "src/components/patterns/AppIconRow/AppIconRow";
import { AppIconRows } from "src/components/patterns/AppIconRows/AppIconRows";

import { Heading2Text } from "src/styles/fonts";
import { useNavigate } from "react-router-dom";


export const ProjectsSlide: React.FC<{}> = () => {
    const navigate = useNavigate();
    return (
        <StandardSlide>
            <Heading2Text>Meine Projekte</Heading2Text>
            <AppIconRows>
                <AppIconRow>
                    <DesktopAppButton title={`3ncrypt`}
                        iconImage={threencrypt}
                        backgroundColor={"white"}
                        onClick={()=>{
                            navigate("/threencrypt") 
                        }}
                    />
                    <DesktopAppButton title={"3ncrypt"}
                        backgroundImage={javascriptIcon}
                    />
                    <DesktopAppButton title={`VisualSort`}
                        backgroundImage={javascriptIcon}
                    />
                </AppIconRow>
                <AppIconRow>
                    <DesktopAppButton title={"PyChess"}
                        backgroundImage={javascriptIcon}
                    />
                    <DesktopAppButton title={"hubertJan.dev"}
                        backgroundImage={javascriptIcon}
                    />
                    <DesktopAppButton title={"Itspylearning"}
                        backgroundImage={javascriptIcon}
                    />
                </AppIconRow>
            </AppIconRows>

        </StandardSlide>
    );
}