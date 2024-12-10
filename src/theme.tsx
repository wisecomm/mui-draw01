import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    drawerWidth: number;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    drawerWidth?: number;
  }
}


// A custom theme for this app
const theme = createTheme({
  drawerWidth: 240, // drawerWidth 추가
  cssVariables: true,
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  
});

export default theme;
