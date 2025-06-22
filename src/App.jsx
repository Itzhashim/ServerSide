import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, Fade } from '@mui/material';
import Home from './pages/Home';
import Concepts from './pages/Concepts';
import Quiz from './pages/Quiz';
import Tools from './pages/Tools';
import BestPractices from './pages/BestPractices';
import Glossary from './pages/Glossary';
import APIPlayground from './pages/APIPlayground';
import About from './pages/About';
import ConceptDetail from './pages/ConceptDetail';

function App() {
  const location = useLocation();
  return (
    <Box minHeight="100vh" sx={{ bgcolor: 'background.default' }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Server Side Engineering Fundamentals
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/concepts">Concepts</Button>
          <Button color="inherit" component={Link} to="/quiz">Quiz</Button>
          <Button color="inherit" component={Link} to="/tools">Tools</Button>
          <Button color="inherit" component={Link} to="/best-practices">Best Practices</Button>
          <Button color="inherit" component={Link} to="/glossary">Glossary</Button>
          <Button color="inherit" component={Link} to="/api-playground">API Playground</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth={false} disableGutters sx={{ minHeight: 'calc(100vh - 64px)', py: 4, px: 0 }}>
        <Fade in key={location.pathname} timeout={500}>
          <Box>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/concepts" element={<Concepts />} />
              <Route path="/concepts/:conceptId" element={<ConceptDetail />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/best-practices" element={<BestPractices />} />
              <Route path="/glossary" element={<Glossary />} />
              <Route path="/api-playground" element={<APIPlayground />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

export default App;
