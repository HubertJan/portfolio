import { Heading2Text, SubHeading3Text } from "src/styles/fonts";
import { StandardContainer } from "../../../components/StandardContainer";
import { StandardSlide } from "../components/StandardSlide";

import chatIcon from 'src/assets/chat.svg';
import emailIcon from 'src/assets/email.svg';
import { styled } from "goober";
import { TextButton } from "src/components/TextButton";
import { useTheme } from "src";
import { Overlay } from "src/components/Overlay/Overlay";
import { useState } from "react";
import { ContactForm } from "src/components/ContactForm/ContactForm";

const CallToActionContainer = styled(StandardContainer)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    width: 100%;
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
                    label="E-Mail kopieren"
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
                <TextButton backgroundColor={themeContext.colors.secondary}
                    label="E-Mail kopieren"
                    hoverBackgroundColor={themeContext.colors.primary}
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