import React from "react";
import styles from './StartNotificationStyledBanner.module.css';
import icon from '../../assets/heart.svg';
import "src/variables.css";

export const StartNotificationStyledBanner: React.FC<{}> = () => {
    return (
        <div className={styles.startNotificationStyledBanner}>
            <div className={styles.headerText}>
                <img src={icon} className={styles.heartIcon} alt="Heart Icon" />

                <p>Entwickler • Gerade</p>
            </div>
            <p className={styles.title}>
                Hallo, ich bin <span style={{color: "var(--primary-color)"}}>Hubert</span >
            </p>
            <p className={styles.subTitle}>Ich bin ein App Developer.</p>
        </div>
    );
};