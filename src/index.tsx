import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { css, DefaultTheme, setup } from "goober";

import './index.css';
import reportWebVitals from './reportWebVitals';
import { HomePage } from './routes/HomePage/HomePage';
import { DesktopPage } from './routes/DesktopPage/DesktopPage';
import { ThreencryptPage } from './routes/ThreencryptPage/ThreencryptPage';

const theme: DefaultTheme = {
  colors: {
    primary: '#296ACB',
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
      lineHeight: 'var(--body-font-height)',
    },
    heading: {
      fontSize: 'var(--heading-font-size)',
      fontWeight: 'var(--heading-font-weight)',
      lineHeight: 'var(--heading-font-height)',
    },
    heading2: {
      fontSize: 'var(--heading2-font-size)',
      fontWeight: 'var(--heading2-font-weight)',
      lineHeight: 'var(--heading2-font-height)',
    },
    subHeading2: {
      fontSize: 'var(--subHeading2-font-size)',
      fontWeight: 'var(--subHeading2-font-weight)',
      lineHeight: 'var(--subHeading2-font-height)',
    },
    heading3: {
      fontSize: 'var(--heading3-font-size)',
      fontWeight: 'var(--heading3-font-weight)',
      lineHeight: 'var(--heading3-font-height)',
    },
    subHeading3: {
      fontSize: 'var(--subheading3-font-size)',
      fontWeight: 'var(--subheading3-font-weight)',
      lineHeight: 'var(--subheading3-font-height)',
    },
    button: {
      fontSize: 'var(--button-font-size)',
      fontWeight: 'var(--button-font-weight)',
      lineHeight: 'var(--button-font-height)',
    },
    loneSubHeading: {
      fontSize: 'var(--lone-subheading-font-size)',
      fontWeight: 'var(--lone-subheading-font-weight)',
      lineHeight: 'var(--lone-subheading-font-height)',
    },
    subTitleHeading: {
      fontSize: 'var(--subtitle-heading-font-size)',
      fontWeight: 'var(--subtitle-heading-font-weight)',
      lineHeight: 'var(--subtitle-heading-font-height)',
    },
    normalText: {
      fontSize: 'var(--text-font-size)',
      fontWeight: 'var(--text-font-weight)',
      lineHeight: 'var(--text-font-height)',
    },
    smallText: {
      fontSize: 'var(--small-text-font-size)',
      fontWeight: 'var(--small-text-font-weight)',
      lineHeight: 'var(--small-text-font-height)',
    },
  }
};

const ThemeContext = createContext(theme);
export const useTheme = () => useContext(ThemeContext);

setup(React.createElement, undefined, useTheme);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/main" element={<DesktopPage />} />
      <Route path="/threencrypt" element={<ThreencryptPage />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
