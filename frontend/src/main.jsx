import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#C1C8C4',
    },
    secondary: {
      main: '#8860D0',
    },
  },
  typography: {
    fontFamily: 'sans-serif',
  },
  // You can customize more aspects of the theme here
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>  
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>
)
