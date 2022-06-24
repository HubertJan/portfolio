import styles from './AppIcon.module.scss';
import javascriptIcon from "src/assets/javascript.png";

export const AppIconButton: React.FC<{
    title: string,
    backgroundImage?: string,
    backgroundColor?: string,
    iconImage?: string,
}> = ({
    title,
    backgroundImage,
    backgroundColor = "black",
    iconImage,
}) => {
        return (
            <div className={styles.content}>
                <div className={styles.icon} 
                style={{
                    backgroundImage: `url(${backgroundImage}), url(${iconImage})`,
                    backgroundColor: backgroundColor,
                }}
                />
                <div className={styles.title}><h3 >{title}</h3></div>
            </div>
        );
    }
