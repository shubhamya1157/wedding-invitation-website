"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import SplashOverlay from "@/components/SplashOverlay";
import InvitationMessage from "@/components/InvitationMessage";
import CoupleTimeline from "@/components/CoupleTimeline";
import LocationSection from "@/components/LocationSection";
import IntroductionSection from "@/components/IntroductionSection";
import Footer from "@/components/Footer";
import FloatingAudioPlayer from "@/components/FloatingAudioPlayer";

// Disable SSR for HeroSection to avoid ReactCurrentOwner errors with R3F in Next 15
const HeroSection = dynamic(() => import("@/components/HeroSection"), { ssr: false });

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <main className="relative min-h-screen">
      {!hasEntered && (
        <SplashOverlay onEnter={() => setHasEntered(true)} />
      )}
      
      {hasEntered && <FloatingAudioPlayer />}

      <div 
        className={`transition-opacity duration-1000 ${hasEntered ? "opacity-100" : "opacity-0 h-screen overflow-hidden"}`}
      >
        <HeroSection />
        <InvitationMessage />
        <IntroductionSection />
        <CoupleTimeline />
        <LocationSection />
        <Footer />
      </div>
    </main>
  );
}
