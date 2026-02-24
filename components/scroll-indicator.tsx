"use client";

import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  const scrollToContent = () => {
    const nextSection = document.querySelector("section:nth-of-type(2)");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={scrollToContent}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 hover:text-gold transition-all duration-300 scroll-indicator animate-float"
      aria-label="Scroll to content"
    >
      <ChevronDown className="h-8 w-8" />
    </button>
  );
}
