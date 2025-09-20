import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import Home from './Home.tsx';
import Subject from './Subject.tsx';
import Topic from './Topic.tsx';
import Lesson from './Lesson.tsx';
import Quiz from './Quiz.tsx';
import Chat from './Chat.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "subject/:subjectId", element: <Subject /> },
      {
        path: "subject/:subjectId/topic/:topicId",
        element: <Topic />,
        children: [
          { index: true, element: <Navigate to="lesson" replace /> },
          { path: "lesson", element: <Lesson /> },
          { path: "quiz", element: <Quiz /> },
          { path: "chat", element: <Chat /> },
        ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
