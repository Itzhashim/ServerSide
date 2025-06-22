import { List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const practices = [
  'Validate all user input',
  'Use environment variables for configuration',
  'Implement proper error handling',
  'Log important events and errors',
  'Keep dependencies up to date',
  'Use HTTPS in production',
  'Write tests for your code',
  'Limit data exposure in APIs',
];

export default function BestPractices() {
  return (
    <Box width="100vw" ml={-1}>
      <List sx={{ width: '100vw' }}>
        {practices.map((p) => (
          <ListItem key={p}>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText primary={p} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
} 