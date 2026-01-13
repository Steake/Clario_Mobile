
import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import BottomNav from '../components/BottomNav';

const StudentWallet: React.FC = () => {
  const [balance, setBalance] = useState(14520.80);
  const [showAddFunds, setShowAddFunds] = useState(false);
  const [topUpAmount, setTopUpAmount] = useState("");

  const handleTopUp = () => {
    const amount = parseFloat(topUpAmount);
    if (!isNaN(amount) && amount > 0) {
      setBalance(prev => prev + amount);
      setShowAddFunds(false);
      setTopUpAmount("");
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen">
      <TopBar title="Student Wallet" rightIcon="settings" />
      
      {showAddFunds && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-surface-dark w-full max-w-sm rounded-2xl p-6 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Top Up Wallet</h3>
              <button onClick={() => setShowAddFunds(false)} className="material-symbols-outlined text-slate-400">close</button>
            </div>
            <p className="text-sm text-slate-500 mb-4">Enter amount to bridge from external wallet (USD Equivalent)</p>
            <div className="relative mb-6">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">$</span>
              <input 
                type="number" 
                value={topUpAmount}
                onChange={(e) => setTopUpAmount(e.target.value)}
                className="w-full h-14 pl-8 pr-4 bg-slate-100 dark:bg-background-dark border-none rounded-xl text-lg font-bold focus:ring-2 focus:ring-primary" 
                placeholder="0.00"
              />
            </div>
            <button 
              onClick={handleTopUp}
              className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 active:scale-95 transition-all"
            >
              Confirm Bridge
            </button>
          </div>
        </div>
      )}

      <div className="flex p-4 flex-col items-center max-w-md mx-auto">
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-24 w-24 border-4 border-primary/20 mb-6 shadow-xl" style={{backgroundImage: 'url("https://picsum.photos/seed/userprof/200/200")'}}></div>
        <p className="text-4xl font-black mb-1">${balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
        <p className="text-slate-500 text-sm font-medium mb-8">Total Estimated Balance (Multi-Chain)</p>
        
        <div className="flex justify-center gap-4 w-full mb-8">
          <button 
            onClick={() => setShowAddFunds(true)}
            className="flex-1 flex flex-col items-center justify-center rounded-2xl h-24 bg-primary text-white font-bold shadow-lg shadow-primary/20 transition-all active:scale-95"
          >
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
             <span className="text-xs text-primary font-bold cursor-pointer hover:underline">View All</span>
          </div>
          <div className="space-y-4">
             <div className="flex items-center justify-between p-4 bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                   <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-amber-500/10 transition-colors"><span className="material-symbols-outlined text-amber-500">currency_bitcoin</span></div>
                   <div><p className="font-bold text-sm">Bitcoin</p><p className="text-[10px] text-slate-500">0.024 BTC</p></div>
                </div>
                <div className="text-right"><p className="font-bold text-sm">$2,420.10</p><p className="text-[10px] text-emerald-500">+1.2%</p></div>
             </div>
             <div className="flex items-center justify-between p-4 bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                   <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors"><span className="material-symbols-outlined text-blue-500">euro_symbol</span></div>
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
