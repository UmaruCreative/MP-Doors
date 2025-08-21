import React from 'react';
import { Search } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Products',
      links: ['Entry Doors', 'Patio Doors', 'Hardware & Accessories']
    },
    {
      title: 'Featured Styles',
      links: ['Full Lite Doors', 'Half Lite Doors', 'Solid Panel Doors', 'Impact Resistant']
    },
    {
      title: 'Why MP Doors',
      links: ['Durability', 'Energy Efficiency', 'Style & Security', 'Hydroshield Protection']
    },
    {
      title: 'Support',
      links: ['Installation Guides', 'Warranty', 'FAQ', 'Care & Maintenance']
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-black mb-4">MP Doors</h3>
            <p className="text-[#8b8c8e] mb-6 leading-relaxed">
              Premium fiberglass entry and patio doors, available exclusively at The Home Depot. Built to last, designed to impress.
            </p>
            
            {/* Mini Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f2942f] focus:border-transparent text-sm"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#8b8c8e]" />
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="font-semibold text-black mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-[#8b8c8e] hover:text-[#f2942f] transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-[#f2942f] focus:ring-offset-2 rounded"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Home Depot Section */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <h4 className="font-semibold text-black mb-2">Find at Home Depot</h4>
            <p className="text-[#8b8c8e] text-sm mb-4">
              Available exclusively at The Home Depot stores and online
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#"
                className="bg-[#f2942f] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#e6841f] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2942f] focus:ring-offset-2 text-sm"
              >
                Shop Online
              </a>
              <a
                href="#"
                className="border border-[#f2942f] text-[#f2942f] px-6 py-2 rounded-lg font-medium hover:bg-[#f2942f] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2942f] focus:ring-offset-2 text-sm"
              >
                Find Store
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="text-center">
            <h4 id="contact" className="font-semibold text-black mb-4">Contact Information</h4>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-[#8b8c8e] text-sm">
              <span>Customer Service: 1-800-MP-DOORS</span>
              <span>Email: support@mpdoors.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-wrap justify-center sm:justify-start items-center space-x-6 text-xs text-[#8b8c8e]">
              <a href="#" className="hover:text-[#f2942f] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2942f] focus:ring-offset-2 rounded">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#f2942f] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2942f] focus:ring-offset-2 rounded">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#f2942f] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2942f] focus:ring-offset-2 rounded">
                Accessibility
              </a>
            </div>
            <div className="text-xs text-[#8b8c8e]">
              © 2025 MP Doors. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;