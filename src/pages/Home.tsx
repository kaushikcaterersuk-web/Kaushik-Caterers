import { motion } from 'motion/react';
import { ArrowRight, Star, Users, Calendar, Award, CheckCircle2, Heart } from 'lucide-react';
import { OCCASIONS, BUSINESS_INFO, TESTIMONIALS } from '../constants';
import EnquiryForm from '../components/EnquiryForm';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-8 bg-[#8B0000]"
    >
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Background"
            className="w-full h-full object-cover brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FFD700] text-[#FF0000] text-xs font-bold tracking-widest mb-6 shadow-[0_0_15px_rgba(255,215,0,0.5)] whitespace-nowrap border-2 border-[#FF0000]/20">
              <span className="w-2 h-2 rounded-full bg-red-600 mr-3 animate-blink shadow-[0_0_8px_#ff0000]"></span>
              Event Planning & Catering Service since 1985
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-4 leading-tight uppercase tracking-tighter">
              Crafting Moments
            </h1>
            <p className="text-lg md:text-xl text-[#FFD700] mb-8 font-bold uppercase tracking-[0.2em]">
              That Last Forever
            </p>
            <p className="text-base md:text-lg text-stone-200 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
              Since 1985, we've been the heart of celebrations in Dehradun and across India. 
              Exquisite taste, impeccable service, and 41+ years of trust.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact.html" className="px-8 py-4 bg-[#FFD700] text-[#8B0000] rounded-full font-black hover:bg-white transition-all flex items-center group uppercase tracking-widest">
                Plan Your Event
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/services.html" className="px-8 py-4 bg-transparent border-2 border-[#FFD700] text-[#FFD700] rounded-full font-bold hover:bg-[#FFD700] hover:text-[#8B0000] transition-all uppercase tracking-widest">
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/10 backdrop-blur-md p-12 rounded-[3rem] border border-white/20 shadow-[0_0_30px_rgba(255,215,0,0.1)]">
          <div className="text-center space-y-2 group">
            <div className="text-4xl font-bold text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] group-hover:scale-110 transition-transform">{BUSINESS_INFO.years}</div>
            <div className="text-xs uppercase tracking-widest text-white/70 font-bold">Years of Legacy</div>
          </div>
          <div className="text-center space-y-2 group">
            <div className="text-4xl font-bold text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] group-hover:scale-110 transition-transform">{BUSINESS_INFO.customers}</div>
            <div className="text-xs uppercase tracking-widest text-white/70 font-bold">Events Done</div>
          </div>
          <div className="text-center space-y-2 group">
            <div className="text-4xl font-bold text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] group-hover:scale-110 transition-transform">{BUSINESS_INFO.satisfaction}</div>
            <div className="text-xs uppercase tracking-widest text-white/70 font-bold">Satisfaction</div>
          </div>
          <div className="text-center space-y-2 group">
            <div className="text-4xl font-bold text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] group-hover:scale-110 transition-transform">PAN</div>
            <div className="text-xs uppercase tracking-widest text-white/70 font-bold">India Presence</div>
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-[0.3em] text-[#FFD700] uppercase mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">Occasions We Celebrate</h2>
          </div>
          <a href="/services.html" className="text-[#FFD700] font-bold flex items-center hover:underline decoration-2 underline-offset-8 uppercase tracking-widest text-sm">
            View All Services <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {OCCASIONS.slice(0, 6).map((occasion, index) => (
            <motion.div
              key={occasion.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={occasion.image}
                  alt={occasion.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 text-[#FFD700] uppercase tracking-wide">{occasion.title}</h3>
                <p className="text-sm text-stone-300 leading-relaxed">{occasion.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="/services.html" className="inline-flex items-center px-10 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white hover:text-[#8B0000] transition-all uppercase tracking-widest text-sm group">
            View More Services
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.3em] text-[#FFD700] uppercase mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 relative">
              <div className="absolute -top-4 -left-4 bg-[#FFD700] text-[#8B0000] p-2 rounded-lg z-10">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full border-2 border-[#FFD700] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-[#FFD700] uppercase tracking-wide">{t.name}</div>
                  <div className="text-xs text-stone-400 uppercase tracking-widest">{t.role}</div>
                </div>
              </div>
              <p className="text-stone-200 italic leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-black/30 py-12 text-white overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-xs font-bold tracking-[0.3em] text-[#FFD700] uppercase block">Why Choose Us</span>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight uppercase tracking-tighter">
              Excellence in Every <br />
              <span className="text-[#FFD700]">Detail & Flavor</span>
            </h2>
            <div className="space-y-6">
              {[
                "Fully Customizable Menu tailored to your preferences",
                "Professional Male and Female Staff for seamless service",
                "Live Catering Service with fresh preparation",
                "Premium Tenting and Decoration solutions",
                "41+ Years of expertise in event management"
              ].map((feature, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="bg-white/10 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-[#FFD700]" />
                  </div>
                  <span className="text-stone-200 font-bold uppercase tracking-wide text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700 border-4 border-[#FFD700]">
              <img
                src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1000"
                alt="Catering Excellence"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-[#FFD700] p-8 rounded-3xl shadow-2xl hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="bg-[#8B0000] p-3 rounded-2xl">
                  <Star className="w-8 h-8 text-[#FFD700] fill-[#FFD700]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#8B0000]">4.9/5</div>
                  <div className="text-xs text-[#8B0000]/70 font-bold uppercase tracking-widest">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 lg:sticky lg:top-48">
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]">Let's Plan Your <br />Next Big Event</h2>
            <p className="text-stone-300 leading-relaxed max-w-md font-medium">
              Whether it's a grand wedding or an intimate kitty party, we bring the same level of passion and precision. 
              Fill out the form and our team will get back to you within 24 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center text-[#8B0000]">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-white uppercase tracking-wide">Founder: {BUSINESS_INFO.founder}</div>
                  <div className="text-sm text-[#FFD700] font-bold">Leading with vision since 1985</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center text-[#8B0000]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-white uppercase tracking-wide">GST Certified</div>
                  <div className="text-sm text-[#FFD700] font-bold">{BUSINESS_INFO.gstin}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 p-2 rounded-[2.5rem] border border-white/10">
            <EnquiryForm className="bg-white" />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
