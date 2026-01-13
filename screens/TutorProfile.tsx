
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TopBar from '../components/TopBar';

const TutorProfile: React.FC = () => {
  const { id } = useParams();
  
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-white antialiased pb-32">
      <TopBar title="Tutor Profile" rightIcon="share" />
      <main className="max-w-md mx-auto px-4 overflow-y-auto">
        <div className="mb-6 mt-4">
          <div 
            className="relative flex items-center justify-center bg-primary/20 bg-cover bg-center aspect-video rounded-xl overflow-hidden group shadow-lg" 
            style={{backgroundImage: 'url("https://picsum.photos/seed/coding/600/400")'}}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all"></div>
            <button className="relative flex shrink-0 items-center justify-center rounded-full size-16 bg-primary text-white shadow-xl hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl fill-1">play_arrow</span>
            </button>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-start">
              <div className="relative">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-2xl min-h-24 w-24 border-2 border-primary/30" style={{backgroundImage: 'url("https://picsum.photos/seed/dev/200/200")'}}></div>
                <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-1 border-2 border-background-dark"><span className="material-symbols-outlined text-white text-sm block">verified</span></div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2"><h1 className="text-2xl font-bold leading-tight tracking-tight">Alex Rivers</h1></div>
                <div className="inline-flex items-center px-2.5 py-0.5 mt-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 w-fit">Solidity Architect</div>
                <div className="flex items-center gap-2 mt-3 glass-effect py-1.5 px-3 rounded-full w-fit bg-slate-800/50">
                  <span className="material-symbols-outlined text-primary text-lg">security</span>
                  <span className="text-xs font-bold text-slate-400">TRUST SCORE:</span>
                  <span className="text-xs font-bold text-white">994</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="flex flex-col gap-1 rounded-xl p-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
            <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider">Students</p>
            <p className="text-lg font-bold">1.2k+</p>
          </div>
          <div className="flex flex-col gap-1 rounded-xl p-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
            <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider">Rating</p>
            <div className="flex items-center gap-1"><p className="text-lg font-bold">4.9</p><span className="material-symbols-outlined text-amber-400 text-sm fill-1">star</span></div>
          </div>
          <div className="flex flex-col gap-1 rounded-xl p-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
            <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider">Trust</p>
            <p className="text-lg font-bold text-trust-belief">A+</p>
          </div>
        </div>

        <div className="mb-8">
           <h3 className="text-lg font-bold mb-2">About</h3>
           <p className="text-slate-600 dark:text-[#92a4c9] text-sm leading-relaxed">
             Full-stack developer with 8+ years of experience in DeFi and smart contract auditing. I focus on practical learning, helping you build real-world applications from day one.
           </p>
        </div>

        <div className="fixed bottom-0 z-50 w-full bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pb-10 pt-4 left-0">
          <div className="max-w-md mx-auto px-4 flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5"><span className="text-2xl font-bold tracking-tight">0.05</span><span className="text-sm font-bold text-primary">ETH</span></div>
              <p className="text-xs text-slate-500 font-medium">≈ $124.50 / hour</p>
            </div>
            <Link to="/checkout" className="flex-1 bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/40 text-center transition-all hover:bg-primary/90 active:scale-95">Book Now</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TutorProfile;
