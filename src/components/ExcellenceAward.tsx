import React from 'react';
import { Award, Shield, Ribbon } from 'lucide-react';

const ExcellenceAward = () => {
  return (
    <section className="relative py-12 md:py-12 px-4 md:px-8 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-yellow-50 to-orange-100"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 via-yellow-900/70 to-orange-900/80"></div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="mb-8">
              <div className="text-center sm:text-left">
  <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 md:px-6 py-2 md:py-3 mb-6">
    <span className="text-yellow-200 font-bold text-base md:text-lg animate-pulse">Excellence Award</span>
  </div>

  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
    Fill Your <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Nomination Form!</span>
  </h2>

  <p className="text-base sm:text-lg text-gray-200 mb-6 md:mb-8 leading-relaxed">
    Recognize outstanding achievements in business excellence. Submit your nomination for the prestigious AICC Excellence Award and celebrate success stories that inspire the business community.
  </p>
</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 md:mb-8 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-4 border border-white/20">
                  <div className="flex justify-center mb-2">
                    <Award className="w-8 h-8 text-yellow-300" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">25+</div>
                  <div className="text-gray-200">Award Categories</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-4 border border-white/20">
                  <div className="flex justify-center mb-2">
                    <Shield className="w-8 h-8 text-orange-300" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-orange-300 mb-2">500+</div>
                  <div className="text-gray-200">Past Winners</div>
                </div>
              </div>

              <div className="flex justify-center sm:justify-start">
  <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-lg md:text-xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1">
    <span className="flex items-center space-x-3">
      <span>Click Here</span>
      <div className="w-3 h-3 bg-white rounded-full group-hover:animate-ping"></div>
    </span>
  </button>
</div>

            </div>
          </div>

          {/* Right Visual Trophy Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 md:p-8">
              {/* Trophy Icons */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="text-center group">
                  <div className="w-12 md:w-20 h-12 md:h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Award className="w-6 md:w-10 h-6 md:h-10 text-white" />
                  </div>
                  <div className="text-yellow-300 font-bold text-xs md:text-base">Gold</div>
                </div>

                <div className="text-center group">
                  <div className="w-14 md:w-24 h-14 md:h-24 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <Shield className="w-6 md:w-12 h-6 md:h-12 text-white" />
                  </div>
                  <div className="text-yellow-200 font-bold text-xs md:text-base">Excellence</div>
                </div>

                <div className="text-center group">
                  <div className="w-12 md:w-20 h-12 md:h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Ribbon className="w-6 md:w-10 h-6 md:h-10 text-white" />
                  </div>
                  <div className="text-orange-300 font-bold text-xs md:text-base">Award</div>
                </div>
              </div>

              {/* Certificate Visual */}
              <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-2xl p-4 md:p-6 border border-white/30">
                <div className="text-center">
                  <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                    <Award className="w-6 md:w-8 h-6 md:h-8 text-white" />
                  </div>
                  <div className="text-white font-bold text-base md:text-lg mb-1 md:mb-2">Certificate of Excellence</div>
                  <div className="text-gray-300 text-xs md:text-sm">Awarded by AICC</div>
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
