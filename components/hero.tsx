"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-midnight"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight to-stone/50" />
      
      {/* Decorative radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-3xl" />
      
      {/* White Tree silhouette watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[600px] opacity-[0.03]">
        <svg viewBox="0 0 200 300" className="w-full h-full text-parchment" fill="currentColor">
          {/* Tree trunk */}
          <rect x="95" y="180" width="10" height="120" />
          {/* Main branches */}
          <path d="M100 180 Q100 120 60 80 Q40 60 30 40 Q50 70 80 90 Q100 110 100 180" />
          <path d="M100 180 Q100 120 140 80 Q160 60 170 40 Q150 70 120 90 Q100 110 100 180" />
          <path d="M100 150 Q100 100 70 70 Q50 50 40 30 Q60 55 85 75 Q100 95 100 150" />
          <path d="M100 150 Q100 100 130 70 Q150 50 160 30 Q140 55 115 75 Q100 95 100 150" />
          <path d="M100 120 Q100 80 80 50 Q65 35 55 20 Q70 40 90 55 Q100 70 100 120" />
          <path d="M100 120 Q100 80 120 50 Q135 35 145 20 Q130 40 110 55 Q100 70 100 120" />
          {/* Crown top */}
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
          className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-parchment mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          One System to Govern
          <span className="block mt-2 text-gold">Your Enterprise</span>
        </h1>

        {/* Subheadline */}
        <p
          className={`font-serif text-lg sm:text-xl md:text-2xl text-parchment/70 max-w-3xl mx-auto mb-8 leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          In the halls of Minas Tirith, where the White Tree stands as a symbol of enduring
          excellence, White Tree Systems has served the realms of Middle-earth for over three ages.
        </p>

        {/* Description */}
        <p
          className={`font-serif text-base sm:text-lg text-silver max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          We are the Stewards of your digital transformation — guardians of business process
          optimization until the full potential of your enterprise is realized.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a href="#contact" className="btn-gold">
            Begin Your Journey
          </a>
          <a
            href="#solutions"
            className="font-serif text-parchment/80 hover:text-gold transition-colors border-b border-parchment/30 hover:border-gold pb-1"
          >
            Explore Our Solutions
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 hover:text-gold transition-all duration-300 scroll-indicator ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Scroll to content"
      >
        <ChevronDown className="h-8 w-8" />
      </button>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-parchment to-transparent" />
    </section>
  );
}
