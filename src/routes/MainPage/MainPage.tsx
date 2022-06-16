import { AppIconButton } from "src/components/AppIconButton/AppIconButton";
import styles from "./MainPage.module.scss";
import javascriptIcon from "src/assets/javascript.png";
import flutterIcon from "src/assets/flutter.png";
import { FillScreenContainer } from "src/components/FillScreenContainer/FillScreenContainer";

import backgroundImage from "src/assets/background_image.jpg";
import { ScrollableSlideContainerList } from "src/components/ScrollableFullScreenList/ScrollableFullScreenList";

export const MainPage: React.FC<{}> = () => {

    return (
        <FillScreenContainer
            backgroundImage={backgroundImage}
        > 
            <ScrollableSlideContainerList>
                <div className={styles.content}>
                    <h2>Meine Skills</h2>
                    <div className={styles.iconRow}>
                        <AppIconButton title={"Javascript"}
                            backgroundImage={javascriptIcon}

                        />
                        <AppIconButton title={"Javascript"}
                            backgroundColor={"var(--background-contrast-color)"}
                            iconImage={flutterIcon}
                        />
                    </div>
                </div>
                <div className={styles.content}>
                    <h2>Meine Projekte</h2>
                    <div className={styles.iconRow}>
                        <AppIconButton title={"Sachen"}
                            backgroundImage={javascriptIcon}

                        />
                    </div>
                </div>
            </ScrollableSlideContainerList>
        </FillScreenContainer>
    );
};