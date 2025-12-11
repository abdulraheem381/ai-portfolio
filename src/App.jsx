import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Intro from './components/Intro';
import Home from './pages/Home';

import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [loading, setLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
      setShowIntro(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <ThemeProvider>
      <Router>
        {loading ? (
          <Preloader />
        ) : showIntro ? (
          <Intro onComplete={handleIntroComplete} />
        ) : (
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
            <Footer />
          </div>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
