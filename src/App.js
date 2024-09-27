import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import DiagnosisPage from './Pages/DiagnosisPage';
import PersonalColorInfo from './Pages/PersonalColorInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/diagnosis" element={<DiagnosisPage />} />
          <Route path="/personal-color-info" element={<PersonalColorInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
