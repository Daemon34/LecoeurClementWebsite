import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HorizontalTimeline from './Components/HorizontalTimeline';
import Carousel from './Components/Carousel';
import { Divider, Typography } from '@mui/material';
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
      <h1>Full-Stack Engineer</h1>
      <p className="read-the-docs">With Cloud & DevOps Skills</p>
      <Divider/>
      <HorizontalTimeline />
      <Divider/>
      <h1>Projects</h1>
      <Typography><i>You can click on each tile to see details.</i></Typography>
      <Carousel />
      <Divider />
      <h1>Skills</h1>
      <SkillMatrix />
    </ThemeProvider>
  )
}

export default App
