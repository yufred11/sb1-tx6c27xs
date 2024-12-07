import React, { useState, useRef, useEffect } from 'react';
import { Navigation, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const handleServiceClick = (href: string) => {
    setIsServicesOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Navigation className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">The Navigate Well Coach</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
            <div ref={dropdownRef} className="relative">
              <button 
                onClick={toggleServices}
                className="flex items-center text-gray-700 hover:text-blue-600 transition"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {[
                    { href: '#goal-setting', text: 'Goal Setting' },
                    { href: '#career-navigation', text: 'Career Navigation' },
                    { href: '#relationship-coaching', text: 'Relationship Coaching' },
                    { href: '#spiritual-formation', text: 'Spiritual Formation' }
                  ].map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleServiceClick(item.href)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      {item.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact Us</a>
            <a href="#appointment" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;