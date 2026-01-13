
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white antialiased min-h-screen">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2 font-extrabold text-xl">
          <div className="text-primary bg-primary/10 p-1 rounded-lg">
            <span className="material-symbols-outlined">school</span>
          </div> 
          Clario
        </div>
        <div className="flex gap-3">
          <Link to="/student-home" className="text-primary text-sm font-bold px-4 py-2 rounded-lg bg-primary/10 transition-all hover:scale-105 active:scale-95">Log In</Link>
          <Link to="/admin" className="text-slate-500 text-sm font-bold px-2 py-2">Admin</Link>
        </div>
      </header>
      <main className="relative hero-gradient pt-16 pb-24 px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 border border-primary/20">
          <span className="material-symbols-outlined text-sm">verified</span> CRYPTO-NATIVE EDUCATION
        </div>
        <h1 className="text-5xl font-black mb-6 tracking-tight leading-tight">
          Master Your Future with <span className="text-primary">AI & Human</span> Tutors
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-md mx-auto text-lg">
          The world's first decentralized learning marketplace. Connect, learn, and pay instantly in crypto with on-chain trust scores.
        </p>
        <div className="flex flex-col gap-4 max-w-xs mx-auto">
          <Link to="/student-home" className="flex items-center justify-center rounded-xl h-14 bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
            Get Started for Free
          </Link>
          <Link to="/tutor-dashboard" className="flex items-center justify-center rounded-xl h-14 bg-slate-200 dark:bg-slate-800 font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-all">
            I am a Tutor
          </Link>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto opacity-70">
          <div className="flex flex-col items-center">
            <span className="material-symbols-outlined text-4xl mb-2">currency_bitcoin</span>
            <span className="text-xs font-bold uppercase">Zero Fiat Latency</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="material-symbols-outlined text-4xl mb-2">shield</span>
            <span className="text-xs font-bold uppercase">Escrow Secured</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="material-symbols-outlined text-4xl mb-2">smart_toy</span>
            <span className="text-xs font-bold uppercase">AI Enhanced</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="material-symbols-outlined text-4xl mb-2">public</span>
            <span className="text-xs font-bold uppercase">Global Talent</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
