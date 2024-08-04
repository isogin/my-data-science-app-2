import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Visualization from './pages/Visualization';
import Statistics from './pages/Statistics';
import Preprocessing from './pages/Preprocessing';
import Analysis from './pages/Analysis';
import Simulation from './pages/Simulation';
import Quiz from './pages/Quiz';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visualization" element={<Visualization />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/preprocessing" element={<Preprocessing />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
};

export default App;
