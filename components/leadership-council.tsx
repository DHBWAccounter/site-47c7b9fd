"use client";

import { useEffect, useRef, useState } from "react";
import { Crown, Lightbulb, Settings, Sparkles } from "lucide-react";

const leaders = [
  {
    name: "Boromir of the Treasury",
    title: "Chief Executive Officer",
    icon: Crown,
    description:
      "With 28 years of SAP consulting experience, Boromir leads White Tree Systems with the strategic vision of one who has guided transformations for kingdoms and corporations alike. Previously served as Director of Enterprise Systems for the realm of Gondor.",
  },
  {
    name: "Faramir the Wise",
    title: "Chief Strategy Officer",
    icon: Lightbulb,
    description:
      "A recognized thought leader in enterprise architecture, Faramir oversees our service development and strategic partnerships. His research on digital transformation frameworks has been published in journals across the Western and Eastern realms.",
  },
  {
    name: "Lady Éowyn",
    title: "Chief Operations Officer",
    icon: Settings,
    description:
      "Formerly led operations for the largest agricultural cooperative in Rohan before joining White Tree Systems. Brings practical expertise in scaling operations and building high-performance teams.",
  },
  {
    name: "Gandalf the Grey",
    title: "Senior Advisor",
    icon: Sparkles,
    description:
      "Provides strategic counsel on our most complex engagements. His ability to see beyond the present moment to future possibilities has proven invaluable to clients facing transformational decisions.",
  },
];

export function LeadershipCouncil() {
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
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-cream/50">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className={`gold-line mx-auto mb-6 w-16 transition-all duration-700 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />
          <h2
            className={`font-display text-4xl md:text-5xl font-light text-midnight mb-4 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Leadership Council
          </h2>
          <p
            className={`font-serif text-lg text-stone max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Guiding our organization with wisdom earned through ages
          </p>
        </div>

        {/* Leadership grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {leaders.map((leader, index) => {
            const Icon = leader.icon;
            return (
              <div
                key={leader.name}
                className={`card-regal p-8 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {/* Icon and title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-midnight">
                      {leader.name}
                    </h3>
                    <p className="font-serif text-gold text-sm tracking-wide uppercase">
                      {leader.title}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="font-serif text-midnight/80 leading-relaxed pl-16">
                  {leader.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
