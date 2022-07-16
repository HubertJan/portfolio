import { Heading2Text, SubHeading3Text } from "src/styles/fonts";
import { StandardSlide } from "../../../components/elements/StandardSlide";

import chatIcon from 'src/assets/chat.svg';
import emailIcon from 'src/assets/email.svg';
import { styled } from "goober";
import { TextButton } from "src/components/elements/TextButton";
import { useTheme } from "src";
import { useState } from "react";
import { ContactForm } from "src/components/blocks/ContactForm/ContactForm";
import { Overlay } from "src/components/elements/Overlay/Overlay";
import { StandardContainer } from "src/components/elements/StandardContainer/StandardContainer";
import copy from 'copy-to-clipboard';
 

const CallToActionContainer = styled(StandardContainer)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    width: 90%;
    @media screen {
        gap: 8px;
    }
    @media screen and (min-width: 1300px) {
        gap: 16px;
    }
    @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 16px;
    }
`;

const LabelContent = styled("div")`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    @media screen {
        gap: 16px;
    }
    @media screen and (max-width: 1000px) {
        gap: 8px;
    }

`;

export const ContactSlide: React.FC<{}> = () => {
    const [isShowingOverlay, setIsShowingOverlay] = useState(false);
    const [hasCopiedEmail, setHasCopiedEmail] = useState(false);

    const themeContext = useTheme();
    return (
        <StandardSlide>
            <Heading2Text>Sag Hallo.</Heading2Text>
            <CallToActionContainer>
                <LabelContent>
                    <img src={chatIcon} alt="Heart Icon" />
                    <SubHeading3Text>
                        Schreib mir direkt.
                    </SubHeading3Text>
                </LabelContent>
                <TextButton backgroundColor={themeContext.colors.secondary}
                    label="Schreiben"
                    hoverBackgroundColor={themeContext.colors.primary}
                    onClick={() => setIsShowingOverlay(true)}
                />
            </CallToActionContainer>
            <CallToActionContainer>
                <LabelContent>
                    <img src={emailIcon} alt="Heart Icon" />
                    <SubHeading3Text>
                        hallo@hubertJan.dev
                    </SubHeading3Text>
                </LabelContent>
                <TextButton
                    shouldHover={!hasCopiedEmail}
                    backgroundColor={
                        hasCopiedEmail ?
                            themeContext.colors.background :
                            themeContext.colors.secondaryAlt}
                    label={hasCopiedEmail ? "Kopiert" : "E-Mail kopieren"}
                    hoverBackgroundColor={
                        hasCopiedEmail
                            ? themeContext.colors.background :
                            themeContext.colors.primary
                    }
                    onClick={hasCopiedEmail ? () => { } :
                        (e) => {
                            copy('hallo@hubertJan.dev');
                            setHasCopiedEmail(true);
                            setTimeout(() => {
                                setHasCopiedEmail(false);
                            }, 1000);
                        }
                    }
                />
            </CallToActionContainer>
            <Overlay
                isShown={isShowingOverlay}
                onBackgroundClick={(e) => {
                    if (e.target === e.currentTarget) {
                        setIsShowingOverlay(false);
                    }
                }}>
                <ContactForm />
            </Overlay>
        </StandardSlide>
    );
}