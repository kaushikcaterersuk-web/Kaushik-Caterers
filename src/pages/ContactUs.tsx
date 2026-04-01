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
      className="pb-12 bg-blue-900 min-h-screen"
    >
      {/* Header */}
      <section className="bg-blue-800 py-16 px-4 text-white">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.3em] text-[#FFD700] uppercase block">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">Contact Our Experts</h1>
          <p className="text-stone-200 max-w-2xl mx-auto leading-relaxed font-medium">
            Have questions about our services or want to book an appointment? We're here to help you plan the perfect event.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="bg-[#8B0000] p-10 rounded-[2.5rem] shadow-2xl border border-white/10 space-y-8 text-white">
            <div className="space-y-2 pb-6 border-b border-white/10">
              <h3 className="text-2xl font-bold uppercase tracking-tight text-[#FFD700]">Owner Details</h3>
              <div className="space-y-1">
                <p className="font-bold">Name : Rahul (Owner)</p>
                <p className="text-sm text-white/80">email : kaushikcaterersuk@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#FFD700] shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Call Us</h4>
                <p className="text-white/60 text-sm mb-2">Available for consultations</p>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-lg font-bold hover:text-[#FFD700] transition-colors">{BUSINESS_INFO.phone}</a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#FFD700] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Visit Us</h4>
                <p className="text-white/60 text-sm mb-2">Our main office in Dehradun</p>
                <p className="font-medium leading-relaxed">{BUSINESS_INFO.address}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#FFD700] shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Working Hours</h4>
                <p className="text-white/60 text-sm mb-2">Open all days of the week</p>
                <p className="font-medium">{BUSINESS_INFO.timings}</p>
              </div>
            </div>

            <div className="pt-8 border-t border-stone-100">
              <h4 className="font-bold text-stone-900 mb-4">Follow Our Journey</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-stone-50 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-stone-50 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-stone-50 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-2">
            <EnquiryForm className="h-full" />
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="max-w-7xl mx-auto px-4 mt-12">
        <div className="h-[500px] bg-stone-200 rounded-[3rem] overflow-hidden relative group border-4 border-[#FFD700]/30 shadow-[0_0_30px_rgba(255,215,0,0.2)]">
          <div className="absolute inset-0 flex items-center justify-center bg-stone-900/40 backdrop-blur-[1px] group-hover:backdrop-blur-0 transition-all duration-700 z-10">
            <div className="text-center space-y-4 bg-white p-10 rounded-[2.5rem] shadow-2xl border-4 border-[#FFD700]">
              <div className="w-16 h-16 bg-[#000080] rounded-2xl flex items-center justify-center text-[#FFD700] mx-auto mb-4 animate-bounce">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-[#000080] uppercase tracking-tight">Find Us in Dehradun</h3>
              <p className="text-stone-600 max-w-xs mx-auto font-bold uppercase tracking-wide text-xs">{BUSINESS_INFO.address}</p>
              <a 
                href="https://maps.app.goo.gl/7bekmg2potpdq5bz9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-[#8B0000] text-white rounded-full font-black hover:bg-[#000080] transition-all uppercase tracking-widest text-sm shadow-xl"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" 
            alt="Map Placeholder" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          />
        </div>
      </section>

      {/* Trust Banner */}
      <section className="max-w-7xl mx-auto px-4 mt-12 text-center space-y-12 pb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">"Trust is the main ingredient in our recipe for success."</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex items-center space-x-2 text-stone-300">
            <CheckCircle2 className="w-5 h-5 text-[#FFD700]" />
            <span className="font-bold uppercase tracking-widest text-xs">Verified GSTIN</span>
          </div>
          <div className="flex items-center space-x-2 text-stone-300">
            <CheckCircle2 className="w-5 h-5 text-[#FFD700]" />
            <span className="font-bold uppercase tracking-widest text-xs">41+ Years Experience</span>
          </div>
          <div className="flex items-center space-x-2 text-stone-300">
            <CheckCircle2 className="w-5 h-5 text-[#FFD700]" />
            <span className="font-bold uppercase tracking-widest text-xs">100% Satisfaction</span>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
