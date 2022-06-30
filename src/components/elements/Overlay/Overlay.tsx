import styles from "./Overlay.module.scss";

export const Overlay: React.FC<{
    isShown?: boolean, 
    onBackgroundClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => void,
    children?: React.ReactNode,
}> = ({ isShown = true, onBackgroundClick, children }) => {
    return (
        <div className={isShown ? styles.overlay : styles.hide}
            onClick={onBackgroundClick}>
                {children}
        </div>
    );
}