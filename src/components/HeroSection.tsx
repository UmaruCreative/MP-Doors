import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
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

  return (
    <section 
      ref={sectionRef}
      id="main-content"
      className="relative min-h-screen flex items-center pt-20"
      style={{
        backgroundImage: `url('/mp-doors-hero.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-2xl">
          {/* Hero Content */}
          <div className={`transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Fiberglass Entry & Patio Doors for Every Home
            </h1>
            
            <p className="text-xl text-white mb-8 leading-relaxed">
              Durable, energy-efficient, and built to last.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-[#f2942f] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#e6841f] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2942f] focus:ring-offset-2 focus:ring-offset-transparent inline-flex items-center justify-center group">
                Explore Our Doors
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-[#f2942f] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#f2942f] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2942f] focus:ring-offset-2 focus:ring-offset-transparent">
                Find Us at The Home Depot
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;