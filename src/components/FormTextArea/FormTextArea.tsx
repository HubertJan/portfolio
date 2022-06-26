import styles from "./FormTextArea.module.scss";


export const FormTextArea: React.FC<{ label?: string, placeHolder?: string }> = (
    { placeHolder = "", label = "" }
) => {
    return (
        <div className={styles.field}>
            <label>{label}</label>
            <textarea
                className={styles.formLargeInput}
                placeholder={placeHolder}
            />
        </div>
    );
}