import { styled } from "goober";
import { useNavigate } from "react-router-dom";
import { NavigationBar } from "src/components/elements/NavigationBar/NavigationBar";

const NavigationBackButton = styled('button')`
    align-self: center;
    background-color: transparent;
    border: none;
    color: var(--background-color);
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 24px;
    padding: 16px;

    &:hover {
        cursor: pointer;
    }
`;

const Title = styled('h2')`
    margin: 0px;
`;

const SubTitle = styled('h2')`

`;

const PrimaryTitle = styled('h1')`

`;

const ContentSection = styled('div') <{
    color: string,
}>`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: ${(props) => props.color};
    padding-bottom: 92px;
    padding-top: 92px;
`;

const ContentContainer = styled('div')`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    gap: 16px;
`;

const RoundedContainer = styled('div')`
    background: var(--background-color);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    @media screen {
        padding: 32px 32px;
    }
    @media screen and(max-width: 1000px) {
        padding: 16px 16px;
    }
`;

const BorderLineContainer = styled('div')`
    border: 8px solid white;
    border-radius: 16px;
    color: white;
    @media screen {
        padding: 32px 32px;
    }
    @media screen and(max-width: 1000px) {
        padding: 16px 16px;
    }
`;

const MultiColumn = styled('div')`
    display: flex;
    gap: 32px;
    flex-direction: row;
`;

export const ThreencryptPage: React.FC<{}> = () => {
    const navigate = useNavigate();
    return (
        <div>
            <NavigationBar >
                <NavigationBackButton onClick={() => {
                    navigate("/main");
                }}>Zurück</NavigationBackButton>
            </NavigationBar>
            <ContentSection color="#14C1D5">
                <BorderLineContainer>
                    <ContentContainer>
                        <Title>
                            3ncrypt
                        </Title>
                        <p>
                            Ursprünglich wurde 3ncrypt als Teil eines Schuleprojekts entwickelt. Die Aufgabe war es ein Tool zu entwickeln, zum Verschlüsseln von Text mithilfe von verschiedenen Algorithmen.
                            Nach Fertigstellung des Projekts wurde die App nocheinmal erweitert und als vollständige Tool im Google Play Store veröffentlicht.
                        </p>
                    </ContentContainer>
                </BorderLineContainer>
            </ContentSection>
            <ContentSection color="var(--background-color)">
                <ContentContainer>
                        <Title>
                            12 Algorithmen
                        </Title>
                        <p>
                            Ursprünglich wurde 3ncrypt als Teil eines Schuleprojekts entwickelt. Die Aufgabe war es ein Tool zu entwickeln, zum Verschlüsseln von Text mithilfe von verschiedenen Algorithmen.
                            Nach Fertigstellung des Projekts wurde die App nocheinmal erweitert und als vollständige Tool im Google Play Store veröffentlicht.
                        </p>
                </ContentContainer>
            </ContentSection>
            <ContentSection color="var(--background-contrast-color)">
                <ContentContainer>
                    <RoundedContainer>
                        <MultiColumn>
                            <div>
                                <h2>
                                    Motivation
                                </h2>
                                <p>
                                    Ursprünglich wurde 3ncrypt als Teil eines Schuleprojekts entwickelt. Die Aufgabe war es ein Tool zu entwickeln, zum Verschlüsseln von Text mithilfe von verschiedenen Algorithmen.
                                    Nach Fertigstellung des Projekts wurde die App nocheinmal erweitert und als vollständige Tool im Google Play Store veröffentlicht.
                                </p>
                            </div>
                            <div>
                                <h2>
                                    12 Algorithmen
                                </h2>
                                <p>
                                    Ursprünglich wurde 3ncrypt als Teil eines Schuleprojekts entwickelt. Die Aufgabe war es ein Tool zu entwickeln, zum Verschlüsseln von Text mithilfe von verschiedenen Algorithmen.
                                    Nach Fertigstellung des Projekts wurde die App nocheinmal erweitert und als vollständige Tool im Google Play Store veröffentlicht.
                                </p>
                            </div>
                        </MultiColumn>
                    </RoundedContainer>
                </ContentContainer>
            </ContentSection>
        </div>
    );
}