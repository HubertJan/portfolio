import { AppIconButton } from "src/components/AppIconButton/AppIconButton";
import styles from "./MainPage.module.scss";
import javascriptIcon from "src/assets/javascript.png";
import flutterIcon from "src/assets/flutter.png";
import pythonIcon from "src/assets/python.png";
import reactjsIcon from "src/assets/reactjs.png";
import { FillScreenContainer } from "src/components/FillScreenContainer/FillScreenContainer";

import backgroundImage from "src/assets/galaxy.jpg";
import { SliderList } from "src/components/SliderList/SliderList";
import { RoundedEdgesContainer } from "src/components/RoundedEdgesContainer/RoundedEdgesContainer";

import germanyMap from 'src/assets/germany.svg';
import { NavigationBar } from "src/components/NavigationBar/NavigationBar";
import { NavigationMenuTitle } from "src/components/NavigationMenuTitle/NavigationMenuTitle";
import { NavigationMenuPageLink } from "src/components/NavigationMenuPageLink/NavigationMenuPageLink";
import { useState } from "react";

export const MainPage: React.FC<{}> = () => {
    const [currentIndex, setCurrentIndex] = useState<number | undefined>(undefined);

    const [currentScrollToIndex, setScrollToIndex] = useState<number | undefined>(undefined); // Does not have to be the actual current Navigation index, but SliderList will slide to this index, if index changes.

    return (
        <FillScreenContainer
            backgroundImage={backgroundImage}
            withBackgroundOverlay={true}
        >
            <NavigationBar>
                <NavigationMenuTitle>hubertJan.dev</NavigationMenuTitle>
                <NavigationMenuPageLink isCurrentPage={currentIndex === 0}
                    onClick={() => { setScrollToIndex(0) }}>
                    Über Mich
                </NavigationMenuPageLink>
                <NavigationMenuPageLink isCurrentPage={currentIndex === 1}
                    onClick={() => { setScrollToIndex(1) }}>
                    Skills
                </NavigationMenuPageLink>
                <NavigationMenuPageLink  isCurrentPage={currentIndex === 2}
                    onClick={() => { setScrollToIndex(2) }}>
                    Projekte
                </NavigationMenuPageLink>
                <NavigationMenuPageLink  isCurrentPage={currentIndex === 3}
                    onClick={() => { setScrollToIndex(3) }}>
                    Kontakt
                </NavigationMenuPageLink>
            </NavigationBar>
            <SliderList initialIndex={currentScrollToIndex}
                getCurrentIndex={(index) => {
                    console.log("index");
                    console.log(index);
                    setCurrentIndex(index)
                }}
            >
                <div className={styles.aboutMeSlide}>
                    <RoundedEdgesContainer>
                        <h2 className={styles.titleText}>Hubert Jan Tomaszczak</h2>
                        <p className={styles.text}>Ich bin ein <span className={styles.primaryTextBackgroundColor}>Anwendungsentwickler</span> aus Deutschland.
                        </p>
                        <img src={germanyMap} className={styles.germanyMap} alt="Germany" />
                    </RoundedEdgesContainer>
                    <div className={styles.aboutMeColumn}>
                        <RoundedEdgesContainer >
                            <p className={styles.text}>Ich programmiere und entwerfe
                                Anwendungen mit einen Fokus auf <span className={styles.secondaryTextColor}>verständlichen Code und Design</span>.
                            </p>
                        </RoundedEdgesContainer>
                    </div>

                </div>
                <div className={styles.appIconSlide}>
                    <h2 className={styles.titleText}>Meine Skills</h2>
                    <div className={styles.iconRow}>
                        <AppIconButton title={"Flutter"}
                            backgroundColor={"var(--background-contrast-color)"}
                            iconImage={flutterIcon}
                        />
                        <AppIconButton title={"Python"}
                            iconImage={pythonIcon}
                            backgroundColor={"#FFDA4E"}
                        />
                        <AppIconButton title={"React"}
                            iconImage={reactjsIcon}
                            backgroundColor={"#20232a"}
                        />
                    </div>
                </div>
                <div className={styles.appIconSlide}>
                    <h2 className={styles.titleText}>Meine Projekte</h2>
                    <div className={styles.iconRow}>
                        <AppIconButton title={"MorningChess"}
                            backgroundImage={javascriptIcon}
                        />
                        <AppIconButton title={"3ncrypt"}
                            backgroundImage={javascriptIcon}
                        />
                        <AppIconButton title={"VisualSort"}
                            backgroundImage={javascriptIcon}
                        />
                    </div>
                    <div className={styles.iconRow}>
                        <AppIconButton title={"PyChess"}
                            backgroundImage={javascriptIcon}
                        />
                        <AppIconButton title={"hubertJan.dev"}
                            backgroundImage={javascriptIcon}
                        />
                        <AppIconButton title={"Itspylearning"}
                            backgroundImage={javascriptIcon}
                        />

                    </div>
                </div>
            </SliderList>
        </FillScreenContainer>
    );
};