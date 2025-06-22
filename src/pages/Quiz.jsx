import { useState } from 'react';
import { Box, Typography, RadioGroup, FormControlLabel, Radio, Button, Alert, Fade, Paper } from '@mui/material';

const questions = [
  {
    q: 'Which protocol is commonly used for REST APIs?',
    options: ['FTP', 'HTTP', 'SMTP', 'SSH'],
    answer: 'HTTP',
  },
  {
    q: 'What is middleware in server-side development?',
    options: [
      'A database system',
      'A function that processes requests/responses',
      'A frontend framework',
      'A type of API authentication',
    ],
    answer: 'A function that processes requests/responses',
  },
  {
    q: 'Which is a NoSQL database?',
    options: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite'],
    answer: 'MongoDB',
  },
  {
    q: 'What does JWT stand for?',
    options: [
      'Java Web Token',
      'JavaScript Web Token',
      'JSON Web Token',
      'JavaScript With Token',
    ],
    answer: 'JSON Web Token',
  },
  {
    q: 'What is the main purpose of load balancing?',
    options: [
      'Encrypting data',
      'Distributing traffic across servers',
      'Storing user sessions',
      'Testing APIs',
    ],
    answer: 'Distributing traffic across servers',
  },
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    if (selected === questions[step].answer) setScore(s => s + 1);
  };

  const handleNext = () => {
    setSubmitted(false);
    setSelected('');
    if (step < questions.length - 1) {
      setStep(s => s + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <Fade in timeout={500}>
        <Paper sx={{ maxWidth: 500, mx: 'auto', p: 4, textAlign: 'center' }}>
          <Typography variant="h4" mb={2}>Quiz Complete!</Typography>
          <Typography variant="h6" mb={2}>Your Score: {score} / {questions.length}</Typography>
          <Button variant="contained" onClick={() => { setStep(0); setScore(0); setShowResult(false); }}>Retake Quiz</Button>
        </Paper>
      </Fade>
    );
  }

  return (
    <Fade in timeout={500}>
      <Paper sx={{ maxWidth: 500, mx: 'auto', p: 4, textAlign: 'center' }}>
        <Typography variant="h6" mb={2}>Question {step + 1} of {questions.length}</Typography>
        <Typography variant="h5" mb={2}>{questions[step].q}</Typography>
        <RadioGroup value={selected} onChange={e => { setSelected(e.target.value); setSubmitted(false); }}>
          {questions[step].options.map(opt => (
            <FormControlLabel key={opt} value={opt} control={<Radio />} label={opt} />
          ))}
        </RadioGroup>
        {!submitted ? (
          <Button variant="contained" onClick={handleSubmit} disabled={!selected} sx={{ mt: 2 }}>
            Submit
          </Button>
        ) : (
          <>
            <Alert severity={selected === questions[step].answer ? 'success' : 'error'} sx={{ mt: 2 }}>
              {selected === questions[step].answer ? 'Correct!' : `Incorrect. The answer is ${questions[step].answer}.`}
            </Alert>
            <Button variant="outlined" onClick={handleNext} sx={{ mt: 2 }}>
              {step < questions.length - 1 ? 'Next Question' : 'See Results'}
            </Button>
          </>
        )}
      </Paper>
    </Fade>
  );
} 