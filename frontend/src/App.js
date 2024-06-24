import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contestant from './pages/Contestant';
import Event from './pages/Event';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contestants" element={<Contestant />} />
          <Route path="/events" element={<Event />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
