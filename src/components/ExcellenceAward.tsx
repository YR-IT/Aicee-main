import React from 'react';
import { Award, Shield, Ribbon,BadgeCheck } from 'lucide-react';

const ExcellenceAward = () => {
  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden">
      {/* Animated Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-slate-100/50 backdrop-blur-xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Header Badge */}
            <div className="flex justify-center sm:justify-start">
  <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full sm:px-6 sm:py-3 px-3 py-2 mb-6">
    <Award className="w-6 h-6 text-blue-600" />
    <span className="text-blue-700 font-bold text-base">Excellence Award</span>
    <Shield className="w-6 h-6 text-blue-600" />
  </div>
</div>


            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center sm:text-left leading-tight text-gray-800">
              Fill Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Nomination Form!</span>
            </h2>

            {/* Description */}
            <p className="text-center sm:text-left text-base md:text-xl text-gray-600 mb-8 leading-relaxed">
              Recognize outstanding achievements in business excellence. Submit your nomination for the prestigious AICC Excellence Award and celebrate success stories that inspire the business community.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
  <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-gray-200 shadow-lg flex flex-col items-center justify-center text-center">
    <div className="flex items-center justify-center space-x-3 mb-2">
      <Award className="w-8 h-8 text-blue-600" />
      <div className="text-3xl font-bold text-blue-600">25+</div>
    </div>
    <div className="text-gray-700 font-medium">Award Categories</div>
  </div>

  <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-gray-200 shadow-lg flex flex-col items-center justify-center text-center">
    <div className="flex items-center justify-center space-x-3 mb-2">
      <Shield className="w-8 h-8 text-indigo-600" />
      <div className="text-3xl font-bold text-indigo-600">500+</div>
    </div>
    <div className="text-gray-700 font-medium">Past Winners</div>
  </div>
</div>


            {/* CTA Button */}
            <div className="flex justify-center lg:justify-center">
  <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1">
    <span className="flex items-center space-x-3">
      <span>Click Here</span>
      <div className="w-3 h-3 bg-white rounded-full group-hover:animate-ping"></div>
    </span>
  </button>
</div>
</div>

          {/* Right Side: Visual Trophy Section */}
          <div className="relative">
  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-3xl blur-2xl"></div>
  <div className="relative bg-white/30 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-2xl">
    {/* Trophy Icons */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
      <div className="text-center group">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
          <Award className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
        <div className="text-yellow-600 font-bold">Gold</div>
        <div className="text-yellow-500 text-sm">Trophy</div>
      </div>

      <div className="text-center group">
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-300 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
          <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
        </div>
        <div className="text-blue-600 font-bold">Excellence</div>
        <div className="text-blue-500 text-sm">Medal</div>
      </div>

      <div className="text-center group">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-300 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
          <Ribbon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
        <div className="text-green-600 font-bold">Achievement</div>
        <div className="text-green-500 text-sm">Certificate</div>
      </div>
    </div>

    {/* Certificate Display */}
    <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-2xl p-6 border border-white/30">
      <div className="text-center">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <BadgeCheck className="w-6 h-6 sm:w-8 sm:h-8 text-white" /> 
        </div>
        <div className="text-black font-bold text-lg mb-2">Certificate of Excellence</div>
        <div className="text-black-200 text-sm">Awarded by AICC</div>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceAward;
