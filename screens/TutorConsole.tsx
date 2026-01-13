
import React from 'react';
import TopBar from '../components/TopBar';
import BottomNav from '../components/BottomNav';

const TutorConsole: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen pb-24">
      <TopBar title="Trust Console" />
      <div className="px-4 pt-6 max-w-md mx-auto">
        <div className="flex items-center justify-between mb-2">
           <h2 className="text-[22px] font-bold">TrustCapsule</h2>
           <span className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded-full font-bold uppercase tracking-wider border border-primary/20">Synced to Mainnet</span>
        </div>
        <div className="p-6 rounded-2xl bg-white dark:bg-[#192233] border border-slate-200 dark:border-slate-800 shadow-xl mb-6">
          <div className="flex justify-between items-end mb-4">
            <span className="text-4xl font-black text-primary">94.2%</span>
            <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Global Integrity</span>
          </div>
          <div className="w-full h-4 rounded-full trust-gradient mb-6 shadow-inner"></div>
          <p className="font-bold text-lg mb-4">Metric Breakdown</p>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-primary"></div>
                <span className="text-sm font-semibold">Positive Belief</span>
              </div>
              <span className="text-sm font-bold">94%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-amber-500"></div>
                <span className="text-sm font-semibold">System Uncertainty</span>
              </div>
              <span className="text-sm font-bold">4%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-red-500"></div>
                <span className="text-sm font-semibold">Disputes</span>
              </div>
              <span className="text-sm font-bold">2%</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 rounded-xl p-5 border border-slate-200 dark:border-[#324467] bg-white dark:bg-slate-900 shadow-sm transition-transform active:scale-95">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Staked</p>
            <p className="text-xl font-bold">2.5 ETH</p>
          </div>
          <div className="flex-1 rounded-xl p-5 border border-slate-200 dark:border-[#324467] bg-white dark:bg-slate-900 shadow-sm transition-transform active:scale-95">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Teaching</p>
            <p className="text-xl font-bold">420h</p>
          </div>
        </div>

        <button className="w-full bg-slate-900 dark:bg-slate-100 dark:text-slate-900 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95">
          <span className="material-symbols-outlined">analytics</span>
          <span>View Verified Reviews</span>
        </button>
      </div>
      <BottomNav role="tutor" />
    </div>
  );
};

export default TutorConsole;
