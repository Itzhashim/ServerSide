import { Box, Typography, Link as MuiLink } from '@mui/material';

export default function About() {
  return (
    <Box 
      width="100%" 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center"
      sx={{ px: { xs: 2, sm: 4, md: 8 }, py: 4 }}
    >
      <Box maxWidth="lg" textAlign="center">
        <Typography variant="h4" gutterBottom>About This Project</Typography>
        <Typography variant="body1" mb={2}>
          This site is a unique, interactive guide to server-side engineering fundamentals. It aims to help developers master backend concepts, tools, and best practices through hands-on features and a clean, modern UI.
        </Typography>
        <MuiLink href="https://github.com/Itzhashim/ServerSide" target="_blank" rel="noopener">
          View Source on GitHub
        </MuiLink>
      </Box>
    </Box>
  );
} 