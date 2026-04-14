"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("hover-trigger")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        body {
          cursor: none;
        }
        a, button, input, textarea, select {
          cursor: none;
        }
      `}} />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[10000] rounded-full drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: 32,
          height: 32,
          backgroundColor: isHovered ? "rgba(212,175,55,0.15)" : "var(--color-gold)",
          border: isHovered ? "2px solid var(--color-gold)" : "2px solid white",
          marginLeft: "-16px",
          marginTop: "-16px"
        }}
        animate={{
          scale: isHovered ? 2.5 : 1,
          opacity: 1,
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        transition={{ scale: { duration: 0.2 }, opacity: { duration: 0.2 } }}
      />
    </>
  );
}
