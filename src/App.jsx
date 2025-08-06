import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import MeetTheTeam from './pages/MeetTheTeam';
import SocialInitiaves from './pages/SocialInitiatives';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailsPage />} />
        <Route path = "/meettheteam" element = {<MeetTheTeam/>}/>
        <Route path = "/socialinitiatives" element = {<SocialInitiaves/>}/>
      </Routes>
    </Router>
  )
}

export default App
