import React from 'react';
import { CurrencyDollarIcon, UserGroupIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const Achievements = () => (
  <section id="achievements" className="py-20 relative bg-gray-900 z-10">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
      style={{
        backgroundImage: 'url(/background.jpg)',
        opacity: 0.1,
      }}
    ></div>
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-navy-800/40 to-gray-900/50 z-0"></div>
    <div className="container mx-auto px-6 text-center relative z-10">
      <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-white mb-12 tracking-tight">
        Proven Leadership
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 opacity-100 z-10">
        <div className="relative bg-white/10 dark:bg-gray-800/10 p-6 rounded-lg shadow-md border border-white/20 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
          <h3 className="text-2xl font-sans font-bold text-white mb-3 flex items-center">
            <CurrencyDollarIcon className="w-6 h-6 mr-2 !text-blue-400 group-hover:!text-orange-500 transition-colors duration-300" />
            Digital Revenue Revolution
          </h3>
          <p className="text-gray-200 dark:text-gray-300 text-base leading-relaxed">
            Saved KSh 100M+ through Nairobi’s digital revenue platform, ensuring transparency.
          </p>
        </div>
        <div className="relative bg-white/10 dark:bg-gray-800/10 p-6 rounded-lg shadow-md border border-white/20 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
          <h3 className="text-2xl font-sans font-bold text-white mb-3 flex items-center">
            <UserGroupIcon className="w-6 h-6 mr-2 !text-blue-400 group-hover:!text-orange-500 transition-colors duration-300" />
            Youth Tech Hubs
          </h3>
          <p className="text-gray-200 dark:text-gray-300 text-base leading-relaxed">
            Empowered 5,000+ youth with digital skills via tech hubs across Nairobi.
          </p>
        </div>
        <div className="relative bg-white/10 dark:bg-gray-800/10 p-6 rounded-lg shadow-md border border-white/20 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
          <h3 className="text-2xl font-sans font-bold text-white mb-3 flex items-center">
            <GlobeAltIcon className="w-6 h-6 mr-2 !text-blue-400 group-hover:!text-orange-500 transition-colors duration-300" />
            Smart City Pioneer
          </h3>
          <p className="text-gray-200 dark:text-gray-300 text-base leading-relaxed">
            Introduced AI-driven urban planning, positioning Nairobi as a regional tech hub.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Achievements;
