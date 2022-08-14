import { Store } from 'react-notifications-component';

import { Heading2Text, SubHeading3Text } from "src/styles/fonts";
import { StandardSlide } from "../../../components/elements/StandardSlide";

import chatIcon from 'src/assets/chat.svg';
import emailIcon from 'src/assets/email.svg';
import { styled } from "goober";
import { TextButton } from "src/components/elements/TextButton";
import { useTheme } from "src";
import { useEffect, useState } from "react";
import { ContactForm } from "src/components/functionals/ContactForm/ContactForm";
import { Overlay } from "src/components/elements/Overlay/Overlay";
import { StandardContainer } from "src/components/elements/StandardContainer/StandardContainer";
import copy from 'copy-to-clipboard';
import { postFirebaseMessage } from "src/services/firebase";


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

export const ContactSlide: React.FC<{ setIsAllowedToSlide: (isAllowedToSlide: boolean) => void, }> = ({ setIsAllowedToSlide }) => {
    const [isShowingOverlay, setIsShowingOverlay] = useState(false);
    const [hasCopiedEmail, setHasCopiedEmail] = useState(false);

    useEffect(() => {
        console.log("yooooo");
        setIsAllowedToSlide(!isShowingOverlay);
    }, [isShowingOverlay]);

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
            >
                <ContactForm
                    onSubmit={({ email, message, name, resetForm }) => {
                        setIsShowingOverlay(false);
                        console.log("test");
                        postFirebaseMessage({ email, message, name }).then(
                            (_) => {
                                Store.addNotification({
                                    title: "Nachricht abgeschickt",
                                    message: "Ich werde mich bei Ihnen melden. ",
                                    type: "success",
                                    insert: "bottom",
                                    container: "top-right",
                                    animationIn: ["animate__animated", "animate__fadeIn"],
                                    animationOut: ["animate__animated", "animate__fadeOut"],
                                    dismiss: {
                                        duration: 5000,
                                        onScreen: true
                                    }
                                });
                                resetForm();
                            }
                        ).catch((e) => {
                            console.log(e);
                            Store.addNotification({
                                title: "Nachricht konnte nicht abgeschickt werden",
                                message: "Versuchen sie es nochmal oder schreiben sie mir eine E-Mail. ",
                                type: "danger",
                                insert: "bottom",
                                container: "top-right",
                                animationIn: ["animate__animated", "animate__fadeIn"],
                                animationOut: ["animate__animated", "animate__fadeOut"],
                                dismiss: {
                                    duration: 5000,
                                    onScreen: true
                                }
                            });
                        });
                    }

                    }
                    onBack={() => {
                        setIsShowingOverlay(false);
                    }}
                />
            </Overlay>
        </StandardSlide>
    );
}