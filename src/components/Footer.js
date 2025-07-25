import React from 'react';

const Footer = () => (
  <footer className="py-8 bg-white dark:bg-gray-800">
    <div className="container mx-auto px-6 text-center">
      <div className="max-w-3xl mx-auto bg-white/90 dark:bg-gray-800/90 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 opacity-100 z-10">
        <p className="text-lg font-sans text-gray-700 dark:text-gray-300 mb-4">
          Join the movement for a tech-driven Westlands!
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://x.com/MayoGumo"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-orange-500 hover-scale"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://facebook.com/MayoGumo"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-orange-500 hover-scale"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
        </div>
        <p className="mt-4 text-gray-700 dark:text-gray-300 font-sans">
          © 2025 Mayo Gumo Campaign. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
