import { styled } from "goober";

import javascriptIcon from "src/assets/javascript.png";

import { AppIconButton, AppIconRow } from "../components/AppIconButton";
import { Heading2Text } from "src/styles/fonts";
import { StandardSlide } from "../components/StandardSlide";


export const ProjectsSlide: React.FC<{}> = () => {
    return (
        <StandardSlide>
            <Heading2Text>Meine Skills</Heading2Text>
            <AppIconRow>
                <AppIconButton title={`MorningChess`}
                    backgroundImage={javascriptIcon}
                />
                <AppIconButton title={"3ncrypt"}
                    backgroundImage={javascriptIcon}
                />
                <AppIconButton title={`VisualSort`}
                    backgroundImage={javascriptIcon}
                />
            </AppIconRow>
            <AppIconRow>
                <AppIconButton title={"PyChess"}
                    backgroundImage={javascriptIcon}
                />
                <AppIconButton title={"hubertJan.dev"}
                    backgroundImage={javascriptIcon}
                />
                <AppIconButton title={"Itspylearning"}
                    backgroundImage={javascriptIcon}
                />
            </AppIconRow>
        </StandardSlide>
    );
}