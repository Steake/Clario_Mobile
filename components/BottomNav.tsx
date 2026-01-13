
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface BottomNavProps {
  role?: 'student' | 'tutor';
}

// Define interface for tab items to ensure property consistency
interface TabItem {
  icon: string;
  label: string;
  path: string;
  isFab?: boolean;
}

const BottomNav: React.FC<BottomNavProps> = ({ role = 'student' }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const studentTabs: TabItem[] = [
    { icon: 'home', label: 'Home', path: '/student-home' },
    { icon: 'explore', label: 'Discover', path: '/discover' },
    { icon: 'calendar_today', label: 'Schedule', path: '/bookings' },
    { icon: 'account_balance_wallet', label: 'Wallet', path: '/student-wallet' },
    { icon: 'chat_bubble', label: 'Messages', path: '/messages' },
  ];

  const tutorTabs: TabItem[] = [
    { icon: 'grid_view', label: 'Home', path: '/tutor-dashboard' },
    { icon: 'calendar_today', label: 'Schedule', path: '/tutor-schedule' },
    { icon: 'add', label: 'Create', path: '/tutor-dashboard', isFab: true },
    { icon: 'account_balance_wallet', label: 'Wallet', path: '/tutor-earnings' },
    { icon: 'person', label: 'Profile', path: '/tutor-console' },
  ];

  const tabs = role === 'tutor' ? tutorTabs : studentTabs;

  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 pb-8 pt-2 px-6 z-50">
      <div className="max-w-md mx-auto flex justify-between items-center">
        {tabs.map((tab, idx) => {
          // Check if tab is a Floating Action Button
          if (tab.isFab) {
            return (
              <div key={idx} className="relative -top-4 cursor-pointer" onClick={() => navigate(tab.path)}>
                <div className="bg-primary size-14 rounded-full flex items-center justify-center text-white shadow-xl shadow-primary/40">
                  <span className="material-symbols-outlined text-[30px]">{tab.icon}</span>
                </div>
              </div>
            );
          }
          const isActive = location.pathname === tab.path;
          return (
            <button
              key={idx}
              onClick={() => navigate(tab.path)}
              className={`flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-primary' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600'}`}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {tab.icon}
              </span>
              <span className={`text-[10px] ${isActive ? 'font-bold' : 'font-medium'}`}>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
