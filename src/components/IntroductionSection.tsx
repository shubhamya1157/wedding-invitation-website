"use client";

import { motion } from "framer-motion";

export default function IntroductionSection() {
  return (
    <section className="bg-[var(--background)] py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-gold)]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-maroon)]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10 text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-6xl text-[var(--color-maroon)] mb-4"
        >
          The Happy Couple
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-1 w-24 bg-[var(--color-gold)] mx-auto mb-16"
        />

        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32">
          {/* Groom */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Animated Ring Container */}
            <div className="relative w-72 h-72 rounded-full p-2 flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.4)]">
              {/* Rotating Gradient Background */}
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="absolute inset-[-50%] w-[200%] h-[200%] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_180deg,var(--color-gold)_360deg)] opacity-70"
              />
              <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="absolute inset-[-50%] w-[200%] h-[200%] rounded-full bg-[conic-gradient(from_180deg,transparent_0deg,transparent_180deg,var(--color-maroon)_360deg)] opacity-70"
              />
              {/* Image Container */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
                <img 
                  src="/pic/grrom.jpeg" 
                  alt="Groom" 
                  className="w-full h-full object-cover scale-110 object-top hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
            
            <div className="mt-8 bg-white/60 backdrop-blur-md px-10 py-6 rounded-3xl border border-[var(--color-gold)]/30 shadow-xl relative inline-block">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--color-gold)] flex items-center justify-center text-white border-2 border-white shadow-lg text-sm font-bold">G</div>
              <h3 className="font-serif text-3xl text-[var(--color-maroon)] mb-2">Prabhat Jain</h3>
              <p className="font-sans text-[var(--color-blue)]">The Groom</p>
            </div>
          </motion.div>

          {/* Ampersand */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            className="text-[var(--color-gold)] text-7xl font-serif italic hidden md:block opacity-80"
          >
            &
          </motion.div>

          {/* Bride */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Animated Ring Container */}
            <div className="relative w-72 h-72 rounded-full p-2 flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.4)]">
              {/* Rotating Gradient Background */}
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="absolute inset-[-50%] w-[200%] h-[200%] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_180deg,var(--color-gold)_360deg)] opacity-70"
              />
              <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="absolute inset-[-50%] w-[200%] h-[200%] rounded-full bg-[conic-gradient(from_180deg,transparent_0deg,transparent_180deg,var(--color-maroon)_360deg)] opacity-70"
              />
              {/* Image Container */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
                <img 
                  src="/pic/brid.jpeg" 
                  alt="Bride" 
                  className="w-full h-full object-cover scale-110 object-top hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
            
            <div className="mt-8 bg-white/60 backdrop-blur-md px-10 py-6 rounded-3xl border border-[var(--color-gold)]/30 shadow-xl relative inline-block">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--color-maroon)] flex items-center justify-center text-white border-2 border-white shadow-lg text-sm font-bold">B</div>
              <h3 className="font-serif text-3xl text-[var(--color-maroon)] mb-2">Shefali Jain</h3>
              <p className="font-sans text-[var(--color-blue)]">The Bride</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-sans tracking-[0.3em] text-sm text-[var(--color-emerald)] uppercase mb-4 block">Flashback</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-blue)] mb-4">Engagement Memories</h2>
          <div className="w-16 h-1 bg-[var(--color-maroon)] mx-auto opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          {[
            "/pic/WhatsApp Image 2026-04-14 at 1.41.44 AM.jpeg",
            "/pic/WhatsApp Image 2026-04-14 at 1.42.02 AM (1).jpeg",
            "/pic/WhatsApp Image 2026-04-14 at 1.42.02 AM.jpeg"
          ].map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group rounded-xl overflow-hidden shadow-2xl bg-white p-3 border border-[var(--color-gold)]/30"
            >
              {/* Golden Frame Inner Border */}
              <div className="absolute inset-0 border-2 border-[var(--color-gold)]/20 m-4 z-10 pointer-events-none rounded-lg z-20 group-hover:scale-[0.95] transition-transform duration-500"></div>
              
              <div className="relative h-80 md:h-96 w-full overflow-hidden rounded-lg">
                <img 
                  src={src} 
                  alt="Engagement Memory" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Vintage overlay effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-maroon)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
