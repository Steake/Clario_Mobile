
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const TutorDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeSession, setActiveSession] = useState<string | null>(null);

  const startSession = (sessionName: string) => {
    setActiveSession(sessionName);
    // Simulate room generation
    setTimeout(() => {
      navigate('/lesson-launcher');
    }, 1500);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen pb-24">
      {activeSession && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center">
          <div className="size-16 border-4 border-white border-t-primary rounded-full animate-spin mb-6"></div>
          <h3 className="text-xl font-bold text-white mb-2">Initializing Lesson Room</h3>
          <p className="text-slate-400 text-sm italic">Connecting to secure P2P video node for "{activeSession}"</p>
        </div>
      )}

      <div className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 flex justify-between items-center border-b border-slate-200 dark:border-slate-800">
        <div className="flex size-12 shrink-0 items-center">
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary shadow-md hover:scale-105 transition-transform cursor-pointer" 
            style={{backgroundImage: 'url("https://picsum.photos/seed/tutorprof/100/100")'}}
          ></div>
        </div>
        <div className="flex-1 px-3">
          <p className="text-xs text-slate-500 font-medium">Welcome back,</p>
          <h2 className="text-lg font-bold">Alex Rivera</h2>
        </div>
        <div className="flex gap-2">
          <Link to="/tutor-earnings" className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-slate-200 dark:bg-[#232f48] transition-all active:scale-90 hover:bg-slate-300 dark:hover:bg-slate-700">
            <span className="material-symbols-outlined">account_balance_wallet</span>
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 p-4">
        <div 
          onClick={() => navigate('/tutor-earnings')}
          className="flex flex-1 flex-col gap-1 rounded-xl p-4 bg-slate-200 dark:bg-[#232f48] border border-transparent hover:border-primary/30 transition-all cursor-pointer group shadow-sm"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-white/70 group-hover:text-primary transition-colors">Earnings</p>
          <p className="text-xl font-bold">1.42 ETH</p>
        </div>
        <div className="flex flex-1 flex-col gap-1 rounded-xl p-4 bg-slate-200 dark:bg-[#232f48] border border-transparent hover:border-primary/30 transition-all cursor-pointer group shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-white/70 group-hover:text-primary transition-colors">Lessons</p>
          <p className="text-xl font-bold">4 Today</p>
        </div>
      </div>

      <div className="px-4 py-2">
        <div className="bg-slate-200 dark:bg-[#232f48] rounded-xl p-5 shadow-inner border border-slate-300 dark:border-slate-800">
          <div className="flex justify-between items-center mb-1">
             <p className="text-xs font-medium text-slate-500">Weekly Revenue</p>
             <span className="text-[10px] font-bold text-trust-belief">+12.5%</span>
          </div>
          <p className="text-2xl font-bold leading-tight">$3,450.00</p>
          <div className="h-[100px] w-full mt-4 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xs relative overflow-hidden shadow-inner">
             <div className="absolute inset-0 flex items-end justify-between px-4 pb-2">
                <div className="w-4 bg-primary/40 rounded-t h-[40%] transition-all hover:h-[50%] cursor-help" title="Mon"></div>
                <div className="w-4 bg-primary/60 rounded-t h-[70%] transition-all hover:h-[80%] cursor-help" title="Tue"></div>
                <div className="w-4 bg-primary rounded-t h-[90%] transition-all hover:h-full cursor-help" title="Wed"></div>
                <div className="w-4 bg-primary/50 rounded-t h-[55%] transition-all hover:h-[65%] cursor-help" title="Thu"></div>
                <div className="w-4 bg-primary/80 rounded-t h-[80%] transition-all hover:h-[90%] cursor-help" title="Fri"></div>
                <div className="w-4 bg-primary/30 rounded-t h-[30%] transition-all hover:h-[40%] cursor-help" title="Sat"></div>
             </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Today's Schedule</h3>
          <span className="text-xs font-bold text-primary hover:underline cursor-pointer">Edit Slots</span>
        </div>
        
        <div className="relative overflow-hidden bg-primary rounded-xl p-4 text-white shadow-lg mb-4 transition-all hover:scale-[1.02] cursor-default group">
          <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-4xl">video_call</span>
          </div>
          <h4 className="font-bold text-base">Advanced React Patterns</h4>
          <p className="text-white/80 text-[11px] mb-4">with Jordan Smith • 4:00 PM - 5:00 PM</p>
          <div className="flex gap-2">
            <button 
              onClick={() => startSession("Advanced React Patterns")}
              className="bg-white text-primary px-4 py-2 rounded-lg text-xs font-bold shadow-md hover:shadow-xl transition-all active:scale-95"
            >
              Start Lesson
            </button>
            <button 
              onClick={() => navigate('/messages')}
              className="bg-white/20 text-white px-4 py-2 rounded-lg text-xs font-bold backdrop-blur-sm hover:bg-white/30 transition-colors"
            >
              Chat (2)
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden bg-white dark:bg-[#232f48] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm mb-3 group hover:border-primary/40 transition-colors">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-sm">Crypto Economics 101</h4>
              <p className="text-slate-500 text-[11px] mb-3">with Elena Vance • 6:30 PM</p>
            </div>
            <div className="bg-amber-500/10 text-amber-500 px-2 py-1 rounded text-[10px] font-bold uppercase">Pending</div>
          </div>
          <div className="flex justify-between items-center">
             <p className="text-xs font-medium text-slate-400">Waiting for payment confirmation...</p>
             <button className="material-symbols-outlined text-slate-400 hover:text-primary transition-colors">more_vert</button>
          </div>
        </div>
      </div>
      <BottomNav role="tutor" />
    </div>
  );
};

export default TutorDashboard;
