"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Heart, Sun, Music } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
  {
    year: "April 24",
    title: "Haldi (हल्दी)",
    description: "The celebration begins with the vibrant hues of turmeric, love, and laughter. An auspicious start filled with traditional melodies and blessings for the beautiful journey ahead.",
    icon: <Sun className="text-[var(--color-maroon)]" />,
  },
  {
    year: "April 25",
    title: "Mehndi (मेहंदी)",
    description: "An evening of art, dance, and joyous festivity. Intricate henna patterns weave the stories of our love, accompanied by the rhythm of dholaks and unforgettable celebrations.",
    icon: <Music className="text-[var(--color-maroon)]" />,
  },
  {
    year: "April 26",
    title: "Marriage (विवाह)",
    description: "The grand culmination of our vows. Join us as two souls unite under the sacred canopy, surrounded by the warmth of family, loved ones, and eternal promises.",
    icon: <Heart className="text-[var(--color-maroon)]" />,
  },
];

export default function CoupleTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    gsap.fromTo(
      lineRef.current,
      { height: "0%" },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-[#FAF9F6]">
      {/* Cream & Light Red Majestic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#FFF0F0] to-[#FDF3E3]"></div>
        
        {/* Soft Watercolor Orbs */}
        <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-[#FFB6C1]/20 rounded-full blur-[120px] mix-blend-multiply"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[#FFDEB9]/30 rounded-full blur-[120px] mix-blend-multiply"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#FFE4E1]/40 rounded-full blur-[140px] mix-blend-multiply"></div>
        
        {/* Elegant Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.2] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-color-burn"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative"
        >
          {/* Header Backlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-white/70 blur-[50px] rounded-[100%] pointer-events-none"></div>
          
          <h2 className="relative font-serif text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] via-[#CD5C5C] to-[#8B0000] drop-shadow-[0_4px_10px_rgba(205,92,92,0.1)] mb-6">
            Upcoming Events
          </h2>
          <div className="flex items-center justify-center gap-4 w-full">
             <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#CD5C5C]/60"></div>
             <Heart className="w-5 h-5 text-[#CD5C5C]/60" />
             <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#CD5C5C]/60"></div>
          </div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line Container */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#CD5C5C]/10 rounded-full">
            {/* Animated Draw Line */}
            <div ref={lineRef} className="relative w-full bg-gradient-to-b from-[#CD5C5C]/50 via-[#CD5C5C] to-[#8B0000] origin-top rounded-full">
              {/* Glowing Comet Head */}
              <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full 
                shadow-[0_0_15px_6px_rgba(205,92,92,0.6),_0_0_30px_10px_rgba(255,230,230,0.8)] 
                z-20 scale-[1.3]"
              ></div>
            </div>
          </div>

          <div className="space-y-24 pt-10">
            {timelineEvents.map((event, index) => (
              <div 
                key={event.year} 
                className={`relative flex items-center justify-between ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                {/* Empty half for spacing */}
                <div className="w-5/12"></div>

                {/* Center Icon */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="z-10 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-white to-[#FFF0F0] rounded-full flex items-center justify-center border-2 border-[#CD5C5C]/30 shadow-[0_10px_20px_rgba(205,92,92,0.15)] ring-4 ring-white/50 group-hover:scale-110 transition-transform duration-500"
                >
                  {event.icon}
                </motion.div>

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative w-5/12 bg-white/60 backdrop-blur-3xl p-6 md:p-8 rounded-[2rem] shadow-[0_15px_35px_rgba(139,0,0,0.06)] text-left border border-white hover:border-[#CD5C5C]/40 hover:shadow-[0_20px_40px_rgba(205,92,92,0.15)] cursor-pointer group transition-all duration-500 overflow-hidden"
                >
                  {/* Soft Light Red Hover Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFE4E1]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  
                  <span className="relative z-10 font-sans text-[#CD5C5C] font-bold text-sm md:text-lg mb-2 block tracking-[0.2em] uppercase">{event.year}</span>
                  <h3 className="relative z-10 font-serif text-3xl md:text-4xl text-[#8B0000] mb-4 group-hover:text-[#4A0000] transition-colors">{event.title}</h3>
                  <p className="relative z-10 font-sans text-[#5A4A4A] leading-relaxed text-sm md:text-base tracking-wide">{event.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
