"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Navigation, Crown, Stars, Sparkles } from "lucide-react";

export default function LocationSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax floating speeds
  const leftColumnY = useTransform(scrollYProgress, [0, 1], [100, -80]);
  const rightColumnY = useTransform(scrollYProgress, [0, 1], [250, -180]);

  return (
    <section ref={containerRef} className="py-32 md:py-48 relative overflow-hidden perspective-1000 bg-[#FAF9F6]">
      
      {/* Cream & Sky Blue/Purple Majestic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8F9FE] to-[#FDF3E3]"></div>
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cream-pixels.png')] mix-blend-multiply"></div>
      </div>
      
      {/* Soft Watercolor Sky Blue & Purple Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.5, 1], x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[#00F0FF]/15 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, -100, 0], y: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[20%] left-[5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[#E0B0FF]/25 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], x: [-50, 50, -50], y: [50, -50, 50] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-[40%] left-[40%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-[#D946EF]/10 rounded-full blur-[150px] pointer-events-none mix-blend-multiply"
      />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Architectural Header */}
        <div className="text-center mb-16 md:mb-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            className="inline-block"
          >
            <h2 className="relative font-serif text-6xl md:text-8xl lg:text-[100px] text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#8338EC] to-[#CD5C5C] drop-shadow-[0_4px_10px_rgba(131,56,236,0.1)] tracking-wider mb-6 pb-2">
              Grand Venue
            </h2>
            <div className="flex items-center justify-center gap-4 md:gap-6 w-full relative">
               <div className="h-[2px] w-12 md:w-24 bg-gradient-to-r from-transparent to-[#00B4D8]/60"></div>
               <span className="font-sans text-[10px] md:text-sm text-[#8338EC] uppercase tracking-[0.5em] font-bold">The Ethereal Destination</span>
               <div className="h-[2px] w-12 md:w-24 bg-gradient-to-l from-transparent to-[#8338EC]/60"></div>
            </div>
          </motion.div>
        </div>

        {/* Parallax Pillars Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-12 lg:gap-24 relative max-w-7xl mx-auto">
          
          {/* Left Pillar: The Royal Address */}
          <motion.div 
            style={{ y: leftColumnY }}
            className="w-full lg:w-[45%] relative z-20 group"
          >
            {/* Glass Box */}
            <div className="bg-white/60 backdrop-blur-3xl rounded-[3rem] p-8 md:p-14 border border-white shadow-[0_30px_60px_rgba(131,56,236,0.05)] relative overflow-hidden transition-all duration-700 hover:border-[#8338EC]/30 hover:shadow-[0_20px_60px_rgba(131,56,236,0.15)] group">
              
              <div className="absolute -top-10 -right-10 p-8 opacity-[0.03] blur-[1px] group-hover:opacity-10 transition-opacity duration-700">
                <Crown className="w-64 h-64 text-[#8338EC] -rotate-12" />
              </div>

              <div className="flex items-start md:items-center flex-col md:flex-row gap-6 mb-10 relative z-10">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00B4D8]/10 to-[#8338EC]/10 flex flex-col items-center justify-center border-2 border-[#8338EC]/30 shrink-0 backdrop-blur-md"
                >
                  <MapPin className="w-8 h-8 text-[#8338EC]" />
                </motion.div>
                <div>
                  <h4 className="font-serif text-3xl md:text-4xl text-[#00B4D8] mb-2">Maharaja Shree</h4>
                  <h3 className="font-serif text-4xl md:text-5xl text-[#480CA8] font-bold">Agarsan Bhawan</h3>
                </div>
              </div>

              <div className="pl-6 border-l-2 border-[#8338EC]/30 mb-12 relative z-10">
                <p className="font-sans text-lg md:text-xl leading-relaxed text-[#5A4A4A] tracking-widest uppercase">
                  Kota, Rajasthan<br/>
                  <span className="opacity-70 text-sm font-semibold text-[#8338EC]">India</span>
                </p>
              </div>

              {/* Awesome Poetic Details */}
              <div className="relative z-10 mt-10 pt-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#8338EC]/30 to-transparent"></div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-5 mb-8"
                >
                  <div className="mt-1 p-3 bg-gradient-to-br from-[#00B4D8]/10 to-transparent rounded-2xl text-[#00B4D8] border border-[#00B4D8]/20 shadow-sm">
                    <Stars className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-serif text-2xl text-[#480CA8] leading-none mb-2">An Evening of Magic</h5>
                    <p className="font-sans text-sm md:text-base text-[#5A4A4A] leading-relaxed">Prepare for a night illuminated by joy, where every corner of the venue is styled as a breathtaking ethereal dreamscape.</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-5"
                >
                  <div className="mt-1 p-3 bg-gradient-to-br from-[#8338EC]/10 to-transparent rounded-2xl text-[#8338EC] border border-[#8338EC]/20 shadow-sm">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-serif text-2xl text-[#480CA8] leading-none mb-2">A Celestial Celebration</h5>
                    <p className="font-sans text-sm md:text-base text-[#5A4A4A] leading-relaxed">Join us beneath a painted sky as we take our vows surrounded by the people we cherish the most in this world.</p>
                  </div>
                </motion.div>

                <div className="flex gap-4 items-center justify-center mt-10">
                  <div className="w-2 h-2 rounded-full bg-[#00B4D8]"></div>
                  <div className="w-16 h-[1px] bg-gradient-to-r from-[#00B4D8] to-[#8338EC]"></div>
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#8338EC] to-[#CD5C5C] shadow-[0_0_10px_rgba(131,56,236,0.6)]"></div>
                  <div className="w-16 h-[1px] bg-gradient-to-r from-[#8338EC] to-[#CD5C5C]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#CD5C5C]"></div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Pillar: The Interactive Canvas */}
          <motion.div 
            style={{ y: rightColumnY }}
            className="w-full lg:w-[45%] relative z-10 mt-10 lg:mt-0"
          >
            {/* The Maps Frame */}
            <div className="relative rounded-[3rem] p-2 md:p-3 bg-gradient-to-br from-[#00B4D8]/30 via-[#E0B0FF] to-[#8338EC]/40 shadow-[0_15px_35px_rgba(131,56,236,0.15)] overflow-hidden group">
               
               {/* Animated Map Scanning Line */}
               <motion.div 
                 animate={{ top: ["0%", "100%", "0%"] }}
                 transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                 className="absolute left-0 right-0 h-[3px] bg-white shadow-[0_0_20px_5px_rgba(255,255,255,0.8)] z-20 pointer-events-none opacity-40 mix-blend-overlay"
               />

               <div className="rounded-[2.5rem] overflow-hidden w-full h-[400px] md:h-[600px] relative bg-[#F8F9FE]">
                 <div className="absolute inset-0 animate-pulse flex items-center justify-center -z-10">
                   <span className="font-sans font-bold text-[#8338EC] text-sm tracking-widest uppercase">Loading Map...</span>
                 </div>
                 
                 <iframe 
                   width="100%" 
                   height="100%" 
                   frameBorder="0" 
                   scrolling="no" 
                   src="https://www.openstreetmap.org/export/embed.html?bbox=75.8291,25.1725,75.8491,25.1925&amp;layer=mapnik&amp;marker=25.1825,75.8391"
                   className="w-full h-full filter saturate-[1.2] contrast-[1.05] group-hover:saturate-[1.4] transition-all duration-700 relative z-10 opacity-90 mix-blend-multiply"
                   title="Wedding Venue Map"
                 />
                 
               </div>
            </div>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 flex justify-center w-full relative z-30"
            >
              <a 
                href="https://www.openstreetmap.org/?mlat=25.1825&mlon=75.8391#map=16/25.1825/75.8391" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 bg-gradient-to-r from-[#00B4D8] to-[#8338EC] text-white transition-all duration-500 font-sans uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm px-10 py-5 md:py-6 rounded-full shadow-[0_10px_20px_rgba(131,56,236,0.3)] hover:shadow-[0_15px_30px_rgba(131,56,236,0.4)] hover:-translate-y-2 group w-full lg:w-auto relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1.5s] ease-in-out pointer-events-none"></div>
                
                <span className="relative z-10 font-bold drop-shadow-sm">Open GPS Navigation</span>
                <Navigation className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-3 group-hover:-translate-y-3 group-hover:scale-125 transition-transform duration-500 relative z-10 text-white" />
              </a>
            </motion.div>

          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
