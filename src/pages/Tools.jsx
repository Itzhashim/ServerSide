import { Grid, Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';

const tools = [
  { name: 'Node.js', desc: 'JavaScript runtime for building scalable server-side applications.', url: 'https://nodejs.org/' },
  { name: 'Express', desc: 'Minimalist web framework for Node.js.', url: 'https://expressjs.com/' },
  { name: 'Django', desc: 'High-level Python web framework for rapid development.', url: 'https://www.djangoproject.com/' },
  { name: 'Flask', desc: 'Lightweight Python web framework.', url: 'https://flask.palletsprojects.com/' },
  { name: 'Spring Boot', desc: 'Java-based framework for building production-ready applications.', url: 'https://spring.io/projects/spring-boot' },
  { name: 'Ruby on Rails', desc: 'Convention-over-configuration web framework for Ruby.', url: 'https://rubyonrails.org/' },
];

export default function Tools() {
  return (
    <Box width="100vw" ml={-1} pl={{ xs: 2, sm: 4, md: 8 }}>
      <Grid container spacing={3} sx={{ width: '100%', margin: 0 }}>
        {tools.map((tool) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={tool.name}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{tool.name}</Typography>
                <Typography color="text.secondary">{tool.desc}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={tool.url} target="_blank" rel="noopener">Official Site</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
} 