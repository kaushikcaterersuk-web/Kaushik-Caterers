import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function CurtainLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500); // Wait for animation to finish
    return () => clearTimeout(timer);
  }, []);

  const logoUrl = "https://i.ibb.co/G48zkPxW/Whats-App-Image-2026-03-31-at-12-49-02-1.jpg";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex overflow-hidden pointer-events-none"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          {/* Left Curtain */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.5 }}
            className="relative w-1/2 h-full bg-[#8B0000] shadow-[10px_0_30px_rgba(0,0,0,0.5)] flex items-center justify-end"
          >
            {/* Curtain texture effect */}
            <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(0,0,0,0.3)_21px,rgba(0,0,0,0.3)_22px)]" />
          </motion.div>

          {/* Right Curtain */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.5 }}
            className="relative w-1/2 h-full bg-[#8B0000] shadow-[-10px_0_30px_rgba(0,0,0,0.5)] flex items-center justify-start"
          >
            {/* Curtain texture effect */}
            <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(0,0,0,0.3)_21px,rgba(0,0,0,0.3)_22px)]" />
          </motion.div>

          {/* Logo Lock */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1, 0.5], 
                opacity: [0, 1, 0] 
              }}
              transition={{ 
                times: [0, 0.2, 1],
                duration: 1.2, 
                ease: "easeInOut",
                delay: 0.2
              }}
              className="relative z-[101]"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#FFD700] shadow-[0_0_50px_rgba(255,215,0,0.5)] overflow-hidden bg-white">
                <img 
                  src={logoUrl} 
                  alt="Kaushik Caterers Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Gold Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border-2 border-dashed border-[#FFD700] rounded-full opacity-50"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
