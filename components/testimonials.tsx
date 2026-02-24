"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "When our supply chains faltered under the weight of rapid expansion, White Tree Systems restored order with the efficiency of a well-ordered cavalry. Our granaries have never been better managed.",
    author: "Éomer",
    title: "King of the Mark",
    organization: "Kingdom of Rohan",
  },
  {
    quote:
      "The consultants understood our complex inventory needs before we spoke them. Their SAP S/4HANA implementation increased our output tracking precision by 340%. Worth every gold piece.",
    author: "Balin",
    title: "Treasurer of Erebor",
    organization: "Dwarven Mining Consortium of Erebor",
  },
  {
    quote:
      "Professional, thorough, and remarkably patient with our legacy systems dating back to the days of Bard. The migration was seamless.",
    author: "Master Trader Brand",
    title: "Guild Council",
    organization: "Guild of Dale",
  },
];

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 parchment-texture bg-cream/30"
    >
      {/* Decorative border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <span
            className={`font-serif text-sm tracking-widest text-gold uppercase transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Testimonials
          </span>
          <h2
            className={`font-display text-4xl sm:text-5xl md:text-6xl font-light text-midnight mt-4 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Trusted Across the Realm
          </h2>
          <div
            className={`gold-line mx-auto w-16 mt-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Testimonials grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.author}
              className={`card-regal p-8 lg:p-10 relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Quote mark */}
              <span className="quote-mark" aria-hidden="true">
                "
              </span>

              {/* Quote */}
              <blockquote className="font-serif text-lg text-stone leading-relaxed mb-8 relative z-10">
                {testimonial.quote}
              </blockquote>

              {/* Attribution */}
              <footer className="border-t border-gold/20 pt-6">
                <cite className="not-italic">
                  <div className="font-display text-xl font-medium text-midnight">
                    {testimonial.author}
                  </div>
                  <div className="font-serif text-sm text-gold mt-1">{testimonial.title}</div>
                  <div className="font-serif text-sm text-stone mt-0.5">
                    {testimonial.organization}
                  </div>
                </cite>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
