import { AppIconButton } from "src/components/AppIconButton/AppIconButton";
import styles from "./MainPage.module.scss";
import javascriptIcon from "src/assets/javascript.png";
import flutterIcon from "src/assets/flutter.png";
import { FillScreenContainer } from "src/components/FillScreenContainer/FillScreenContainer";

import backgroundImage from "src/assets/galaxy.jpg";
import { SliderList } from "src/components/SliderList/SliderList";
import { RoundedEdgesContainer } from "src/components/RoundedEdgesContainer/RoundedEdgesContainer";

import germanyMap from 'src/assets/germany.svg';

export const MainPage: React.FC<{}> = () => {

    return (
        <FillScreenContainer
            backgroundImage={backgroundImage}
            withBackgroundOverlay={true}
        >
            <SliderList>
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
            {/*             <RoundedEdgesContainer>
                            <p className={styles.text}>So, dass sowohl der Anwender das Programm versteht, <span className={styles.secondaryTextColor}>aber auch der Programmierer den Quellcode</span>.
                            </p>
                        </RoundedEdgesContainer> */}
                    </div>

                </div>
                <div className={styles.appIconSlide}>
                    <h2 className={styles.titleText}>Meine Skills</h2>
                    <div className={styles.iconRow}>
                        <AppIconButton title={"Javascript"}
                            backgroundImage={javascriptIcon}
                        />
                        <AppIconButton title={"Flutter"}
                            backgroundColor={"var(--background-contrast-color)"}
                            iconImage={flutterIcon}
                        />
                    </div>
                </div>
                <div className={styles.appIconSlide}>
                    <h2 className={styles.titleText}>Meine Projekte</h2>
                    <div className={styles.iconRow}>
                        <AppIconButton title={"Meine Homepage"}
                            backgroundImage={javascriptIcon}
                        />
                    </div>
                </div>
            </SliderList>
        </FillScreenContainer>
    );
};