
import React from 'react';
import TopBar from '../components/TopBar';

const AdminTreasury: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen">
      <TopBar title="Treasury Ops" backPath="/" />
      <main className="max-w-md mx-auto pb-24 p-4">
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="rounded-xl p-5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Global TVL</p>
            <p className="text-2xl font-black text-primary">$12.8M</p>
          </div>
          <div className="rounded-xl p-5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Settlement</p>
            <p className="text-2xl font-black">8m 12s</p>
          </div>
        </div>
        
        <div className="bg-accent-red/10 border border-accent-red/20 rounded-xl p-4 mb-8 flex justify-between items-center">
          <div>
            <p className="text-accent-red text-sm font-bold">3 Stuck Transactions</p>
            <p className="text-accent-red/60 text-[10px] font-medium">Gas spike detected on Ethereum</p>
          </div>
          <button className="bg-accent-red text-white text-[10px] px-4 py-2 rounded-lg font-bold uppercase shadow-lg shadow-accent-red/20">Resolve Now</button>
        </div>

        <h3 className="text-base font-bold mb-4 flex items-center justify-between">
           Pending Payouts
           <span className="text-xs font-bold text-primary">View Ledger</span>
        </h3>
        <div className="space-y-3">
          <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-md">
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Instructor Payout</p>
                <p className="text-base font-bold">Dr. Sarah Wilson</p>
              </div>
              <div className="text-right">
                <p className="text-base font-bold text-primary">0.45 ETH</p>
                <p className="text-[10px] text-slate-400">Verified teaching: 9h</p>
              </div>
            </div>
            <button className="w-full bg-primary text-white font-bold py-3 rounded-xl text-sm shadow-lg shadow-primary/10 transition-all active:scale-95">Process Batch</button>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-md opacity-70">
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Platform Buyback</p>
                <p className="text-base font-bold">Clario DAO</p>
              </div>
              <div className="text-right">
                <p className="text-base font-bold">$12,400.00</p>
                <p className="text-[10px] text-slate-400">Quarterly reserve</p>
              </div>
            </div>
            <button className="w-full bg-slate-200 dark:bg-slate-700 text-slate-500 font-bold py-3 rounded-xl text-sm cursor-not-allowed">Scheduled</button>
          </div>
        </div>
      </main>
      
      <div className="fixed bottom-0 inset-x-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-6 flex justify-around shadow-2xl">
        <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary transition-colors">dashboard</span>
        <span className="material-symbols-outlined text-primary cursor-pointer">account_balance</span>
        <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary transition-colors">settings</span>
      </div>
    </div>
  );
};

export default AdminTreasury;
