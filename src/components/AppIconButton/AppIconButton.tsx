import { __String } from 'typescript';
import styles from './AppIcon.module.scss';

export const AppIconButton: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className={styles.content}>
            <div className={styles.icon}></div>
            <h3 >{title}</h3>
        </div>
    );
}
