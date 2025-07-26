import React, { useState } from 'react';

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg border-b border-white/20 animate-fade-in-down">
      <div className="container mx-auto px-4 py-2 sm:px-6 sm:py-3 flex justify-between items-center">
        <div>
          <a href="#home">
            <svg
              className="h-8 w-24 sm:h-12 sm:w-36 hover:opacity-80 transition-opacity duration-300 logo-static"
              viewBox="0 0 180 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="0"
                y="30"
                fontFamily="Montserrat, -apple-system, BlinkMacSystemFont, sans-serif"
                fontSize="24"
                fontWeight="800"
                fill="#3b82f6"
                className="dark:fill-blue-400"
                letterSpacing="1.5"
              >
                MAYO
              </text>
              <text
                x="0"
                y="50"
                fontFamily="Montserrat, -apple-system, BlinkMacSystemFont, sans-serif"
                fontSize="12"
                fontWeight="600"
                fill="#f97316"
                className="dark:fill-orange-400"
                letterSpacing="3"
              >
                GUMO '27
              </text>
            </svg>
          </a>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a
            href="#home"
            className="text-blue-500 dark:text-blue-400 font-sans font-semibold hover:text-orange-500 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-blue-500 dark:text-blue-400 font-sans font-semibold hover:text-orange-500 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#achievements"
            className="text-blue-500 dark:text-blue-400 font-sans font-semibold hover:text-orange-500 transition-colors duration-300"
          >
            Achievements
          </a>
          <a
            href="#vision"
            className="text-blue-500 dark:text-blue-400 font-sans font-semibold hover:text-orange-500 transition-colors duration-300"
          >
            Vision
          </a>
          <a
            href="#donate"
            className="text-blue-500 dark:text-blue-400 font-sans font-semibold hover:text-orange-500 transition-colors duration-300"
          >
            Donate
          </a>
          <a
            href="#connect"
            className="text-blue-500 dark:text-blue-400 font-sans font-semibold hover:text-orange-500 transition-colors duration-300"
          >
            Connect
          </a>
        </nav>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <a
            href="#donate"
            className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 text-white font-sans font-semibold text-sm sm:text-base hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Donate Now
          </a>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-1.5 sm:p-2 rounded-full hover:scale-110 transition-transform duration-300"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {!isDarkMode ? (
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 icon-moon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 icon-sun" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800/40 backdrop-blur-lg p-3">
          <a
            href="#home"
            className="block py-1.5 text-blue-500 dark:text-blue-400 font-sans font-semibold text-sm hover:text-orange-500 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-1.5 text-blue-500 dark:text-blue-400 font-sans font-semibold text-sm hover:text-orange-500 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#achievements"
            className="block py-1.5 text-blue-500 dark:text-blue-400 font-sans font-semibold text-sm hover:text-orange-500 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Achievements
          </a>
          <a
            href="#vision"
            className="block py-1.5 text-blue-500 dark:text-blue-400 font-sans font-semibold text-sm hover:text-orange-500 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Vision
          </a>
          <a
            href="#donate"
            className="block py-1.5 text-blue-500 dark:text-blue-400 font-sans font-semibold text-sm hover:text-orange-500 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Donate
          </a>
          <a
            href="#connect"
            className="block py-1.5 text-blue-500 dark:text-blue-400 font-sans font-semibold text-sm hover:text-orange-500 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Connect
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
