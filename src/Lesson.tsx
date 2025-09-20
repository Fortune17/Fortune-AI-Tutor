import React from 'react';
import { useParams } from 'react-router-dom';
import { subjects } from './subjects';
import { Typography, Paper } from '@mui/material';

const Lesson: React.FC = () => {
  const { subjectId, topicId } = useParams<{ subjectId: string; topicId: string }>();
  const topic = subjects
    .find((s) => s.id === subjectId)
    ?.topics.find((t) => t.id === topicId);

  if (!topic) {
    return <Typography>Lesson not found.</Typography>;
  }

  return (
    <Paper elevation={0} sx={{ p: 3 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        {topic.lesson.title}
      </Typography>
      <Typography>{topic.lesson.content}</Typography>
    </Paper>
  );
};

export default Lesson;