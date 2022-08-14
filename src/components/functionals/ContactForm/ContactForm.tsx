import { styled } from "goober";
import { ReactComponent as ChatIcon } from 'src/assets/chat.svg';
import { PrimaryButton } from "src/components/elements/Button/Button";
import { MultiLineTextField } from "src/components/elements/MultiLineTextField/MultiLineTextField";
import { StandardContainer } from "src/components/elements/StandardContainer/StandardContainer";
import { TextField } from "src/components/elements/TextField/TextField";
import { FieldLabeled } from "src/components/patterns/FieldLabeled/FieldLabeled";
import { SubHeading3Text } from "src/styles/fonts";
import { TextButton } from "../../elements/TextButton";
import { LegacyRef, useRef, useState } from "react";

import { useTheme } from "src";

const FormContainer = styled(StandardContainer)`
    max-width: 1000px;
    width: inherit;
    margin: 16px;
`;

const FormContent = styled("form") <{
}>`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
`;

const TitleRow = styled('div') <{
}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;
`;

const Icon = styled(ChatIcon)`
    width: 49px;
    height: 49px;
`;

const SizedBox = styled("div")`
    width: 8px;
    display: inline-block;
`;


function isEmailValid(text: string): boolean {
    return text.toLowerCase()
        .match(
            /^\S+@\S+$/
        ) != null;
}

export const ContactForm: React.FC<{
    onSubmit?: ({ name, email, message, resetForm }: {
        name: string, email: string, message: string,
        resetForm: ()=> void
    }) => void,
    onBack?: () => void
}> = ({ onSubmit, onBack }) => {
    const ref = useRef<HTMLFormElement>();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [emailErrorText, setEmailErrorText] = useState<string | undefined>(undefined);
    const [nameErrorText, setNameErrorText] = useState<string | undefined>(undefined);
    const [messageErrorText, setMessageErrorText] = useState<string | undefined>(undefined);

    const theme = useTheme();
    return (
        <FormContainer >
            <form ref={ref as LegacyRef<HTMLFormElement>}>
            <FormContent >
                <TitleRow>
                    <Icon />
                    <SubHeading3Text>Schreibt mir direkt.</SubHeading3Text>
                </TitleRow>

                <FieldLabeled label="Name">
                    <TextField placeHolder="Max Mustermann"
                        onChange={(text) => {
                            setName(text);

                        }}
                        errorText={nameErrorText} />
                </FieldLabeled>
                <FieldLabeled label="Email">
                    <TextField placeHolder="max@mustermann.de"
                        onChange={(text) => {
                            setEmail(text);
                        }}
                        errorText={emailErrorText}
                    />
                </FieldLabeled>
                <FieldLabeled label="Nachricht" >
                    <MultiLineTextField placeHolder="Ich möchte mit dir arbeiten."
                        onChange={(text) => {
                            setMessage(text);
                        }}
                        errorText={messageErrorText}
                    />
                </FieldLabeled>
                <div>
                    <PrimaryButton label="Kontaktieren" onClick={() => {
                        let isValid = true;
                        if (!isEmailValid(email)) {
                            setEmailErrorText("Gebe eine gültige E-Mail Adresse ein.");
                            isValid = false;
                        }else{
                            setEmailErrorText(undefined);
                        }
                        if (name.length === 0) {
                            setNameErrorText("Gebe einen Name ein.");
                            isValid = false;
                        }
                        else{
                            setNameErrorText(undefined);
                        }
                        if (message.length === 0) {
                            setMessageErrorText("Gebe eine Nachricht ein.");
                            isValid = false;
                        }
                        else{
                            setMessageErrorText(undefined);
                        }
                        if (!isValid) {
                            return;
                        }
                        onSubmit!({ name, email, message, resetForm: ()=> {

                            ref.current!.reset();
                        } });
                    }}
                    />
                    <SizedBox />
                    <TextButton
                        label="Zurück"
                        onClick={() => {
                            if (onBack !== null) {
                                onBack!();
                            }
                        }}
                        hoverBackgroundColor={theme.colors.primaryVariants[50]}
                        hoverColor={theme.colors.background}
                    />
                </div>
            </FormContent>
            </form>

        </FormContainer>
    );
}