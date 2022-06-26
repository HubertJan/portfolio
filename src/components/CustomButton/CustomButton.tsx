import styles from "./CustomButton.module.scss";

export const CustomButton: React.FC<{
    onClick?: () => void,
    label: string,
    textColor?: string,
    buttonColor?: string,
}> = (
    { onClick, label = "" }
) => {
        return (
            <button onClick={onClick} className={styles.customButton}
                style={
                    {
                        "--button-color": "var(--primary-color)",
                    } as React.CSSProperties
                }>
                {label}
            </button>
        );
    }