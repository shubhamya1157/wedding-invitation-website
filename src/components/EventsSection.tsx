"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    name: "Haldi & Mehendi",
    date: "Apr 25, 2026",
    time: "10:00 AM",
    venue: "Dhabai Marriage Garden",
    color: "from-[var(--color-gold)] to-[var(--color-saffron)]",
  },
  {
    name: "Sangeet Sandhya",
    date: "Apr 25, 2026",
    time: "7:00 PM",
    venue: "Dhabai Marriage Garden",
    color: "from-[var(--color-blue)] to-[var(--color-emerald)]",
  },
  {
    name: "The Wedding",
    date: "Apr 26, 2026",
    time: "Evening",
    venue: "Dhabai M. Garden, Nagar Fort, Tonk",
    color: "from-[var(--color-red)] to-[var(--color-maroon)]",
  },
];

interface EventData {
  name: string;
  date: string;
  time: string;
  venue: string;
  color: string;
}

function EventCard({ event }: { event: EventData }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 1 };
  const rotateX = useSpring(mouseY, springConfig);
  const rotateY = useSpring(mouseX, springConfig);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    
    // Tilt calculations (-20 to 20 degrees)
    const rX = ((y / height) - 0.5) * -20;
    const rY = ((x / width) - 0.5) * 20;
    
    mouseX.set(rY);
    mouseY.set(rX);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      style={{ perspective: 1200 }}
      className="relative w-[85vw] md:w-[600px] h-full shrink-0 snap-center"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`h-full cursor-pointer rounded-[2rem] bg-gradient-to-br ${event.color} p-1 shadow-2xl transition-all duration-300 hover:shadow-[0_0_50px_rgba(212,175,55,0.5)]`}
      >
        <div 
          className="flex h-full flex-col justify-center rounded-[1.8rem] bg-black/40 backdrop-blur-md p-10 text-white border border-white/20 overflow-hidden relative group"
          style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        >
          {/* Subtle moving background shape */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <motion.h3 
            className="mb-8 font-serif text-4xl md:text-5xl font-bold text-[var(--color-gold)] drop-shadow-md z-10"
            style={{ transform: "translateZ(80px)" }}
          >
            {event.name}
          </motion.h3>
          
          <motion.div 
            className="space-y-6 font-sans text-base md:text-lg tracking-wide z-10"
            style={{ transform: "translateZ(50px)" }}
          >
            <div className="flex items-center gap-4">
              <Calendar className="h-6 w-6 text-[var(--color-gold)]" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="h-6 w-6 text-[var(--color-gold)]" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-[var(--color-gold)]" />
              <span>{event.venue}</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12 border-t border-white/20 pt-6 z-10"
            style={{ transform: "translateZ(90px)" }}
          >
            <button className="text-base font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)] transition-colors hover:text-white">
              Get Directions
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function EventsSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // When the top of the target hits the top of the viewport, start scrolling.
    // End when the bottom of the target hits the bottom of the viewport.
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#0a0000]">
      {/* Cinematic Red & Gold Background layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="sticky top-0 h-screen w-full">
          {/* Deep Royal Red Base */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0002] via-[#4a0008] to-[#0d0001]"></div>
          
          {/* Dynamic Glowing Orbs */}
          <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] bg-[#8B0000]/40 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] bg-[var(--color-gold)]/15 rounded-full blur-[150px] mix-blend-screen"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[#ff1a1a]/10 rounded-full blur-[150px] mix-blend-screen"></div>
          
          {/* Luxurious Texture */}
          <div className="absolute inset-0 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-color-dodge"></div>
        </div>
      </div>
      
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden z-10">
        
        <div className="absolute top-16 md:top-24 w-full px-4 text-center z-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-serif text-5xl md:text-7xl text-[var(--color-gold)] mb-4 drop-shadow-xl"
          >
            Wedding Events
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-sans text-[var(--color-ivory)]/80 max-w-2xl mx-auto tracking-widest text-sm md:text-base uppercase"
          >
            Traditional celebrations of love
          </motion.p>
        </div>

        <motion.div 
          style={{ x }}
          className="flex gap-8 md:gap-20 px-[5vw] pt-32 pb-16 items-center h-[75vh]"
        >
          {events.map((event) => (
            <EventCard key={event.name} event={event} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
