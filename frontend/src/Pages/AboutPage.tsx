import React, { useState, useEffect } from 'react';
import { 
  Target, 
  Eye, 
  Heart, 
  ArrowRight, 
  Sparkles, 
  Globe2, 
  Users, 
  Building2,
  Zap,
  Shield,
  Award,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedNumber from '../components/AnimatedNumber';


const AboutPage = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when page loads
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-spin-slow"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-12 pb-12 px-4">
  <div className="max-w-7xl mx-auto text-center">
    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2.5 md:px-6 md:py-3 mb-6 md:mb-8 group cursor-pointer">
  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-orange-400 animate-pulse group-hover:animate-bounce" />
  <span className="text-sm md:text-base text-orange-300 font-semibold">About AICC</span>
</div>


    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
      <span className="bg-gradient-to-r from-white via-orange-200 to-red-200 bg-clip-text text-transparent uppercase">
        About Us
      </span>
    </h1>

    <p className="max-w-4xl mx-auto text-sm sm:text-lg text-gray-300 mb-8">
  We connect, inspire, and support India’s diverse business community, championing innovation, sustainable development, and collaborative growth. Our vision is to empower businesses to thrive locally and expand globally through shared knowledge, advocacy, and strategic partnerships.
</p>


    <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8">
      <Link
  to="/courses"
  className="inline-block px-6 py-3 md:px-6 md:py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all"
>
  Discover Our Courses
</Link>

<Link
  to="/contact-us"
  className="group relative inline-flex items-center space-x-3 bg-white/10 text-white px-6 py-3 md:px-6 md:py-3 rounded-full font-bold shadow-2xl hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-sm"
>
  Get in Touch
</Link>
    </div>

    <div className="flex items-center justify-center space-x-4 text-gray-300">
  <a href="/" className="hover:text-orange-400 transition-colors cursor-pointer">
    Home
  </a>
  <ArrowRight className="w-4 h-4 text-orange-500" />
  <span className="text-orange-400">About Us</span>
</div>
  </div>
</div>

      {/* Main Content */}
      <div className="relative z-10 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Introduction Section */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
 <div className="space-y-8">
  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-500 group">
    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-6 space-y-4 sm:space-y-0 items-center text-center sm:text-left">
      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Building2 className="w-8 h-8 text-white" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white">Established 2004</h3>
        <p className="text-orange-400">National Business Association</p>
      </div>
    </div>
    <p className="text-gray-300 leading-relaxed text-center sm:text-left">
      All India Chamber of Commerce (AICC) is a national association of business organizations in India. 
      AICC has been established on 04 October, 2004 and registered under section 25 of the Companies Act, 
      1956 (1 of 1956).
    </p>
  </div>

  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-500 group">
    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-6 space-y-4 sm:space-y-0 items-center text-center sm:text-left">
      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Shield className="w-8 h-8 text-white" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white">Government Recognition</h3>
        <p className="text-red-400">Ministry Approved</p>
      </div>
    </div>
    <p className="text-gray-300 leading-relaxed text-center sm:text-left">
      AICC has been recognized by the Ministry of Corporate Affairs, Government of India as an 
      autonomous, non-governmental, non-political and non-profit organization to act on behalf of its members.
    </p>
  </div>
</div>

  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl blur-xl"></div>
    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-12 h-full">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-10 h-full">
  <div className="bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center text-center group hover:scale-105 transition-transform duration-300">
    <Globe2 className="w-8 h-8 sm:w-12 sm:h-12 text-red-400 mb-4 group-hover:animate-spin" />
    <div className="text-lg sm:text-3xl font-bold text-white mb-2">
      <AnimatedNumber target={150} />+
    </div>
    <div className="text-gray-300 text-xs sm:text-sm">Countries Served</div>
  </div>

  <div className="bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center text-center group hover:scale-105 transition-transform duration-300">
    <Users className="w-8 h-8 sm:w-12 sm:h-12 text-red-400 mb-4 group-hover:animate-spin" />
    <div className="text-lg sm:text-3xl font-bold text-white mb-2">
      <AnimatedNumber target={50} />K+
    </div>
    <div className="text-gray-300 text-xs sm:text-sm">Active Members</div>
  </div>

  <div className="bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center text-center group hover:scale-105 transition-transform duration-300">
    <Award className="w-8 h-8 sm:w-12 sm:h-12 text-red-400 mb-4 group-hover:animate-spin" />
    <div className="text-lg sm:text-3xl font-bold text-white mb-2">
      <AnimatedNumber target={100} />+
    </div>
    <div className="text-gray-300 text-xs sm:text-sm">Years Legacy</div>
  </div>

  <div className="bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center text-center group hover:scale-105 transition-transform duration-300">
    <TrendingUp className="w-8 h-8 sm:w-12 sm:h-12 text-red-400 mb-4 group-hover:animate-spin" />
    <div className="text-lg sm:text-3xl font-bold text-white mb-2">
  <AnimatedNumber target={24} />/<AnimatedNumber target={7} />
</div>

    <div className="text-gray-300 text-xs sm:text-sm">Global Support</div>
  </div>
</div>
    </div>
  </div>
</div>

          {/* Administration Section */}
          <div className="mb-20 px-4">
  <div className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 max-w-7xl mx-auto">
    {/* Heading */}
    <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left md:space-x-4 mb-8">
      <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mb-4 md:mb-0">
        <Zap className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
      </div>
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
          Dual Administration
        </h2>
        <p className="text-orange-400 text-base sm:text-lg">
          Structured Governance Model
        </p>
      </div>
    </div>

    {/* Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center px-2 sm:px-6 md:px-16">
      {/* LEFT COLUMN */}
      <div className="flex flex-col gap-6 sm:gap-8">
        <div className="bg-white/5 rounded-2xl p-4 sm:p-6 border border-white/10">
          <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            General Administration
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            The General Administration is looked after by the Board of Directors,
            as per the statutory provisions of the Companies Act, 1956,
            ensuring smooth operations and effective governance at all times.
          </p>
        </div>

        <div className="bg-white/5 rounded-2xl p-4 sm:p-6 border border-white/10">
          <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            Central Business Committee
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            The promotion of trade and commerce is looked after by the Central Business Committee,
            whose representatives are elected through a democratic process.
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN: Image */}
      <div className="flex justify-center w-full">
        <div className="rounded-2xl overflow-hidden border border-white/10 w-full max-w-md h-60 sm:h-72 md:h-96">
          <img
            src="/aboutus.jpg"
            alt="Description of image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-8 mx-auto group-hover:animate-pulse">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-center text-white mb-6">Our Mission</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                To strengthen the business organizations, through emphasis of trade promotion, 
                industrial development, effective advocacy for sustainable economic policies, 
                and a conducive climate for economic development based on the best practices.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-8 mx-auto group-hover:animate-pulse">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-center text-white mb-6">Our Vision</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                To be the leading private sector body for the business community in the country, 
                providing members with an influential local, regional and global network for business growth.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-8 mx-auto group-hover:animate-pulse">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-center text-white mb-6">Our Values</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                To achieve the above goals, AICC requires a set of values that shall define behavior and performance of staff within AICC, 
                every day and everywhere including quality service, innovation, integrity and teamwork.
                </p>
              </div>
            </div>
          </div>

          {/* Membership Section */}
          <div className="bg-gradient-to-r from-orange-500/10 via-transparent to-red-500/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 text-center">
  <div className="max-w-4xl mx-auto">
    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
      <span className="text-orange-300 font-semibold text-sm sm:text-base">Membership</span>
    </div>

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
      Voluntary Based <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Organization</span>
    </h2>

    <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8 sm:mb-12 px-4 sm:px-0">
      AICC is a voluntary based member organization and draws its membership from the corporate sector,
      both private and public, including SMEs and MNCs. We facilitate business growth across the globe
      through our extensive network and comprehensive services.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <Link to="/contact-us" className="group inline-block">
  <button className="inline-flex items-center justify-center group bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600 text-white px-6 sm:px-6 py-3 sm:py-2 rounded-full font-bold text-base sm:text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 hover:-translate-y-1">
    <span className="flex items-center space-x-2">
      <span>Join Our Network</span>
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
    </span>
  </button>
  </Link>

    <Link to="/international" className="group inline-block">
  <button className="inline-flex items-center justify-center group border-2 border-white/30 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 px-6 sm:px-6 py-3 sm:py-2 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1">
    <span className="flex items-center space-x-2">
      <span>Learn More</span>
      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-spin transition-transform duration-300" />
    </span>
  </button>
  </Link>
</div>
  </div>
</div>
        </div>
      </div>
    
    </div>
  );
};

export default AboutPage;
