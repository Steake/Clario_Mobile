
import React, { useState, useRef, useEffect } from 'react';
import TopBar from '../components/TopBar';
import { getAiTutorResponse } from '../services/geminiService';

interface MessagePart {
  text: string;
}

interface ChatMessage {
  role: 'user' | 'model';
  parts: MessagePart[];
}

const AIStudySession: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', parts: [{ text: "Hello! I'm Clara, your AI learning assistant. What would you like to dive into today? We can explore Python, Blockchain, or even specific math problems!" }] }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    const userMsg: ChatMessage = { role: 'user', parts: [{ text: userText }] };
    
    // Optimistic UI update
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    // Call Gemini
    const response = await getAiTutorResponse(userText, messages);
    
    const aiMsg: ChatMessage = { role: 'model', parts: [{ text: response }] };
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      <TopBar title="Clara AI Session" rightIcon="info" />
      
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 no-scrollbar">
        {messages.map((m, i) => (
          <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
            <div className={`flex items-center gap-2 mb-1 px-2 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`size-5 rounded-full bg-cover ${m.role === 'user' ? 'bg-[url("https://picsum.photos/seed/user/50/50")]' : 'bg-[url("https://picsum.photos/seed/clara/50/50")] bg-primary'}`}></div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{m.role === 'user' ? 'You' : 'Clara AI'}</span>
            </div>
            <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm border ${
              m.role === 'user' 
                ? 'bg-primary text-white border-transparent rounded-tr-none' 
                : 'bg-white dark:bg-surface-dark text-slate-900 dark:text-white border-slate-100 dark:border-slate-800 rounded-tl-none'
            }`}>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.parts[0].text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex flex-col items-start animate-in fade-in slide-in-from-bottom-2 duration-300">
             <div className="flex items-center gap-2 mb-1 px-2">
              <div className="size-5 rounded-full bg-primary flex items-center justify-center">
                 <span className="material-symbols-outlined text-[12px] text-white animate-spin">sync</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary animate-pulse">Clara is thinking...</span>
            </div>
            <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl rounded-tl-none border border-slate-100 dark:border-slate-800 shadow-sm flex gap-1.5">
              <div className="size-2 bg-primary/40 rounded-full animate-bounce"></div>
              <div className="size-2 bg-primary/60 rounded-full animate-bounce delay-75"></div>
              <div className="size-2 bg-primary rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="p-4 bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pb-10">
        <div className="flex gap-2 max-w-md mx-auto items-end">
          <div className="flex-1 bg-slate-100 dark:bg-surface-dark rounded-2xl p-2 flex flex-col gap-1 shadow-inner focus-within:ring-2 focus-within:ring-primary transition-all">
            <textarea 
              rows={1}
              className="w-full bg-transparent border-none px-3 py-1 text-sm focus:ring-0 resize-none max-h-32"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <div className="flex justify-between items-center px-1">
               <button className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-400">
                  <span className="material-symbols-outlined text-xl">attach_file</span>
               </button>
               <span className="text-[10px] text-slate-400 font-medium">Clara v2.4</span>
            </div>
          </div>
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="size-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 transition-all active:scale-95 disabled:opacity-50 disabled:grayscale"
          >
            <span className="material-symbols-outlined text-2xl">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIStudySession;
