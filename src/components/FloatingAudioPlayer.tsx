"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function FloatingAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false); // Initially muted/paused
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/audio/bg song.mpeg");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.8 }}
      onClick={togglePlay}
      aria-label="Toggle Music"
      className="fixed bottom-6 right-6 z-[100] p-4 rounded-full bg-[var(--color-maroon)]/80 backdrop-blur-md border border-[var(--color-gold)] text-[var(--color-gold)] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:bg-[var(--color-gold)] hover:text-[var(--color-maroon)] hover:scale-110 transition-all duration-300"
    >
      {isPlaying ? (
        <Volume2 className="w-6 h-6" />
      ) : (
        <VolumeX className="w-6 h-6" />
      )}
      
      {/* Status Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-[var(--color-maroon)]/90 text-[var(--color-gold)] text-xs font-sans uppercase tracking-[0.2em] rounded border border-[var(--color-gold)]/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
        {isPlaying ? "Pause Music" : "Play Music"}
      </span>

      {/* Ripple ring when playing */}
      {isPlaying && (
        <span className="absolute inset-0 rounded-full border border-[var(--color-gold)] animate-[ping_2s_ease-out_infinite] opacity-50"></span>
      )}
    </motion.button>
  );
}
