"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Mail } from "lucide-react";

export function ServicesCTA() {
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
      {/* Decorative background */}
      <div className="absolute inset-0">
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gold/10 blur-3xl" />

        {/* Decorative lines */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="font-serif text-sm tracking-widest text-gold uppercase">
            Your Journey Begins
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-parchment mt-4 mb-6">
            Discuss Your Requirements
          </h2>
          <div className="gold-line mx-auto w-16 mb-8" />
          <p className="font-serif text-lg text-silver max-w-2xl mx-auto leading-relaxed">
            Every organization's needs are unique. Contact our team to explore which service
            combinations will best serve your enterprise's objectives.
          </p>
        </div>

        {/* CTA Cards */}
        <div
          className={`grid md:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Schedule Session Card */}
          <div className="card-regal bg-stone/20 backdrop-blur-sm border-gold/30 p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-parchment mb-3">
                  Schedule a Discovery Session
                </h3>
                <p className="font-serif text-silver leading-relaxed mb-6">
                  Our senior consultants will provide preliminary recommendations based on your
                  industry, current systems, and strategic goals.
                </p>
                <a
                  href="mailto:stewards@whitetreesystems.com"
                  className="btn-gold inline-flex items-center gap-3 text-base px-6 py-3"
                >
                  Schedule Your Session
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="card-regal bg-stone/20 backdrop-blur-sm border-gold/30 p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <Mail className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-parchment mb-3">
                  Contact Our Team
                </h3>
                <p className="font-serif text-silver leading-relaxed mb-6">
                  Reach out directly to discuss your SAP requirements. We respond to all qualified
                  inquiries within one business day.
                </p>
                <div className="space-y-2">
                  <p className="font-serif text-parchment/80">
                    <span className="text-gold">Email:</span>{" "}
                    <a
                      href="mailto:stewards@whitetreesystems.com"
                      className="hover:text-gold transition-colors"
                    >
                      stewards@whitetreesystems.com
                    </a>
                  </p>
                  <p className="font-serif text-parchment/80">
                    <span className="text-gold">Partner:</span>{" "}
                    <a
                      href="https://www.sap.com/about.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold transition-colors"
                    >
                      SAP Partner Network
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div
          className={`mt-12 pt-8 border-t border-gold/10 text-center transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="font-serif text-sm text-silver/60 mb-4">
            Trusted by kingdoms across Middle-earth
          </p>
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
