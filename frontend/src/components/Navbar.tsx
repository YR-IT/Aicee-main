import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone, Mail, Clock, Download, Twitter, Facebook, Search, Menu, X, MapPin,
  Linkedin
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMembers, setShowMembers] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const location = useLocation();
  const currentPage = location.pathname;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItem = (name: string, path: string) => (
    <Link
      to={path}
      className={`relative px-4 py-2 font-bold transition duration-300 ${
        currentPage === path ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
      }`}
    >
      {name}
      {currentPage === path && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-red-500 rounded-full"></div>
      )}
    </Link>
  );

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-gradient-to-r from-orange-600 via-orange-500 to-red-500 text-white text-sm px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6 items-center">
  <a href="tel:+919990733308" className="flex items-center gap-2">
    <Phone size={14} /> +91-99907 33308
  </a>
  <a href="mailto:info@aicc.ind.in" className="flex items-center gap-2">
    <Mail size={14} /> info@aicc.ind.in
  </a>
  <a
    href="https://www.google.com/maps/place/All+India+Chamber+of+Commerce/@28.3534306,76.9767154,11.25z/data=!4m14!1m7!3m6!1s0x390d239a2bc3229d:0xda2d71e9c23d76e6!2sAll+India+Chamber+of+Commerce!8m2!3d28.350357!4d77.0653901!16s%2Fg%2F11j91p0yly!3m5!1s0x390d239a2bc3229d:0xda2d71e9c23d76e6!8m2!3d28.350357!4d77.0653901!16s%2Fg%2F11j91p0yly?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2"
  >
    <MapPin size={14} /> Gurugram, Haryana
  </a>
</div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
  {[
    { Icon: Twitter, href: "https://x.com/aicc_ind" },
    { Icon: Facebook, href: "https://facebook.com/aicc.ind" },
    { Icon: Linkedin, href: "https://linkedin.com/company/aicc-ind" },
  ].map(({ Icon, href }, i) => (
    <a
      key={i}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer hover:opacity-80"
    >
      <Icon size={16} />
    </a>
  ))}
</div>
            <div className="flex items-center gap-2"><Clock size={14} /> Mon–Fri: 8:00am–7:00pm</div>
            <a 
  href="/brochure.pdf" 
  download 
  className="bg-white text-orange-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
>
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
            <Link to="/" className="cursor-pointer">
              <img src="/images/aicc-logo.png" alt="Logo" className="w-36 h-auto" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItem('HOME', '/')}
              {navItem('ABOUT US', '/about')}

              <div className="relative group">
                <button className="px-4 py-2 font-bold text-gray-700 group-hover:text-orange-600">MEMBERS</button>
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-50">
                  <Link to="/members" className="block px-6 py-3 hover:bg-gray-100">Become a Member</Link>
                  <Link to="/member-benefits" className="block px-6 py-3 hover:bg-gray-100">Member Benefits</Link>
                  <Link to="/members-directory" className="block px-6 py-3 hover:bg-gray-100">Members Directory</Link>
                </div>
              </div>

              {navItem('ACTIVITIES', '/activities')}
              {navItem('INTERNATIONAL', '/international')}
              {navItem('COURSES', '/courses')}

              <div className="relative group">
                <button className="px-4 py-2 font-bold text-gray-700 group-hover:text-orange-600">MORE</button>
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-50">
                  <Link to="/arbitration" className="block px-6 py-3 hover:bg-gray-100">Arbitration Cell</Link>
                  <Link to="/aicc-bulletin" className="block px-6 py-3 hover:bg-gray-100">AICC Bulletin</Link>
                  <Link to="/contact-us" className="block px-6 py-3 hover:bg-gray-100">Contact Us</Link>
                </div>
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button className="p-2 rounded-full border border-gray-200 hover:border-orange-600 hover:bg-orange-50">
                <Search size={16} />
              </button>
              <Link to="/contact-us" className="group inline-block">
              <button className="bg-gradient-to-r from-orange-600 to-red-500 text-white px-4 py-2 rounded-full font-semibold text-sm hover:shadow-lg transition">
                Join Now
              </button>
              </Link>
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
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Activities', path: '/activities' },
                { name: 'International', path: '/international' },
                { name: 'Courses', path: '/courses' }
              ].map(({ name, path }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-3 py-2 font-semibold rounded-md ${
                    currentPage === path ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100'
                  }`}
                >
                  {name.toUpperCase()}
                </Link>
              ))}

              {/* MEMBERS Dropdown */}
              <button onClick={() => setShowMembers(!showMembers)} className="w-full text-left px-3 py-2 font-semibold rounded-md">
                MEMBERS
              </button>
              {showMembers && (
                <div className="pl-4 space-y-1">
                  <Link to="/members" onClick={() => setIsMenuOpen(false)} className="block py-1 hover:text-orange-600">Become a Member</Link>
                  <Link to="/member-benefits" onClick={() => setIsMenuOpen(false)} className="block py-1 hover:text-orange-600">Member Benefits</Link>
                  <Link to="/members-directory" onClick={() => setIsMenuOpen(false)} className="block py-1 hover:text-orange-600">Members Directory</Link>
                </div>
              )}

              {/* MORE Dropdown */}
              <button onClick={() => setShowMore(!showMore)} className="w-full text-left px-3 py-2 font-semibold rounded-md">
                MORE
              </button>
              {showMore && (
                <div className="pl-4 space-y-1">
                  <Link to="/arbitration" onClick={() => setIsMenuOpen(false)} className="block py-1 hover:text-orange-600">Arbitration Cell</Link>
                  <Link to="/aicc-bulletin" onClick={() => setIsMenuOpen(false)} className="block py-1 hover:text-orange-600">AICC Bulletin</Link>
                  <Link to="/contact-us" onClick={() => setIsMenuOpen(false)} className="block py-1 hover:text-orange-600">Contact Us</Link>
                </div>
              )}
              <a
  href="/brochure.pdf"
  download
  className="flex items-center justify-center gap-2 w-full text-left px-3 py-2 font-semibold rounded-md bg-orange-600 text-white text-center hover:bg-orange-700 transition"
>
  <Download size={16} />
  DOWNLOAD BROCHURE
</a>

            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;