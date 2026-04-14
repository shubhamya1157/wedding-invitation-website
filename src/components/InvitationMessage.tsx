"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WordReveal = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 },
        },
      }}
      className={`flex flex-wrap justify-center gap-x-[0.3em] gap-y-2 ${className || ""}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
            visible: { 
              opacity: 1, 
              y: 0, 
              filter: "blur(0px)", 
              transition: { duration: 0.8, ease: "easeOut" } 
            },
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function InvitationMessage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);

  return (
    <section 
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--color-ivory)] py-20 px-4 md:px-20 text-[var(--color-maroon)]"
    >
      {/* Light Sweep Background Effect */}
      <motion.div 
        animate={{ 
          x: ["-100%", "200%"] 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 8, 
          ease: "linear",
          repeatDelay: 2
        }}
        className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent w-[50%] skew-x-[-20deg]"
      />

      {/* Decorative corners */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-[var(--color-gold)] opacity-50 z-10"></div>
      <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-[var(--color-gold)] opacity-50 z-10"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-[var(--color-gold)] opacity-50 z-10"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-[var(--color-gold)] opacity-50 z-10"></div>

      <motion.div 
        style={{ opacity, y }}
        className="relative z-10 max-w-4xl text-center flex flex-col items-center"
      >
        <div className="mb-10 font-serif flex flex-col items-center gap-3">
          <WordReveal 
            text="णमो अरिहंताणं |" 
            className="text-2xl md:text-3xl text-[var(--color-saffron)] font-bold tracking-wider drop-shadow-sm" 
          />
          <WordReveal 
            text="णमो सिद्धाणं |" 
            className="text-2xl md:text-3xl text-[var(--color-saffron)] font-bold tracking-wider drop-shadow-sm" 
          />
          <WordReveal 
            text="णमो आयरियाणं |" 
            className="text-2xl md:text-3xl text-[var(--color-saffron)] font-bold tracking-wider drop-shadow-sm" 
          />
          <WordReveal 
            text="णमो उवज्झायाणं |" 
            className="text-2xl md:text-3xl text-[var(--color-saffron)] font-bold tracking-wider drop-shadow-sm" 
          />
          <WordReveal 
            text="णमो लोए सव्व साहूणं |" 
            className="text-2xl md:text-3xl text-[var(--color-saffron)] font-bold tracking-wider drop-shadow-sm" 
          />
        </div>

        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="w-24 h-[2px] bg-[var(--color-gold)] my-8 origin-center"
        ></motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="text-center">
            <h3 className="font-serif text-3xl text-[var(--color-maroon)] mb-2">Prabhat Jain</h3>
            <p className="font-sans text-sm text-[var(--color-blue)]">S/o Mr. Narendra Kumar Jain & Mrs. Shashi Jain</p>
          </div>
          <div className="text-[var(--color-saffron)] text-4xl font-serif italic">&</div>
          <div className="text-center">
            <h3 className="font-serif text-3xl text-[var(--color-maroon)] mb-2">Shefali Jain</h3>
            <p className="font-sans text-sm text-[var(--color-blue)]">D/o Mr. Indra Kumar Jain & Mrs. Mamta Jain</p>
          </div>
        </div>

        <WordReveal 
          text='"Two hearts, one beautiful promise..."'
          className="font-serif text-xl md:text-3xl leading-relaxed italic mt-4 mb-10 text-[var(--color-maroon)]"
        />

        <WordReveal 
          text="The big day is finally here! They are starting a new life together, and we would love for you to be there with us. Join us for a wonderful day full of love, joy, and celebration! Your presence will be our greatest gift! Please come to bless the happy couple and make beautiful memories with us. We can't wait to see you there!"
          className="font-sans text-base md:text-lg leading-loose tracking-wide opacity-90 max-w-2xl text-[var(--color-blue)]/90"
        />
      </motion.div>
    </section>
  );
}
