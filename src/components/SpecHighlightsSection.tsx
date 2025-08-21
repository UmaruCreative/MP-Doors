import React, { useEffect, useRef, useState } from 'react';
import { Shield, Zap, Wrench, MapPin } from 'lucide-react';

const SpecHighlightsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const specs = [
    {
      icon: Shield,
      label: 'Durable',
      description: 'Fiberglass resists warping, rotting, denting'
    },
    {
      icon: Zap,
      label: 'Energy Efficient',
      description: 'Up to 6× more efficient than wood'
    },
    {
      icon: Wrench,
      label: 'Low Maintenance',
      description: 'Easy to clean, paint, or stain'
    },
    {
      icon: MapPin,
      label: 'Trusted Nationwide',
      description: 'Available exclusively at The Home Depot'
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {specs.map((spec, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transform transition-all duration-500 hover:scale-105 focus-within:ring-2 focus-within:ring-[#f2942f] focus-within:ring-offset-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="bg-[#f2942f] p-3 rounded-lg inline-flex mb-4">
                  <spec.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-black text-lg mb-2">
                  {spec.label}
                </h3>
                <p className="text-[#8b8c8e] leading-relaxed">
                  {spec.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecHighlightsSection;