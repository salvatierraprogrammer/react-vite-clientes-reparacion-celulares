import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/styled-engine-sc';
import { GlobalStyles } from '@mui/system';

const theme = createTheme({
  palette: {
    mode: 'dark', // 🌑 fondo oscuro
    primary: { main: '#00f5cc', contrastText: '#000' }, // 💡 cian neón
    background: {
      default: '#000000',
      paper: '#121212'
    },
    text: {
      primary: '#00f5cc',
      secondary: '#b2dfdb'
    }
  },
  typography: {
    fontFamily: '"Orbitron", "Inter", "Roboto", sans-serif', // fuente futurista opcional
    h6: {
      fontWeight: 700
    },
    button: {
      textTransform: 'none' // evita que los botones sean all caps
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#001f1f',
          border: '1px solid #00f5cc',
        }
      }
    }
  }
});

const globalStyles = (
  <GlobalStyles styles={{
    '*': { boxSizing: 'border-box' },
    body: {
      margin: 0,
      padding: 0,
      backgroundColor: '#000',
      color: '#00f5cc',
    },
    a: { textDecoration: 'none', color: 'inherit' },
  }} />
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <App />
    </ThemeProvider>
  </StyledEngineProvider>
);
