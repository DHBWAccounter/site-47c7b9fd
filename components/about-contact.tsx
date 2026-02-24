"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Building, Mail, Phone, Clock } from "lucide-react";
import Link from "next/link";

export function AboutContact() {
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
      className="relative py-24 md:py-32 bg-parchment parchment-texture"
    >
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
            Contact Our Council
          </h2>
          <p
            className={`font-serif text-lg text-stone max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Reach out to begin your journey toward enterprise excellence
          </p>
        </div>

        {/* Contact grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Headquarters */}
          <div
            className={`card-regal p-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-gold" />
              <h3 className="font-display text-xl font-medium text-midnight">Headquarters</h3>
            </div>
            <div className="font-serif text-midnight/80 space-y-1">
              <p className="font-medium">White Tree Systems</p>
              <p>First Circle, near the Great Gate</p>
              <p>Minas Tirith, Gondor</p>
            </div>
          </div>

          {/* Regional Offices */}
          <div
            className={`card-regal p-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Building className="w-5 h-5 text-gold" />
              <h3 className="font-display text-xl font-medium text-midnight">Regional Offices</h3>
            </div>
            <div className="font-serif text-midnight/80 space-y-2">
              <p>Edoras, Rohan</p>
              <p>Dale, Rhovanion</p>
              <p>The Grey Havens, Lindon</p>
            </div>
          </div>

          {/* Correspondence */}
          <div
            className={`card-regal p-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-5 h-5 text-gold" />
              <h3 className="font-display text-xl font-medium text-midnight">Correspondence</h3>
            </div>
            <div className="font-serif text-midnight/80 space-y-3">
              <p>
                <span className="text-gold">Raven:</span>{" "}
                <a
                  href="mailto:raven@whitetreesystems.gondor"
                  className="hover:text-gold transition-colors"
                >
                  raven@whitetreesystems.gondor
                </a>
              </p>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                <p>
                  <span className="text-gold">Beacon Signal:</span> +24 (Gondor) 7-WHITE-TREE
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div
          className={`mt-8 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-cream/50 border border-gold/20 rounded-sm">
            <Clock className="w-5 h-5 text-gold" />
            <div className="font-serif text-midnight/80">
              <p className="font-medium">Business Hours</p>
              <p className="text-sm">Sunrise to Sunset, Monday through Saturday</p>
              <p className="text-xs text-stone mt-1">
                Emergency support available for clients with Ranger-level service agreements
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <Link href="/services" className="btn-gold">
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
