import 'goober';

interface FontStyle {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
}

declare module 'goober' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            secondaryAlt: string;
            background: string;
            onBackground: string;
            onPrimary: string;
            contrast: string;
            constrastAlt: string;
        };
        fonts: {
            body: FontStyle,
            heading: FontStyle,
            heading2: FontStyle,
            subHeading2: FontStyle,
            heading3: FontStyle,
            subHeading3: FontStyle,
            button: FontStyle,
            loneSubHeading: FontStyle,
            subTitleHeading: FontStyle,
            normalText: FontStyle,
            smallText: FontStyle,
        }
    }
}
