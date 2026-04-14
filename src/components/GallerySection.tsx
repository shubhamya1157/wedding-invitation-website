"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const photos = [
  "https://images.unsplash.com/photo-1544257124-b15d2a9db2a5?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606558223689-ba3017a41ec5?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1533140902263-54911da21f9f?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000&auto=format&fit=crop",
];

function MagneticImage({ src, onClick }: { src: string; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Move slightly towards cursor
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative group cursor-pointer overflow-hidden rounded-xl border border-[var(--color-gold)]/20 hover-trigger"
      onClick={onClick}
    >
      <motion.img 
        style={{ x: springX, y: springY }}
        src={src} 
        alt="Couple Memory" 
        className="w-full h-auto object-cover scale-[1.05] transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-maroon)]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
        <ZoomIn className="text-[var(--color-gold)] w-10 h-10 transform scale-50 transition-transform duration-300 group-hover:scale-100" />
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [20, -200]);

  const col1 = photos.filter((_, i) => i % 3 === 0);
  const col2 = photos.filter((_, i) => i % 3 === 1);
  const col3 = photos.filter((_, i) => i % 3 === 2);

  const columns = [
    { data: col1, y: y1 },
    { data: col2, y: y2 },
    { data: col3, y: y3 },
  ];

  return (
    <section ref={sectionRef} className="bg-[var(--color-maroon)] py-32 relative min-h-screen overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-5xl md:text-7xl text-[var(--color-gold)] mb-6 drop-shadow-xl">Capturing Moments</h2>
            <div className="w-24 h-px bg-[var(--color-gold)] mx-auto mb-8"></div>
            <p className="font-sans text-[var(--color-ivory)] max-w-xl mx-auto opacity-80 tracking-wide">
              Glimpses of love, laughter, and the beautiful memories we&apos;ve created together.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 justify-center">
          {columns.map((col, colIndex) => (
            <motion.div 
              key={colIndex} 
              style={{ y: col.y }}
              className="flex flex-col gap-6 lg:gap-8 w-full md:w-1/3"
            >
              {col.data.map((img) => (
                <MagneticImage 
                  key={img} 
                  src={img} 
                  onClick={() => setSelectedImg(img)} 
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-[var(--color-gold)] transition-colors p-2 z-[60]"
              onClick={() => setSelectedImg(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              src={selectedImg}
              alt="Enlarged Memory"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-md border border-[var(--color-gold)]/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
