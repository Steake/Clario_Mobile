
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';

const BookingCheckout: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate Blockchain Latency
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      // Wait a bit on success screen then redirect
      setTimeout(() => {
        navigate('/bookings');
      }, 2500);
    }, 3000);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background-light dark:bg-background-dark p-6 text-center">
        <div className="size-24 bg-trust-belief rounded-full flex items-center justify-center mb-6 shadow-xl shadow-trust-belief/20 animate-bounce">
          <span className="material-symbols-outlined text-white text-5xl">check</span>
        </div>
        <h2 className="text-3xl font-black mb-2">Payment Secured</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xs">Transaction 0x9f2...a1b is confirmed. Your lesson is now locked in escrow.</p>
        <div className="mt-8 flex flex-col gap-2 w-full max-w-xs">
          <div className="h-1 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-primary animate-[loading_2.5s_linear_infinite]"></div>
          </div>
          <p className="text-[10px] uppercase font-bold tracking-widest text-primary">Redirecting to your schedule...</p>
        </div>
        <style>{`
          @keyframes loading {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-[430px] mx-auto overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      {isProcessing && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center">
          <div className="size-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-6"></div>
          <h3 className="text-xl font-bold text-white mb-2">Transacting on Ethereum...</h3>
          <p className="text-slate-400 text-sm">Validating gas price and securing escrow. Please do not close this window.</p>
        </div>
      )}

      <TopBar title="Checkout" />
      <div className="flex w-full flex-row items-center justify-center gap-3 py-4 bg-background-light dark:bg-background-dark">
        <div className="h-1.5 w-8 rounded-full bg-primary/30"></div>
        <div className="h-1.5 w-8 rounded-full bg-primary/30"></div>
        <div className="h-1.5 w-8 rounded-full bg-primary/30"></div>
        <div className="h-1.5 w-12 rounded-full bg-primary"></div>
      </div>
      
      <div className="px-4 py-4">
        <div className="bg-white dark:bg-[#1a2333] rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-700 overflow-hidden">
              <img className="w-full h-full object-cover" src="https://picsum.photos/seed/thor/200/200" alt="Aris" />
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold">Dr. Aris Thorne</h4>
              <p className="text-slate-500 dark:text-[#92a4c9] text-xs">AI & Neural Networks • 60 mins</p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-slate-500 dark:text-[#92a4c9]">Lesson Price</span><span className="text-slate-900 dark:text-white font-medium">$85.00</span></div>
            <div className="flex justify-between"><span className="text-slate-500 dark:text-[#92a4c9]">Service Fee</span><span className="text-slate-900 dark:text-white font-medium">$4.50</span></div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1"><span className="text-slate-500 dark:text-[#92a4c9]">Gas Estimate</span><span className="material-symbols-outlined text-[14px] text-slate-400">info</span></div>
              <div className="flex items-center gap-1"><span className="text-primary font-medium">~$1.24</span><span className="material-symbols-outlined text-[16px] text-primary">refresh</span></div>
            </div>
            <div className="border-t border-slate-100 dark:border-slate-700 pt-2 mt-2 flex justify-between items-center">
              <span className="text-slate-900 dark:text-white font-bold">Total</span>
              <div className="text-right"><p className="text-slate-900 dark:text-white font-bold text-lg">$90.74</p></div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-3 px-4">
        <div className="flex border-b border-slate-200 dark:border-[#324467] justify-between">
          <button className="flex flex-col items-center justify-center border-b-[3px] border-primary text-slate-900 dark:text-white pb-[13px] pt-4 flex-1">
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Crypto</p>
          </button>
          <button className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-400 dark:text-[#92a4c9] pb-[13px] pt-4 flex-1 opacity-50 cursor-not-allowed">
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Fiat</p>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 pt-2">
        <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight tracking-[-0.015em]">Connected Wallet</h3>
        <button className="text-primary text-xs font-semibold hover:underline">Switch</button>
      </div>

      <div className="flex items-center gap-4 bg-transparent px-4 min-h-[72px] py-2 justify-between">
        <div className="flex items-center gap-4">
          <div className="text-white flex items-center justify-center rounded-lg bg-primary/20 dark:bg-[#232f48] shrink-0 size-12 shadow-inner">
            <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-slate-900 dark:text-white text-base font-medium leading-normal line-clamp-1">0x71C...3e9</p>
            <p className="text-slate-500 dark:text-[#92a4c9] text-xs font-normal leading-normal line-clamp-2">Ethereum Mainnet</p>
          </div>
        </div>
        <div className="shrink-0"><div className="flex size-7 items-center justify-center"><div className="size-3 rounded-full bg-trust-belief shadow-[0_0_8px_#0bda5e]"></div></div></div>
      </div>

      <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Select Asset</h3>
      <div className="px-4 space-y-3 pb-8">
        <div className="flex items-center justify-between p-4 bg-white dark:bg-[#1a2333] border-2 border-primary rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-[#26a17b]/10 flex items-center justify-center"><span className="material-symbols-outlined text-[#26a17b]">monetization_on</span></div>
            <div><p className="text-slate-900 dark:text-white font-bold">USDT</p><p className="text-slate-500 dark:text-[#92a4c9] text-xs">Balance: 420.50 USDT</p></div>
          </div>
          <div className="text-right"><p className="text-slate-900 dark:text-white font-bold">90.74</p><span className="material-symbols-outlined text-primary animate-pulse">check_circle</span></div>
        </div>
      </div>

      <div className="mt-auto p-4 pb-10 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800">
        <button 
          onClick={handlePayment}
          disabled={isProcessing}
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50"
        >
          <span>Confirm & Pay 90.74 USDT</span>
          <span className="material-symbols-outlined">bolt</span>
        </button>
        <p className="text-center text-slate-400 dark:text-[#92a4c9] text-[10px] mt-4 uppercase tracking-widest">Powered by Crypto Rail Protocol</p>
      </div>
    </div>
  );
};

export default BookingCheckout;
