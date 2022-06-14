import { AppIconButton } from "src/components/AppIconButton/AppIconButton";
import styles from "./MainPage.module.scss";

export const MainPage: React.FC<{}> = () => {

    return (
        <div className={styles.content}>
            <h2>Meine Skills</h2>
            <div className={styles.iconRow}>
                <AppIconButton title={"Javascript"} />
                <AppIconButton title={"Javascript"} />
            </div>

        </div>
    );
};