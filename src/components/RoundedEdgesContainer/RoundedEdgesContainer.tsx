import styles from "./RoundedEdgesContainer.module.scss";

export const RoundedEdgesContainer: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (<div className={styles.container}>{children}</div>);
}