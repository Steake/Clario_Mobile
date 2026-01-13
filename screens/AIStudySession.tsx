
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
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', parts: [{ text: input }] };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    const response = await getAiTutorResponse(input, messages);
    const aiMsg: ChatMessage = { role: 'model', parts: [{ text: response }] };
    
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      <TopBar title="Clara AI Session" rightIcon="info" />
      
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 no-scrollbar">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl ${
              m.role === 'user' 
                ? 'bg-primary text-white rounded-tr-none shadow-lg' 
                : 'bg-white dark:bg-surface-dark text-slate-900 dark:text-white rounded-tl-none border border-slate-200 dark:border-slate-800 shadow-sm'
            }`}>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.parts[0].text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-800 shadow-sm flex gap-1">
              <div className="size-2 bg-slate-400 rounded-full animate-bounce"></div>
              <div className="size-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
              <div className="size-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="p-4 bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pb-10">
        <div className="flex gap-2 max-w-md mx-auto">
          <input 
            className="flex-1 bg-slate-100 dark:bg-surface-dark border-none rounded-xl px-4 text-sm focus:ring-2 focus:ring-primary transition-all"
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="size-12 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 transition-transform active:scale-95 disabled:opacity-50"
          >
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIStudySession;
