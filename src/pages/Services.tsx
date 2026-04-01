import { motion } from 'motion/react';
import { SERVICE_CATEGORIES, BUSINESS_INFO } from '../constants';
import { ArrowRight, Users, CheckCircle2 } from 'lucide-react';

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-12 bg-[#00001a] min-h-screen"
    >
      {/* Header */}
      <section className="bg-[#000033] py-16 px-4 text-white border-b border-[#FFD700]/20">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.3em] text-[#FFD700] uppercase block">Our Expertise</span>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white">Professional <span className="text-[#FFD700]">Services</span></h1>
          <p className="text-stone-300 max-w-2xl mx-auto leading-relaxed font-medium">
            From intimate gatherings to grand celebrations, we provide comprehensive catering and event planning solutions tailored to your vision.
          </p>
          
          <div className="inline-flex items-center gap-3 bg-[#FFD700]/10 px-6 py-3 rounded-full border border-[#FFD700]/30 mt-6">
            <Users className="w-5 h-5 text-[#FFD700]" />
            <span className="text-[#FFD700] font-bold uppercase tracking-widest text-sm">
              Catering Capacity: {BUSINESS_INFO.capacity}
            </span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_CATEGORIES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#000033] rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#FFD700]/10 hover:border-[#FFD700]/40 transition-all duration-500 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00001a] to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-[#FFD700] uppercase tracking-tight">{service.title}</h3>
                </div>
              </div>
              <div className="p-8 space-y-4 flex-grow flex flex-col">
                <p className="text-stone-400 leading-relaxed font-medium flex-grow">
                  {service.description}
                </p>
                <a
                  href={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-[#FFD700] font-bold uppercase tracking-widest text-sm group/btn hover:text-white transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Banner */}
      <section className="bg-black/20 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12">
          {[
            "Both Male and Female Staff",
            "Live Catering Service Available",
            "Fully Customizable Menu",
            "Dehradun & PAN India Service"
          ].map((feature, i) => (
            <div key={i} className="flex items-center text-[#FFD700] font-bold uppercase tracking-widest text-lg">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3" />
              {feature}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">Ready to start planning?</h2>
        <p className="text-stone-300 text-lg font-medium">Our experts are waiting to help you create an event that exceeds your expectations.</p>
        <a href="/contact.html" className="inline-block px-12 py-5 bg-[#FFD700] text-[#000080] rounded-full font-bold hover:bg-[#FFC000] transition-all shadow-xl uppercase tracking-widest">
          Get a Free Quote
        </a>
      </section>
    </motion.div>
  );
}
