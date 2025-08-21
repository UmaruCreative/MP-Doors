import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: 'Products',
      hasDropdown: true,
      dropdown: ['Entry Doors', 'Patio Doors']
    },
    { label: 'Why MP Doors', href: '#why-mp-doors' },
    {
      label: 'Support',
      hasDropdown: true,
      dropdown: ['Installation Guides', 'Warranty', 'FAQ']
    },
    { label: 'Find at Home Depot', href: '#home-depot' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-[#f2942f] text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
      
      <header 
        className={`fixed top-0 left-0 right-0 z-40 bg-white transition-all duration-300 ${
          isScrolled 
            ? 'shadow-md py-2' 
            : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
            <img 
  src="/MPDoors_Logo.png" 
  alt="MP Doors" 
  className="h-14 w-auto" 
  // Adjust height as needed (h-6, h-10, h-12, etc.)
/>

            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" role="navigation">
              {navItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.hasDropdown ? (
                    <button
                      className="flex items-center space-x-1 text-black hover:text-[#f2942f] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2942f] focus:ring-offset-2 rounded px-2 py-1"
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      <span className="font-medium">{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <a
                      href={item.href || '#'}
                      className={`font-medium focus:outline-none focus:ring-2 focus:ring-[#f2942f] focus:ring-offset-2 rounded px-2 py-1 transition-colors ${
                        item.label === 'Find at Home Depot' 
                          ? 'bg-[#f2942f] text-white hover:bg-[#e6841f] px-4 py-2 rounded-lg' 
                          : 'text-black hover:text-[#f2942f]'
                      }`}
                    >
                      {item.label}
                    </a>
                  )}
                  
                  {/* Dropdown Menu */}
                  {item.hasDropdown && openDropdown === item.label && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.dropdown?.map((dropItem, dropIndex) => (
                        <a
                          key={dropIndex}
                          href="#"
                          className="block px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-[#f2942f] transition-colors"
                        >
                          {dropItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-black hover:text-[#f2942f] focus:outline-none focus:ring-2 focus:ring-[#f2942f] focus:ring-offset-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item, index) => (
                <div key={index}>
                  <a
                    href={item.href || '#'}
                    className={`block font-medium py-2 transition-colors ${
                      item.label === 'Find at Home Depot'
                        ? 'bg-[#f2942f] text-white hover:bg-[#e6841f] px-4 rounded-lg text-center'
                        : 'text-black hover:text-[#f2942f]'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.hasDropdown && item.dropdown && (
                    <div className="ml-4 space-y-2 mt-2">
                      {item.dropdown.map((dropItem, dropIndex) => (
                        <a
                          key={dropIndex}
                          href="#"
                          className="block text-sm text-[#8b8c8e] hover:text-[#f2942f] transition-colors py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;