
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const StudentHome: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/discover');
    }
  };

  return (
    <div className="min-h-screen pb-24 bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div 
            className="size-10 rounded-full bg-cover bg-center border-2 border-primary shadow-lg transition-transform hover:scale-105 cursor-pointer" 
            style={{backgroundImage: "url('https://picsum.photos/seed/student/100/100')"}}
          ></div>
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Welcome back,</p>
            <h2 className="text-base font-bold leading-tight">Alex Rivera</h2>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="size-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-surface-dark text-slate-600 dark:text-white transition-all active:scale-90 hover:bg-slate-300 dark:hover:bg-slate-700">
            <span className="material-symbols-outlined text-[22px]">notifications</span>
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto">
        <form onSubmit={handleSearch} className="px-4 py-4">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input 
              className="w-full h-14 pl-12 pr-4 rounded-xl border-none bg-slate-200/50 dark:bg-surface-dark text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:ring-2 focus:ring-primary transition-all text-base shadow-inner" 
              placeholder="Search subjects, human or AI tutors" 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>

        <div className="overflow-x-auto no-scrollbar flex gap-3 px-4 pb-4">
          <div 
            onClick={() => navigate('/discover')}
            className="flex h-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-4 shadow-lg shadow-primary/20 cursor-pointer transition-transform active:scale-95"
          >
            <span className="material-symbols-outlined text-sm text-white">magic_button</span>
            <p className="text-white text-sm font-medium">Math - AI</p>
          </div>
          <div 
            onClick={() => navigate('/discover')}
            className="flex h-9 shrink-0 items-center justify-center gap-2 rounded-full bg-slate-200 dark:bg-surface-dark px-4 border border-transparent dark:border-slate-700 cursor-pointer hover:border-primary/40 transition-all"
          >
            <span className="material-symbols-outlined text-sm text-primary">currency_bitcoin</span>
            <p className="text-slate-700 dark:text-white text-sm font-medium">Crypto Native</p>
          </div>
          <div 
            onClick={() => navigate('/discover')}
            className="flex h-9 shrink-0 items-center justify-center gap-2 rounded-full bg-slate-200 dark:bg-surface-dark px-4 border border-transparent dark:border-slate-700 cursor-pointer hover:border-primary/40 transition-all"
          >
            <span className="material-symbols-outlined text-sm text-yellow-500">star</span>
            <p className="text-slate-700 dark:text-white text-sm font-medium">Top Rated</p>
          </div>
        </div>

        <section className="mt-4">
          <div className="flex items-center justify-between px-4 mb-3">
            <h3 className="text-lg font-bold">Upcoming Bookings</h3>
            <Link to="/bookings" className="text-primary text-sm font-semibold hover:underline">View All</Link>
          </div>
          <div className="px-4">
            <div className="bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-xl p-4 flex items-center justify-between group cursor-pointer transition-all hover:bg-primary/15">
              <div className="flex items-center gap-3">
                <div 
                  className="size-12 rounded-lg bg-cover bg-center shadow-md" 
                  style={{backgroundImage: "url('https://picsum.photos/seed/clara/100/100')"}}
                ></div>
                <div>
                  <p className="text-sm font-bold">Clara AI Session</p>
                  <p className="text-xs text-primary font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">schedule</span> Starts in 15m
                  </p>
                </div>
              </div>
              <Link to="/ai-session" className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold animate-pulse hover:animate-none hover:bg-primary/90 transition-all">Join Now</Link>
            </div>
          </div>
        </section>

        <section className="mt-8 pb-8">
          <div className="flex items-center justify-between px-4 mb-4">
            <h3 className="text-lg font-bold">Recommended Tutors</h3>
            <Link to="/discover" className="text-slate-500 dark:text-slate-400 text-sm font-semibold flex items-center gap-1 hover:text-primary transition-colors">
              Filters <span className="material-symbols-outlined text-[18px]">tune</span>
            </Link>
          </div>
          <div className="flex flex-col gap-4 px-4">
            <Link to="/tutor-profile/clara" className="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:border-primary/50 hover:shadow-md active:scale-[0.98]">
              <div className="flex gap-4">
                <div className="relative">
                  <div className="size-20 rounded-xl bg-cover bg-center shadow-inner" style={{backgroundImage: "url('https://picsum.photos/seed/robot/200/200')"}}></div>
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 border-2 border-white dark:border-surface-dark">
                    <span className="material-symbols-outlined text-[12px] fill-1">smart_toy</span> AI
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-base leading-tight">Clara AI</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Advanced Python & ML</p>
                    </div>
                    <div className="bg-slate-100 dark:bg-background-dark px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                      <span className="material-symbols-outlined text-[14px] text-yellow-500 fill-1">star</span>
                      <span className="text-xs font-bold">4.9</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <p className="text-base font-bold">$12.00<span className="text-[10px] text-slate-400 font-normal">/hr</span></p>
                      <p className="text-[10px] text-primary font-medium">~ 0.12 SOL</p>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-trust-belief/10 text-trust-belief rounded-full">
                      <span className="material-symbols-outlined text-[14px] fill-1">verified</span>
                      <span className="text-[10px] font-bold uppercase">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/tutor-profile/elena" className="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:border-primary/50 hover:shadow-md active:scale-[0.98]">
              <div className="flex gap-4">
                <div className="relative">
                  <div className="size-20 rounded-xl bg-cover bg-center shadow-inner" style={{backgroundImage: "url('https://picsum.photos/seed/woman/200/200')"}}></div>
                  <div className="absolute -bottom-2 -right-2 bg-slate-700 text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 border-2 border-white dark:border-surface-dark">
                    <span className="material-symbols-outlined text-[12px]">person</span> Human
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-base leading-tight">Dr. Elena Smith</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Macroeconomics Expert</p>
                    </div>
                    <div className="bg-slate-100 dark:bg-background-dark px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                      <span className="material-symbols-outlined text-[14px] text-yellow-500 fill-1">star</span>
                      <span className="text-xs font-bold">5.0</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <p className="text-base font-bold">$45.00<span className="text-[10px] text-slate-400 font-normal">/hr</span></p>
                      <p className="text-[10px] text-primary font-medium">~ 0.018 ETH</p>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded-full">
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
