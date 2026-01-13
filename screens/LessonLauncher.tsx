
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';

const LessonLauncher: React.FC = () => {
  const [seconds, setSeconds] = useState(240); // 4 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return { hrs, mins, secs };
  };

  const { hrs, mins, secs } = formatTime(seconds);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen">
      <TopBar title="Lesson Room Launcher" />
      <div className="max-w-md mx-auto pb-24">
        <div className="flex p-6 justify-center">
          <div className="flex flex-col gap-4 items-center">
            <div className="relative">
              <div 
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-4 border-primary/20 shadow-xl" 
                style={{backgroundImage: 'url("https://picsum.photos/seed/blockchain/200/200")'}}
              ></div>
              <div className="absolute bottom-1 right-1 bg-primary text-white p-1 rounded-full border-2 border-background-dark">
                <span className="material-symbols-outlined text-sm">verified</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-slate-900 dark:text-white text-2xl font-bold">Advanced Solidity Patterns</p>
              <p className="text-slate-500 dark:text-[#92a4c9]">with Dr. Blockchain</p>
              <div className="mt-3 flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20">
                <span className="material-symbols-outlined text-primary text-sm">account_balance_wallet</span>
                <p className="text-primary text-xs font-bold uppercase">0.05 ETH Secure in Escrow</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 mb-6">
          <div className="bg-white dark:bg-surface-dark rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
            <p className="text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold mb-6 uppercase tracking-[0.3em]">Session Starts In</p>
            <div className="flex gap-4 text-center">
              <div className="flex grow basis-0 flex-col gap-2">
                <div className="flex h-20 items-center justify-center rounded-2xl bg-slate-50 dark:bg-[#232f48] shadow-inner">
                  <p className="text-primary text-3xl font-black">{hrs.toString().padStart(2, '0')}</p>
                </div>
                <p className="text-[10px] font-bold uppercase text-slate-400">Hours</p>
              </div>
              <div className="flex grow basis-0 flex-col gap-2">
                <div className="flex h-20 items-center justify-center rounded-2xl bg-slate-50 dark:bg-[#232f48] shadow-inner">
                  <p className="text-primary text-3xl font-black">{mins.toString().padStart(2, '0')}</p>
                </div>
                <p className="text-[10px] font-bold uppercase text-slate-400">Minutes</p>
              </div>
              <div className="flex grow basis-0 flex-col gap-2">
                <div className="flex h-20 items-center justify-center rounded-2xl bg-slate-50 dark:bg-[#232f48] shadow-inner">
                  <p className="text-primary text-3xl font-black">{secs.toString().padStart(2, '0')}</p>
                </div>
                <p className="text-[10px] font-bold uppercase text-slate-400">Seconds</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3 pb-10">
          <Link to="/ai-session" className="w-full bg-primary py-4 px-6 rounded-xl text-white font-bold text-lg shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all active:scale-95 hover:bg-primary/90">
            <span>Join Lesson</span>
            <span className="material-symbols-outlined">meeting_room</span>
          </Link>
          <button className="w-full py-3 text-slate-500 font-bold text-sm uppercase tracking-widest">Reschedule Session</button>
        </div>
      </div>
    </div>
  );
};

export default LessonLauncher;
