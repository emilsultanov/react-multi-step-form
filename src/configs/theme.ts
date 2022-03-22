import {createTheme, responsiveFontSizes} from "@mui/material";

const theme = createTheme({
  spacing: 10,
  mixins: {
    toolbar: {
      '*': {
        margin: 0,
        padding: 0
      },
      'html': {
        width: '100vw',
        height: '100vh',
        scrollBehavior: 'smooth',
      },
      '#root': {
        width: '100%',
        height: '100%'
      }
    }
  }
});

export const themeWithResponsiveFonts = responsiveFontSizes(theme);

