import { styled, Tagged } from "goober";
import { FontStyle } from "src/goober";

function createCSSStyleByFontStyle(fontStyle: FontStyle) {
    return `
    font-size: ${fontStyle.fontSize};
    font-weight: ${fontStyle.fontWeight};
    line-height: ${fontStyle.lineHeight};
    color: inherit;
`;
}

export const BodyText = styled("p")`
    ${(props) => createCSSStyleByFontStyle(props.theme.fonts.body)}
`;
export const HeadingText = styled("h1")`
    ${(props) => createCSSStyleByFontStyle(props.theme.fonts.heading)}
`;

export const Heading2Text = styled("h2")`
    ${(props) => createCSSStyleByFontStyle(props.theme.fonts.heading2)}
`;

export const SubHeading2Text = styled("h2")`
    ${(props) => createCSSStyleByFontStyle(props.theme.fonts.subHeading2)}
`;

export const Heading3Text = styled("h3")`
    ${(props) => createCSSStyleByFontStyle(props.theme.fonts.heading3)}
`;

export const SubHeading3Text = styled("h3")`
    ${(props) => createCSSStyleByFontStyle(props.theme.fonts.subHeading3)}
`;

export const SeperateSubHeading = styled("h3")`
    ${(props) => createCSSStyleByFontStyle(props.theme.fonts.loneSubHeading)}
`;

export const SubTitleHeading = styled("h3")`
    ${(props) => createCSSStyleByFontStyle(props.theme.fonts.subTitleHeading)}
`;

export const NormalText = styled("p")`
    ${ (props) => createCSSStyleByFontStyle(props.theme.fonts.normalText) }
`;

export const SmallText = styled("p")`
    ${ (props) => createCSSStyleByFontStyle(props.theme.fonts.smallText) }
`;

export const ButtonText = styled("p")`
    ${ (props) => createCSSStyleByFontStyle(props.theme.fonts.button) }
`;