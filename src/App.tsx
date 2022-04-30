import React from 'react';
import './App.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme, ThemeOptions } from '@mui/material/styles';
import { AppBar } from '@mui/material';


function App() {
  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)');

  const themeOpts: ThemeOptions =
  prefersLightMode
  ? {
    palette: {
      primary: {
        main: '#800080',
      },
      secondary: {
        main: '#068029',
      },
      success: {
        main: '#068029',
      },
      error: {
        main: '#800000',
      },
      warning: {
        main: '#ccca14',
      },
      info: {
        main: '#2196f3',
      },
    },
  }
  : {
    palette: {
      primary: {
        main: '#14cc48',
      },
      secondary: {
        main: '#068029',
      },
      background: {
        default: '#710078',
        paper: '#55006b',
      },
      text: {
        primary: '#ffffff',
        secondary: '#ffffff',
        disabled: 'rgba(255,255,255,0.6)',
        //hint: '#ffffff',
      },
      error: {
        main: '#800606',
        contrastText: '#800606',
      },
      success: {
        main: '#068029',
      },
    },
    components :
    {
      MuiAppBar: {
        styleOverrides: {
          colorInherit: {
            backgroundColor: '#55006b',
            color: '#ffffff',
          },
        },
        defaultProps: {
          color: 'inherit'
        }
      }
    },
  };

  const theme = createTheme(themeOpts);

  return (
    <ThemeProvider theme={theme}>
      <AppBar>This is my app bar</AppBar>
    </ThemeProvider>
  );
}

export default App;
