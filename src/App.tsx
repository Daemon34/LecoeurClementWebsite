import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HorizontalTimeline from './Components/HorizontalTimeline';
import Carousel from './Components/Carousel';
import { Divider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5a463d',
    },
    background: {
      default: '#f4f1ea',
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <p><strong>Clement Lecoeur</strong></p>
      <h1>C#/C++ Developer</h1>
      <p className="read-the-docs">With Cloud & DevOps Skills</p>
      <Divider/>
      <HorizontalTimeline />
      <Divider/>
      <Carousel />
    </ThemeProvider>
  )
}

export default App
