import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Shield, Zap, Eye, Droplets } from 'lucide-react';

const WhyMPDoorsSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
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

  const features = [
    {
      id: 'durability',
      title: 'Durability',
      icon: Shield,
      panel: {
        title: 'Built to Last',
        description: 'Compression-molded fiberglass with full composite edging and frame resists warping, rotting, rusting, and denting—outperforming wood and steel.',
        bullets: ['Composite frames', 'Weather-tight seals', 'Lifetime limited warranty'],
        cta: 'Learn about Durability',
        href: '/why-mp-doors#durability'
      }
    },
    {
      id: 'energy',
      title: 'Energy Efficiency',
      icon: Zap,
      panel: {
        title: 'Engineered for Energy Savings',
        description: 'Insulated, CFC-free polyurethane cores and high-performance glass help maintain a comfortable indoor climate.',
        bullets: ['ENERGY STAR® partner', 'Tight seals', 'Up to 6× more efficient than wood'],
        cta: 'Our Energy Certifications',
        href: '/why-mp-doors#energy'
      }
    },
    {
      id: 'style-security',
      title: 'Style & Security',
      icon: Eye,
      panel: {
        title: 'Designs You\'ll Live With, Security You Need',
        description: 'Flush-glazed glass for a clean, finished look with options from full-lite to solid panel and impact-resistant configurations.',
        bullets: ['Decorative glass options', 'Hinged or sliding', 'Paintable or stainable finishes with deep embossed panels'],
        cta: 'Explore Styles',
        href: '/featured-styles'
      }
    },
    {
      id: 'hydroshield',
      title: 'Hydroshield Protection',
      icon: Droplets,
      panel: {
        title: 'Repels Water, Resists Damage',
        description: 'Reinforced fiberglass panels edged in waterproof composite and full composite frames help repel water infiltration, even in harsh conditions.',
        bullets: ['Water-resistant composite edging', 'Full composite frames', 'Low maintenance'],
        cta: 'See Hydroshield Details',
        href: '/why-mp-doors#hydroshield'
      }
    }
  ];

  return (
    <section ref={sectionRef} id="why-mp-doors" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            Why MP Doors
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex gap-8">
          {/* Left Column - Feature List */}
          <div className="w-1/3">
            <div className="sticky top-32 space-y-2">
              {features.map((feature, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 group ${
                    activeFeature === index
                      ? 'bg-[#f2942f] text-white'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveFeature(index)}
                  onMouseEnter={() => setActiveFeature(index)}
                  role="tab"
                  aria-selected={activeFeature === index}
                  aria-controls={`panel-${feature.id}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <feature.icon className="w-5 h-5" />
                      <span className="font-semibold text-lg">{feature.title}</span>
                    </div>
                    <ChevronRight className={`w-5 h-5 transform transition-transform ${
                      activeFeature === index ? 'translate-x-1' : ''
                    }`} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Content Panel */}
          <div className="w-2/3">
            <div className="bg-white rounded-xl p-8 min-h-96">
              {features.map((feature, index) => (
                <div
                  key={index}
                  id={`panel-${feature.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${feature.id}`}
                  className={`transition-opacity duration-300 ${
                    activeFeature === index ? 'opacity-100' : 'opacity-0 absolute'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-[#f2942f] p-3 rounded-lg">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-black">
                      {feature.panel.title}
                    </h3>
                  </div>
                  
                  <p className="text-[#8b8c8e] text-lg mb-6 leading-relaxed">
                    {feature.panel.description}
                  </p>
                  
                  <ul className="space-y-2 mb-8">
                    {feature.panel.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#f2942f] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-black">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={feature.panel.href}
                    className="inline-flex items-center text-[#f2942f] font-semibold hover:text-[#e6841f] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2942f] focus:ring-offset-2 rounded"
                  >
                    {feature.panel.cta}
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Accordion */}
        <div className="lg:hidden space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden">
              <button
                className={`w-full text-left p-4 flex items-center justify-between ${
                  activeFeature === index ? 'bg-[#f2942f] text-white' : 'text-black'
                }`}
                onClick={() => setActiveFeature(activeFeature === index ? -1 : index)}
                aria-expanded={activeFeature === index}
              >
                <div className="flex items-center space-x-3">
                  <feature.icon className="w-5 h-5" />
                  <span className="font-semibold">{feature.title}</span>
                </div>
                <ChevronRight className={`w-5 h-5 transform transition-transform ${
                  activeFeature === index ? 'rotate-90' : ''
                }`} />
              </button>
              
              {activeFeature === index && (
                <div className="p-4 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-black mb-3">
                    {feature.panel.title}
                  </h3>
                  <p className="text-[#8b8c8e] mb-4 leading-relaxed">
                    {feature.panel.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {feature.panel.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#f2942f] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-black text-sm">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={feature.panel.href}
                    className="inline-flex items-center text-[#f2942f] font-semibold hover:text-[#e6841f] transition-colors"
                  >
                    {feature.panel.cta}
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMPDoorsSection;