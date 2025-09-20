import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { subjects } from './subjects';
import { Typography, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Paper, Box } from '@mui/material';

const Quiz: React.FC = () => {
  const { subjectId, topicId } = useParams<{ subjectId: string; topicId: string }>();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showScore, setShowScore] = useState(false);

  const topic = subjects
    .find((s) => s.id === subjectId)
    ?.topics.find((t) => t.id === topicId);

  if (!topic) {
    return <Typography>Quiz not found.</Typography>;
  }

  const { questions } = topic.quiz;

  const handleAnswerOptionClick = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption('');
    } else {
      setShowScore(true);
    }
  };

  return (
    <Paper elevation={0} sx={{ p: 3 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        {topic.quiz.title}
      </Typography>
      {showScore ? (
        <Box>
          <Typography variant="h6">You scored {score} out of {questions.length}</Typography>
        </Box>
      ) : (
        <>
          <Box mb={2}>
            <Typography variant="h6">Question {currentQuestion + 1}/{questions.length}</Typography>
            <Typography>{questions[currentQuestion].question}</Typography>
          </Box>
          <FormControl component="fieldset">
            <FormLabel component="legend">Options</FormLabel>
            <RadioGroup
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              {questions[currentQuestion].options.map((option, index) => (
                <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
              ))}
            </RadioGroup>
          </FormControl>
          <Box mt={2}>
            <Button variant="contained" onClick={handleAnswerOptionClick} disabled={!selectedOption}>
              Next Question
            </Button>
          </Box>
        </>
      )}
    </Paper>
  );
};

export default Quiz;
