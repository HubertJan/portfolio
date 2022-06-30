import { styled } from "goober";
import { Button, ButtonStyling, usePrimaryButtonStyling } from "src/components/elements/Button/Button";
import { StandardContainer } from "src/components/elements/StandardContainer/StandardContainer";

import { SubHeading3Text } from "src/styles/fonts";


const CallToActionContainer = styled(StandardContainer)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    justify-content: space-between;
    gap: 16px;
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
    justify-items: center;
    @media screen {
        gap: 16px;
    }
    @media screen and (max-width: 1000px) {
        gap: 8px;
    }

`;

export const CallToActionButtonBox: React.FC<{
    icon: string,
    altIcon: string,
    label: string,
    onClick: () => void,
    buttonStyling?: ButtonStyling
}> = (
    { icon, altIcon, label, buttonStyling }
) => {
        const primaryStyling = usePrimaryButtonStyling();
        buttonStyling = buttonStyling ?? primaryStyling;
        return (
            <CallToActionContainer>
                <LabelContent>
                    <img src={icon} alt={altIcon} />
                    <SubHeading3Text>
                        hallo@hubertJan.dev
                    </SubHeading3Text>
                </LabelContent>
                <Button
                    label={label}
                    {...buttonStyling}
                />
            </CallToActionContainer>
        );
    }