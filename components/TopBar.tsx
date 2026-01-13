
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface TopBarProps {
  title: string;
  backPath?: string;
  rightIcon?: string;
  onRightClick?: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ title, backPath, rightIcon, onRightClick }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-50">
      <div
        className="text-slate-900 dark:text-white flex size-12 shrink-0 items-center cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full justify-center transition-colors"
        onClick={() => (backPath ? navigate(backPath) : navigate(-1))}
      >
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </div>
      <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">{title}</h2>
      <div className="flex w-12 items-center justify-end">
        {rightIcon && (
          <button 
            onClick={onRightClick}
            className="flex cursor-pointer items-center justify-center rounded-lg h-10 w-10 bg-transparent text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="material-symbols-outlined">{rightIcon}</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default TopBar;
