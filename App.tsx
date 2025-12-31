import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickInfo } from './components/QuickInfo';
import { Hours } from './components/Hours';
import { Location } from './components/Location';
import { Order } from './components/Order';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        <QuickInfo />
        <Hours />
        <Location />
        <Order />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;