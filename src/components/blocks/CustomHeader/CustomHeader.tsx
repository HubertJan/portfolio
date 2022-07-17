import { styled } from "goober";
import React from "react";
import { useTheme } from "src";
import { Column } from "src/components/elements/Column/Column";
import { Tag } from "src/components/elements/Tag/Tag";
import { HeadingText, SubHeading2Text, SubTitleHeading } from "src/styles/fonts";

const HeaderPart = styled('div') <{ backgroundColorStyle: string }>`
    background-color: ${(props) => props.backgroundColorStyle};
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 64px;
    padding-bottom: 64px;
`;

const HeaderSection = styled('div') <{ borderColorStyle: string, colorStyle: string }>`
    flex-grow: 1;
    border-width: 8px;
    border-color: ${(props) => props.borderColorStyle};
    border-radius: 32px;
    border-style: solid;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    margin: 32px;
    color: ${(props) => props.colorStyle};
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
    gap: 16px;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

const Title = styled(HeadingText)`
    @media screen and (max-width: 1000px) {
        text-align: center;
    }
`;

const Description = styled(SubHeading2Text)`
    max-width: 500px;

    @media screen and (max-width: 1000px) {
        text-align: center;
    }

/*     @media screen and (max-width: 400px){
        word-break: break-all;
    } */
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

        justify-content: center;
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



export interface CustomHeaderProps extends ProjectHeaderProps {
    tagsTitle?: string,
    subTitle?: string
}

export const CustomHeader: React.FC<CustomHeaderProps> = ({
    title = "",
    subTitle,
    description,
    color,
    backgroundColor,
    tagsTitle = "",
    tags = [],
    buttons = [],
}
) => {
    return (
        <HeaderPart backgroundColorStyle={backgroundColor}>
            <HeaderSection
            borderColorStyle={color}
            colorStyle={color}
            >
                <SubTitleHeading>{subTitle}</SubTitleHeading>
                <MainDescription>
                    <Title>
                        {title}
                    </Title>
                    <Description>{description}</Description>
                </MainDescription>
                <ItemsRow>
                    {
                        tags.length !== 0 ?
                            <StyledColumn>
                                <SubTitleHeading>{tagsTitle}</SubTitleHeading>
                                <Row>
                                    {tags.map((tagName) => <Tag label={tagName} backgroundColor={color}
                                    color={backgroundColor} />)}
                                </Row>
                            </StyledColumn> : null
                    }
                    {
                        buttons.length !== 0 ?
                            <ButtonRow>
                                {buttons.map((e) => e)}
                            </ButtonRow> : null
                    }
                </ItemsRow>
            </HeaderSection>
        </HeaderPart>
    );
};

export interface ProjectHeaderProps {
    title: string,
    description: string,
    backgroundColor: string,
    color: string,
    tags?: string[],
    buttons?: React.ReactNode[],
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = (props
) => {
    return (<CustomHeader
        subTitle="PROJEKT"
        tagsTitle="Genutzte Technologien" {...props}
    />);
};