import { useState } from 'react';
import { Box, TextField, List, ListItem, ListItemText, Typography, Fade } from '@mui/material';

const terms = [
  { term: 'API', def: 'Application Programming Interface, a set of rules for interacting with software.' },
  { term: 'Middleware', def: 'Software that connects different applications or services.' },
  { term: 'ORM', def: 'Object-Relational Mapping, a technique for converting data between incompatible systems.' },
  { term: 'JWT', def: 'JSON Web Token, a compact way to securely transmit information between parties.' },
  { term: 'Load Balancer', def: 'A device or software that distributes network traffic across servers.' },
  { term: 'Session', def: 'A way to persist user data across multiple requests.' },
  { term: 'WebSocket', def: 'A protocol for full-duplex communication channels over a single TCP connection.' },
  { term: 'Reverse Proxy', def: 'A server that sits in front of web servers and forwards client requests.' },
  { term: 'Rate Limiting', def: 'A technique to control the amount of incoming or outgoing traffic.' },
  { term: 'Microservices', def: 'An architectural style that structures an application as a collection of small services.' },
  { term: 'Containerization', def: 'Packaging software code with all its dependencies to run uniformly and consistently.' },
  { term: 'CI/CD', def: 'Continuous Integration and Continuous Deployment, practices for automating software delivery.' },
  { term: 'SSL/TLS', def: 'Protocols for encrypting information sent over the internet.' },
  { term: 'DNS', def: 'Domain Name System, translates domain names to IP addresses.' },
  { term: 'Cache Invalidation', def: 'The process of removing outdated data from a cache.' },
];

export default function Glossary() {
  const [query, setQuery] = useState('');
  const filtered = terms.filter(t => t.term.toLowerCase().includes(query.toLowerCase()));
  return (
    <Box width="100vw" ml={-1} pl={{ xs: 2, sm: 4, md: 8 }}>
      <TextField label="Search terms" fullWidth margin="normal" value={query} onChange={e => setQuery(e.target.value)} sx={{ width: '100%' }} />
      <Fade in timeout={500}>
        <List sx={{ width: '100%' }}>
          {filtered.length ? filtered.map(t => (
            <ListItem key={t.term}>
              <ListItemText primary={t.term} secondary={t.def} />
            </ListItem>
          )) : <Typography color="text.secondary" align="center">No results</Typography>}
        </List>
      </Fade>
    </Box>
  );
} 