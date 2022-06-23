import styles from "./NavigationBar.module.scss";

export const NavigationBar: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (<div className={styles.navigationBar}>{children}</div>);
}