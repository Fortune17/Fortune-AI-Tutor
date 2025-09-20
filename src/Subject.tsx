import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { subjects } from './subjects';
import { Container, Typography, List, ListItem, ListItemButton, ListItemText, Breadcrumbs, Paper } from '@mui/material';

const Subject: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const subject = subjects.find((s) => s.id === subjectId);

  if (!subject) {
    return <Typography>Subject not found.</Typography>;
  }

  return (
    <Container>
        <Breadcrumbs aria-label="breadcrumb" sx={{ my: 2 }}>
            <Link to="/">
                Home
            </Link>
            <Typography color="text.primary">{subject.name}</Typography>
        </Breadcrumbs>
      <Typography variant="h4" component="h1" gutterBottom>
        {subject.name} Topics
      </Typography>
      <Paper>
        <List>
          {subject.topics.length > 0 ? subject.topics.map((topic) => (
            <ListItem key={topic.id} disablePadding>
              <ListItemButton component={Link} to={`/subject/${subjectId}/topic/${topic.id}/lesson`}>
                <ListItemText primary={topic.title} />
              </ListItemButton>
            </ListItem>
          )) : (
            <ListItem>
                <ListItemText primary="No topics available for this subject yet." />
            </ListItem>
          )}
        </List>
      </Paper>
    </Container>
  );
};

export default Subject;