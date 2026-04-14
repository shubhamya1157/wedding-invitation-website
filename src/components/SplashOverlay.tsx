"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashOverlay({ onEnter }: { onEnter: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEnter = () => {
    setIsVisible(false);
    onEnter();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.05,
            filter: "blur(20px)",
            transition: { duration: 1.5, ease: "easeInOut" } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Deep cinematic background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a0800] via-[var(--color-maroon)] to-[#150400]" />
          
          {/* Subtle Rotating Texture/Mandala */}
          <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
             className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/mandala.png')] pointer-events-none mix-blend-overlay"
          />

          {/* Magical Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {mounted && [...Array(25)].map((_, i) => {
              const size = Math.random() * 4 + 2;
              const left = Math.random() * 100;
              const duration = Math.random() * 10 + 10;
              const delay = Math.random() * 5;
              
              return (
                <motion.div
                  key={`particle-${i}`}
                  initial={{ y: "110vh", opacity: 0, x: `${left}vw` }}
                  animate={{ 
                    y: "-10vh", 
                    opacity: [0, 0.8, 1, 0],
                    x: [`${left}vw`, `${left + (Math.random() * 10 - 5)}vw`] 
                  }}
                  transition={{ 
                    duration: duration, 
                    repeat: Infinity, 
                    delay: delay, 
                    ease: "linear" 
                  }}
                  className="absolute bottom-0 rounded-full bg-[#FFF4D2]"
                  style={{ 
                    width: size, 
                    height: size, 
                    boxShadow: "0 0 12px 3px rgba(212,175,55,0.8)" 
                  }}
                />
              );
            })}
          </div>
          
          {/* Central 3D Encasement Container */}
          <div className="relative z-10 flex items-center justify-center w-full px-4 perspective-[2000px]">
             <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateX: 15, y: 50 }}
                animate={{ scale: 1, opacity: 1, rotateX: 0, y: 0 }}
                transition={{ duration: 2.5, delay: 0.2, type: "spring", bounce: 0.2 }}
                className="relative flex flex-col items-center text-center px-4 md:px-16 lg:px-24 py-16 md:py-20 w-full max-w-5xl rounded-[3rem] md:rounded-[4rem] group"
             >
                {/* Layer 1: Massive Deep Glass Background */}
                <div className="absolute inset-0 bg-[#0c0300]/50 backdrop-blur-[30px] rounded-[3rem] md:rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] border border-[var(--color-gold)]/20 overflow-hidden pointer-events-none transition-all duration-1000 group-hover:border-[var(--color-gold)]/40 group-hover:shadow-[0_0_80px_rgba(212,175,55,0.15)]"></div>

                {/* Layer 2: Glowing Inner Border & Overlay */}
                <div className="absolute inset-3 md:inset-5 rounded-[2.2rem] md:rounded-[3.2rem] border border-[var(--color-gold)]/30 shadow-[inset_0_0_50px_rgba(212,175,55,0.1)] pointer-events-none overflow-hidden group-hover:border-[var(--color-gold)]/50 transition-colors duration-1000">
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/royal.png')] opacity-[0.03] mix-blend-screen mix-blend-overlay"></div>
                   
                   {/* Layer 3: Dynamic Highlight Sweep */}
                   <motion.div 
                     animate={{ x: ["-100%", "200%"] }}
                     transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                     className="absolute top-0 bottom-0 w-[50%] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-45deg]"
                   />
                </div>

                {/* Layer 4: Corner Decorative Elements */}
                <div className="absolute top-8 left-8 w-12 h-12 md:w-16 md:h-16 border-t-2 border-l-2 border-[var(--color-gold)]/50 rounded-tl-xl pointer-events-none drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
                <div className="absolute top-8 right-8 w-12 h-12 md:w-16 md:h-16 border-t-2 border-r-2 border-[var(--color-gold)]/50 rounded-tr-xl pointer-events-none drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
                <div className="absolute bottom-8 left-8 w-12 h-12 md:w-16 md:h-16 border-b-2 border-l-2 border-[var(--color-gold)]/50 rounded-bl-xl pointer-events-none drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
                <div className="absolute bottom-8 right-8 w-12 h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-[var(--color-gold)]/50 rounded-br-xl pointer-events-none drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>

                <div className="relative z-20 flex flex-col items-center w-full">
                  {/* Top Ornaments */}
                  <div className="flex items-center justify-center gap-4 mb-8 md:mb-12 opacity-90 w-full max-w-[200px] md:max-w-xs mx-auto">
                    <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent to-[var(--color-gold)]"></div>
                    <div className="text-[var(--color-gold)] text-[10px] md:text-xs tracking-[0.5em] uppercase font-sans whitespace-nowrap font-bold">
                      The Wedding Of
                    </div>
                    <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent to-[var(--color-gold)]"></div>
                  </div>

                  {/* Main Names */}
                  <h1 className="font-serif text-5xl sm:text-7xl md:text-[90px] lg:text-[110px] leading-tight md:leading-tight font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#FFF] via-[#FFF4D2] to-[#AA771C] drop-shadow-[0_10px_30px_rgba(0,0,0,1)] px-4">
                    Prabhat & Shefali
                  </h1>
                  
                  <div className="mb-14 md:mb-20 font-serif text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF4D2] to-[#D4AF37] tracking-widest italic opacity-100 drop-shadow-[0_0_15px_rgba(212,175,55,0.8)] mt-2 font-bold">
                    ॥ शुभ विवाह ॥
                  </div>

                  {/* Enhanced Enter Button */}
                  <motion.button
                    onClick={handleEnter}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex items-center justify-center overflow-hidden rounded-full border border-white/50 bg-gradient-to-r from-[#AA771C] via-[#FFF4D2] to-[#AA771C] px-12 py-5 md:py-6 shadow-[0_0_40px_10px_rgba(212,175,55,0.6)] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_60px_15px_rgba(212,175,55,0.8)] cursor-pointer"
                  >
                    <motion.div
                      animate={{ opacity: [0, 0.4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-white opacity-0 transition-opacity"
                    />
                    
                    {/* Laser button sweep */}
                    <motion.div 
                       animate={{ left: ["-100%", "200%"] }}
                       transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
                       className="absolute top-0 bottom-0 w-[30%] bg-white/60 skew-x-[-30deg]"
                    />

                    <span className="relative z-10 font-sans tracking-[0.3em] md:tracking-[0.4em] text-xs md:text-sm uppercase text-[#1a0500] font-extrabold drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
                      Tap to celebrate
                    </span>
                  </motion.button>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="mt-12 text-[9px] md:text-xs text-[var(--color-gold)]/60 font-sans tracking-[0.2em] md:tracking-[0.3em] uppercase max-w-xs mx-auto drop-shadow-sm"
                  >
                    Turn on the music using the button in the bottom right corner
                  </motion.p>
                </div>
             </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
