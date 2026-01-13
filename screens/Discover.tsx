
import React from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const Discover: React.FC = () => {
  const tutors = [
    { id: '1', name: 'Dr. Elena Rodriguez', specialty: 'Machine Learning', rating: 4.9, price: '$65', image: 'https://picsum.photos/seed/elena/300/200', type: 'Human' },
    { id: '2', name: 'Sarah Chen', specialty: 'Solidity Master', rating: 5.0, price: '0.05 ETH', image: 'https://picsum.photos/seed/sarah/300/200', type: 'Human' },
    { id: '3', name: 'Professor P.', specialty: 'Calculus AI', rating: 4.8, price: '$15', image: 'https://picsum.photos/seed/robot2/300/200', type: 'AI' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="sticky top-0 z-50 glass-effect border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 pb-2 justify-between">
          <div className="text-slate-900 dark:text-white flex size-12 shrink-0 items-center"><span className="material-symbols-outlined text-2xl">explore</span></div>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">Discover</h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-primary/10 text-primary transition-transform active:scale-90"><span className="material-symbols-outlined text-2xl">notifications</span></button>
          </div>
        </div>
        <div className="px-4 py-3 flex gap-2">
          <label className="flex flex-col flex-1 h-12">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full overflow-hidden shadow-sm">
              <div className="text-[#92a4c9] flex border-none bg-slate-100 dark:bg-surface-dark items-center justify-center pl-4"><span className="material-symbols-outlined text-xl">search</span></div>
              <input className="flex w-full min-w-0 flex-1 border-none bg-slate-100 dark:bg-surface-dark text-slate-900 dark:text-white placeholder:text-[#92a4c9] px-3 text-base font-normal focus:ring-0" placeholder="Search tutors or skills..."/>
            </div>
          </label>
          <button className="flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20 transition-all active:scale-90"><span className="material-symbols-outlined">tune</span></button>
        </div>
        <div className="flex gap-2 px-4 pb-4 overflow-x-auto no-scrollbar">
          <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-5 shadow-md cursor-pointer"><span className="text-sm font-medium leading-normal">All</span></div>
          <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 dark:bg-surface-dark px-5 text-slate-600 dark:text-[#92a4c9] cursor-pointer"><span className="material-symbols-outlined text-sm">person</span><span className="text-sm font-medium">Human</span></div>
          <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 dark:bg-surface-dark px-5 text-slate-600 dark:text-[#92a4c9] cursor-pointer"><span className="material-symbols-outlined text-sm">smart_toy</span><span className="text-sm font-medium">AI</span></div>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto">
        <div className="flex items-center justify-between px-4 pt-6 pb-2">
          <h3 className="text-slate-900 dark:text-white text-lg font-bold">Featured Tutors</h3>
          <div className="flex items-center text-primary gap-1 cursor-pointer"><span className="text-sm font-semibold">Grid</span><span className="material-symbols-outlined text-lg">grid_view</span></div>
        </div>
        <div className="flex flex-col gap-6 p-4">
          {tutors.map(t => (
            <Link key={t.id} to={`/tutor-profile/${t.id}`} className="flex flex-col items-stretch justify-start rounded-xl shadow-md bg-white dark:bg-surface-dark overflow-hidden border border-slate-100 dark:border-slate-800/50 hover:border-primary transition-colors">
              <div className="relative w-full aspect-video bg-cover bg-center" style={{backgroundImage: `url("${t.image}")`}}>
                <div className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1 rounded-full backdrop-blur-md bg-primary/20 border border-primary/30">
                  <span className="material-symbols-outlined text-primary text-xs font-fill">verified</span>
                  <span className="text-white text-xs font-bold uppercase tracking-wider">Trust: 99%</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-emerald-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">Available Today</div>
              </div>
              <div className="flex flex-col p-4 gap-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-slate-900 dark:text-white text-lg font-bold">{t.name}</h4>
                    <p className="text-primary text-sm font-medium">{t.specialty}</p>
                  </div>
                  <div className="flex items-center bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded"><span className="material-symbols-outlined text-yellow-500 text-sm fill-1">star</span><span className="text-xs font-bold ml-1">{t.rating}</span></div>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex flex-col">
                    <span className="text-slate-400 dark:text-[#92a4c9] text-xs uppercase font-semibold">Tutor Type</span>
                    <div className="flex items-center gap-1 text-slate-700 dark:text-slate-200"><span className="material-symbols-outlined text-sm">{t.type === 'AI' ? 'smart_toy' : 'person'}</span><span className="text-sm font-medium">{t.type}</span></div>
                  </div>
                  <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/30"><span>{t.price}</span></button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <BottomNav role="student" />
    </div>
  );
};

export default Discover;
