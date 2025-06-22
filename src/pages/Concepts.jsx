import { Grid, Card, CardContent, Typography, CardActionArea, Grow, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const concepts = [
  { key: 'http-rest', title: 'HTTP & REST', desc: 'Understand the foundation of web communication and RESTful APIs.' },
  { key: 'authentication', title: 'Authentication', desc: 'Explore methods for verifying user identity and securing endpoints.' },
  { key: 'databases', title: 'Databases', desc: 'Learn about relational and NoSQL databases, and how to interact with them.' },
  { key: 'middleware', title: 'Middleware', desc: 'Discover how middleware functions process requests and responses.' },
  { key: 'api-design', title: 'API Design', desc: 'Best practices for designing robust, scalable APIs.' },
  { key: 'error-handling', title: 'Error Handling', desc: 'Strategies for managing and responding to errors gracefully.' },
  { key: 'testing', title: 'Testing', desc: 'Approaches for unit, integration, and end-to-end testing.' },
  { key: 'performance', title: 'Performance', desc: 'Techniques for optimizing server response times and throughput.' },
  { key: 'caching', title: 'Caching', desc: 'Improve performance and scalability by storing frequently accessed data.' },
  { key: 'security', title: 'Security', desc: 'Protect your server and data from threats and vulnerabilities.' },
  { key: 'scalability', title: 'Scalability', desc: 'Design systems that handle growth in users and data.' },
  { key: 'logging', title: 'Logging', desc: 'Track events and errors for monitoring and debugging.' },
];

export default function Concepts() {
  const navigate = useNavigate();
  return (
    <Box width="100vw" ml={-1} pl={{ xs: 2, sm: 4, md: 8 }}>
      <Grid container spacing={3} sx={{ width: '100%', margin: 0 }} alignItems="stretch">
        {concepts.map((c, i) => (
          <Grow in timeout={400 + i * 80} key={c.key}>
            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex' }}>
              <Card sx={{ width: '100%', height: 140, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <CardActionArea sx={{ height: '100%', width: '100%' }} onClick={() => navigate(`/concepts/${c.key}`)}>
                  <CardContent sx={{ flexGrow: 1, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', overflow: 'hidden' }}>
                    <Typography variant="h6" fontWeight="bold" noWrap sx={{ width: '100%' }}>{c.title}</Typography>
                    <Typography color="text.secondary" noWrap sx={{ width: '100%' }}>{c.desc}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grow>
        ))}
      </Grid>
    </Box>
  );
} 