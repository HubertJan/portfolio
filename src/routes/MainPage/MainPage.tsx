import { AppIconButton } from "src/components/AppIconButton/AppIconButton";
import styles from "./MainPage.module.scss";
import javascriptIcon from "src/assets/javascript.png";
import flutterIcon from "src/assets/flutter.png";
import { FillScreenContainer } from "src/components/FillScreenContainer/FillScreenContainer";

import backgroundImage from "src/assets/galaxy.jpg";
import { SliderList } from "src/components/SliderList/SliderList";

export const MainPage: React.FC<{}> = () => {

    return (
        <FillScreenContainer
            backgroundImage={backgroundImage}
            withBackgroundOverlay={true}
        >
            <SliderList>
                <div className={styles.content}>
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
                <div className={styles.content}>
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