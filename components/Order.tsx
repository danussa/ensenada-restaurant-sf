import React from 'react';
import { BUSINESS_INFO } from '../constants';

export const Order: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto p-12 md:p-20 bg-blue-900 text-white rounded-[3rem] shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Ready for some flavor?</h2>
          <p className="text-xl text-blue-100 mb-12">Skip the wait and order ahead. Fresh ingredients, authentic recipes, ready when you are.</p>
          
          <a 
            href={BUSINESS_INFO.cloverUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-12 py-6 bg-white text-blue-900 hover:bg-gray-100 font-black text-2xl rounded-full transition-all transform hover:scale-105 shadow-2xl shadow-black/20"
          >
            Order on Clover
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          
          <p className="mt-8 text-sm text-blue-200 font-medium uppercase tracking-widest">Available for Pickup & Takeout</p>
        </div>
      </div>
    </section>
  );
};