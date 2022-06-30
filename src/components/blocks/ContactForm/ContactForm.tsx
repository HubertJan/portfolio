import { styled } from "goober";
import chatIcon from 'src/assets/chat.svg';
import { MultiLineTextField } from "src/components/elements/MultiLineTextField/MultiLineTextField";
import { StandardContainer } from "src/components/elements/StandardContainer/StandardContainer";
import { TextField } from "src/components/elements/TextField/TextField";
import { Labeled } from "src/components/patterns/Labeled/Labeled";
import LabeledTextFieldStories from "src/components/patterns/Labeled/Labeled.stories";
import { SubHeading3Text } from "src/styles/fonts";
import { TextButton } from "../../elements/TextButton";

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
                <Labeled label="Name">
                    <TextField placeHolder="Max Mustermann" />
                </Labeled>
                <Labeled label="Email">
                    <TextField placeHolder="max@mustermann.de" />
                </Labeled>
                <Labeled label="Nachricht">
                    <MultiLineTextField placeHolder="Ich möchte mit dir arbeiten." />
                </Labeled>
                <TextButton label="Kontaktieren"
                    backgroundColor="red" />
            </FormContent>
        </StandardContainer>
    );
}