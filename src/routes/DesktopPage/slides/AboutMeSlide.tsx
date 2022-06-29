import { styled } from "goober";
import { Heading2Text, SubHeading3Text } from "src/styles/fonts";

import germanyMap from 'src/assets/germany.svg';
import { SecondaryColorSpan } from "src/styles/color";
import { StandardContainer } from "../../../components/StandardContainer";

const Content = styled('div')`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 32px;
    max-width: 1200px;
    @media screen {
        flex-direction: row;
    }
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        max-width: 600px;
        min-width: 20px;
        gap: 32px;
    }
`;

const NameAndMapContainer = styled(StandardContainer)`
    gap: 16px;
    @media screen and (min-width: 1000px) {
        flex-grow: 1;
    }
`;


const GermanyMap = styled('img')`
    object-fit: scale-down;
    object-position: bottom center;
    @media screen {
        width: 100%;
        margin-top: 16px;
        margin-bottom: -32px;
    }
    @media screen and (max-width: 1000px) {
        width: 70%;
        margin-bottom: -16px;
    }
`;

const SlogenContainer = styled(StandardContainer)`
      flex-shrink: 3;

`;

export const AboutMeSlide: React.FC<{}> = () => {

    return (<Content>
        <NameAndMapContainer>
            <Heading2Text>Hubert Jan Tomaszczak</Heading2Text>
            <SubHeading3Text>Ich bin ein <SecondaryColorSpan>Anwendungsentwickler</SecondaryColorSpan> aus Deutschland.
            </SubHeading3Text>
            <GermanyMap src={germanyMap} alt="Germany" />
        </NameAndMapContainer>
        <SlogenContainer >
            <SubHeading3Text>Ich programmiere und entwerfe
                Anwendungen mit einen Fokus auf <SecondaryColorSpan>verständlichen Code und Design
                </SecondaryColorSpan>.</SubHeading3Text>
        </SlogenContainer>
    </Content>);
};