import { styled } from "goober";
import chatIcon from 'src/assets/chat.svg';
import { Heading2Text, Heading3Text, SubHeading2Text, SubHeading3Text } from "src/styles/fonts";
import { CustomButton } from "../CustomButton/CustomButton";
import { FormTextArea } from "../FormTextArea/FormTextArea";
import { FormTextField } from "../FormTextField/FormTextField";
import { StandardContainer } from "../StandardContainer";
import { TextButton } from "../TextButton";

const FormContent = styled('div') <{
}>`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const TitleRow = styled('div') <{
}>`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;
`;

const Icon = styled('img')`
    width: 49px;
    height: 49px;
`;

export const ContactForm: React.FC<{
}> = () => {
    return (
            <StandardContainer >
                <FormContent>
                    <TitleRow>
                        <Icon src={chatIcon} />
                        <SubHeading3Text>Schreibt mir direkt.</SubHeading3Text>
                    </TitleRow>
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
                    <TextButton label="Kontaktieren"
                    backgroundColor="red" />
                </FormContent>
            </StandardContainer>
    );
}