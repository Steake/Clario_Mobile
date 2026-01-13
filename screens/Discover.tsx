
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const Discover: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const allTutors = [
    { id: 'elena', name: 'Dr. Elena Rodriguez', specialty: 'Machine Learning', rating: 4.9, price: '$65', image: 'https://picsum.photos/seed/elena/300/200', type: 'Human' },
    { id: 'sarah', name: 'Sarah Chen', specialty: 'Solidity Master', rating: 5.0, price: '0.05 ETH', image: 'https://picsum.photos/seed/sarah/300/200', type: 'Human' },
    { id: 'clara', name: 'Clara AI', specialty: 'Calculus Assistant', rating: 4.8, price: '$15', image: 'https://picsum.photos/seed/robot2/300/200', type: 'AI' },
    { id: 'thor', name: 'Dr. Aris Thorne', specialty: 'Neural Networks', rating: 4.7, price: '$85', image: 'https://picsum.photos/seed/thor/300/200', type: 'Human' }
  ];

  const filteredTutors = allTutors.filter(t => {
    if (activeFilter === 'All') return true;
    return t.type === activeFilter;
  });

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
          <div className="flex flex-col flex-1 h-12">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full overflow-hidden shadow-sm group">
              <div className="text-[#92a4c9] flex border-none bg-slate-100 dark:bg-surface-dark items-center justify-center pl-4 transition-colors group-focus-within:text-primary"><span className="material-symbols-outlined text-xl">search</span></div>
              <input className="flex w-full min-w-0 flex-1 border-none bg-slate-100 dark:bg-surface-dark text-slate-900 dark:text-white placeholder:text-[#92a4c9] px-3 text-base font-normal focus:ring-0" placeholder="Search tutors or skills..."/>
            </div>
          </div>
          <button className="flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20 transition-all active:scale-90"><span className="material-symbols-outlined">tune</span></button>
        </div>
        <div className="flex gap-2 px-4 pb-4 overflow-x-auto no-scrollbar">
          <button 
            onClick={() => setActiveFilter('All')}
            className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 transition-all ${activeFilter === 'All' ? 'bg-primary text-white shadow-md' : 'bg-slate-100 dark:bg-surface-dark text-slate-500'}`}
          >
            <span className="text-sm font-medium leading-normal">All</span>
          </button>
          <button 
            onClick={() => setActiveFilter('Human')}
            className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 transition-all ${activeFilter === 'Human' ? 'bg-primary text-white shadow-md' : 'bg-slate-100 dark:bg-surface-dark text-slate-500'}`}
          >
            <span className="material-symbols-outlined text-sm">person</span>
            <span className="text-sm font-medium">Human</span>
          </button>
          <button 
            onClick={() => setActiveFilter('AI')}
            className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 transition-all ${activeFilter === 'AI' ? 'bg-primary text-white shadow-md' : 'bg-slate-100 dark:bg-surface-dark text-slate-500'}`}
          >
            <span className="material-symbols-outlined text-sm">smart_toy</span>
            <span className="text-sm font-medium">AI</span>
          </button>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto">
        <div className="flex items-center justify-between px-4 pt-6 pb-2">
          <h3 className="text-slate-900 dark:text-white text-lg font-bold">{activeFilter === 'All' ? 'Featured' : activeFilter} Tutors</h3>
          <div className="flex items-center text-primary gap-1 cursor-pointer group"><span className="text-sm font-semibold group-hover:underline">Grid</span><span className="material-symbols-outlined text-lg">grid_view</span></div>
        </div>
        <div className="flex flex-col gap-6 p-4">
          {filteredTutors.length > 0 ? filteredTutors.map(t => (
            <Link key={t.id} to={`/tutor-profile/${t.id}`} className="flex flex-col items-stretch justify-start rounded-xl shadow-md bg-white dark:bg-surface-dark overflow-hidden border border-slate-100 dark:border-slate-800/50 hover:border-primary transition-all hover:-translate-y-1 active:scale-95">
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
                  <div className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/30"><span>{t.price}</span></div>
                </div>
              </div>
            </Link>
          )) : (
            <div className="py-20 text-center">
              <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-700 mb-4">person_search</span>
              <p className="text-slate-500">No tutors found for this category.</p>
            </div>
          )}
        </div>
      </main>
      <BottomNav role="student" />
    </div>
  );
};

export default Discover;
