
import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import BottomNav from '../components/BottomNav';

const BookingsList: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen pb-24">
      <TopBar title="My Bookings" rightIcon="search" />
      <main className="max-w-md mx-auto">
        <div className="sticky top-[73px] z-40 bg-background-light dark:bg-background-dark">
          <div className="flex border-b border-slate-200 dark:border-slate-800 px-4 justify-between">
            <button className="flex flex-col items-center justify-center border-b-[3px] border-primary text-primary pb-3 pt-4 flex-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold">Upcoming</p>
                <span className="bg-primary/20 text-primary text-[10px] px-1.5 py-0.5 rounded-full font-bold">3</span>
              </div>
            </button>
            <button className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 pb-3 pt-4 flex-1">
              <p className="text-sm font-bold">Past</p>
            </button>
          </div>
        </div>
        <div className="px-4 py-6">
          <h3 className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-widest mb-4 opacity-60">Today's Sessions</h3>
          <div className="flex flex-col gap-4 rounded-2xl bg-white dark:bg-card-dark p-5 shadow-xl border border-primary/20 mb-6 ring-1 ring-primary/10">
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col gap-1.5 flex-1">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold text-emerald-500 uppercase tracking-tighter border border-emerald-500/20">
                    <span className="size-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>Live Now
                  </span>
                </div>
                <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Clara AI Study: Python Basics</p>
                <p className="text-xs text-slate-500">Autonomous Tutor Session</p>
              </div>
              <div className="size-12 rounded-xl bg-cover" style={{backgroundImage: 'url("https://picsum.photos/seed/clararobot/100/100")'}}></div>
            </div>
            <div className="flex gap-2 pt-2">
              <Link to="/ai-session" className="flex-1 flex cursor-pointer items-center justify-center rounded-xl h-12 bg-primary text-white gap-2 text-sm font-bold shadow-lg shadow-primary/20 transition-all active:scale-95">
                <span className="material-symbols-outlined text-lg">videocam</span>
                <span>Enter Room</span>
              </Link>
              <button className="flex size-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors hover:bg-slate-200">
                <span className="material-symbols-outlined">chat_bubble</span>
              </button>
            </div>
          </div>

          <h3 className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-widest mb-4 opacity-60">Tomorrow</h3>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-800 shadow-sm opacity-80">
            <div className="size-12 rounded-xl bg-cover" style={{backgroundImage: 'url("https://picsum.photos/seed/man2/100/100")'}}></div>
            <div className="flex-1">
               <p className="font-bold text-sm">Advanced Calculus</p>
               <p className="text-xs text-slate-500">Dr. Sarah Wilson • 10:00 AM</p>
            </div>
            <button className="material-symbols-outlined text-slate-400">more_vert</button>
          </div>
        </div>
      </main>
      <BottomNav role="student" />
    </div>
  );
};

export default BookingsList;
