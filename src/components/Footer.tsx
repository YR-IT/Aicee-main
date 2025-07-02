import {
  MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Download,
  Building2, Briefcase, Handshake, Shield, ExternalLink
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* 🎨 Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-56 h-56 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-200"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-orange-400/5 to-red-400/5 rounded-full blur-3xl animate-spin-slow -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 px-6 py-14 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* 🏢 Corporate Info */}
        <div className="transition-opacity duration-1000 ease-in-out">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg animate-fade-in">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-orange-400">Corporate Office</h3>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            All India Chamber of Commerce,<br />
            Central Business District,<br />
            New Delhi - 110001, India
          </p>
          <div className="space-y-2 text-sm text-gray-300">
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-orange-400" /> +91-99907 33308</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-orange-400" /> info@aicc.ind.in</p>
            <a
              href="https://www.google.com/maps/place/All+India+Chamber+of+Commerce/@28.3502579,76.9005784,11z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-300 hover:underline mt-2"
            >
              <MapPin className="w-4 h-4" /> View on Map <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 🔗 Quick Links + Socials */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5" /> Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {['Home', 'About Us', 'Members', 'Activities', 'International', 'Courses', 'More'].map(link => (
                <li
                  key={link}
                  className="hover:text-orange-400 transition-colors duration-300 cursor-pointer hover:translate-x-1"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-orange-400 mt-4 mb-3 flex items-center gap-2">
              <Handshake className="w-5 h-5" /> Connect With Us
            </h3>
            <div className="flex gap-4">
              {[
                { icon: Facebook, url: 'https://facebook.com/aicc.ind' },
                { icon: Twitter, url: 'https://x.com/aicc_ind' },
                { icon: Linkedin, url: 'https://linkedin.com/company/aicc-ind' }
              ].map(({ icon: Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-transform duration-300 shadow-sm"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 📣 CTA */}
        <div className="space-y-5">
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5" /> Business Support
            </h3>
            <p className="text-sm text-gray-300">
              Need help expanding your business or resolving trade issues? Contact our expert advisory team.
            </p>
          </div>
          <button className="w-full bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600 text-white py-3 rounded-xl font-bold transition-transform duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl">
            <Download className="w-5 h-5" />
            Download Brochure
          </button>
          <button className="w-full border border-white/20 py-3 text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300 hover:scale-105">
            Contact Us Today
          </button>
        </div>
      </div>

      {/* 📄 Footer Bottom */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400">
        <p>© {new Date().getFullYear()} AICC – All rights reserved. | Facilitating Business Across The Globe Since 2004</p>
      </div>
    </footer>
  );
};

export default Footer;
