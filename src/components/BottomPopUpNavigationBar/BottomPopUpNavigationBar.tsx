import styles from './BottomPopUpNavigationBar.module.css';

export const BottomPopUpNavigationBar: React.FC<{}> = () => {
    return (
        <div className={styles.bottomPopUpNavigationBar}
        style={{
     /*        display: "none", */
        }}>
            <div className={styles.message}>
            <p className={styles.text}>Hi, ich bin Hubert Jan Tomaszczak</p>
            <p className={styles.text}>Wie kann ich dir helfen?</p>
            </div>
       
            <div className={styles.buttons}>
                <div className={styles.button}>
                    Wer bist du?
                </div>
                <div className={styles.button}>
                    Deine Skills?
                </div>
                <div className={styles.button}>
                    Deine Projekte?
                </div>
                <div className={styles.importantButton}>
                    Kontakte?
                </div>
            </div>
        </div>
    );
}