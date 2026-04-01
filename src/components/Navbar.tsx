import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services.html' },
    { name: 'About Us', path: '/about.html' },
    { name: 'Contact Us', path: '/contact.html' },
    { name: 'AI Planner', path: '/planner.html' },
  ];

  const logoUrl = "https://i.ibb.co/G48zkPxW/Whats-App-Image-2026-03-31-at-12-49-02-1.jpg";

  const isActive = (path: string) => {
    if (path === '/' && (currentPath === '/' || currentPath === '/index.html')) return true;
    return currentPath.includes(path) && path !== '/';
  };

  return (
    <>
      <nav className="bg-[#000080] border-b border-[#FFD700]/30 shadow-2xl fixed top-0 w-full z-50 h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between h-full items-center">
            <a href="/" className="flex items-center space-x-3">
              <img src={logoUrl} alt="Kaushik Caterers Logo" className="h-14 w-14 rounded-full border-2 border-[#FFD700] object-cover" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#FFD700] tracking-tight leading-none uppercase">KAUSHIK</span>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] tracking-[0.3em] text-[#FFD700]/80 uppercase">Caterers</span>
                  <span className="text-[8px] font-bold text-[#FFD700] uppercase tracking-widest">since 1985</span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className={`text-xs font-bold tracking-widest uppercase transition-all hover:text-white ${
                    isActive(link.path) ? 'text-white border-b-2 border-[#FFD700]' : 'text-[#FFD700]/70'
                  }`}
                >
                  {link.name}
                </a>
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
              className="md:hidden absolute top-20 right-4 w-64 bg-[#2D1B10] backdrop-blur-xl rounded-3xl border-2 border-[#00FFFF]/50 p-8 shadow-[0_0_40px_rgba(0,255,255,0.2)] z-40 flex flex-col space-y-6"
            >
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className={`text-lg font-black tracking-[0.2em] uppercase transition-all ${
                    isActive(link.path) ? 'text-[#00FFFF]' : 'text-white hover:text-[#00FFFF]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-[#00FFFF]/20 text-center">
                <p className="text-[#00FFFF] text-[10px] font-black uppercase tracking-[0.4em]">Since 1985</p>
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
