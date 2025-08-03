import React from 'react'
import HomePage from './pages/HomePage'
import MeetTheTeam from './pages/MeetTheTeam';
import SocialInitiaves from './pages/SocialInitiatives';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<HomePage/>}/>
        <Route path = "/meettheteam" element = {<MeetTheTeam/>}/>
        <Route path = "/socialinitiatives" element = {<SocialInitiaves/>}/>
      </Routes>
    </Router>
  )
}

export default App