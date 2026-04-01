import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICE_CATEGORIES, BUSINESS_INFO } from '../constants';
import { ArrowLeft, Send, Sparkles, CheckCircle2, Users, Copy, Check, X } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import Markdown from 'react-markdown';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface ServiceDetailProps {
  id?: string;
}

export default function ServiceDetail({ id: propId }: ServiceDetailProps) {
  const { id: paramId } = useParams();
  const id = propId || paramId;
  const service = SERVICE_CATEGORIES.find(s => s.id === id);
  const [aiPlan, setAiPlan] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [customPrompt, setCustomPrompt] = useState('');
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubService, setSelectedSubService] = useState('');
  const formRef = useRef<HTMLDivElement>(null);

  if (!service) {
    return (
      <div className="min-h-screen bg-stone-100 flex items-center justify-center text-[#000080]">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold uppercase tracking-tighter">Service Not Found</h1>
          <a href="/services.html" className="text-[#000080] underline uppercase tracking-widest font-bold">Back to Services</a>
        </div>
      </div>
    );
  }

  const generatePlan = async () => {
    setIsGenerating(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Act as a professional event planner for Kaushik Caterers (since 1985). 
        Generate a detailed event plan for "${service.title}". 
        ${customPrompt ? `Customer's specific requirements: "${customPrompt}"` : ''}
        Include:
        1. Suggested Menu (Traditional & Modern)
        2. Decor Theme Ideas
        3. Timeline of Events
        4. Special Highlights (Live Music, Live Catering, etc.)
        Keep it professional, elegant, and focused on 100% customer satisfaction.`,
      });
      setAiPlan(response.text || '');
    } catch (error) {
      console.error("AI Generation Error:", error);
      setAiPlan("Sorry, I couldn't generate a plan right now. Please contact our experts directly!");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(aiPlan);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openEnquiryModal = (subName: string) => {
    setSelectedSubService(subName);
    setIsModalOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-12 bg-stone-100 min-h-screen"
    >
      {/* Header */}
      <section className="bg-[#000080] py-16 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={service.image} alt="" className="w-full h-full object-cover blur-sm" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-[#FFD700]/60 mb-8 font-bold uppercase tracking-widest text-[10px] md:text-xs">
            <a href="/" className="hover:text-[#FFD700] transition-colors">Home</a>
            <span>/</span>
            <a href="/services" className="hover:text-[#FFD700] transition-colors">Services</a>
            <span>/</span>
            <span className="text-[#FFD700]">{service.title}</span>
          </div>
          <a href="/services" className="inline-flex items-center gap-2 text-[#FFD700] mb-8 font-bold uppercase tracking-widest text-sm hover:translate-x-[-4px] transition-transform">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </a>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">{service.title}</h1>
            <p className="text-stone-300 max-w-2xl leading-relaxed font-medium text-lg">
              {service.description}
            </p>
            <div className="inline-flex items-center gap-3 bg-[#FFD700]/20 px-6 py-3 rounded-full border border-[#FFD700]/30">
              <Users className="w-5 h-5 text-[#FFD700]" />
              <span className="text-[#FFD700] font-bold uppercase tracking-widest text-sm">
                Capacity: {BUSINESS_INFO.capacity}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-12">
          {/* Sub-Services Grid - 2 columns on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {service.subServices.map((sub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl border border-stone-200 overflow-hidden group hover:shadow-xl transition-all flex flex-col"
              >
                <div className="h-32 md:h-48 overflow-hidden relative">
                  <img 
                    src={sub.image} 
                    alt={sub.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
                </div>
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <h4 className="text-[#000080] font-bold uppercase tracking-wide text-xs md:text-sm mb-4 flex-grow">{sub.name}</h4>
                  <button 
                    onClick={() => openEnquiryModal(sub.name)}
                    className="w-full py-2 bg-[#000080] text-white rounded-xl font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-[#FFD700] hover:text-[#000080] transition-colors"
                  >
                    Enquiry Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AI Planner Section */}
          <div className="bg-[#00001a] rounded-[3rem] p-8 md:p-12 border border-[#FFD700]/20 shadow-2xl space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF8C00]/10 blur-[100px] rounded-full -mr-32 -mt-32" />
            
            <div className="flex items-center justify-between flex-wrap gap-6 relative z-10">
              <div className="space-y-2">
                <div className="flex items-center gap-4 mb-4">
                  <img src="https://i.ibb.co/G48zkPxW/Whats-App-Image-2026-03-31-at-12-49-02-1.jpg" alt="Kaushik Logo" className="h-12 w-12 rounded-full border-2 border-[#FFD700] object-cover" />
                  <h2 className="text-3xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
                    <Sparkles className="w-8 h-8 text-[#FFD700]" />
                    AI Event Planner
                  </h2>
                </div>
                <p className="text-stone-400 font-medium">Get a customized plan for your {service.title} in seconds.</p>
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              <label className="block text-xs font-bold text-[#FFD700] uppercase tracking-widest">Custom Requirements</label>
              <textarea
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="e.g. I want a traditional theme with blue flowers and live music..."
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:ring-2 focus:ring-[#FF8C00] transition-all resize-none h-32 placeholder:text-stone-600"
              />
              <button
                onClick={generatePlan}
                disabled={isGenerating}
                className="w-full md:w-auto px-10 py-4 bg-[#FF8C00] text-white rounded-full font-bold hover:bg-[#FF7000] transition-all shadow-[0_0_20px_rgba(255,140,0,0.3)] uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isGenerating ? 'Planning...' : 'Generate Plan'}
                <Sparkles className="w-4 h-4" />
              </button>
            </div>

            {isGenerating && (
              <div className="flex items-center gap-2 text-[#FF8C00] font-bold uppercase tracking-widest text-sm animate-pulse">
                <span>AI is thinking</span>
                <span className="flex gap-1">
                  <span className="w-1 h-1 bg-[#FF8C00] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1 h-1 bg-[#FF8C00] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1 h-1 bg-[#FF8C00] rounded-full animate-bounce"></span>
                </span>
              </div>
            )}

            {aiPlan && !isGenerating && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 rounded-3xl p-8 text-stone-200 border border-white/10 relative group/result"
              >
                <button
                  onClick={copyToClipboard}
                  className="absolute top-4 right-4 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-[#FFD700]"
                  title="Copy to clipboard"
                >
                  {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                </button>
                <div className="prose prose-invert max-w-none">
                  <Markdown>{aiPlan}</Markdown>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden"
            >
              <div className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-[#000080] uppercase tracking-tight">Quick Enquiry</h3>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-400 hover:text-[#000080]"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <p className="text-stone-500 font-medium">Enquiring for: <span className="text-[#000080] font-bold">{selectedSubService}</span></p>

                <form action="https://formspree.io/f/xjgpovpe" method="POST" className="space-y-4">
                  <input type="hidden" name="Category" value={service.title} />
                  <input type="hidden" name="Sub-Service" value={selectedSubService} />
                  
                  <div>
                    <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      required
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 bg-stone-100 border-none rounded-xl focus:ring-2 focus:ring-[#000080] transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Phone</label>
                      <input
                        type="tel"
                        name="Number"
                        required
                        placeholder="Phone number"
                        className="w-full px-4 py-3 bg-stone-100 border-none rounded-xl focus:ring-2 focus:ring-[#000080] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Email</label>
                      <input
                        type="email"
                        name="Email"
                        required
                        placeholder="Email address"
                        className="w-full px-4 py-3 bg-stone-100 border-none rounded-xl focus:ring-2 focus:ring-[#000080] transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Persons</label>
                      <input
                        type="number"
                        name="Approx Persons"
                        placeholder="e.g. 100"
                        className="w-full px-4 py-3 bg-stone-100 border-none rounded-xl focus:ring-2 focus:ring-[#000080] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Place</label>
                      <input
                        type="text"
                        name="Place"
                        placeholder="e.g. Dehradun"
                        className="w-full px-4 py-3 bg-stone-100 border-none rounded-xl focus:ring-2 focus:ring-[#000080] transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Message</label>
                    <textarea
                      name="Description"
                      rows={3}
                      placeholder="Tell us about your event"
                      className="w-full px-4 py-3 bg-stone-100 border-none rounded-xl focus:ring-2 focus:ring-[#000080] transition-all resize-none"
                    ></textarea>
                  </div>
                  
                  <div className="flex gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="flex-1 py-4 bg-stone-100 text-stone-600 rounded-xl font-bold hover:bg-stone-200 transition-all uppercase tracking-widest"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-[2] py-4 bg-[#000080] text-white rounded-xl font-bold hover:bg-[#000060] transition-all shadow-lg uppercase tracking-widest flex items-center justify-center gap-2"
                    >
                      Send Enquiry
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
