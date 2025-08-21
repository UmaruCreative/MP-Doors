import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const ExploreSection = () => {
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

  const productTypes = [
    {
      title: 'Entry Doors',
      description: 'Create a welcoming, secure entrance.',
      image: '/mp-doors-Entry-door.jpg',
      cta: 'Browse Entry Doors'
    },
    {
      title: 'Patio Doors',
      description: 'Open your home to light and outdoor living.',
      image: '/mp-doors-Patio-door.jpg',
      cta: 'Browse Patio Doors'
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
            Explore MP Doors
          </h2>
          <p className="text-lg text-[#8b8c8e] max-w-2xl mx-auto">
            Choose your door type to get started.
          </p>
        </div>

        {/* Product Tiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {productTypes.map((product, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              role="button"
              tabIndex={0}
              aria-label={`${product.cta} products`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  // Handle navigation
                }
              }}
            >
              {/* Image Container */}
              <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.title} showcase`}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    {product.title}
                  </h3>
                  <p className="text-white text-lg mb-6 opacity-90">
                    {product.description}
                  </p>
                  
                  {/* CTA Button */}
                  <button className="bg-[#f2942f] text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center w-fit group-hover:bg-[#e6841f] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2942f] focus:ring-offset-2 focus:ring-offset-black">
                    {product.cta}
                    <ChevronRight className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#f2942f] group-focus:border-[#f2942f] transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;