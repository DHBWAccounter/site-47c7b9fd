"use client";

import { useEffect, useRef, useState } from "react";
import { Layers, Settings, Shield, GraduationCap } from "lucide-react";

interface FocusArea {
  title: string;
  description: string;
}

interface Tier {
  name: string;
  description: string;
}

interface Modality {
  title: string;
  description: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  approach?: string;
  engagement?: string;
  focusAreas?: FocusArea[];
  experience?: string;
  tiers?: Tier[];
  knowledgeArchives?: string;
  modalities?: Modality[];
  certification?: string;
  icon: string;
}

interface ServiceDetailProps {
  service: Service;
  index: number;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  layers: Layers,
  optimize: Settings,
  support: Shield,
  training: GraduationCap,
};

export function ServiceDetail({ service, index }: ServiceDetailProps) {
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

  const Icon = iconMap[service.icon] || Layers;
  const isEven = index % 2 === 0;

  return (
    <section
      ref={sectionRef}
      id={service.id}
      className={`relative py-20 sm:py-28 ${isEven ? "bg-parchment" : "bg-cream/50"}`}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-start transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Icon and Title Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-midnight border-2 border-gold/30">
                  <Icon className="h-8 w-8 text-gold" />
                </div>
              </div>

              {/* Title */}
              <h2 className="font-display text-3xl sm:text-4xl font-light text-midnight mb-4">
                {service.title}
              </h2>

              {/* Decorative line */}
              <div className="gold-line w-16 mb-6" />

              {/* Description */}
              <p className="font-serif text-lg text-stone leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-8">
            {/* Approach section */}
            {service.approach && (
              <div className="mb-10">
                <h3 className="font-display text-xl font-medium text-midnight mb-4">
                  Our Approach
                </h3>
                <div className="font-serif text-silver leading-relaxed whitespace-pre-line">
                  {service.approach}
                </div>
                {service.engagement && (
                  <div className="mt-6 p-4 bg-gold/10 border-l-2 border-gold rounded-r">
                    <p className="font-serif text-sm text-midnight">
                      <span className="font-semibold">Typical Engagement:</span>{" "}
                      {service.engagement}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Focus Areas */}
            {service.focusAreas && (
              <div className="mb-10">
                <h3 className="font-display text-xl font-medium text-midnight mb-6">
                  Areas of Focus
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.focusAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="card-regal p-5 bg-white/50"
                    >
                      <h4 className="font-display text-lg font-medium text-midnight mb-2">
                        {area.title}
                      </h4>
                      <p className="font-serif text-sm text-silver leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  ))}
                </div>
                {service.experience && (
                  <p className="font-serif text-silver leading-relaxed mt-6 italic">
                    {service.experience}
                  </p>
                )}
              </div>
            )}

            {/* Service Tiers */}
            {service.tiers && (
              <div className="mb-10">
                <h3 className="font-display text-xl font-medium text-midnight mb-6">
                  Service Tiers
                </h3>
                <div className="space-y-4">
                  {service.tiers.map((tier, idx) => (
                    <div
                      key={idx}
                      className={`card-regal p-6 bg-white/50 ${
                        idx === 2 ? "border-gold/40" : ""
                      }`}
                    >
                      <h4 className="font-display text-lg font-medium text-gold mb-2">
                        {tier.name}
                      </h4>
                      <p className="font-serif text-silver leading-relaxed">
                        {tier.description}
                      </p>
                    </div>
                  ))}
                </div>
                {service.knowledgeArchives && (
                  <div className="mt-6 p-4 bg-midnight/5 border border-gold/20 rounded">
                    <p className="font-serif text-sm text-midnight flex items-start gap-2">
                      <span className="text-gold mt-0.5">✦</span>
                      {service.knowledgeArchives}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Training Modalities */}
            {service.modalities && (
              <div className="mb-10">
                <h3 className="font-display text-xl font-medium text-midnight mb-6">
                  Training Modalities
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.modalities.map((modality, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 bg-white/50 border border-gold/10 rounded hover:border-gold/30 transition-colors"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                        <span className="font-display text-gold text-sm">{idx + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-display text-base font-medium text-midnight mb-1">
                          {modality.title}
                        </h4>
                        <p className="font-serif text-sm text-silver leading-relaxed">
                          {modality.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {service.certification && (
                  <p className="font-serif text-silver leading-relaxed mt-6">
                    {service.certification}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
