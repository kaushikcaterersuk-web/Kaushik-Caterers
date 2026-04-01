import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Sparkles, Loader2, Calendar, Utensils, Palette } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { getEventSuggestions } from '../services/geminiService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIPlanner() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I'm your Kaushik Caterers AI Event Planner. How can I help you plan your special occasion today? Tell me about your event type, guest count, or any specific themes you have in mind!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const aiResponse = await getEventSuggestions(userMessage);
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[calc(100vh-80px)] bg-[#00001a] flex flex-col"
    >
      {/* Header */}
      <section className="bg-[#000033] border-b border-[#FFD700]/20 py-8 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF8C00]/5 blur-[100px] rounded-full -mr-32 -mt-32" />
        <div className="max-w-4xl mx-auto flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-full border-2 border-[#FFD700] overflow-hidden shadow-2xl">
              <img src="https://i.ibb.co/G48zkPxW/Whats-App-Image-2026-03-31-at-12-49-02-1.jpg" alt="Kaushik Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white uppercase tracking-tight flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-[#FFD700]" />
                AI Event Planner
              </h1>
              <p className="text-[10px] text-[#FFD700] uppercase tracking-[0.2em] font-bold">Kaushik Caterers • Since 1985</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-2">
            <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-stone-400 uppercase tracking-tighter flex items-center">
              <Utensils className="w-3 h-3 mr-1 text-[#FF8C00]" /> Menu Design
            </div>
            <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-stone-400 uppercase tracking-tighter flex items-center">
              <Palette className="w-3 h-3 mr-1 text-[#FF8C00]" /> Theme Ideas
            </div>
          </div>
        </div>
      </section>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
        <div className="max-w-4xl mx-auto space-y-6">
          <AnimatePresence initial={false}>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex max-w-[85%] md:max-w-[70%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-3`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg border-2 ${
                    msg.role === 'user' ? 'bg-[#FF8C00] text-white border-white/20' : 'bg-[#000033] text-[#FFD700] border-[#FFD700]/30'
                  }`}>
                    {msg.role === 'user' ? <User className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
                  </div>
                  <div className={`p-5 rounded-2xl shadow-xl border ${
                    msg.role === 'user' 
                      ? 'bg-[#FF8C00] text-white border-white/10 rounded-tr-none' 
                      : 'bg-[#000033] text-stone-200 border-white/10 rounded-tl-none'
                  }`}>
                    <div className="prose prose-sm max-w-none prose-invert">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#000033] flex items-center justify-center text-[#FFD700] border-2 border-[#FFD700]/30 shadow-lg">
                  <Bot className="w-6 h-6" />
                </div>
                <div className="bg-[#000033] p-5 rounded-2xl border border-white/10 flex items-center space-x-4 shadow-xl">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 bg-[#FF8C00] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-[#FF8C00] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-[#FF8C00] rounded-full animate-bounce"></span>
                  </div>
                  <span className="text-sm text-stone-400 font-bold uppercase tracking-widest">AI is planning...</span>
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-[#000033] border-t border-white/10 p-6 md:p-10 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF8C00] to-transparent opacity-30" />
        <div className="max-w-4xl mx-auto relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about menu suggestions, themes, or logistics..."
            className="w-full pl-8 pr-20 py-5 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] transition-all text-white placeholder:text-stone-600 shadow-inner"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-3 top-3 bottom-3 px-6 bg-[#FF8C00] text-white rounded-xl hover:bg-[#FF7000] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg flex items-center justify-center"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-center text-[10px] text-stone-500 mt-6 uppercase tracking-[0.3em] font-bold">
          AI suggestions are for inspiration • Final planning with our experts
        </p>
      </div>
    </motion.div>
  );
}
