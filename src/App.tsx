import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Vision from './components/Vision';
import Support from './components/Support';
import News from './components/News';
import Connect from './components/Connect';
import Footer from './components/Footer';
import './index.css';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target); // Fix: Use entry.target
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-800' : 'bg-white'} text-gray-900 dark:text-white`}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Hero />
      <About />
      <Achievements />
      <Vision />
      <Support />
      <News />
      <Connect />
      <Footer />
    </div>
  );
};

export default App;
