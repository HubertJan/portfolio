import { styled } from "goober";

import pythonIcon from "src/assets/python.png";
import reactjsIcon from "src/assets/reactjs.png";
import flutterIcon from "src/assets/flutter.png";

import { AppIconButton, AppIconRow, AppIconRows } from "../../../components/elements/AppIconButton";
import { Heading2Text } from "src/styles/fonts";
import { StandardSlide } from "../../../components/elements/StandardSlide";


const AppIconSlide = styled('div')`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
`;

export const SkillsSlide: React.FC<{}> = () => {
    return (
        <StandardSlide>
            <Heading2Text>Meine Projekte</Heading2Text>
            <AppIconRows>
                <AppIconRow>
                    <AppIconButton title={"Python"}
                        iconImage={pythonIcon}
                        backgroundColor={"#FFDA4E"}
                    />
                    <AppIconButton title={"Flutter"}
                        backgroundColor={"var(--background-contrast-color)"}
                        iconImage={flutterIcon}
                    />
                    <AppIconButton title={"React"}
                        iconImage={reactjsIcon}
                        backgroundColor={"#20232a"}
                    />
                </AppIconRow>
            </AppIconRows>
        </StandardSlide>
    );
}