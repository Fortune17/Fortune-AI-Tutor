import React from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { subjects } from './subjects';
import { Container, Typography, Button, Box, Breadcrumbs } from '@mui/material';

const Topic: React.FC = () => {
  const { subjectId, topicId } = useParams<{ subjectId: string; topicId: string }>();
  const location = useLocation();
  const subject = subjects.find((s) => s.id === subjectId);
  const topic = subject?.topics.find((t) => t.id === topicId);

  if (!topic || !subject) {
    return <Typography>Topic not found.</Typography>;
  }

  const currentTab = location.pathname.split('/').pop();

  return (
    <Container>
        <Breadcrumbs aria-label="breadcrumb" sx={{ my: 2 }}>
            <Link to="/">Home</Link>
            <Link to={`/subject/${subjectId}`}>{subject.name}</Link>
            <Typography color="text.primary">{topic.title}</Typography>
        </Breadcrumbs>
      <Typography variant="h4" component="h1" gutterBottom>
        {topic.title}
      </Typography>
      <Box sx={{ my: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Button component={Link} to="lesson" variant={currentTab === 'lesson' ? 'contained' : 'text'} sx={{ mr: 1 }}>
          Lesson
        </Button>
        <Button component={Link} to="quiz" variant={currentTab === 'quiz' ? 'contained' : 'text'} sx={{ mr: 1 }}>
          Quiz
        </Button>
        <Button component={Link} to="chat" variant={currentTab === 'chat' ? 'contained' : 'text'}>
          AI Chat
        </Button>
      </Box>
      <Box sx={{ mt: 4, p: 2, border: '1px solid #ddd', borderRadius: '4px', minHeight: '40vh' }}>
        <Outlet />
      </Box>
    </Container>
  );
};

export default Topic;