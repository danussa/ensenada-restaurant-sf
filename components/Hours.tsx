import React from 'react';
import { BUSINESS_INFO } from '../constants';

export const Hours: React.FC = () => {
  return (
    <section id="hours" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900">Our Hours</h2>
          <p className="text-gray-600 font-medium">Join us for lunch, dinner, or a late-night bite.</p>
        </div>
        
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl">
          <ul className="divide-y divide-gray-50">
            {BUSINESS_INFO.hours.map((item, i) => (
              <li key={i} className="flex justify-between items-center p-6 md:px-10">
                <span className="font-bold text-lg text-gray-900">{item.day}</span>
                <span className="text-blue-900 font-mono text-lg font-bold">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};