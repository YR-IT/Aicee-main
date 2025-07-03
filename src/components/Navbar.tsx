import React, { useState, useEffect } from 'react';
import {
  Phone, Mail, Clock, Download, Twitter, Facebook, Search, Menu, X, MapPin, Globe
} from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMembers, setShowMembers] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const navItem = (name: string, key: string) => (
    <button
      onClick={() => handleNavigation(key)}
      className={`relative px-4 py-2 font-bold transition duration-300 ${
        currentPage === key ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
      }`}
    >
      {name}
      {currentPage === key && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-red-500 rounded-full"></div>
      )}
    </button>
  );

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-gradient-to-r from-orange-600 via-orange-500 to-red-500 text-white text-sm px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <div className="flex items-center gap-2"><Phone size={14} /> +91-99907 33308</div>
            <div className="flex items-center gap-2"><Mail size={14} /> info@aicc.ind.in</div>
            <div className="flex items-center gap-2"><MapPin size={14} /> New Delhi, India</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {[Twitter, Facebook, Globe].map((Icon, i) => (
                <Icon key={i} size={16} className="cursor-pointer hover:opacity-80" />
              ))}
            </div>
            <div className="flex items-center gap-2"><Clock size={14} /> Mon–Fri: 8:00am–7:00pm</div>
            <a href="/brochure.pdf" className="bg-white text-orange-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <Download size={14} /> BROCHURE
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white sticky top-0 z-50 transition-all ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <div onClick={() => handleNavigation('home')} className="cursor-pointer">
              <img src="/images/aicc-logo.png" alt="Logo" className="w-36 h-auto" />
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItem('HOME', 'home')}
              {navItem('ABOUT US', 'about')}

              {/* MEMBERS DROPDOWN (Desktop Hover) */}
              <div className="relative group">
                <button className="px-4 py-2 font-bold text-gray-700 group-hover:text-orange-600">MEMBERS</button>
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-50">
                  <button onClick={() => handleNavigation('members')} className="w-full text-left px-6 py-3 hover:bg-gray-100">Become a Member</button>
                  <button onClick={() => handleNavigation('member-benefits')} className="w-full text-left px-6 py-3 hover:bg-gray-100">Member Benefits</button>
                  <button onClick={() => handleNavigation('members-directory')} className="w-full text-left px-6 py-3 hover:bg-gray-100">Members Directory</button>
                </div>
              </div>

              {navItem('ACTIVITIES', 'activities')}
              {navItem('INTERNATIONAL', 'international')}
              {navItem('COURSES', 'courses')}

              {/* MORE DROPDOWN (Desktop Hover) */}
              <div className="relative group">
                <button className={`px-4 py-2 font-bold ${currentPage === 'more' ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'}`}>
                  MORE
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-50">
                  <button onClick={() => handleNavigation('arbitration')} className="w-full text-left px-6 py-3 hover:bg-gray-100">Arbitration Cell</button>
                  <button onClick={() => handleNavigation('AICC-Bulletin')} className="w-full text-left px-6 py-3 hover:bg-gray-100">AICC Bulletin</button>
                  <button onClick={() => handleNavigation('Contact-Us')} className="w-full text-left px-6 py-3 hover:bg-gray-100">Contact Us</button>
                </div>
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button className="p-2 rounded-full border border-gray-200 hover:border-orange-600 hover:bg-orange-50">
                <Search size={16} />
              </button>
              <button className="bg-gradient-to-r from-orange-600 to-red-500 text-white px-4 py-2 rounded-full font-semibold text-sm hover:shadow-lg transition">
                Join Now
              </button>
            </div>

            {/* Hamburger Icon */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 border rounded-md">
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 space-y-1 px-4">
              {/* Simple Pages */}
              {['home', 'about', 'activities', 'international', 'courses'].map((page) => (
                <button
                  key={page}
                  onClick={() => handleNavigation(page)}
                  className={`block w-full text-left px-3 py-2 font-semibold rounded-md ${
                    currentPage === page ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100'
                  }`}
                >
                  {page.toUpperCase()}
                </button>
              ))}

              {/* MEMBERS - Mobile Clickable */}
              <div>
                <button
                  onClick={() => setShowMembers(!showMembers)}
                  className={`block w-full text-left px-3 py-2 font-semibold rounded-md ${
                    ['members', 'member-benefits', 'members-directory'].includes(currentPage)
                      ? 'bg-orange-100 text-orange-600'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  MEMBERS
                </button>
                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
                  showMembers ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  {[
                    { label: 'Become a Member', key: 'members' },
                    { label: 'Member Benefits', key: 'member-benefits' },
                    { label: 'Members Directory', key: 'members-directory' },
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => handleNavigation(item.key)}
                      className={`block w-full text-left px-6 py-2 text-sm ${
                        currentPage === item.key ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* MORE - Mobile Clickable */}
              <div>
                <button
                  onClick={() => setShowMore(!showMore)}
                  className={`block w-full text-left px-3 py-2 font-semibold rounded-md ${
                    ['arbitration', 'AICC-Bulletin', 'Contact-Us'].includes(currentPage)
                      ? 'bg-orange-100 text-orange-600'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  MORE
                </button>
                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
                  showMore ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  {[
                    { label: 'Arbitration Cell', key: 'arbitration' },
                    { label: 'AICC Bulletin', key: 'AICC-Bulletin' },
                    { label: 'Contact Us', key: 'Contact-Us' },
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => handleNavigation(item.key)}
                      className={`block w-full text-left px-6 py-2 text-sm ${
                        currentPage === item.key ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brochure & CTA */}
              <div className="mt-4 space-y-3">
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
