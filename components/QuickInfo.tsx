import React from 'react';
import { BUSINESS_INFO } from '../constants';

export const QuickInfo: React.FC = () => {
  const cards = [
    {
      title: "Call Us",
      value: BUSINESS_INFO.phone,
      link: `tel:${BUSINESS_INFO.phoneRaw}`,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "Visit Us",
      value: BUSINESS_INFO.address,
      link: BUSINESS_INFO.mapsUrl,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Order Online",
      value: "View Menu & Order",
      link: BUSINESS_INFO.cloverUrl,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <a 
            key={i} 
            href={card.link}
            target={card.link.startsWith('http') ? '_blank' : undefined}
            rel={card.link.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:border-blue-900/30 hover:shadow-xl transition-all"
          >
            <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {card.icon}
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">{card.title}</h3>
            <p className="text-xl font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">{card.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
};