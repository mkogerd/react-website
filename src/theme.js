import { createTheme } from "@mui/material";

const baseThemeOptions = {
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
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: 'white',
      secondary: '#f9f9f9',
      card: 'white',
    }
  },
}, baseThemeOptions);

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: '#121212',
      secondary: '#282828',
      card: '#404040',
    }
  },
}, baseThemeOptions);
