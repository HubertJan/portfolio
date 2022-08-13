import { styled } from "goober";
import { ReactComponent as ChatIcon } from 'src/assets/chat.svg';
import chatIcon from 'src/assets/chat.svg';
import { PrimaryButton } from "src/components/elements/Button/Button";
import { MultiLineTextField } from "src/components/elements/MultiLineTextField/MultiLineTextField";
import { StandardContainer } from "src/components/elements/StandardContainer/StandardContainer";
import { TextField } from "src/components/elements/TextField/TextField";
import { FieldLabeled } from "src/components/patterns/FieldLabeled/FieldLabeled";
import LabeledTextFieldStories from "src/components/patterns/FieldLabeled/FieldLabeled.stories";
import { SubHeading3Text } from "src/styles/fonts";
import { TextButton } from "../../elements/TextButton";

const FormContainer = styled(StandardContainer)`
    max-width: 1000px;
    width: inherit;
    margin: 16px;
`;

const FormContent = styled('div') <{
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

export const ContactForm: React.FC<{
}> = () => {
    return (
        <FormContainer >
            <FormContent>
                <TitleRow>
                    <Icon/>
                    <SubHeading3Text>Schreibt mir direkt.</SubHeading3Text>
                </TitleRow>
                <FieldLabeled label="Name">
                    <TextField placeHolder="Max Mustermann" />
                </FieldLabeled>
                <FieldLabeled label="Email">
                    <TextField placeHolder="max@mustermann.de" />
                </FieldLabeled>
                <FieldLabeled label="Nachricht" >
                    <MultiLineTextField placeHolder="Ich möchte mit dir arbeiten." />
                </FieldLabeled>
                <div>
                    <PrimaryButton label="Kontaktieren" onClick={()=>{}}
                    />
                </div>
            </FormContent>
        </FormContainer>
    );
}