import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FetchColor from './component/FetchColor';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fetchcolor" element={<FetchColor />} />
      </Routes>
    </Router>
  );
};

export default App;