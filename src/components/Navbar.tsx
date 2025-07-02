import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  Clock,
  Download,
  Twitter,
  Facebook,
  Search,
  Menu,
  X,
  MapPin,
  Globe
} from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const navItem = (name: string, key: string) => (
    <button
      onClick={() => handleNavigation(key)}
      className={`relative px-4 py-2 font-bold transition-all duration-300 group ${
        currentPage === key ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
      }`}
    >
      <span className="relative z-10">{name}</span>
      {currentPage === key && (
        <>
          <div className="absolute inset-0 bg-orange-100 rounded-lg scale-105"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-red-500 rounded-full"></div>
        </>
      )}
    </button>
  );

  return (
    <>
      {/* Top Contact Bar - HIDDEN ON MOBILE */}
      <div className="hidden md:block bg-gradient-to-r from-orange-600 via-orange-500 to-red-500 text-white text-xs px-3 py-2">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
            <div className="flex items-center gap-1"><Phone size={13} /><span>+91-99907 33308</span></div>
            <div className="flex items-center gap-1"><Mail size={13} /><span>info@aicc.ind.in</span></div>
            <div className="flex items-center gap-1"><MapPin size={13} /><span>New Delhi, India</span></div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1"><Clock size={13} /><span>Mon – Fri: 8:00am – 7:00pm</span></div>
            <div className="flex items-center space-x-2">
              {[Twitter, Facebook, Globe].map((Icon, i) => (
                <div key={i} className="p-1 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer transition-all duration-300">
                  <Icon size={14} />
                </div>
              ))}
            </div>
            <a
              href="/brochure.pdf"
              className="bg-white text-orange-600 px-3 py-1 rounded-full font-medium hover:shadow-md flex items-center gap-1 text-xs"
            >
              <Download size={14} /> BROCHURE
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-white sticky top-0 z-50 shadow-md transition-all duration-300 ${isScrolled ? 'shadow-lg bg-white/95 backdrop-blur-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center py-2 sm:py-3">
            {/* Logo */}
            <div
  className="flex items-center gap-2 cursor-pointer"
  onClick={() => handleNavigation('home')}
>
  <img
    src="/images/aicc-logo.png"
    alt="AICC Logo"
    className="w-32 h-auto sm:w-32 md:w-40 lg:w-48 object-contain"
  />
</div>


            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItem('HOME', 'home')}
              {navItem('ABOUT US', 'about')}
              {navItem('MEMBERS', 'members')}
              {navItem('ACTIVITIES', 'activities')}
              {navItem('INTERNATIONAL', 'international')}
              {navItem('COURSES', 'courses')}
              {navItem('MORE', 'more')}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-orange-600 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300">
                <Search size={16} />
              </button>
              <button className="bg-gradient-to-r from-orange-600 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-md hover:scale-105 transition-all">
                Join Now
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 hover:bg-orange-50 transition"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Nav Items */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4">
              <div className="space-y-2">
                {['home', 'about', 'members', 'activities', 'international', 'courses', 'more'].map((page, i) => (
                  <button
                    key={i}
                    onClick={() => handleNavigation(page)}
                    className={`block w-full text-left font-semibold text-sm py-2 px-4 rounded-md transition-all duration-300 ${
                      currentPage === page
                        ? 'text-orange-600 bg-orange-100 border-l-4 border-orange-600'
                        : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                  >
                    {page.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Brochure & CTA in Mobile */}
              <div className="mt-4 px-4 space-y-3">
                <a
                  href="/brochure.pdf"
                  className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200 transition"
                >
                  <Download size={14} />
                  <span>Download Brochure</span>
                </a>
                <button className="w-full bg-gradient-to-r from-orange-600 to-red-500 text-white py-2 rounded-md font-bold hover:shadow-md hover:scale-105 transition">
                  Join Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
