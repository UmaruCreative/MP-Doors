import React, { useState, useEffect, useRef } from 'react';
import { FileText, Shield, Wrench, ChevronDown, ChevronUp } from 'lucide-react';

const SupportSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
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

  const supportCards = [
    {
      icon: FileText,
      title: 'Installation Guides',
      description: 'Step-by-step PDFs for a proper fit and finish.',
      cta: 'Browse Guides',
      href: '#installation-guides'
    },
    {
      icon: Shield,
      title: 'Warranty',
      description: 'Coverage overview and how to request service via your retailer.',
      cta: 'See Warranty',
      href: '#warranty'
    },
    {
      icon: Wrench,
      title: 'Care & Maintenance',
      description: 'Simple tips to keep your door performing for years.',
      cta: 'View Care Tips',
      href: '#maintenance'
    }
  ];

  const faqs = [
    {
      question: 'Where can I buy MP Doors?',
      answer: 'MP Doors are available exclusively at The Home Depot, online and in store.'
    },
    {
      question: 'How do I file a warranty claim?',
      answer: 'Warranty requests should be submitted through the original dealer, such as The Home Depot. Please keep your proof of purchase for faster service.'
    },
    {
      question: 'Are MP Doors energy efficient?',
      answer: 'Yes. All MP Doors meet or exceed Energy Star® requirements for energy efficiency.'
    },
    {
      question: 'Can I install an MP Door myself?',
      answer: 'Yes. Many of our customers install their own doors. Be sure to download the installation guide specific to your model.'
    },
    {
      question: 'What makes fiberglass better than wood or steel?',
      answer: 'Fiberglass doors are more durable, resist warping and rust, and require less maintenance while still offering excellent insulation.'
    }
  ];

  const trustBadges = [
    { name: 'ENERGY STAR®', logo: '⭐' },
    { name: 'Lifetime Limited Warranty', logo: '🛡️' },
    { name: 'Hydroshield', logo: '💧' },
    { name: 'Home Depot', logo: '🏠' }
  ];

  return (
    <section ref={sectionRef} id="support" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Support & Resources */}
          <div className={`transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">
              Support & Resources
            </h2>

            {/* Support Cards */}
            <div className="space-y-6 mb-12">
              {supportCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#f2942f] p-3 rounded-lg flex-shrink-0">
                      <card.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-black mb-2">
                        {card.title}
                      </h3>
                      <p className="text-[#8b8c8e] mb-4 leading-relaxed">
                        {card.description}
                      </p>
                      <a
                        href={card.href}
                        className="inline-flex items-center text-[#f2942f] font-semibold hover:text-[#e6841f] transition-colors group-hover:underline focus:outline-none focus:ring-2 focus:ring-[#f2942f] focus:ring-offset-2 rounded"
                      >
                        {card.cta} →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                  >
                    <button
                      className="w-full text-left p-4 flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2942f] focus:ring-inset"
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      aria-expanded={expandedFAQ === index}
                    >
                      <span className="font-semibold text-black pr-4">
                        {faq.question}
                      </span>
                      {expandedFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-[#8b8c8e] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#8b8c8e] flex-shrink-0" />
                      )}
                    </button>
                    {expandedFAQ === index && (
                      <div className="px-4 pb-4 pt-0">
                        <p className="text-[#8b8c8e] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Shop at Home Depot */}
          <div className={`transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 id="home-depot" className="text-3xl sm:text-4xl font-bold text-black mb-6">
                Shop MP Doors at The Home Depot
              </h2>
              
              <p className="text-[#8b8c8e] text-lg mb-8 leading-relaxed">
                Browse online or visit your local store to see options in person.
              </p>

              {/* CTA Buttons */}
              <div className="space-y-4 mb-8">
                <button className="w-full bg-[#f2942f] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#e6841f] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2942f] focus:ring-offset-2">
                  Shop Entry Doors
                </button>
                <button className="w-full border-2 border-[#f2942f] text-[#f2942f] py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#f2942f] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2942f] focus:ring-offset-2">
                  Shop Patio Doors
                </button>
              </div>

              {/* Trust Badges */}
              <div>
                <p className="text-sm text-[#8b8c8e] mb-4 font-medium">
                  Trusted Quality & Performance
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {trustBadges.map((badge, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-[#8b8c8e] text-sm"
                    >
                      <span className="text-lg">{badge.logo}</span>
                      <span>{badge.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;