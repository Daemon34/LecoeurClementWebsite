import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HorizontalTimeline from './Components/HorizontalTimeline';
import Carousel from './Components/Carousel';
import { Divider } from '@mui/material';
import SkillMatrix from './Components/SkillMatrix';

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
      <p className="read-the-docs">With Web, Cloud & DevOps Skills</p>
      <Divider/>
      <HorizontalTimeline />
      <Divider/>
      <Carousel />
      <Divider />
      <h1>Skills</h1>
      <SkillMatrix />
    </ThemeProvider>
  )
}

export default App
