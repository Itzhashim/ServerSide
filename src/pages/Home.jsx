import { Box, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      width="100%"
      sx={{ px: { xs: 2, sm: 4, md: 8 } }}
    >
      <Typography
        variant="h2"
        fontWeight="bold"
        gutterBottom
        sx={{
          fontSize: { xs: '2.2rem', sm: '3rem', md: '4rem', lg: '4.5vw' },
          maxWidth: { xs: '100%', md: '80vw' },
          textAlign: 'center',
        }}
      >
        Server Side Engineering Fundamentals
      </Typography>
      <Typography
        variant="h5"
        color="text.secondary"
        mb={4}
        sx={{
          fontSize: { xs: '1.1rem', sm: '1.5rem', md: '2rem' },
          maxWidth: { xs: '100%', md: '60vw' },
          textAlign: 'center',
        }}
      >
        Master the core concepts, tools, and best practices of modern server-side development.
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center" mb={4}>
        <Button variant="contained" size="large" component={Link} to="/concepts">Explore Concepts</Button>
        <Button variant="outlined" size="large" component={Link} to="/quiz">Take the Quiz</Button>
      </Stack>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          fontSize: { xs: '1rem', sm: '1.2rem', md: '1.3rem' },
          maxWidth: { xs: '100%', md: '50vw' },
          textAlign: 'center',
        }}
      >
        Dive into interactive guides, hands-on tools, and a comprehensive glossary to boost your backend engineering skills.
      </Typography>
    </Box>
  );
} 