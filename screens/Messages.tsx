
import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import BottomNav from '../components/BottomNav';

const Messages: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white h-screen flex flex-col">
      <TopBar title="Messages" rightIcon="edit_square" />
      <div className="px-4 py-3 max-w-md mx-auto w-full">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
          <input className="w-full h-11 rounded-xl bg-slate-200/50 dark:bg-[#232f48] border-none px-10 text-sm" placeholder="Search tutors or AI assistants" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto pb-24 max-w-md mx-auto w-full">
        <Link to="/ai-session" className="flex items-center gap-4 px-4 py-4 border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800/30 transition-colors">
          <div className="relative">
            <div className="size-14 rounded-full bg-cover bg-center border-2 border-primary" style={{backgroundImage: 'url("https://picsum.photos/seed/ai-tutor/100/100")'}}></div>
            <div className="absolute -bottom-1 -right-1 bg-primary p-1 rounded-full"><span className="material-symbols-outlined text-[10px] text-white fill-1">smart_toy</span></div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-0.5">
               <p className="font-bold">Clara AI Assistant</p>
               <span className="text-[10px] text-slate-500">12:45 PM</span>
            </div>
            <p className="text-xs text-slate-500 line-clamp-1">I've analyzed your last grammar exercise. Would you like to review?</p>
          </div>
          <div className="size-5 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold">2</div>
        </Link>
        <div className="flex items-center gap-4 px-4 py-4 border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800/30 transition-colors cursor-pointer">
          <div className="size-14 rounded-full bg-cover bg-center" style={{backgroundImage: 'url("https://picsum.photos/seed/dr-aris/100/100")'}}></div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-0.5">
              <div className="flex items-center gap-1"><p className="font-bold">Dr. Aris Vance</p><span className="material-symbols-outlined text-primary text-[14px] fill-1">verified</span></div>
              <span className="text-[10px] text-slate-500">Yesterday</span>
            </div>
            <p className="text-xs text-slate-500 line-clamp-1">Smart contract for lesson #4 is active and funded.</p>
          </div>
        </div>
      </div>
      <BottomNav role="student" />
    </div>
  );
};

export default Messages;
