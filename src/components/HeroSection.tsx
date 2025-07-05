import React, { useState, useEffect } from 'react';


const HeroSection = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when page loads
  }, []);
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-start justify-center">

      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-spin-slow"></div>

        {/* Smaller Shapes */}
        <div className="absolute top-32 right-1/4 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-orange-400/10 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-red-400/10 rounded-full blur-xl animate-pulse delay-300"></div>

        {/* Animated Shapes */}
        <div className="absolute top-16 left-1/2 w-3 h-3 bg-orange-400/30 rotate-45 animate-bounce delay-200"></div>
        <div className="absolute bottom-24 left-1/3 w-4 h-4 bg-red-400/30 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/3 right-16 w-2 h-2 bg-yellow-400/40 rotate-45 animate-bounce delay-700"></div>

        {/* Ping Particles */}
        <div className="absolute top-40 left-20 w-1.5 h-1.5 bg-orange-300/50 rounded-full animate-ping delay-100"></div>
        <div className="absolute bottom-40 right-20 w-1.5 h-1.5 bg-red-300/50 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-60 right-40 w-1 h-1 bg-yellow-300/60 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-60 left-40 w-1 h-1 bg-orange-400/60 rounded-full animate-ping delay-700"></div>

        {/* Rotating Rings */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 border border-orange-500/10 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-60 sm:h-60 border border-red-500/10 rounded-full animate-spin-slow delay-1000" style={{ animationDirection: 'reverse' }}></div>

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse-slow"></div>

        {/* Gradient Borders */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-20 sm:h-32 bg-gradient-to-b from-orange-500/5 to-transparent animate-pulse delay-200"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 sm:h-32 bg-gradient-to-t from-red-500/5 to-transparent animate-pulse delay-400"></div>
          <div className="absolute left-0 top-0 w-16 sm:w-32 h-full bg-gradient-to-r from-orange-500/3 to-transparent animate-pulse delay-600"></div>
          <div className="absolute right-0 top-0 w-16 sm:w-32 h-full bg-gradient-to-l from-red-500/3 to-transparent animate-pulse delay-800"></div>
        </div>

        {/* Radial Burst */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-4 h-4 bg-orange-400/20 rounded-full animate-ping"></div>
          <div className="absolute inset-0 w-8 h-8 bg-orange-400/10 rounded-full animate-ping delay-200"></div>
          <div className="absolute inset-0 w-12 h-12 bg-orange-400/5 rounded-full animate-ping delay-400"></div>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto pt-6 sm:pt-16">
        <div className="mb-6">
          <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4 animate-pulse">
            Established 1920
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight text-center">
          Welcome To The{' '}
          <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent animate-pulse">
            AICC
          </span>
        </h1>

        <p className="text-sm md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
          Facilitating Sustainable Business Growth and Prosperity Across The Globe with{' '}
          <span className="text-orange-400 font-semibold">Excellence</span>,{' '}
          <span className="text-red-400 font-semibold">Innovation</span>, and a Commitment to{' '}
          <span className="text-orange-400 font-semibold">Unparalleled Service</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600 text-white px-8 py-3 md:px-10 md:py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 hover:-translate-y-1">
            <span className="flex items-center space-x-2">
              <span>Become a Member</span>
              <div className="w-2 h-2 bg-white rounded-full group-hover:animate-ping"></div>
            </span>
          </button>

          <button className="group border-2 border-white/30 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 px-8 py-3 md:px-10 md:py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1">
            <span className="flex items-center space-x-2">
              <span>Explore Services</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>

        <div className="mt-8 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div className="text-4xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">100+</div>
            <div className="text-gray-300 font-medium">Years of Excellence</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-red-400 mb-2 group-hover:scale-110 transition-transform duration-300">50K+</div>
            <div className="text-gray-300 font-medium">Global Members</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">150+</div>
            <div className="text-gray-300 font-medium">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
