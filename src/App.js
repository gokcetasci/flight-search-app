import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
       
      </Routes>
    </Router>
  );
}

export default App;
