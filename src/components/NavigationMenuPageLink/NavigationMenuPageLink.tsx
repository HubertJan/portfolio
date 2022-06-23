import styles from "./NavigationMenuPageLink.module.scss";

export const NavigationMenuPageLink: React.FC<{ isCurrentPage: boolean, onClick?: ()=> void,  children?: React.ReactNode }> = ({ isCurrentPage, onClick, children }) => {
    return (
        <div className={isCurrentPage ? styles.boxCurrentPage : styles.box} onClick={onClick}>
            <h1 className={isCurrentPage ? styles.linkSelected : styles.link}>
                {children}
            </h1>
        </div>
    );
}