import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import FlightList from './components/FlightList';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route
          path="/flight-results"
          element={<FlightList />}
        />
      </Routes>
    </Router>
  );
}

export default App;
