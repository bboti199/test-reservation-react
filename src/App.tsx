import React, { useMemo } from 'react';
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import { Navbar } from './components';
import { blue, grey } from '@material-ui/core/colors';
import { useSelector } from 'react-redux';
import { RootState } from './redux/rootReducer';
import { Routes } from './Routes';

const App: React.FC = () => {
  const darkModeSelector = (state: RootState) => state.theme.isDarkMode;
  const isDarkMode = useSelector(darkModeSelector);

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: isDarkMode ? 'dark' : 'light',
          primary: {
            main: grey[900],
          },
          secondary: {
            main: blue[500],
          },
        },
      }),
    [isDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
