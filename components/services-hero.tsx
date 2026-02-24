"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollIndicator } from "@/components/scroll-indicator";

export function ServicesHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-midnight">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight to-stone/30" />

      {/* Decorative radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />

      {/* White Tree watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] opacity-[0.02]">
        <svg viewBox="0 0 200 300" className="w-full h-full text-parchment" fill="currentColor">
          <rect x="95" y="180" width="10" height="120" />
          <path d="M100 180 Q100 120 60 80 Q40 60 30 40 Q50 70 80 90 Q100 110 100 180" />
          <path d="M100 180 Q100 120 140 80 Q160 60 170 40 Q150 70 120 90 Q100 110 100 180" />
          <path d="M100 150 Q100 100 70 70 Q50 50 40 30 Q60 55 85 75 Q100 95 100 150" />
          <path d="M100 150 Q100 100 130 70 Q150 50 160 30 Q140 55 115 75 Q100 95 100 150" />
          <path d="M100 120 Q100 80 80 50 Q65 35 55 20 Q70 40 90 55 Q100 70 100 120" />
          <path d="M100 120 Q100 80 120 50 Q135 35 145 20 Q130 40 110 55 Q100 70 100 120" />
          <ellipse cx="100" cy="60" rx="15" ry="25" />
          <ellipse cx="85" cy="45" rx="12" ry="20" />
          <ellipse cx="115" cy="45" rx="12" ry="20" />
          <ellipse cx="100" cy="30" rx="10" ry="18" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Decorative line */}
        <div
          className={`gold-line mx-auto mb-8 w-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />

        {/* Main headline */}
        <h1
          className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-parchment mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Services Worthy of
          <span className="block mt-2 text-gold">the White City</span>
        </h1>

        {/* Description */}
        <p
          className={`font-serif text-lg sm:text-xl text-silver max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Just as Minas Tirith stands as a beacon of civilization against the shadows, White Tree
          Systems stands as a pillar of enterprise excellence. Our service offerings address every
          dimension of SAP implementation and optimization, each delivered with the meticulous
          attention that has defined Gondorian craftsmanship for millennia.
        </p>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-parchment to-transparent" />
    </section>
  );
}
