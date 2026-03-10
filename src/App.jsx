import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import CandidacyPage from './views/CandidacyPage';
import AdminPage from './views/AdminPage';
import { LanguageProvider } from './context/LanguageContext';
import { PersonProvider } from './context/PersonContext';

/**
 * Main App Component
 * Directs the user to the landing page view with multi-language support.
 */
function App() {
  return (
    <PersonProvider>
      <LanguageProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/candidatura" element={<CandidacyPage />} />
              <Route path="/mando" element={<AdminPage />} />
            </Routes>
          </div>
        </Router>
      </LanguageProvider>
    </PersonProvider>
  );
}

export default App;
