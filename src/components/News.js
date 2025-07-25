import React from 'react';

const News = () => (
  <section id="news" className="py-16 bg-white dark:bg-gray-800 z-10">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-gray-800 dark:text-white mb-6 tracking-tight">
        Campaign Updates
      </h2>
      <div className="max-w-4xl mx-auto opacity-100 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <img
              src="/news1.jpg"
              alt="Youth Tech Hub"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-sans font-bold text-gray-800 dark:text-white mb-2">
              Mayo Launches Youth Tech Hub
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              On July 10, 2025, Mayo Gumo opened a new tech hub in Westlands, empowering 500 youth with coding skills.
            </p>
            <a
              href="#read-more-youth-tech-hub"
              className="inline-block mt-4 text-blue-500 hover:text-orange-500 font-sans font-medium"
            >
              Read More
            </a>
          </div>
          <div className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <img
              src="/news2.jpg"
              alt="AI Traffic System"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-sans font-bold text-gray-800 dark:text-white mb-2">
              AI Traffic System Proposal
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              Mayo’s Smart Nairobi 2030 plan was featured in local media, highlighting AI-driven traffic solutions.
            </p>
            <a
              href="#read-more-ai-traffic"
              className="inline-block mt-4 text-blue-500 hover:text-orange-500 font-sans font-medium"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default News;
