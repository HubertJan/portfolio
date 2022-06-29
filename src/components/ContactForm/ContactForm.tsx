import { CustomButton } from "../CustomButton/CustomButton";
import { FormTextArea } from "../FormTextArea/FormTextArea";
import { FormTextField } from "../FormTextField/FormTextField";
import { StandardContainer } from "../StandardContainer";
import styles from "./FormContainer.module.scss";

export const ContactForm: React.FC<{
}> = () => {
    return (
        <div className={styles.contactContainer}>
            <StandardContainer >
                <div className={styles.formContent}>
                    <div className={styles.formTitle}>
                        <div>icon</div>
                        <h1 className={styles.formTitleText}>Schreibt mir direkt.</h1>
                    </div>
                    <FormTextField
                        label="Name"
                        placeHolder="Max Mustermann"
                    />
                    <FormTextField
                        label="Email"
                        placeHolder="max@mustermann.de"
                    />
                    <FormTextArea
                        label="Nachricht"
                        placeHolder="Ich möchte mit dir arbeiten."
                    />
                    <CustomButton label="Kontaktieren" />
                </div>
            </StandardContainer>
        </div>
    );
}