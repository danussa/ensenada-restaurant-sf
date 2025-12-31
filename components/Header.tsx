import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../constants';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-black tracking-tighter text-blue-900 uppercase">
            Ensenada
          </span>
          <span className="text-[10px] md:text-xs font-medium tracking-widest text-gray-500 uppercase leading-none">
            Restaurant
          </span>
        </div>
        
        <nav className="hidden md:flex space-x-6 text-sm font-semibold uppercase tracking-wider text-gray-700">
          <a href="#hours" className="hover:text-blue-900 transition-colors">Hours</a>
          <a href="#location" className="hover:text-blue-900 transition-colors">Location</a>
          <a href="#faq" className="hover:text-blue-900 transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <a 
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 border-2 border-blue-900 text-blue-900 text-xs font-bold uppercase rounded-full hover:bg-blue-900 hover:text-white transition-all"
          >
            Call
          </a>
          <a 
            href={BUSINESS_INFO.cloverUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 md:px-6 py-2 bg-blue-900 text-white text-xs font-bold uppercase rounded-full hover:bg-blue-800 shadow-lg shadow-blue-900/10 transition-all"
          >
            Order Online
          </a>
        </div>
      </div>
    </header>
  );
};