import './style.css';

import { createContext, useContext, createElement } from "react";
import { theme } from "../src/theme";

import { setup } from 'goober';
import { shouldForwardProp } from 'goober/should-forward-prop';

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

export const decorators = [
    (Story) => {
        const ThemeContext = createContext(theme);
        const useTheme = () => useContext(ThemeContext);
        setup(createElement, undefined, useTheme, shouldForwardProp((prop) => {
            return !prop.endsWith("Style");
        }))
        return (<Story />);
    }
]