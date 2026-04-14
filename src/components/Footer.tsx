"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";


function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    DAYS: 0,
    HRS: 0,
    MIN: 0,
    SEC: 0
  });

  useEffect(() => {
    // April 26, 2026
    const targetDate = new Date("2026-04-26T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        DAYS: Math.floor(distance / (1000 * 60 * 60 * 24)),
        HRS: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        MIN: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        SEC: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeEntries = Object.entries(timeLeft);

  return (
    <div className="flex justify-center mt-12 md:mt-24 px-4 w-full">
      {/* Sci-Fi Holographic Data Cores */}
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-6 md:gap-14 perspective-1000">
        {timeEntries.map(([unit, value], index) => (
          <motion.div 
            key={unit}
            initial={{ opacity: 0, rotateX: 60, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: index * 0.2, type: "spring", bounce: 0.4 }}
            className="relative flex items-center justify-center w-28 h-28 md:w-44 md:h-44 group"
          >
            {/* Outer Core Glow */}
            <div className="absolute inset-[-20%] bg-gradient-to-br from-[var(--color-gold)] to-transparent opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-700"></div>

            {/* Outer Spinning Holographic Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10 + index * 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-[1px] md:border-2 border-[var(--color-gold)]/20 border-t-[var(--color-gold)] shadow-[0_0_25px_rgba(212,175,55,0.5)]"
            />
            
            {/* Inner Dashed Data Ring */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15 + index, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[10%] rounded-full border-[2px] border-dashed border-white/20 border-b-white/80"
            />

            {/* Central Engine Base */}
            <div className="absolute inset-[18%] rounded-full bg-[#0a0200]/80 backdrop-blur-xl border border-[var(--color-gold)]/40 group-hover:border-[var(--color-gold)] shadow-[inset_0_0_30px_rgba(212,175,55,0.3)] transition-all duration-500 flex items-center justify-center overflow-hidden">
               {/* Engine Core Scan Line */}
               <motion.div
                 animate={{ top: ["-10%", "110%"] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.3 }}
                 className="absolute left-0 right-0 h-[2px] bg-white shadow-[0_0_15px_3px_rgba(255,255,255,0.9)] z-20 pointer-events-none opacity-60"
               />
            </div>

            {/* Digital Number Data */}
            <div className="relative flex flex-col items-center justify-center z-10 w-full">
              <motion.span 
                key={`val-${value}`}
                initial={{ scale: 0.5, opacity: 0, filter: "blur(10px)" }}
                animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.3 }}
                className="font-mono font-bold text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFF] via-[#FFF4D2] to-[#D4AF37] drop-shadow-[0_0_12px_rgba(212,175,55,1)] tabular-nums tracking-tighter"
              >
                {String(value).padStart(2, '0')}
              </motion.span>
              
              <div className="w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent my-1 md:my-2 opacity-50"></div>

              <span className="font-sans text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[var(--color-ivory)] group-hover:text-white transition-colors drop-shadow-md">
                {unit}
              </span>
            </div>

            {/* Orbiting Satellite Dot */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
               className="absolute inset-[-5%] origin-center pointer-events-none"
            >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 md:w-3 md:h-3 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,1)]"></div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const coupleY = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const textScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-b from-[#FAF9F6] via-[#FDF3E3] to-[#4A0000] pt-40 pb-16 overflow-hidden">
      
      {/* Cream and Red Overlay Effects */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-multiply pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFF4D2]/40 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#8B0000]/40 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* Floating Particles/Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && [...Array(15)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            animate={{ 
              y: ["-10vh", "-110vh"],
              x: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 200],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className="absolute bottom-0 w-1 h-1 md:w-2 md:h-2 rounded-full bg-[var(--color-gold)] shadow-[0_0_10px_2px_rgba(212,175,55,1)]"
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        
        {/* Dynamic Image Collage */}
        <motion.div style={{ y: coupleY }} className="flex justify-center items-center mb-16 relative">
           <motion.div 
             initial={{ x: -100, opacity: 0, rotate: -15 }}
             whileInView={{ x: 20, opacity: 1, rotate: -5 }}
             viewport={{ once: true }}
             transition={{ duration: 1, type: "spring", bounce: 0.3 }}
             className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[var(--color-gold)] shadow-[0_0_40px_rgba(212,175,55,0.4)] z-10"
           >
             <img src="/pic/brid.jpeg" alt="Bride" className="w-full h-full object-cover" />
           </motion.div>

           <motion.div 
             initial={{ scale: 0, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.5 }}
             className="absolute z-30 bg-white text-[var(--color-maroon)] font-serif text-3xl md:text-5xl italic w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full border-2 border-white shadow-xl"
           >
             &
           </motion.div>

           <motion.div 
             initial={{ x: 100, opacity: 0, rotate: 15 }}
             whileInView={{ x: -20, opacity: 1, rotate: 5 }}
             viewport={{ once: true }}
             transition={{ duration: 1, type: "spring", bounce: 0.3 }}
             className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[var(--color-gold)] shadow-[0_0_40px_rgba(212,175,55,0.4)] z-20"
           >
             <img src="/pic/grrom.jpeg" alt="Groom" className="w-full h-full object-cover" />
           </motion.div>
        </motion.div>

        {/* Elegant Welcoming Text */}
        <motion.div
           style={{ scale: textScale, opacity: textOpacity }}
           className="text-center mb-8 relative"
        >
          <h3 className="font-sans text-sm md:text-base tracking-[0.6em] text-[var(--color-maroon)] uppercase mb-6 flex justify-center items-center gap-6">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[var(--color-maroon)]"></span>
            See You Soon
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[var(--color-maroon)]"></span>
          </h3>
          <h2 className="font-serif text-6xl md:text-8xl lg:text-[140px] text-transparent bg-clip-text bg-gradient-to-b from-[#8B0000] via-[var(--color-maroon)] to-[#4A0000] drop-shadow-[0_10px_20px_rgba(128,0,0,0.1)] pb-4 md:pb-8">
            Prabhat & Shefali
          </h2>
        </motion.div>

        {/* Count Down */}
        <div className="w-full max-w-4xl mx-auto mb-20 relative">
          <Countdown />
        </div>

        {/* Final Outro Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col items-center mt-12 pt-10 border-t border-[var(--color-gold)]/20 w-full max-w-2xl text-center relative"
        >
           {/* Top floating glowing line */}
           <motion.div 
             animate={{ left: ["0%", "100%", "0%"] }}
             transition={{ duration: 5, ease: "linear", repeat: Infinity }}
             className="absolute top-0 w-32 h-[1px] bg-[var(--color-gold)] shadow-[0_0_10px_#D4AF37]"
           ></motion.div>

          <div className="flex flex-col items-center space-y-4">
            <motion.div
               animate={{ scale: [1, 1.05, 1], rotate: [0, 1, -1, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="font-serif text-lg md:text-xl text-[var(--color-ivory)] italic tracking-widest drop-shadow-lg p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm shadow-xl"
            >
              &quot;Made by bride&apos;s brother with lot&apos;s of love&quot;
              <motion.span 
                animate={{ scale: [1, 1.4, 1] }} 
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block ml-3 text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]"
              >
                ❤️
              </motion.span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
