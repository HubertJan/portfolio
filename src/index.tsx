import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { setup } from "goober";

import './index.css';
import reportWebVitals from './reportWebVitals';
import { HomePage } from './routes/HomePage/HomePage';
import { DesktopPage } from './routes/DesktopPage/DesktopPage';
import { ThreencryptPage } from './routes/ThreencryptPage/ThreencryptPage';
import { theme } from './theme';
import { shouldForwardProp } from 'goober/should-forward-prop';
import { VisualSortPage } from './routes/VisualSortPage/VisualSortPage';
import { FlutterPage } from './routes/FlutterPage/FlutterPage';


const ThemeContext = createContext(theme);
export const useTheme = () => useContext(ThemeContext);

setup(React.createElement, undefined, useTheme, shouldForwardProp((prop) => {
  return !prop.endsWith("Style");
}))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/main" element={<DesktopPage />} />
      <Route path="/threencrypt" element={<ThreencryptPage />} />
      <Route path="/visualSort" element={<VisualSortPage />} />
      <Route path="/main/:currentPageId" element={<DesktopPage />} />
      <Route path="/flutter" element={<FlutterPage />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
