import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Fade, Paper } from '@mui/material';

const details = {
  'http-rest': {
    title: 'HTTP & REST',
    content: 'HTTP (Hypertext Transfer Protocol) is the foundation of data communication for the web. REST (Representational State Transfer) is an architectural style for designing networked applications, relying on stateless, client-server communication and standard HTTP methods.'
  },
  'authentication': {
    title: 'Authentication',
    content: 'Authentication is the process of verifying the identity of a user or system. Common methods include passwords, tokens, OAuth, and multi-factor authentication.'
  },
  'databases': {
    title: 'Databases',
    content: 'Databases store and organize data. Relational databases use tables and SQL, while NoSQL databases offer flexible schemas and scalability.'
  },
  'middleware': {
    title: 'Middleware',
    content: 'Middleware functions process requests and responses in a server application, enabling features like logging, authentication, and error handling.'
  },
  'api-design': {
    title: 'API Design',
    content: 'Good API design focuses on consistency, simplicity, and scalability. Use clear endpoints, proper HTTP methods, and meaningful responses.'
  },
  'error-handling': {
    title: 'Error Handling',
    content: 'Error handling ensures your application responds gracefully to unexpected situations, providing useful feedback and maintaining stability.'
  },
  'testing': {
    title: 'Testing',
    content: 'Testing verifies that your code works as intended. Unit, integration, and end-to-end tests help catch bugs and ensure reliability.'
  },
  'performance': {
    title: 'Performance',
    content: 'Performance optimization involves reducing response times and resource usage. Techniques include caching, load balancing, and query optimization.'
  },
  'caching': {
    title: 'Caching',
    content: 'Caching stores frequently accessed data in memory for faster retrieval, reducing load on databases and improving response times.'
  },
  'security': {
    title: 'Security',
    content: 'Security protects your server and data from threats. Use encryption, input validation, and regular updates to mitigate risks.'
  },
  'scalability': {
    title: 'Scalability',
    content: 'Scalability is the ability of a system to handle increased load by adding resources. Design for horizontal scaling and statelessness.'
  },
  'logging': {
    title: 'Logging',
    content: 'Logging records events and errors, helping you monitor, debug, and audit your application.'
  },
};

export default function ConceptDetail() {
  const { conceptId } = useParams();
  const navigate = useNavigate();
  const detail = details[conceptId];

  if (!detail) return null;

  return (
    <Fade in timeout={600}>
      <Paper sx={{ mt: 4, p: 4, maxWidth: 700, mx: 'auto' }} elevation={4}>
        <Typography variant="h4" gutterBottom>{detail.title}</Typography>
        <Typography variant="body1" mb={3}>{detail.content}</Typography>
        <Button variant="outlined" onClick={() => navigate(-1)}>Back to Concepts</Button>
      </Paper>
    </Fade>
  );
} 