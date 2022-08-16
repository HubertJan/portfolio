import { styled } from "goober";
import { ReactElement } from "react";
import { FeatureParagraph, FeatureSection } from "src/components/blocks/FeatureSection/FeatureSection";
import { ProjectHeaderProps } from "src/components/blocks/CustomHeader/CustomHeader";
import { NavigationBar } from "src/components/elements/NavigationBar/NavigationBar";
import { ReactComponent as EmailIcon } from 'src/assets/email.svg';
import { TextSection } from "src/components/blocks/TextSection.tsx/TextSection";
import { useNavigate } from "react-router-dom";
import { TextButton } from "src/components/elements/TextButton";

const Page = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

const ImpressumText = styled("div")`
    color: black;
    padding: 32px;
    h1 { 
    display: block;
    font-size: 2em;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}
h2 {
    display: block;
    font-size: 1.5em;
    margin-top: 0.83em;
    margin-bottom: 0.83em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}
`;

export const ImpressumPage: React.FC<{
}> = (

    ) => {
        const navigate = useNavigate();
        return (
            <Page>
                <NavigationBar
                    backgroundColor="white"
                >
                    <TextButton
                        label="Schließen"
                        hoverColor="grey"
                        onClick={() => { navigate(-1) }} />
                </NavigationBar>
                <ImpressumText>
                    <h1>Impressum</h1>

                    <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                    <p>Hubert Tomaszczak<br />
                        Karlstra&szlig;e 5<br />
                        27607 Geestland</p>

                    <h2>Kontakt</h2>
                    <p>Telefon: +49 174 9224029<br />
                        E-Mail: hubert@tomfamilie.de</p>
                    <br />
                    <br />
                    <p>Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>
                </ImpressumText>
            </Page>
        );
    }