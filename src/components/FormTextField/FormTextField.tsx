import styles from "./FormTextField.module.scss";


export const FormTextField: React.FC<{ label?: string, placeHolder?: string }> = (
    { placeHolder = "", label = "" }
) => {
    return (
        <div className={styles.field}>
            <label>{label}</label>
            <input type="text"
                className={styles.formInput}
                placeholder={placeHolder}
            />
        </div>
    );
}