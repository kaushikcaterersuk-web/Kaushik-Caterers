import { motion } from 'motion/react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { useState } from 'react';

interface EnquiryFormProps {
  className?: string;
}

export default function EnquiryForm({ className }: EnquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mvzvrkzg", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn("bg-white p-12 rounded-3xl shadow-xl border border-stone-100 text-center space-y-6 flex flex-col items-center justify-center", className)}
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <h3 className="text-3xl font-black text-stone-900 uppercase tracking-tighter">Enquiry Sent!</h3>
        <p className="text-stone-600 font-medium">Thank you for reaching out. Our team will contact you shortly.</p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="px-8 py-3 bg-stone-900 text-white rounded-full font-bold hover:bg-stone-800 transition-all"
        >
          Send Another
        </button>
      </motion.div>
    );
  }

  return (
    <div className={cn("bg-white p-8 rounded-3xl shadow-xl border border-stone-100", className)}>
      <h3 className="text-2xl font-bold mb-6 text-stone-900 uppercase tracking-tight">Enquire Now</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Full Name"
              className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+91 XXXXX XXXXX"
              className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">Place</label>
            <input
              type="text"
              name="place"
              required
              placeholder="Event Location"
              className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">Catering Type</label>
            <select
              name="cateringType"
              required
              className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#000080] transition-all appearance-none"
            >
              <option value="">Select Type</option>
              <option value="Wedding">Wedding</option>
              <option value="Birthday">Birthday</option>
              <option value="Corporate">Corporate</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">Approx Persons</label>
            <input
              type="number"
              name="approxPerson"
              required
              placeholder="e.g. 100"
              className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">Description</label>
          <textarea
            name="description"
            rows={4}
            placeholder="Tell us more about your event requirements..."
            className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#000080] transition-all resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-[#000080] text-white rounded-xl font-bold hover:bg-[#000033] transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending Enquiry...
            </>
          ) : (
            'Send Enquiry'
          )}
        </button>

        <div className="flex flex-wrap gap-4 pt-4 border-t border-stone-100 mt-6">
          <div className="flex items-center text-xs font-medium text-stone-600">
            <CheckCircle2 className="w-4 h-4 text-green-500 mr-1" />
            Male & Female Staff
          </div>
          <div className="flex items-center text-xs font-medium text-stone-600">
            <CheckCircle2 className="w-4 h-4 text-green-500 mr-1" />
            Live Catering
          </div>
          <div className="flex items-center text-xs font-medium text-stone-600">
            <CheckCircle2 className="w-4 h-4 text-green-500 mr-1" />
            Customizable Menu
          </div>
        </div>
      </form>
    </div>
  );
}
