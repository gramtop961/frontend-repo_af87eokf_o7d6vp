import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient and noise overlay to improve text legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 md:py-24 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white drop-shadow-sm">
          Alex Johnson
        </h1>
        <p className="mt-3 md:mt-5 text-slate-300/90 text-base md:text-lg">
          Digital Consultant • Fintech & Modern Web Experiences
        </p>
      </div>
    </section>
  );
}
