import React from 'react';

const Vision = () => (
  <section id="vision" className="py-16 bg-white dark:bg-gray-800 z-10">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-gray-800 dark:text-white mb-6 tracking-tight">
        Tech for Tomorrow: 2027 Vision
      </h2>
      <div className="max-w-3xl mx-auto bg-white/90 dark:bg-gray-800/90 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 opacity-100 z-10">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Mayo Gumo is running for Westlands MP to bring his Smart Nairobi 2030 vision to Parliament. His plans include
          AI-driven traffic systems, a Youth Innovation Fund for tech startups, and free Wi-Fi in underserved areas.
          Aligned with ODM’s values, Mayo will champion devolution, equity, and a tech-driven Kenya.
        </p>
        <div className="relative">
          <img
            src="/Mike-Gumo/smart-nairobi-vision.jpg"
            alt="Smart Nairobi Vision"
            className="mx-auto rounded-lg shadow-lg hover-scale w-full max-w-[800px] border-2 border-orange-500"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-navy-800/10 to-gray-900/20 rounded-lg"></div>
        </div>
      </div>
    </div>
  </section>
);

export default Vision;
