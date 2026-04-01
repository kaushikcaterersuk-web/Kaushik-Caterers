import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../constants';
import { Award, Users, Heart, History, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-12 bg-[#87CEEB] text-[#003366] min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000"
            alt="About Us Background"
            className="w-full h-full object-cover brightness-[0.5]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tighter">Our Legacy</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-5xl mx-auto">
            {[
              { value: "41+", label: "Years of Legacy" },
              { value: "4000+", label: "Events Done" },
              { value: "100%", label: "Satisfaction" },
              { value: "PAN", label: "India Presence" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-1">{stat.value}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest text-white/70 font-bold leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8 text-center">
          <span className="text-xs font-bold tracking-[0.3em] text-stone-400 uppercase block">The Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] leading-tight uppercase tracking-tight">
            A Tradition of Taste <br />
            <span className="text-[#8B0000]">and Unmatched Service</span>
          </h2>
          <p className="text-[#004080] leading-relaxed text-lg font-medium">
            Kaushik Caterers in Mdda Colony, Dehradun is a reputable catering company that offers exceptional catering services for a variety of events. 
            With a team of skilled chefs and professional staff, the company is committed to providing high-quality catering services that are tailored to meet the needs and budget of clients.
          </p>
          <p className="text-[#004080] leading-relaxed">
            Founded in 1985 with a simple mission: to provide the highest quality catering and event planning services that celebrate the rich culinary traditions of India. 
            Over the past four decades, we have grown from a small local service in Dehradun to a premier event planning company serving clients across the country.
          </p>
          <p className="text-[#004080] leading-relaxed">
            Led by our founder, we have successfully executed over 4000 events, ranging from intimate family gatherings to grand destination weddings. 
            Our commitment to 100% customer satisfaction remains at the core of everything we do.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <History className="w-8 h-8 text-[#8B0000]" />
              <div>
                <div className="font-bold text-xl text-[#003366]">1985</div>
                <div className="text-sm text-[#004080]">Founded</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Users className="w-8 h-8 text-[#8B0000]" />
              <div className="bg-[#8B0000]/20 px-4 py-2 rounded-xl border border-[#8B0000]/30">
                <div className="font-bold text-xl text-[#8B0000]">{BUSINESS_INFO.capacity}</div>
                <div className="text-[10px] uppercase tracking-widest text-[#003366] font-bold">Catering Capacity</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-8 h-8 text-[#8B0000]" />
              <div>
                <div className="font-bold text-xl text-[#003366]">PAN India</div>
                <div className="text-sm text-[#004080]">Service Area</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#003366] uppercase tracking-tight">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/20 relative shadow-lg">
              <div className="absolute -top-4 -left-4 bg-[#8B0000] text-white p-2 rounded-lg z-10">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full border-2 border-[#8B0000] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-[#8B0000] uppercase tracking-wide">{t.name}</div>
                  <div className="text-xs text-[#004080] uppercase tracking-widest">{t.role}</div>
                </div>
              </div>
              <p className="text-[#003366] italic leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white/20 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold text-[#003366] uppercase tracking-tight">Our Core Values</h2>
            <p className="text-[#004080] max-w-xl mx-auto font-medium">The principles that guide our service and define our legacy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Quality First", icon: Award, desc: "We use only the freshest ingredients and premium materials for every event." },
              { title: "Customer Focused", icon: Heart, desc: "Your satisfaction is our ultimate goal. We listen, adapt, and deliver." },
              { title: "Inclusive Service", icon: Users, desc: "Professional male and female staff ensuring comfort for all guests." }
            ].map((value, i) => (
              <div key={i} className="text-center space-y-6 group">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mx-auto text-[#8B0000] transition-colors group-hover:bg-[#8B0000]/20"
                >
                  <value.icon className="w-10 h-10" />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#003366] uppercase tracking-wide">{value.title}</h3>
                <p className="text-[#004080] leading-relaxed font-medium">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GST Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white/30 backdrop-blur-md rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 border border-white/20 shadow-xl">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#003366] uppercase tracking-tight">Registered & Trusted</h2>
            <p className="text-[#004080] max-w-md font-medium">We are a fully compliant business with GST registration, ensuring transparency and professionalism in all our dealings.</p>
          </div>
          <div className="bg-white px-8 py-6 rounded-2xl shadow-sm">
            <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">GSTIN Number</div>
            <div className="text-2xl font-mono font-bold text-[#003366]">{BUSINESS_INFO.gstin}</div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
