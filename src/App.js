import * as React from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import './App.css';
import Projects from 'components/projects/Projects';
import ContactSection from 'components/contactInfo/ContactInfo';
import NavigationBar from 'components/navigationBar/NavigationBar';
import TitleSection from 'components/titleSection/TitleSection';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <TitleSection />
      <Projects />
      <ContactSection />
    </div>
  );
}


function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
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
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ToggleColorMode;
export { ColorModeContext };