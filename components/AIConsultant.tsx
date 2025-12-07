import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Bot } from 'lucide-react';
import { getSkinAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'أهلاً بك سيدتي في ELIXIR SKIN. أنا مستشارك الشخصي للعناية بالبشرة. كيف يمكنني مساعدتك اليوم للحصول على بشرة مثالية؟' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!query.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: query };
    setMessages(prev => [...prev, userMsg]);
    setQuery('');
    setIsLoading(true);

    const responseText = await getSkinAdvice(query);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-gold-400 dark:to-gold-600 text-white dark:text-black p-4 rounded-full shadow-[0_4px_20px_rgba(37,99,235,0.5)] dark:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-110 transition-transform duration-300 group border border-blue-500 dark:border-gold-300"
      >
        <Sparkles size={28} className="animate-pulse" />
        <span className="absolute left-full ml-4 bg-white dark:bg-black border border-brand-blue-200 dark:border-gold-500/30 text-brand-blue-900 dark:text-gold-100 px-4 py-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none rounded-lg">
          استشيري خبير ELIXIR
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-white dark:bg-brand-card rounded-none md:rounded-2xl border border-brand-blue-200 dark:border-gold-500/30 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 transition-colors">
          
          {/* Header */}
          <div className="bg-slate-50 dark:bg-black p-4 flex items-center gap-3 border-b border-brand-blue-100 dark:border-gold-500/20">
            <div className="bg-brand-blue-100 dark:bg-gold-500/20 p-2 rounded-full border border-brand-blue-200 dark:border-gold-500/50">
              <Bot size={24} className="text-brand-blue-600 dark:text-gold-400" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-brand-blue-900 dark:text-gold-100">خبير ELIXIR</h3>
              <p className="text-xs text-brand-blue-500 dark:text-gold-500/70">ذكاء اصطناعي متخصص</p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 dark:bg-black/95">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] p-3 text-sm leading-relaxed rounded-2xl border ${
                  msg.role === 'user' 
                    ? 'bg-brand-blue-600 dark:bg-gold-600/20 border-brand-blue-500 dark:border-gold-500/30 text-white dark:text-gold-50' 
                    : 'bg-white dark:bg-black border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-end">
                <div className="bg-white dark:bg-black p-3 border border-slate-200 dark:border-white/10 rounded-2xl">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-brand-blue-500 dark:bg-gold-500 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-brand-blue-500 dark:bg-gold-500 rounded-full animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 bg-brand-blue-500 dark:bg-gold-500 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-black border-t border-brand-blue-100 dark:border-gold-500/20">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="اكتبي استفسارك هنا..."
                className="flex-1 bg-slate-100 dark:bg-brand-dark border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 px-4 py-3 focus:ring-1 focus:ring-brand-blue-500 dark:focus:ring-gold-500 focus:border-brand-blue-500 dark:focus:border-gold-500 text-sm outline-none transition-all rounded-full"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-brand-blue-600 dark:bg-gold-500 text-white dark:text-black p-3 rounded-full hover:bg-brand-blue-500 dark:hover:bg-gold-400 transition-colors disabled:opacity-50"
              >
                <Send size={20} className={isLoading ? 'opacity-0' : ''} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIConsultant;