
import React from 'react';
import TopBar from '../components/TopBar';
import BottomNav from '../components/BottomNav';

const TutorEarnings: React.FC = () => {
  return (
    <div className="min-h-screen pb-24 bg-background-light dark:bg-background-dark">
      <TopBar title="Earnings Hub" rightIcon="visibility_off" />
      <main className="max-w-md mx-auto">
        <div className="px-4 pt-4">
          <div className="flex border-b border-slate-200 dark:border-slate-800 gap-8">
            <button className="flex flex-col items-center justify-center border-b-[3px] border-primary text-primary pb-3 pt-2">
              <p className="text-sm font-bold tracking-wide">Fiat Wallet</p>
            </button>
            <button className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 pb-3 pt-2">
              <p className="text-sm font-bold tracking-wide">Crypto Wallet</p>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 p-4">
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-5 bg-white dark:bg-[#1e293b] shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between"><p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">Total Balance</p><span className="material-symbols-outlined text-trust-belief text-sm">trending_up</span></div>
            <p className="text-2xl font-bold leading-tight">$4,850.20</p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-5 bg-white dark:bg-[#1e293b] shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between"><p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">Available Now</p><span className="material-symbols-outlined text-primary text-sm">account_balance_wallet</span></div>
            <p className="text-2xl font-bold leading-tight">$3,120.00</p>
          </div>
        </div>
        <div className="px-4 mb-6">
          <div className="flex items-stretch justify-between gap-4 rounded-xl bg-white dark:bg-[#1e293b] p-5 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex flex-[2_2_0px] flex-col justify-between">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-trust-uncertainty text-lg">schedule</span><p className="text-trust-uncertainty text-sm font-bold">$1,730.20 Pending</p></div>
                <p className="text-lg font-bold leading-tight mt-1">Pending (Escrow)</p>
              </div>
              <button className="mt-4 flex items-center justify-center rounded-lg h-9 px-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-bold transition-all hover:bg-slate-200 dark:hover:bg-slate-700 w-fit">View Escrow Timeline</button>
            </div>
            <div className="w-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border border-primary/10">
              <span className="material-symbols-outlined text-4xl text-primary/40">lock</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-4">
          <div className="flex flex-1 gap-3 px-4 max-w-md w-full">
            <button className="flex-1 flex cursor-pointer items-center justify-center rounded-xl h-14 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 transition-all active:scale-95"><span className="material-symbols-outlined mr-2">payments</span><span>Payout</span></button>
            <button className="flex-1 flex cursor-pointer items-center justify-center rounded-xl h-14 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-base font-bold transition-all active:scale-95"><span className="material-symbols-outlined mr-2">currency_exchange</span><span>Exchange</span></button>
          </div>
        </div>
        <div className="px-4 mt-8">
          <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-[#1e293b] border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center"><span className="material-symbols-outlined text-blue-600 dark:text-blue-400">psychology</span></div>
                <div><p className="font-bold text-sm">Advanced Calculus</p><p className="text-xs text-slate-500">Student: Alex Chen • 60 min</p></div>
              </div>
              <div className="text-right"><p className="font-bold text-trust-belief">+$45.00</p><p className="text-[10px] text-slate-400 uppercase tracking-tighter">Settled</p></div>
            </div>
          </div>
        </div>
      </main>
      <BottomNav role="tutor" />
    </div>
  );
};

export default TutorEarnings;
