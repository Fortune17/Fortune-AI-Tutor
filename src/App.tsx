import React from 'react';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, CssBaseline, Link } from '@mui/material';
import './App.css'

const App: React.FC = () => {
  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Link component={RouterLink} to="/" color="inherit" sx={{ textDecoration: 'none' }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Fortune AI Tutor
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ mt: 4, mb: 4 }}>
        <Outlet />
      </Container>
    </div>
  );
}

export default App
