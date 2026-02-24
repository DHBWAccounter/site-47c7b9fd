"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, BookOpen, Scale, Star } from "lucide-react";

const values = [
  {
    title: "Stewardship",
    icon: Shield,
    description:
      "We serve our clients' interests as faithfully as the Stewards of old served Gondor. Your success is our purpose, and we guard that trust with unwavering dedication.",
  },
  {
    title: "Wisdom",
    icon: BookOpen,
    description:
      "Knowledge without wisdom leads to failure. We bring not only technical expertise but the judgment to apply it appropriately, learned through decades of diverse experience.",
  },
  {
    title: "Integrity",
    icon: Scale,
    description:
      "Our word is our bond. In an industry often marked by overpromising, we commit only to what we can deliver, and we deliver on every commitment.",
  },
  {
    title: "Excellence",
    icon: Star,
    description:
      "Mediocrity has no place in our work. Every deliverable, every recommendation, every interaction reflects our commitment to the highest standards.",
  },
];

export function AboutValues() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-midnight overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-gold/10" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-gold/10" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-gold/10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-gold/10" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className={`gold-line mx-auto mb-6 w-16 transition-all duration-700 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />
          <h2
            className={`font-display text-4xl md:text-5xl font-light text-parchment mb-4 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Our Values
          </h2>
          <p
            className={`font-serif text-lg text-silver max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            The pillars that guide our every action
          </p>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className={`group relative p-8 border border-gold/20 bg-stone/20 backdrop-blur-sm transition-all duration-700 hover:border-gold/40 hover:bg-stone/30 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold/60 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-medium text-parchment mb-4">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="font-serif text-silver/90 leading-relaxed text-sm">
                  {value.description}
                </p>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/20 group-hover:border-gold/40 transition-colors duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
