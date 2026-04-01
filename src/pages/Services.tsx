import { motion } from 'motion/react';
import { SERVICE_CATEGORIES, BUSINESS_INFO } from '../constants';
import { ArrowRight, Users, CheckCircle2 } from 'lucide-react';

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-12 bg-[#00001a] min-h-screen relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0.1, 
              scale: Math.random() * 0.5 + 0.5,
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%"
            }}
            animate={{ 
              y: [null, Math.random() * -100 - 50],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute w-1 h-1 bg-[#FFD700] rounded-full blur-[1px]"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000033]/80 via-[#00001a] to-[#00001a]" />
      </div>

      {/* Header */}
      <section className="relative z-10 bg-[#000033] py-24 px-4 text-white border-b border-[#FFD700]/20 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <motion.span 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-sm font-black tracking-[0.6em] text-[#FFD700] uppercase block"
          >
            Excellence in Every Detail
          </motion.span>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-white leading-none"
          >
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] animate-pulse">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-stone-400 max-w-2xl mx-auto leading-relaxed font-medium text-xl"
          >
            Experience the pinnacle of culinary artistry and event management with Kaushik Caterers.
          </motion.p>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-4 bg-gradient-to-r from-[#FFD700]/20 to-transparent px-10 py-5 rounded-full border border-[#FFD700]/30 mt-8 backdrop-blur-md"
          >
            <Users className="w-6 h-6 text-[#FFD700]" />
            <span className="text-[#FFD700] font-black uppercase tracking-[0.3em] text-sm">
              Capacity: {BUSINESS_INFO.capacity} Guests
            </span>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SERVICE_CATEGORIES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#000033] rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all duration-700 flex flex-col hover:-translate-y-4"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000033] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-4xl font-black text-[#FFD700] uppercase tracking-tighter drop-shadow-2xl">{service.title}</h3>
                </div>
              </div>
              <div className="p-12 space-y-8 flex-grow flex flex-col">
                <p className="text-stone-400 leading-relaxed font-medium flex-grow text-lg">
                  {service.description}
                </p>
                <a
                  href={`/services/${service.id}`}
                  className="inline-flex items-center gap-4 text-[#FFD700] font-black uppercase tracking-[0.3em] text-xs group/btn hover:text-white transition-all"
                >
                  Explore Details
                  <div className="w-12 h-[2px] bg-[#FFD700] group-hover/btn:w-20 transition-all duration-500" />
                  <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Banner */}
      <section className="relative z-10 bg-[#FFD700] py-16 overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-24"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-24">
              {[
                "Both Male and Female Staff",
                "Live Catering Service Available",
                "Fully Customizable Menu",
                "Dehradun & PAN India Service"
              ].map((feature, j) => (
                <div key={j} className="flex items-center text-[#000033] font-black uppercase tracking-[0.3em] text-xl italic">
                  <CheckCircle2 className="w-8 h-8 text-[#000033] mr-4" />
                  {feature}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 py-32 text-center space-y-10">
        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
          Ready to <span className="text-[#FFD700]">Elevate</span> Your Event?
        </h2>
        <p className="text-stone-400 text-xl font-medium max-w-2xl mx-auto">
          Our experts are waiting to help you create an event that exceeds your expectations.
        </p>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/contact.html" 
          className="inline-block px-16 py-6 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-[#000033] rounded-full font-black hover:shadow-[0_0_50px_rgba(255,215,0,0.4)] transition-all uppercase tracking-[0.3em] text-sm"
        >
          Get a Free Quote
        </motion.a>
      </section>
    </motion.div>
  );
}
