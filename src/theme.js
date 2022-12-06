import { createTheme } from "@mui/material";
import { deepmerge } from '@mui/utils';

const baseThemeOptions = {
  components: {
    NavigationBar: {
      height: '68px'
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
      fontWeight: 900,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 900,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 900,
    },
    body1: {
      fontSize: "1.5rem",
      lineHeight: "2rem",
      fontWeight: 700,
    },
    body2: {
      fontSize: "1rem"
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 550,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
};

export const lightTheme = createTheme(
  deepmerge({
    palette: {
      mode: "light",
      background: {
        default: '#ffffff',
        secondary: '#f9f9f9',
        card: 'white',
      }
    },
  }, baseThemeOptions)
);

export const darkTheme = createTheme(
  deepmerge({
    palette: {
      mode: "dark",
      background: {
        default: '#121212',
        secondary: '#282828',
        card: '#404040',
      }
    },
  }, baseThemeOptions)
);
