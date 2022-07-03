import { styled } from "goober";
import React from "react";
import { useTheme } from "src";
import { Column } from "src/components/elements/Column/Column";
import { Tag } from "src/components/elements/Tag/Tag";
import { HeadingText, SubHeading2Text, SubTitleHeading } from "src/styles/fonts";

const HeaderPart = styled('div') <{ backgroundColor: string }>`
    background-color: ${(props) => props.backgroundColor};
    display: flex;
    width: 100%;
    justify-content: center;
`;

const HeaderSection = styled('div')`
    flex-grow: 1;
    border-width: 8px;
    border-color: white;
    border-radius: 32px;
    border-style: solid;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    margin: 32px;
    color: ${(props) => props.theme.colors.onPrimary};
    padding: 32px;

    @media screen and (max-width: 1000px) {
        align-items: center;
        padding: 16px;
        margin: 16px;
    }
`;

const MainDescription = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 64px;
    padding-bottom: 64px;

    @media screen and (max-width: 1000px) {
        flex-direction: column;

    }
`;

const Description = styled(SubHeading2Text)`
    max-width: 500px;

    @media screen and (max-width: 1000px) {
        text-align: center;

    }

    @media screen and (max-width: 400px){
        word-break: break-all;
    }
`;

const ItemsRow = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        gap: 32px;
        flex-grow: 1;
    }
`;

const ButtonRow = styled("div")`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media screen and (max-width: 1000px) {
        justify-content: space-between;
    }
`;

const StyledColumn = styled(Column)`
    gap: 8px;
    @media screen and (max-width: 1000px) {
       align-items: center;
    }
`;

const Row = styled('div')`
    display: flex;
    flex-direction: row;
    gap: 8px;
`;

export const ProjectHeader: React.FC<{
    title: string,
    description: string,
    backgroundColor: string,
    color: string,
    tags: string[],
    buttons: React.ReactNode[],
}> = ({
    title,
    description,
    backgroundColor,
    color,
    tags,
    buttons,
}
) => {
        const theme = useTheme();

        return (
            <HeaderPart backgroundColor={backgroundColor}>
                <HeaderSection>
                    <SubTitleHeading>PROJECT</SubTitleHeading>
                    <MainDescription>
                        <HeadingText>
                            {title}
                        </HeadingText>
                        <Description>{description}</Description>
                    </MainDescription>
                    <ItemsRow>
                        <StyledColumn>
                            <SubTitleHeading>Genutzte Technologien</SubTitleHeading>
                            <Row> {tags.map((tagName) => <Tag label={tagName} backgroundColor="rgba(255,255,255,0.8)" color="#14C1D5" />)}</Row>
                        </StyledColumn>
                        <ButtonRow>
                            {buttons.map((e) => e)}
                        </ButtonRow>
                    </ItemsRow>
                </HeaderSection>
            </HeaderPart>
        );
    };