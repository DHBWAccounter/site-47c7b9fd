"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";

export function CTA() {
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
      id="contact"
      className="relative py-24 sm:py-32 bg-midnight overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0">
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gold/10 blur-3xl" />
        
        {/* Decorative lines */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        {/* Section header */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="font-serif text-sm tracking-widest text-gold uppercase">
            Take the First Step
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-parchment mt-4 mb-6">
            Begin Your Transformation Journey
          </h2>
          <div className="gold-line mx-auto w-16 mb-8" />
          <p className="font-serif text-lg sm:text-xl text-silver max-w-2xl mx-auto leading-relaxed mb-12">
            The path to enterprise excellence begins with a single step. Our senior consultants are
            available to assess your realm's needs and chart a course toward operational mastery.
          </p>
        </div>

        {/* CTA Card */}
        <div
          className={`card-regal bg-stone/20 backdrop-blur-sm border-gold/30 p-8 sm:p-12 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-start gap-4 text-left">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
              <Calendar className="h-6 w-6 text-gold" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-2xl font-medium text-parchment mb-3">
                Request a Consultation
              </h3>
              <p className="font-serif text-silver leading-relaxed mb-6">
                Meet with our Stewards of Strategy to discuss your organization's unique challenges
                and opportunities. Initial assessments are provided at no obligation to qualified
                enterprises.
              </p>
              <a
                href="mailto:stewards@whitetreesystems.com"
                className="btn-gold inline-flex items-center gap-3"
              >
                Schedule Your Assessment
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div
          className={`mt-12 pt-8 border-t border-gold/10 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="font-serif text-sm text-silver/60 mb-4">Trusted by kingdoms across Middle-earth</p>
          <div className="flex flex-wrap justify-center gap-8 text-parchment/40 font-serif text-sm">
            <span>Kingdom of Rohan</span>
            <span>•</span>
            <span>Erebor Consortium</span>
            <span>•</span>
            <span>Guild of Dale</span>
            <span>•</span>
            <span>Realm of Gondor</span>
          </div>
        </div>
      </div>
    </section>
  );
}
