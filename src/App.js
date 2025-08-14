// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ScrollToTop from './ScrollToTop';
import PrivacyPolicy from './PrivacyPolicy';
import Terms from './Terms';
import TheBlackPrint from './TheBlackPrint';
import ContactUs from './ContactUs';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/theblackprint" element={<TheBlackPrint />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
 