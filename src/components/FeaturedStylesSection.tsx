import React, { useEffect, useRef, useState } from 'react';
import { Star, Shield, Zap } from 'lucide-react';

const FeaturedStylesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const styles = [
    {
      name: 'Full Lite Patio Door with Internal Blinds',
      description: 'Control light and privacy without external shades.',
      image: '/WhiteGliding1.png',
      chips: [
        { label: 'Energy Star', icon: Star },
        { label: 'Impact Option', icon: Shield }
      ],
      type: 'patio door'
    },
    {
      name: 'Impact-Resistant Hinged Patio Door',
      description: 'Extra strength for coastal and storm-prone regions.',
      image: '/p2.png',
      chips: [
        { label: 'Impact Resistant', icon: Shield },
        { label: 'Energy Efficient', icon: Zap }
      ],
      type: 'patio door'
    },
    {
      name: 'Half Lite Entry Door with Decorative Glass',
      description: 'Daylight with a classic welcome.',
      image: '34P-MP_rev.png',
      chips: [
        { label: 'Energy Star', icon: Star },
        { label: 'Decorative Glass', icon: Shield }
      ],
      type: 'entry door'
    },
    {
      name: 'Solid Panel Fiberglass Entry Door',
      description: 'A timeless look with low maintenance.',
      image: '/Contemporary-Teak-Medium-Oak_new_8.17-2.png',
      chips: [
        { label: 'Low Maintenance', icon: Zap },
        { label: 'Durable', icon: Shield }
      ],
      type: 'entry door'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            Popular Styles, Built for You
          </h2>
          <p className="text-lg text-[#8b8c8e] max-w-3xl mx-auto">
            Explore best-selling designs—crafted in durable, energy-efficient fiberglass.
          </p>
        </div>

        {/* Styles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {styles.map((style, index) => (
            <div
              key={index}
              className={`group cursor-pointer transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              role="button"
              tabIndex={0}
              aria-label={`View ${style.name} details`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  // Handle navigation
                }
              }}
            >
              {/* Card Container */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 focus-within:ring-2 focus-within:ring-[#f2942f] focus-within:ring-offset-2">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Spec Chips - Appear on Hover */}
                  <div className={`absolute top-4 right-4 space-y-2 transition-all duration-300 ${
                    hoveredCard === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}>
                    {style.chips.map((chip, chipIndex) => (
                      <div
                        key={chipIndex}
                        className="bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1 text-xs font-medium text-[#8b8c8e]"
                      >
                        <chip.icon className="w-3 h-3" />
                        <span>{chip.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-black mb-2 leading-tight">
                    {style.name}
                  </h3>
                  
                  <p className="text-[#8b8c8e] text-sm mb-4 leading-relaxed">
                    {style.description}
                  </p>

                  {/* CTA */}
                  <button className="w-full bg-[#f2942f] text-white py-3 px-4 rounded-lg font-semibold text-sm hover:bg-[#e6841f] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2942f] focus:ring-offset-2 group-hover:shadow-md">
                    View Style
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStylesSection;