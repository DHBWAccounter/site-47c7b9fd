"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: "127",
    label: "Realms Served",
    description: "From the Iron Hills to the Bay of Belfalas, our clients span the breadth of Middle-earth's commercial and governmental enterprises.",
  },
  {
    value: "3,400+",
    label: "Consultants",
    description: "Our fellowship of certified SAP experts represents the largest consultancy this side of the Misty Mountains.",
  },
  {
    value: "98.7%",
    label: "Implementation Success",
    description: "A record unmatched in the industry, built on methodologies refined through generations of service.",
  },
  {
    value: "47",
    label: "Years of Operation",
    description: "Established in the year 1977 of the Third Age, we have grown alongside the enterprises we serve.",
  },
];

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-midnight overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <span
            className={`font-serif text-sm tracking-widest text-gold uppercase transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Our Heritage
          </span>
          <h2
            className={`font-display text-4xl sm:text-5xl md:text-6xl font-light text-parchment mt-4 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            A Legacy of Excellence
          </h2>
          <div
            className={`gold-line mx-auto w-16 mt-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center lg:text-left transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Value */}
              <div className="font-display text-5xl sm:text-6xl lg:text-5xl font-light gold-text mb-2">
                {stat.value}
              </div>
              {/* Label */}
              <div className="font-display text-xl text-parchment mb-4">{stat.label}</div>
              {/* Description */}
              <p className="font-serif text-sm text-silver leading-relaxed max-w-xs mx-auto lg:mx-0">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
