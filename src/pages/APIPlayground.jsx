import { useState } from 'react';
import { Box, Typography, TextField, MenuItem, Button, Paper } from '@mui/material';

const methods = ['GET', 'POST', 'PUT', 'DELETE'];

export default function APIPlayground() {
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('');
  const [response, setResponse] = useState(null);

  const handleSend = () => {
    setResponse({
      status: 200,
      data: `Mock response for ${method} ${url}`,
    });
  };

  return (
    <Box 
      width="100%" 
      sx={{ 
        px: { xs: 2, sm: 4, md: 8 }, 
        boxSizing: 'border-box' 
      }}
    >
      <Typography variant="h5" mb={2}>API Playground</Typography>
      <Typography variant="body1" color="text.secondary" mb={2}>
        Enter an API endpoint and select a method to simulate a request. This playground does not send real network requests, but will show a mock response for demonstration purposes.
      </Typography>
      <Box display="flex" gap={2} mb={2} width="100%">
        <TextField select label="Method" value={method} onChange={e => setMethod(e.target.value)} sx={{ minWidth: 100 }}>
          {methods.map((m) => (
            <MenuItem key={m} value={m}>{m}</MenuItem>
          ))}
        </TextField>
        <TextField label="URL" value={url} onChange={e => setUrl(e.target.value)} fullWidth />
        <Button variant="contained" onClick={handleSend}>Send</Button>
      </Box>
      {response && (
        <Paper sx={{ p: 2, mt: 2, width: '100%' }}>
          <Typography variant="subtitle1">Status: {response.status}</Typography>
          <Typography variant="body2">{response.data}</Typography>
        </Paper>
      )}
    </Box>
  );
} 