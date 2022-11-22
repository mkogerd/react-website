import * as React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import Projects from 'components/projectsSection/Projects';
import ContactSection from 'components/contactSection/ContactInfo';
import NavigationBar from 'components/navigationBar/NavigationBar';
import TitleSection from 'components/titleSection/TitleSection';
import { darkTheme, lightTheme } from 'Theme';

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
    () => mode === 'light' ? lightTheme : darkTheme,
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