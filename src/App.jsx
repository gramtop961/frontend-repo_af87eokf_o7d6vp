import React from 'react';
import Hero from './components/Hero';
import InfoCard from './components/InfoCard';
import ContactActions from './components/ContactActions';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 antialiased">
      <main className="mx-auto max-w-6xl px-6 py-8 md:py-10 space-y-10 md:space-y-12">
        <Hero />
        <InfoCard />
        <ContactActions />
        <Footer />
      </main>
    </div>
  );
}
