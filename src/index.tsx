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
