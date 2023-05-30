import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Encrypt from './components/Encrypt';
import Decrypt from './components/Decrypt';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/decrypt/:id" element={<Decrypt />} />
        <Route path="/" element={<Encrypt />} />
        <Route path="*" element={<h1>404: Seite nicht gefunden</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
