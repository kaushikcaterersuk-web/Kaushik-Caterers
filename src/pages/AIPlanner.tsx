import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Sparkles, Loader2, Calendar, Utensils, Palette, Trash2, X, AlertCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { getEventSuggestionsStream } from '../services/geminiService';

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
  const [showClearConfirm, setShowClearConfirm] = useState(false);
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

    // Add an empty assistant message to start streaming into
    setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

    try {
      const stream = getEventSuggestionsStream(userMessage);
      let fullResponse = '';

      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = { role: 'assistant', content: fullResponse };
          return newMessages;
        });
        setIsLoading(false); // Hide loading indicator as soon as we get the first chunk
      }
    } catch (error) {
      console.error("Streaming error:", error);
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = { 
          role: 'assistant', 
          content: "I'm sorry, I'm having trouble connecting to my planning brain right now. Please try again or contact our team directly!" 
        };
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      { role: 'assistant', content: "Hello! I'm your Kaushik Caterers AI Event Planner. How can I help you plan your special occasion today? Tell me about your event type, guest count, or any specific themes you have in mind!" }
    ]);
    setShowClearConfirm(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[calc(100vh-80px)] bg-[#4A004A] flex flex-col items-center justify-center p-4 md:p-8"
    >
      {/* Chat Container */}
      <div className="w-full max-w-4xl h-[800px] bg-[#2D002D] rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/10 flex flex-col overflow-hidden">
        {/* Header */}
        <section className="bg-[#1A001A] border-b border-[#FFD700]/20 py-6 px-8 relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700]/5 blur-[100px] rounded-full -mr-32 -mt-32" />
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full border-2 border-[#FFD700] overflow-hidden shadow-2xl">
                <img src="https://i.ibb.co/G48zkPxW/Whats-App-Image-2026-03-31-at-12-49-02-1.jpg" alt="Kaushik Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-xl font-black text-white uppercase tracking-tight flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#FFD700]" />
                  AI Planner
                </h1>
                <p className="text-[8px] text-[#FFD700] uppercase tracking-[0.3em] font-black">Kaushik Caterers</p>
              </div>
            </div>
            <div className="flex items-center gap-4 relative z-10">
              <button
                onClick={() => setShowClearConfirm(true)}
                className="p-3 bg-white/5 hover:bg-red-500/20 border border-white/10 rounded-2xl text-stone-400 hover:text-red-400 transition-all group/clear"
                title="Clear Chat History"
              >
                <Trash2 className="w-5 h-5 transition-transform group-hover/clear:scale-110" />
              </button>
              <div className="hidden md:flex space-x-2">
              <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[8px] font-black text-stone-400 uppercase tracking-widest flex items-center">
                <Utensils className="w-3 h-3 mr-1 text-[#FFD700]" /> Menu Design
              </div>
              <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[8px] font-black text-stone-400 uppercase tracking-widest flex items-center">
                <Palette className="w-3 h-3 mr-1 text-[#FFD700]" /> Theme Ideas
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
          <div className="space-y-8">
            <AnimatePresence initial={false}>
              {messages.map((msg, i) => {
                // Don't render empty assistant messages (waiting for first stream chunk)
                if (msg.role === 'assistant' && !msg.content && i === messages.length - 1 && isLoading) {
                  return null;
                }
                
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex max-w-[90%] md:max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-4`}>
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg border-2 ${
                        msg.role === 'user' ? 'bg-[#FFD700] text-[#1A001A] border-white/20' : 'bg-[#1A001A] text-[#FFD700] border-[#FFD700]/30'
                      }`}>
                        {msg.role === 'user' ? <User className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
                      </div>
                      <div className={`p-6 rounded-[2rem] shadow-2xl border transition-all duration-300 ${
                        msg.role === 'user' 
                          ? 'bg-[#FFD700] text-[#1A001A] border-white/10 rounded-tr-none font-bold hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]' 
                          : 'bg-[#3D003D] text-stone-200 border-white/10 rounded-tl-none hover:shadow-[0_0_30px_rgba(61,0,61,0.4)]'
                      }`}>
                        <div className="prose prose-sm max-w-none prose-invert">
                          <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#1A001A] flex items-center justify-center text-[#FFD700] border-2 border-[#FFD700]/30 shadow-lg">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div className="bg-[#1A001A] p-6 rounded-3xl border border-white/10 flex items-center space-x-4 shadow-2xl">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 bg-[#FFD700] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-2 h-2 bg-[#FFD700] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-2 h-2 bg-[#FFD700] rounded-full animate-bounce"></span>
                    </div>
                    <span className="text-xs text-[#FFD700] font-black uppercase tracking-[0.2em]">AI is planning...</span>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-[#1A001A] border-t border-white/10 p-8 relative overflow-hidden shrink-0">
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-30" />
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about menu suggestions, themes, or logistics..."
              className="w-full pl-8 pr-24 py-6 rounded-3xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all text-white placeholder:text-stone-800 shadow-inner font-medium"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="absolute right-3 top-3 bottom-3 px-8 bg-[#FFD700] text-[#1A001A] rounded-2xl hover:bg-[#FFFACD] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl flex items-center justify-center font-black uppercase tracking-widest text-xs"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-center text-[8px] text-stone-500 mt-6 uppercase tracking-[0.4em] font-black">
            AI suggestions are for inspiration • Final planning with our experts
          </p>
        </div>
        {/* Clear Confirmation Modal */}
        <AnimatePresence>
          {showClearConfirm && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowClearConfirm(false)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-[#1A001A] w-full max-w-md rounded-[3rem] border border-[#FFD700]/20 shadow-[0_0_100px_rgba(255,215,0,0.1)] relative z-10 overflow-hidden p-10 text-center space-y-8"
              >
                <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto border border-red-500/20">
                  <AlertCircle className="w-10 h-10 text-red-500" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Clear History?</h3>
                  <p className="text-stone-400 font-medium leading-relaxed">
                    This will permanently delete your current planning session. This action cannot be undone.
                  </p>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setShowClearConfirm(false)}
                    className="flex-1 py-4 bg-white/5 text-stone-400 rounded-2xl font-bold hover:bg-white/10 transition-all uppercase tracking-widest text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={clearChat}
                    className="flex-1 py-4 bg-red-500 text-white rounded-2xl font-black hover:bg-red-600 transition-all shadow-lg uppercase tracking-widest text-xs"
                  >
                    Clear All
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
