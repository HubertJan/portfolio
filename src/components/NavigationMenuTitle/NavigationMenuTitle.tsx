import styles from "./NavigationMenuTitle.module.scss";

export const NavigationMenuTitle: React.FC<{ children?: React.ReactNode  }> = ({children}) => {
    return (<h1 className={styles.title}>{children}</h1>);
}