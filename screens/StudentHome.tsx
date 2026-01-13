
import React from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const StudentHome: React.FC = () => {
  return (
    <div className="min-h-screen pb-24 bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div 
            className="size-10 rounded-full bg-cover bg-center border-2 border-primary" 
            style={{backgroundImage: "url('https://picsum.photos/seed/student/100/100')"}}
          ></div>
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Welcome back,</p>
            <h2 className="text-base font-bold leading-tight">Alex Rivera</h2>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="size-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-surface-dark text-slate-600 dark:text-white">
            <span className="material-symbols-outlined text-[22px]">notifications</span>
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto">
        <div className="px-4 py-4">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input 
              className="w-full h-14 pl-12 pr-4 rounded-xl border-none bg-slate-200 dark:bg-surface-dark text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:ring-2 focus:ring-primary transition-all text-base" 
              placeholder="Search subjects, human or AI tutors" 
              type="text"
            />
          </div>
        </div>

        <div className="overflow-x-auto no-scrollbar flex gap-3 px-4 pb-4">
          <div className="flex h-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-4 shadow-lg shadow-primary/20 cursor-pointer">
            <span className="material-symbols-outlined text-sm text-white">magic_button</span>
            <p className="text-white text-sm font-medium">Math - AI</p>
          </div>
          <div className="flex h-9 shrink-0 items-center justify-center gap-2 rounded-full bg-slate-200 dark:bg-surface-dark px-4 border border-transparent dark:border-slate-700 cursor-pointer">
            <span className="material-symbols-outlined text-sm text-primary">currency_bitcoin</span>
            <p className="text-slate-700 dark:text-white text-sm font-medium">Crypto Native</p>
          </div>
          <div className="flex h-9 shrink-0 items-center justify-center gap-2 rounded-full bg-slate-200 dark:bg-surface-dark px-4 border border-transparent dark:border-slate-700 cursor-pointer">
            <span className="material-symbols-outlined text-sm text-yellow-500">star</span>
            <p className="text-slate-700 dark:text-white text-sm font-medium">Top Rated</p>
          </div>
        </div>

        <section className="mt-4">
          <div className="flex items-center justify-between px-4 mb-3">
            <h3 className="text-lg font-bold">Upcoming Bookings</h3>
            <Link to="/bookings" className="text-primary text-sm font-semibold">View All</Link>
          </div>
          <div className="px-4">
            <div className="bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div 
                  className="size-12 rounded-lg bg-cover bg-center" 
                  style={{backgroundImage: "url('https://picsum.photos/seed/clara/100/100')"}}
                ></div>
                <div>
                  <p className="text-sm font-bold">Clara AI Session</p>
                  <p className="text-xs text-primary font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">schedule</span> Starts in 15m
                  </p>
                </div>
              </div>
              <Link to="/ai-session" className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold animate-pulse">Join Now</Link>
            </div>
          </div>
        </section>

        <section className="mt-8 pb-8">
          <div className="flex items-center justify-between px-4 mb-4">
            <h3 className="text-lg font-bold">Recommended Tutors</h3>
            <Link to="/discover" className="text-slate-500 dark:text-slate-400 text-sm font-semibold flex items-center gap-1">
              Filters <span className="material-symbols-outlined text-[18px]">tune</span>
            </Link>
          </div>
          <div className="flex flex-col gap-4 px-4">
            <Link to="/tutor-profile/clara" className="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-800 transition-transform active:scale-95">
              <div className="flex gap-4">
                <div className="relative">
                  <div className="size-20 rounded-xl bg-cover bg-center" style={{backgroundImage: "url('https://picsum.photos/seed/robot/200/200')"}}></div>
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px] fill-1">smart_toy</span> AI
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-base leading-tight">Clara AI</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Advanced Python & ML</p>
                    </div>
                    <div className="bg-slate-100 dark:bg-background-dark px-2 py-1 rounded-lg flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-yellow-500 fill-1">star</span>
                      <span className="text-xs font-bold">4.9</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <p className="text-base font-bold">$12.00<span className="text-[10px] text-slate-400 font-normal">/hr</span></p>
                      <p className="text-[10px] text-primary font-medium">~ 0.12 SOL</p>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-500/10 text-green-500 rounded-full">
                      <span className="material-symbols-outlined text-[14px] fill-1">verified</span>
                      <span className="text-[10px] font-bold uppercase">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/tutor-profile/elena" className="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-800 transition-transform active:scale-95">
              <div className="flex gap-4">
                <div className="relative">
                  <div className="size-20 rounded-xl bg-cover bg-center" style={{backgroundImage: "url('https://picsum.photos/seed/woman/200/200')"}}></div>
                  <div className="absolute -bottom-2 -right-2 bg-slate-700 text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">person</span> Human
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-base leading-tight">Dr. Elena Smith</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Macroeconomics Expert</p>
                    </div>
                    <div className="bg-slate-100 dark:bg-background-dark px-2 py-1 rounded-lg flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-yellow-500 fill-1">star</span>
                      <span className="text-xs font-bold">5.0</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <p className="text-base font-bold">$45.00<span className="text-[10px] text-slate-400 font-normal">/hr</span></p>
                      <p className="text-[10px] text-primary font-medium">~ 0.018 ETH</p>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-500/10 text-green-500 rounded-full">
                      <span className="material-symbols-outlined text-[14px] fill-1">verified</span>
                      <span className="text-[10px] font-bold uppercase">Pro</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>
      <BottomNav role="student" />
    </div>
  );
};

export default StudentHome;
