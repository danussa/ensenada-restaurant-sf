import React from 'react';
import { BUSINESS_INFO } from '../constants';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-blue-900">Find Us</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are located in the vibrant Excelsior district of San Francisco.
            </p>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 mb-8">
              <p className="text-blue-900 font-bold mb-2 uppercase tracking-widest text-sm">Address</p>
              <p className="text-lg font-medium text-gray-800">{BUSINESS_INFO.address}</p>
            </div>
            <a 
              href={BUSINESS_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center px-8 py-4 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/10"
            >
              Open in Google Maps
            </a>
          </div>
          
          <div className="w-full md:w-2/3 h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.67293529241!2d-122.436104!3d37.727500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e618888888d%3A0xc3f60f6c2f9d6a36!2s4448%20Mission%20St%2C%20San%20Francisco%2C%20CA%2094112!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ensenada Restaurant Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};