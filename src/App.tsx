/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MapPin, Clock, CheckCircle2, Instagram, Facebook, Mail } from 'lucide-react';
import { useState, useEffect, useLayoutEffect } from 'react';
import { BUSINESS_INFO } from './constants';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import AIPlanner from './pages/AIPlanner';

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'AI Planner', path: '/planner' },
  ];

  const logoUrl = "https://i.ibb.co/G48zkPxW/Whats-App-Image-2026-03-31-at-12-49-02-1.jpg";

  return (
    <>
      <nav className="bg-[#000080] border-b border-[#FFD700]/30 shadow-2xl fixed top-0 w-full z-50 h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between h-full items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logoUrl} alt="Kaushik Caterers Logo" className="h-14 w-14 rounded-full border-2 border-[#FFD700] object-cover" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#FFD700] tracking-tight leading-none uppercase">KAUSHIK</span>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] tracking-[0.3em] text-[#FFD700]/80 uppercase">Caterers</span>
                  <span className="text-[8px] font-bold text-[#FFD700] uppercase tracking-widest">since 1985</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs font-bold tracking-widest uppercase transition-all hover:text-white ${
                    location.pathname === link.path ? 'text-white border-b-2 border-[#FFD700]' : 'text-[#FFD700]/70'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden p-2 rounded-lg text-[#FFD700] hover:bg-[#FFD700]/10 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="md:hidden absolute top-20 right-4 w-64 bg-[#000080]/90 backdrop-blur-md rounded-3xl border border-[#FFD700]/20 p-8 shadow-2xl z-40 flex flex-col space-y-6"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold tracking-widest uppercase transition-all ${
                    location.pathname === link.path ? 'text-white' : 'text-[#FFD700]/70 hover:text-[#FFD700]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#FFD700]/20 text-center">
                <p className="text-[#FFD700] text-[10px] font-bold uppercase tracking-widest">Since 1985</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      {/* Marquee - Now scrolls with page */}
      <div className="bg-[#FFD700] py-2 overflow-hidden border-b-4 border-[#000080] mt-20">
        <div className="whitespace-nowrap animate-marquee inline-block">
          {[1, 2, 3].map((i) => (
            <span key={i} className="text-[#000080] font-bold uppercase tracking-widest text-sm mx-4">
              Welcome to Kaushik Caterers (since 1985) • Dehradun
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

function Footer() {
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
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link to="/planner" className="hover:text-white transition-colors">AI Planner</Link></li>
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

export default function App() {
  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/planner" element={<AIPlanner />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <a 
          href="https://wa.link/cq19hz" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
          aria-label="Contact on WhatsApp"
        >
          <svg 
            viewBox="0 0 24 24" 
            className="w-8 h-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>

        <ScrollToTop />
      </div>
    </Router>
  );
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-28 right-8 z-[60] bg-[#000080] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-2 border-[#FFD700]"
          aria-label="Scroll to top"
        >
          <svg 
            viewBox="0 0 24 24" 
            className="w-6 h-6 fill-none stroke-current stroke-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
