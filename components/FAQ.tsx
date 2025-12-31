import React from 'react';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Do you offer takeout?",
      a: "Yes, we offer takeout. You can place your order online via our Clover link or call us directly."
    },
    {
      q: "Where are you located?",
      a: "We are located at 4448 Mission St, San Francisco, CA 94112, in the heart of the Excelsior district."
    },
    {
      q: "How do I order online?",
      a: "Simply click any 'Order Online' button on our site to be taken to our secure Clover ordering portal."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-center text-gray-900">Common Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-blue-900">{faq.q}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};