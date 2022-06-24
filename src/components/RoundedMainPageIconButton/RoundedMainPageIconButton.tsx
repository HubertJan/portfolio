import { RoundedEdgesContainer } from "../RoundedEdgesContainer/RoundedEdgesContainer";
import styles from "./RoundedMainPageIconButton.module.scss";

export const RoundedMainPageIconButton: React.FC<{
    labelText: string, isExpandingWidth?: boolean, iconImage?: string,
}> = ({ labelText, isExpandingWidth = false, iconImage }) => {
    return (
        <div className={styles.button}>
            <div className={styles.content}>
                {iconImage === undefined ? <></> : <img src={iconImage} alt="Heart Icon" />}
                <p className={styles.label}>{labelText}</p>
            </div>

        </div>);
};