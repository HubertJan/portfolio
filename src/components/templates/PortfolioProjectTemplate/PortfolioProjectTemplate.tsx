import { styled } from "goober";
import { useTheme } from "src";
import { Button } from "src/components/elements/Button/Button";
import { NavigationBar } from "src/components/elements/NavigationBar/NavigationBar";
import { Tag } from "src/components/elements/Tag/Tag";
import { Heading2Text, HeadingText, SubHeading2Text, SubTitleHeading } from "src/styles/fonts";


const Page = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;


export const PortfolioProjectTemplate: React.FC<{}> = (
) => {
    const theme = useTheme();

    return (
        <Page>
            <NavigationBar>
                Zurück
            </NavigationBar>
{/*             <HeaderPart>
                <HeaderSection>
                    <SubTitleHeading>PROJECT</SubTitleHeading>
                    <MainDescription>
                        <HeadingText>
                            3ncrypt
                        </HeadingText>
                        <Description>Ver- und Entschlüsselungs App für Android und iOS</Description>
                    </MainDescription>
                    <ItemsRow>
                        <Tag label={"Flutter"} backgroundColor="rgba(255,255,255,0.8)" color="#14C1D5" />
                        <ButtonRow>
                            <Button label="Github"
                                hoverBackgroundColor={theme.colors.primaryVariants[50]}
                                hoverColor={theme.colors.background}
                            />
                            <Button label="Live Demo"
                                hoverBackgroundColor={theme.colors.primaryVariants[50]}
                                hoverColor={theme.colors.background}
                            />
                        </ButtonRow>
                    </ItemsRow>
                </HeaderSection>
            </HeaderPart> */}
        </Page>
    );
}