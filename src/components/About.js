import React from 'react';

const About = () => (
  <section id="about" className="py-20 bg-white dark:bg-gray-800 z-10">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-gray-800 dark:text-white mb-12 tracking-tight flex items-center justify-center group">
        <svg
          className="w-8 h-8 mr-3 text-orange-500 group-hover:text-blue-500 transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9h2M19 9h2M5 15h2M19 15h2M3 12h2m18 0h-2m-2-6l-4 4m4-4l4 4m-8 8l4-4m-4 4l-4-4"
          />
        </svg>
        Meet Mayo Gumo
      </h2>
      <div className="max-w-4xl mx-auto bg-white/90 dark:bg-gray-800/90 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 opacity-100 z-10">
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Michael “Mayo” Gumo, Nairobi’s CEC for Innovation and Digital Economy, is running for Westlands MP in 2027. A
          <span className="inline-flex items-center ml-1 font-semibold text-blue-500 hover:text-orange-500 transition-colors duration-300">
            <svg
              className="w-5 h-5 mr-1 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            dynamic ODM leader
          </span>
          , Mayo blends accounting expertise with a passion for technology, earning the title
          <span className="inline-flex items-center ml-1 font-semibold text-blue-500 hover:text-orange-500 transition-colors duration-300">
            <svg
              className="w-5 h-5 mr-1 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            “Tech Trailblazer.”
          </span>
          From mobilizing youth
          <span className="inline-flex items-center ml-1 font-semibold text-blue-500 hover:text-orange-500 transition-colors duration-300">
            <svg
              className="w-5 h-5 mr-1 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
            </svg>
          </span>
          to pioneering smart city initiatives, he’s transforming Nairobi and ready to take his vision to Parliament.
        </p>
      </div>
      <div className="mt-12 flex justify-center opacity-100 z-10">
        <div className="relative group">
          <img
            src="/Mike-Gumo/mayoface.jpg"
            alt="Michael Gumo"
            className="rounded-full w-56 h-56 object-cover border-4 border-orange-500 group-hover:border-blue-500 shadow-md transition-colors duration-300"
          />
          <svg
            className="absolute w-10 h-10 text-orange-500 group-hover:text-blue-500 -top-3 -right-3 transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
);

export default About;
