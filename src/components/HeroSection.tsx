"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

// Helper to generate points in a sphere
function generateParticles(count: number) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 10 * Math.cbrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta); // x
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta); // y
    positions[i * 3 + 2] = r * Math.cos(phi); // z
  }
  return positions;
}

function ParticleSystem() {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  
  const particlesCount = 800;
  const positions = useMemo(() => generateParticles(particlesCount), []);

  // Target rotations for mouse parallax
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= delta / 10;
      pointsRef.current.rotation.y -= delta / 15;
    }
    if (groupRef.current) {
      // Gentle parallax based on mouse
      targetRotation.current.x = (state.pointer.y * Math.PI) / 10;
      targetRotation.current.y = (state.pointer.x * Math.PI) / 10;

      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotation.current.x, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotation.current.y, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color="#D4AF37"
            size={0.05}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.8}
          />
        </Points>
      </group>
    </group>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    // Parallax effect on scroll
    gsap.to(textRef.current, {
      yPercent: 50,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  const titleWords = "Prabhat & Shefali".split(" ");

  const titleVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.8,
      },
    },
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[var(--color-maroon)] to-[var(--color-emerald)]"
    >
      {/* 3D Particle Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ParticleSystem />
        </Canvas>
      </div>

      {/* Overlay Content */}
      <div 
        ref={textRef}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center mb-6 space-y-4"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-gold)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-medium">
            ॥ श्री गणेशाय नमः ॥
          </h2>
          <div className="text-center font-serif text-base md:text-2xl text-[#FFF4D2] leading-relaxed drop-shadow-xl mt-2 mb-4">
            <p>वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।</p>
            <p>निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥</p>
          </div>
          <div className="w-24 h-[1px] bg-[var(--color-gold)]/60 my-4"></div>
          <p className="mt-4 font-sans text-xs md:text-base tracking-[0.5em] text-[var(--color-gold)] uppercase">
            A MATCH MADE IN HEAVEN
          </p>
        </motion.div>

        <motion.h1
          variants={titleVariant}
          initial="hidden"
          animate="visible"
          className="font-serif text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] via-[#FFF4D2] to-[var(--color-gold)] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] flex flex-wrap justify-center gap-4"
        >
          {titleWords.map((word, index) => (
            <motion.span key={index} variants={wordVariant} className="inline-block">
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.5, ease: "easeOut" }}
          className="mt-8 font-serif text-2xl md:text-4xl italic text-[var(--color-gold)] drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]"
        >
          April 26, 2026
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2.8, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-center font-serif text-sm md:text-lg text-[var(--color-ivory)]/80 leading-relaxed px-4"
        >
          Two souls, one beautifully written destiny. Join us as our families unite to celebrate the eternal bond of love, trust, and a lifetime of togetherness.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-xs uppercase tracking-widest text-[var(--color-gold)]/70">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="h-10 w-[1px] bg-gradient-to-b from-[var(--color-gold)] to-transparent"
        />
      </motion.div>
    </section>
  );
}

