import React from 'react';
import ReactDOM from 'react-dom';
import {RecoilRoot} from "recoil";
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";

import App from './App';

import {themeWithResponsiveFonts} from "./configs/theme";


ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={themeWithResponsiveFonts}>
        <CssBaseline/>
        <App/>
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

