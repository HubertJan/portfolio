import { DefaultTheme, } from "goober";


export const theme: DefaultTheme = {
  colors: {
    primary: '#296ACB',
    primaryVariants: {500: '#296ACB', 50: "#E8EFFF"},
    secondary: '#FF7188',
    secondaryAlt: '#FFAD71',
    background: '#434656',
    onBackground: '#FFFFFF',
    onPrimary: '#FFFFFF',
    contrast: '#FFFFF',
    constrastAlt: '#E8EFFF',
  },
  fonts: {
    body: {
      fontSize: 'var(--body-font-size)',
      fontWeight: 'var(--body-font-weight)',
      lineHeight: 'var(--body-line-height)',
    },
    heading: {
      fontSize: 'var(--heading-font-size)',
      fontWeight: 'var(--heading-font-weight)',
      lineHeight: 'var(--heading-line-height)',
    },
    heading2: {
      fontSize: 'var(--heading2-font-size)',
      fontWeight: 'var(--heading2-font-weight)',
      lineHeight: 'var(--heading2-line-height)',
    },
    subHeading2: {
      fontSize: 'var(--subheading2-font-size)',
      fontWeight: 'var(--subheading2-font-weight)',
      lineHeight: 'var(--subheading2-line-height)',
    },
    heading3: {
      fontSize: 'var(--heading3-font-size)',
      fontWeight: 'var(--heading3-font-weight)',
      lineHeight: 'var(--heading3-line-height)',
    },
    subHeading3: {
      fontSize: 'var(--subheading3-font-size)',
      fontWeight: 'var(--subheading3-font-weight)',
      lineHeight: 'var(--subheading3-line-height)',
    },
    button: {
      fontSize: 'var(--button-font-size)',
      fontWeight: 'var(--button-font-weight)',
      lineHeight: 'var(--button-line-height)',
    },
    loneSubHeading: {
      fontSize: 'var(--lone-subheading-font-size)',
      fontWeight: 'var(--lone-subheading-font-weight)',
      lineHeight: 'var(--lone-subheading-line-height)',
    },
    subTitleHeading: {
      fontSize: 'var(--subtitle-heading-font-size)',
      fontWeight: 'var(--subtitle-heading-font-weight)',
      lineHeight: 'var(--subtitle-heading-line-height)',
    },
    normalText: {
      fontSize: 'var(--text-font-size)',
      fontWeight: 'var(--text-font-weight)',
      lineHeight: 'var(--text-line-height)',
    },
    smallText: {
      fontSize: 'var(--small-text-font-size)',
      fontWeight: 'var(--small-text-font-weight)',
      lineHeight: 'var(--small-text-line-height)',
    },
  }
};