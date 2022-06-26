import { CustomButton } from "../CustomButton/CustomButton";
import { FormTextArea } from "../FormTextArea/FormTextArea";
import { FormTextField } from "../FormTextField/FormTextField";
import { RoundedEdgesContainer } from "../RoundedEdgesContainer/RoundedEdgesContainer";
import styles from "./FormContainer.module.scss";

export const FormContainer: React.FC<{
    children?: React.ReactNode,
}> = ({ children }) => {
    return (
        <div className={styles.contactContainer}>
            <RoundedEdgesContainer >
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
                    <CustomButton label="Kontaktieren"/>
                </div>
            </RoundedEdgesContainer>
        </div>
    );
}