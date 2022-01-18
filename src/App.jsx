import logo from './logo.svg';
//import './App.css';
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Login from './components/auth/Login'
import { ThemeProvider, createTheme } from '@mui/material/styles';

//const theme = unstable_createMuiStrictModeTheme();
const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: '#eeb111',
    },
    text: {
      primary: '#000000',
      secondary: '#005295',
      disabled: '#949ca1',
    },
    error: {
      main: '#bf4c73',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
     <Login></Login>
    </ThemeProvider>
  );
}

export default App;
