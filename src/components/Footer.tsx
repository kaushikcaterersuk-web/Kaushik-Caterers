import { MapPin, Phone, Clock, Facebook, Instagram, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export function Footer() {
  return (
    <footer className="bg-[#3E2723] text-stone-300 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex flex-col text-white">
            <span className="text-2xl font-bold tracking-tight uppercase">KAUSHIK</span>
            <span className="text-xs tracking-[0.3em] text-[#FFD700] uppercase -mt-1">Caterers</span>
          </div>
          <p className="text-sm leading-relaxed">
            Crafting unforgettable culinary experiences and perfectly planned events since 1985. Your vision, our expertise.
          </p>
          <div className="flex items-center space-x-3 pt-2">
            <div className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold uppercase tracking-widest text-white">
              LGBTQ+ Friendly
            </div>
          </div>
          <div className="flex space-x-4 pt-4">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-[#FFD700] transition-colors" />
            <a href="https://www.instagram.com/kaushikcaterers?igsh=eDNiMWI2YjNucDRi" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 cursor-pointer hover:text-[#FFD700] transition-colors" />
            </a>
            <Mail className="w-5 h-5 cursor-pointer hover:text-[#FFD700] transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="text-[#FFD700] font-semibold mb-6 uppercase text-xs tracking-widest">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="/planner" className="hover:text-white transition-colors">AI Planner</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#FFD700] font-semibold mb-6 uppercase text-xs tracking-widest">Contact Info</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 mr-3 text-[#FFD700] shrink-0" />
              <span>{BUSINESS_INFO.address}</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-3 text-[#FFD700] shrink-0" />
              <span>{BUSINESS_INFO.phone}</span>
            </li>
            <li className="flex items-center">
              <Clock className="w-5 h-5 mr-3 text-[#FFD700] shrink-0" />
              <span>{BUSINESS_INFO.timings}</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-[#FFD700] font-semibold mb-4 uppercase text-xs tracking-widest">Our Location</h4>
            <div className="rounded-2xl overflow-hidden h-40 border border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.249247441113!2d78.032191!3d30.316494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909299696299696%3A0x7bekmg2potpdq5bz9!2sKaushik%20Caterers!5e0!3m2!1sen!2sin!4v1711881400000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center space-y-4">
        <p className="text-xs text-stone-400">
          &copy; {new Date().getFullYear()} Kaushik Caterers. All rights reserved.
        </p>
        <p className="text-[9px] text-stone-500">
          Designed by <a href="https://www.waltdesignsstudio.in" target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:underline transition-colors">Walt Designs & Studio</a>
        </p>
      </div>
    </footer>
  );
}
