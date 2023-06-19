
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Work from './pages/Work.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element = {<About />} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/work" element={<Work/>} />
      </Routes>
    </Router>
  );
}

export default App;
