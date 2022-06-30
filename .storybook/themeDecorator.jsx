import React from "react"
import { createContext, useContext } from "react";

import { setup } from 'goober';

const ThemeDecorator = (getStory) => {
        const ThemeContext = createContext(theme);
        const useTheme = () => useContext(ThemeContext);
        setup(React.createElement, undefined, useTheme);
        return (<getStory />);
}

export default ThemeDecorator;