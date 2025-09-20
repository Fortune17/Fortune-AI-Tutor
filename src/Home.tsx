import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { subjects } from './subjects';
import { Grid, Card, CardContent, Typography, Container, Button, Box } from '@mui/material';

const Home: React.FC = () => {
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);

  const filteredSubjects = selectedGrade ? subjects.filter(s => s.grade === selectedGrade) : [];

  if (!selectedGrade) {
    return (
      <Container>
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mt: 4, mb: 4 }}>
          Welcome to Fortune AI Tutor!
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Select your grade to start learning.
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, mb: 4 }}>
          {[10, 11, 12].map(grade => (
            <Button key={grade} variant="contained" onClick={() => setSelectedGrade(grade)}>
              Grade {grade}
            </Button>
          ))}
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mt: 4, mb: 4 }}>
        Welcome to Fortune AI Tutor!
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        Select a subject to start learning.
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 2 }}>
        Selected Grade: {selectedGrade} | <Button onClick={() => setSelectedGrade(null)}>Change Grade</Button>
      </Typography>
      <Grid container spacing={4}>
        {filteredSubjects.map((subject) => (
          <Grid key={subject.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card component={Link} to={`/subject/${subject.id}`} sx={{ textDecoration: 'none', height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {subject.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;