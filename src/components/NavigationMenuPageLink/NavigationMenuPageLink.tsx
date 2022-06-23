import styles from "./NavigationMenuPageLink.module.scss";

export const NavigationMenuPageLink: React.FC<{ isCurrentPage: boolean, children?: React.ReactNode }> = ({ isCurrentPage, children }) => {
    return (
        <div className={isCurrentPage ? styles.boxCurrentPage : styles.box}>
            <h1 className={styles.link}>
                {children}
            </h1>
        </div>
    );
}