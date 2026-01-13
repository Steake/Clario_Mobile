
import React from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const TutorDashboard: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen pb-24">
      <div className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 flex justify-between items-center border-b border-slate-200 dark:border-slate-800">
        <div className="flex size-12 shrink-0 items-center">
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary" 
            style={{backgroundImage: 'url("https://picsum.photos/seed/tutorprof/100/100")'}}
          ></div>
        </div>
        <div className="flex-1 px-3">
          <p className="text-xs text-slate-500 font-medium">Welcome back,</p>
          <h2 className="text-lg font-bold">Alex Rivera</h2>
        </div>
        <div className="flex gap-2">
          <Link to="/tutor-earnings" className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-slate-200 dark:bg-[#232f48] transition-colors hover:bg-slate-300">
            <span className="material-symbols-outlined">account_balance_wallet</span>
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 p-4">
        <div className="flex flex-1 flex-col gap-1 rounded-xl p-4 bg-slate-200 dark:bg-[#232f48] border border-transparent hover:border-primary/30 transition-all cursor-pointer">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-white/70">Earnings</p>
          <p className="text-xl font-bold">1.42 ETH</p>
        </div>
        <div className="flex flex-1 flex-col gap-1 rounded-xl p-4 bg-slate-200 dark:bg-[#232f48] border border-transparent hover:border-primary/30 transition-all cursor-pointer">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-white/70">Lessons</p>
          <p className="text-xl font-bold">4 Today</p>
        </div>
      </div>

      <div className="px-4 py-2">
        <div className="bg-slate-200 dark:bg-[#232f48] rounded-xl p-5 shadow-sm border border-slate-300 dark:border-slate-800">
          <p className="text-xs font-medium text-slate-500">Weekly Revenue</p>
          <p className="text-2xl font-bold">$3,450.00</p>
          <div className="h-[100px] w-full mt-4 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xs relative overflow-hidden">
             {/* Mock chart bars */}
             <div className="absolute inset-0 flex items-end justify-between px-4 pb-2">
                <div className="w-4 bg-primary/40 rounded-t h-[40%]"></div>
                <div className="w-4 bg-primary/60 rounded-t h-[70%]"></div>
                <div className="w-4 bg-primary rounded-t h-[90%]"></div>
                <div className="w-4 bg-primary/50 rounded-t h-[55%]"></div>
                <div className="w-4 bg-primary/80 rounded-t h-[80%]"></div>
                <div className="w-4 bg-primary/30 rounded-t h-[30%]"></div>
             </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Today's Schedule</h3>
          <span className="text-xs font-bold text-primary">Edit Slots</span>
        </div>
        <div className="relative overflow-hidden bg-primary rounded-xl p-4 text-white shadow-lg mb-4 transition-transform hover:scale-[1.02]">
          <h4 className="font-bold text-base">Advanced React Patterns</h4>
          <p className="text-white/80 text-[11px] mb-4">with Jordan Smith • 4:00 PM - 5:00 PM</p>
          <div className="flex gap-2">
            <Link to="/lesson-launcher" className="bg-white text-primary px-4 py-2 rounded-lg text-xs font-bold transition-all active:scale-95">Join Room</Link>
            <button className="bg-white/20 text-white px-4 py-2 rounded-lg text-xs font-bold backdrop-blur-sm">Chat</button>
          </div>
        </div>
        <div className="relative overflow-hidden bg-slate-200 dark:bg-[#232f48] border border-slate-300 dark:border-slate-800 rounded-xl p-4 shadow-sm mb-3">
          <h4 className="font-bold text-sm">Crypto Economics 101</h4>
          <p className="text-slate-500 text-[11px] mb-3">with Elena Vance • 6:30 PM</p>
          <button className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase cursor-default">Pending Payment</button>
        </div>
      </div>
      <BottomNav role="tutor" />
    </div>
  );
};

export default TutorDashboard;
