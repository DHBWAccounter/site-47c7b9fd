"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Layers, Workflow, Users } from "lucide-react";

const solutions = [
  {
    icon: Layers,
    title: "S/4HANA Implementation",
    description:
      "Migrate your enterprise to the next generation of SAP with the strategic vision of those who have weathered every technological transition since the Second Age.",
    link: "https://www.sap.com/products/s4hana.html",
    linkText: "Learn about S/4HANA",
  },
  {
    icon: Workflow,
    title: "Business Process Optimization",
    description:
      "Streamline operations across your organization. Like the beacon-fires of Gondor, information flows swiftly and reliably to those who need it.",
    link: "/services",
    linkText: "Explore services",
  },
  {
    icon: Users,
    title: "Change Management",
    description:
      "Guide your people through transformation. Our Stewards understand that true change requires patience, wisdom, and unwavering commitment to those you serve.",
    link: "/services",
    linkText: "Our approach",
  },
];

export function Solutions() {
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
      id="solutions"
      className="relative py-24 sm:py-32 parchment-texture bg-parchment"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <span
            className={`font-serif text-sm tracking-widest text-gold uppercase transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Our Expertise
          </span>
          <h2
            className={`font-display text-4xl sm:text-5xl md:text-6xl font-light text-midnight mt-4 mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Solutions Fit for a Kingdom
          </h2>
          <div
            className={`gold-line mx-auto w-16 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          />
          <p
            className={`font-serif text-lg sm:text-xl text-stone max-w-3xl mx-auto mt-8 leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Every realm faces unique challenges, and our approach honors the distinct character of
            each client. Whether you manage the supply chains of a trading empire or the complex
            taxation systems of a sovereign state, our methodologies are crafted with the precision
            of Númenorean craftsmanship.
          </p>
        </div>

        {/* Solutions grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <article
                key={solution.title}
                className={`card-regal p-8 lg:p-10 group transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-14 h-14 rounded-full bg-midnight/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                    <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-medium text-midnight mb-4">
                  {solution.title}
                </h3>
                <p className="font-serif text-stone leading-relaxed mb-6">{solution.description}</p>

                {/* Link */}
                {solution.link.startsWith("http") ? (
                  <a
                    href={solution.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-serif text-gold hover:text-gold-light transition-colors group/link"
                  >
                    {solution.linkText}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                ) : (
                  <a
                    href={solution.link}
                    className="inline-flex items-center gap-2 font-serif text-gold hover:text-gold-light transition-colors group/link"
                  >
                    {solution.linkText}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
