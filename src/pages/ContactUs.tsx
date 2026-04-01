import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../constants';
import { Phone, MapPin, Clock, Mail, Instagram, Facebook, Twitter, CheckCircle2 } from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';

export default function ContactUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-12 bg-[#8B008B] min-h-screen relative overflow-hidden"
    >
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/leather.png')]" />

      {/* Header */}
      <section className="bg-[#8B008B] py-24 px-4 text-white border-b border-[#FFD700]/20 shadow-2xl relative z-10">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <motion.span 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-sm font-black tracking-[0.5em] text-[#FFD700] uppercase block"
          >
            Connect With Us
          </motion.span>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none"
          >
            Let's <span className="text-[#FFD700]">Talk</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-stone-300 max-w-2xl mx-auto leading-relaxed font-medium text-lg"
          >
            Have questions about our services or want to book an appointment? We're here to help you plan the perfect event.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Cards */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#8B008B] p-12 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/5 space-y-10 text-white"
          >
            <div className="space-y-4 pb-8 border-b border-white/10">
              <h3 className="text-3xl font-black uppercase tracking-tight text-[#FFD700]">Owner Details</h3>
              <div className="space-y-2">
                <p className="text-xl font-black">Rahul (Owner)</p>
                <p className="text-sm text-[#FFD700]/80 font-bold tracking-wider uppercase">kaushikcaterersuk@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-16 h-16 bg-[#FFD700] rounded-3xl flex items-center justify-center text-[#8B008B] shrink-0 shadow-lg group-hover:rotate-12 transition-transform duration-500">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-black uppercase tracking-widest text-xs text-[#FFD700] mb-2">Call Us</h4>
                <p className="text-white/60 text-sm mb-2 font-medium italic">Available for consultations</p>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-2xl font-black hover:text-[#FFD700] transition-colors">{BUSINESS_INFO.phone}</a>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center text-[#FFD700] shrink-0 border border-white/10 group-hover:-rotate-12 transition-transform duration-500">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-black uppercase tracking-widest text-xs text-[#FFD700] mb-2">Visit Us</h4>
                <p className="text-white/60 text-sm mb-2 font-medium italic">Our main office in Dehradun</p>
                <p className="font-bold leading-relaxed text-lg">{BUSINESS_INFO.address}</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center text-[#FFD700] shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <Clock className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-black uppercase tracking-widest text-xs text-[#FFD700] mb-2">Working Hours</h4>
                <p className="text-white/60 text-sm mb-2 font-medium italic">Open all days of the week</p>
                <p className="font-bold text-lg">{BUSINESS_INFO.timings}</p>
              </div>
            </div>

            <div className="pt-10 border-t border-white/10">
              <h4 className="font-black uppercase tracking-[0.3em] text-xs text-[#FFD700] mb-6">Follow Our Journey</h4>
              <div className="flex space-x-6">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white hover:bg-[#FFD700] hover:text-[#3E2723] transition-all duration-500 hover:-translate-y-2 shadow-xl">
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Area */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <EnquiryForm className="h-full" />
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 mt-24 relative z-10">
        <div className="h-[600px] bg-stone-200 rounded-[4rem] overflow-hidden relative group border-8 border-[#8B008B] shadow-2xl">
          <div className="absolute inset-0 flex items-center justify-center bg-[#8B008B]/60 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-1000 z-10">
            <div className="text-center space-y-6 bg-white p-12 rounded-[3rem] shadow-2xl border-4 border-[#FFD700] max-w-md mx-4">
              <div className="w-20 h-20 bg-[#8B008B] rounded-3xl flex items-center justify-center text-[#FFD700] mx-auto mb-6 animate-bounce shadow-xl">
                <MapPin className="w-10 h-10" />
              </div>
              <h3 className="text-4xl font-black text-[#8B008B] uppercase tracking-tighter">Find Us</h3>
              <p className="text-stone-600 font-bold uppercase tracking-widest text-xs leading-relaxed">{BUSINESS_INFO.address}</p>
              <a 
                href="https://maps.app.goo.gl/7bekmg2potpdq5bz9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-5 bg-[#8B008B] text-[#FFD700] rounded-full font-black hover:bg-[#FFD700] hover:text-[#8B008B] transition-all uppercase tracking-[0.3em] text-xs shadow-2xl"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" 
            alt="Map Location" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
          />
        </div>
      </section>

      {/* Trust Banner */}
      <section className="max-w-7xl mx-auto px-4 mt-24 text-center space-y-16 pb-24 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight italic">
          "Trust is the <span className="text-[#FFD700]">Main Ingredient</span> in our recipe for success."
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {[
            { label: "Verified GSTIN", icon: CheckCircle2 },
            { label: "41+ Years Experience", icon: CheckCircle2 },
            { label: "100% Satisfaction", icon: CheckCircle2 }
          ].map((item, i) => (
            <div key={i} className="flex items-center space-x-4 bg-white/5 px-8 py-4 rounded-full border border-white/10 backdrop-blur-sm">
              <item.icon className="w-6 h-6 text-[#FFD700]" />
              <span className="font-black uppercase tracking-[0.3em] text-xs text-white">{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
