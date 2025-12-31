import React from 'react';
import { BUSINESS_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col mb-6">
              <span className="text-3xl font-black text-blue-400 uppercase">Ensenada</span>
              <span className="text-xs font-medium tracking-[0.3em] text-gray-400 uppercase">Restaurant</span>
            </div>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed">
              Bringing the authentic taste of Honduras and Nicaragua to San Francisco. Quality ingredients, traditional methods, and Central American hospitality.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
            <ul className="text-gray-400 space-y-4">
              <li>{BUSINESS_INFO.address}</li>
              <li className="text-blue-400 font-bold">{BUSINESS_INFO.phone}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Connect</h4>
            <ul className="text-gray-400 space-y-4">
              <li><a href={BUSINESS_INFO.cloverUrl} target="_blank" rel="noopener" className="hover:text-blue-400 transition-colors">Order Online</a></li>
              <li><a href={BUSINESS_INFO.mapsUrl} target="_blank" rel="noopener" className="hover:text-blue-400 transition-colors">Directions</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Ensenada Restaurant. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-gray-300 cursor-default">Built for Speed</span>
            <span className="hover:text-gray-300 cursor-default">SEO Optimized</span>
          </div>
        </div>
      </div>
    </footer>
  );
};