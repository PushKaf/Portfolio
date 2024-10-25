import React, { useEffect } from 'react';
import { Home } from './pages/Home';
import { Secret } from './pages/Secret';
import { Accessibility } from 'accessibility';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flowers" element={<Secret />} />
      </Routes>
    </Router>
  )
}

export default App