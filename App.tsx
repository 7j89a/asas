import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Ingredients from './components/Ingredients';
import AIConsultant from './components/AIConsultant';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`font-sans text-right transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`} dir="rtl">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Features />
        <Ingredients />
      </main>
      <AIConsultant />
      <Footer />
    </div>
  );
}

export default App;