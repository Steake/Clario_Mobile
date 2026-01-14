import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Initialize dark mode from system preference or localStorage
const initDarkMode = () => {
  const isDark = localStorage.getItem('darkMode') === 'true' || 
                 (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Initialize dark mode
initDarkMode();

// Mount React app
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Listen for dark mode changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', initDarkMode);
