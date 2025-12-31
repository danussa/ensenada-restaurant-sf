import React from 'react';
import { BUSINESS_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-32">
      {/* Soft Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white"></div>
      
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight text-gray-900">
            Authentic <span className="text-blue-900">Honduran</span> & <span className="text-blue-900">Nicaraguan</span> Flavors.
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 mb-10 leading-relaxed font-light">
            Traditional Central American dishes made with love in the heart of San Francisco's Mission District.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href={BUSINESS_INFO.cloverUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-lg rounded-2xl transition-all transform hover:-translate-y-1 shadow-xl shadow-blue-900/20 text-center"
            >
              Order for Pickup
            </a>
            <a 
              href={BUSINESS_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold text-lg rounded-2xl transition-all border border-gray-200 text-center"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};