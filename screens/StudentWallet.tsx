
import React from 'react';
import TopBar from '../components/TopBar';
import BottomNav from '../components/BottomNav';

const StudentWallet: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen">
      <TopBar title="Student Wallet" rightIcon="settings" />
      <div className="flex p-4 flex-col items-center max-w-md mx-auto">
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-24 w-24 border-4 border-primary/20 mb-6 shadow-xl" style={{backgroundImage: 'url("https://picsum.photos/seed/userprof/200/200")'}}></div>
        <p className="text-4xl font-black mb-1">$14,520.80</p>
        <p className="text-slate-500 text-sm font-medium mb-8">Total Estimated Balance (Multi-Chain)</p>
        
        <div className="flex justify-center gap-4 w-full mb-8">
          <button className="flex-1 flex flex-col items-center justify-center rounded-2xl h-24 bg-primary text-white font-bold shadow-lg shadow-primary/20 transition-all active:scale-95">
            <span className="material-symbols-outlined mb-2 text-3xl">add_circle</span>
            <span className="text-xs">Add Funds</span>
          </button>
          <button className="flex-1 flex flex-col items-center justify-center rounded-2xl h-24 bg-white dark:bg-[#232f48] text-slate-900 dark:text-white font-bold border border-slate-200 dark:border-slate-800 transition-all active:scale-95">
            <span className="material-symbols-outlined mb-2 text-3xl">send</span>
            <span className="text-xs">Withdraw</span>
          </button>
          <button className="flex-1 flex flex-col items-center justify-center rounded-2xl h-24 bg-white dark:bg-[#232f48] text-slate-900 dark:text-white font-bold border border-slate-200 dark:border-slate-800 transition-all active:scale-95">
            <span className="material-symbols-outlined mb-2 text-3xl">swap_horiz</span>
            <span className="text-xs">Swap</span>
          </button>
        </div>

        <div className="w-full">
          <div className="flex items-center justify-between mb-4">
             <h2 className="text-xl font-bold">Holdings</h2>
             <span className="text-xs text-primary font-bold">View All</span>
          </div>
          <div className="space-y-4">
             <div className="flex items-center justify-between p-4 bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                   <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center"><span className="material-symbols-outlined text-amber-500">currency_bitcoin</span></div>
                   <div><p className="font-bold text-sm">Bitcoin</p><p className="text-[10px] text-slate-500">0.024 BTC</p></div>
                </div>
                <div className="text-right"><p className="font-bold text-sm">$2,420.10</p><p className="text-[10px] text-emerald-500">+1.2%</p></div>
             </div>
             <div className="flex items-center justify-between p-4 bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                   <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center"><span className="material-symbols-outlined text-blue-500">euro_symbol</span></div>
                   <div><p className="font-bold text-sm">USDT</p><p className="text-[10px] text-slate-500">1,200.00 USDT</p></div>
                </div>
                <div className="text-right"><p className="font-bold text-sm">$1,200.00</p><p className="text-[10px] text-slate-400">0.0%</p></div>
             </div>
          </div>
        </div>
      </div>
      <BottomNav role="student" />
    </div>
  );
};

export default StudentWallet;
