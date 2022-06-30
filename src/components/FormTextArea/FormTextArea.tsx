import { BodyText } from "src/styles/fonts";
import styles from "./FormTextArea.module.scss";


export const FormTextArea: React.FC<{ label?: string, placeHolder?: string }> = (
    { placeHolder = "", label = "" }
) => {
    return (
        <div className={styles.field}>
            <label><BodyText>{label}</BodyText></label>
            <textarea
                className={styles.formLargeInput}
                placeholder={placeHolder}
            />
        </div>
    );
}