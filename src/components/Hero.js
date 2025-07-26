import React from 'react';

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center justify-center text-center relative bg-cover bg-center" style={{ backgroundImage: 'url(/Mike-Gumo/mayohero.jpg)' }}>
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-blue-500/20 to-orange-500/20"></div>
    <div className="relative z-10 p-8 md:p-12 bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 animate-fade-in-down max-w-3xl mx-auto">
      <h2 className="text-5xl md:text-7xl font-sans font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
        Michael 'Mayo' Gumo
      </h2>
      <p className="text-xl md:text-2xl text-gray-50 dark:text-gray-100 mb-8 leading-relaxed drop-shadow-lg">
        Tech for Tomorrow: Westlands MP 2027
      </p>
      <div className="flex justify-center space-x-6">
        <button
          className="px-8 py-3 rounded-full bg-blue-500 text-white font-sans font-semibold hover:bg-blue-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          Support the Campaign
        </button>
        <button
          className="px-8 py-3 rounded-full bg-orange-500 text-white font-sans font-semibold hover:bg-orange-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          Join the Movement
        </button>
      </div>
    </div>
  </section>
);

export default Hero;
