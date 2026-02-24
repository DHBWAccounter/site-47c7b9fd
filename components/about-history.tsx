"use client";

import { useEffect, useRef, useState } from "react";

export function AboutHistory() {
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
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-parchment parchment-texture">
      <div className="mx-auto max-w-6xl px-6">
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
            Our History
          </h2>
          <p
            className={`font-serif text-lg text-stone max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            A legacy of service spanning decades
          </p>
        </div>

        {/* Timeline-style content */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/30 to-gold/0" />

          {/* Paragraph 1 */}
          <div
            className={`relative flex items-start mb-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="absolute left-8 md:left-1/2 w-3 h-3 rounded-full bg-gold -translate-x-1/2 mt-3" />
            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12">
              <p className="font-serif text-lg text-midnight/90 leading-relaxed">
                White Tree Systems was established in{" "}
                <span className="text-gold font-semibold">1977</span> by a fellowship of enterprise
                architects who recognized that the growing complexity of business demanded a new
                kind of consultancy — one that combined deep technical expertise with genuine
                understanding of organizational dynamics.
              </p>
            </div>
          </div>

          {/* Paragraph 2 */}
          <div
            className={`relative flex items-start mb-12 md:flex-row-reverse transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="absolute left-8 md:left-1/2 w-3 h-3 rounded-full bg-gold -translate-x-1/2 mt-3" />
            <div className="ml-16 md:ml-0 md:w-1/2 md:pl-12">
              <p className="font-serif text-lg text-midnight/90 leading-relaxed">
                Our founders drew inspiration from the{" "}
                <span className="text-gold font-semibold">Stewards of Gondor</span>: those who
                served faithfully, generation after generation, maintaining excellence regardless of
                circumstance. This philosophy continues to guide our organization today.
              </p>
            </div>
          </div>

          {/* Paragraph 3 */}
          <div
            className={`relative flex items-start mb-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="absolute left-8 md:left-1/2 w-3 h-3 rounded-full bg-gold -translate-x-1/2 mt-3" />
            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12">
              <p className="font-serif text-lg text-midnight/90 leading-relaxed">
                From our headquarters in the{" "}
                <span className="text-gold font-semibold">First Circle of Minas Tirith</span>, we
                have grown to serve clients across Middle-earth. Our regional offices in Edoras,
                Dale, and the Grey Havens ensure local support for clients in every major
                commercial center.
              </p>
            </div>
          </div>

          {/* Paragraph 4 */}
          <div
            className={`relative flex items-start md:flex-row-reverse transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="absolute left-8 md:left-1/2 w-3 h-3 rounded-full bg-gold -translate-x-1/2 mt-3" />
            <div className="ml-16 md:ml-0 md:w-1/2 md:pl-12">
              <p className="font-serif text-lg text-midnight/90 leading-relaxed">
                Today, White Tree Systems employs over{" "}
                <span className="text-gold font-semibold">3,400 consultants and support staff</span>
                . We remain independently owned and operated, allowing us to prioritize client
                outcomes over shareholder expectations. Our success is measured solely by the
                success of those we serve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
