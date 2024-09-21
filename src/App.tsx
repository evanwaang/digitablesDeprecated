
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Blackjack from './features/blackjack/blackjack';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>

        {/* CHANGE LATER, redirecting all routes to blackjack app for now*/}
        <Route path="/" element={<Navigate to="/blackjack" replace />} />
        
        {/* Blackjack app route */}
        <Route path="/blackjack/*" element={<Blackjack />} />

      </Routes>
    </Router>
  )
}

export default App
