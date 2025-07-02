import React from 'react';

const ExcellenceAward = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-yellow-50 to-orange-100" />
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 via-yellow-900/70 to-orange-900/80" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
   {/* Floating Animated Award Icons */}
   <div className="absolute inset-0 overflow-hidden">
                {/* Medal Icon */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center animate-float delay-100 shadow-xl backdrop-blur-sm border-2 border-yellow-300/50">
                  <svg className="w-12 h-12 text-yellow-600 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="8" r="3" fill="currentColor"/>
                    <path d="M12 14l-3 8h6l-3-8z" fill="currentColor"/>
                    <path d="M9 14l-1 3h2l1-3z" fill="currentColor" opacity="0.7"/>
                    <path d="M15 14l1 3h-2l-1-3z" fill="currentColor" opacity="0.7"/>
                  </svg>
                </div>
                
                {/* Badge Icon */}
                <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center animate-pulse delay-300 shadow-xl backdrop-blur-sm border border-blue-300/50">
                  <svg className="w-10 h-10 text-blue-600 animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    <circle cx="12" cy="12" r="4" fill="white"/>
                    <circle cx="12" cy="12" r="2" fill="currentColor"/>
                  </svg>
                </div>
                
                {/* Certificate Icon */}
                <div className="absolute bottom-20 left-20 w-18 h-18 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center animate-bounce delay-500 shadow-xl backdrop-blur-sm border border-green-300/50">
                  <svg className="w-11 h-11 text-green-600 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    <path d="M8 12h8M8 16h5" stroke="white" strokeWidth="1" fill="none"/>
                    <circle cx="16" cy="6" r="2" fill="gold"/>
                  </svg>
                </div>
                
                {/* Trophy Icon */}
                <div className="absolute bottom-10 right-10 w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center animate-pulse delay-700 shadow-xl backdrop-blur-sm border border-orange-300/50">
                  <svg className="w-9 h-9 text-orange-600 animate-bounce" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
                    <circle cx="12" cy="10" r="2" fill="currentColor"/>
                    <path d="M12 13L10 15H14L12 13Z" fill="currentColor"/>
                  </svg>
                </div>
                
                {/* Ribbon Medal */}
                <div className="absolute top-1/2 left-10 w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center animate-ping delay-200 shadow-lg backdrop-blur-sm border border-purple-300/50">
                  <svg className="w-7 h-7 text-purple-600 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="8" r="4" fill="currentColor"/>
                    <path d="M8 12l4 8 4-8z" fill="currentColor" opacity="0.8"/>
                    <path d="M10 12l2 4 2-4z" fill="white"/>
                  </svg>
                </div>
                
                {/* Achievement Badge */}
                <div className="absolute top-1/3 right-1/4 w-10 h-10 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center animate-ping delay-400 shadow-lg backdrop-blur-sm border border-red-300/50">
                  <svg className="w-6 h-6 text-red-600 animate-bounce" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L13.09 8.26L20 9L14 14L16 22L12 18L8 22L10 14L4 9L10.91 8.26L12 2Z"/>
                    <circle cx="12" cy="9" r="2" fill="white"/>
                  </svg>
                </div>
                
                {/* Excellence Seal */}
                <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center animate-bounce delay-600 shadow-xl backdrop-blur-sm border border-indigo-300/50">
                  <svg className="w-10 h-10 text-indigo-600 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="12" r="6" fill="currentColor"/>
                    <path d="M12 8l1.5 3h3l-2.5 2 1 3-3-2-3 2 1-3-2.5-2h3L12 8z" fill="white"/>
                  </svg>
                </div>
                
                {/* Quality Badge */}
                <div className="absolute top-2/3 left-1/3 w-14 h-14 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center animate-pulse delay-800 shadow-lg backdrop-blur-sm border border-teal-300/50">
                  <svg className="w-8 h-8 text-teal-600 animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L19 6.5C18.8 5.9 18.6 5.4 18.3 4.9L19.1 3.4L17.6 1.9L16.1 2.7C15.6 2.4 15.1 2.2 14.5 2L14 0H10L9.5 2C8.9 2.2 8.4 2.4 7.9 2.7L6.4 1.9L4.9 3.4L5.7 4.9C5.4 5.4 5.2 5.9 5 6.5L3 7V9L5 9.5C5.2 10.1 5.4 10.6 5.7 11.1L4.9 12.6L6.4 14.1L7.9 13.3C8.4 13.6 8.9 13.8 9.5 14L10 16H14L14.5 14C15.1 13.8 15.6 13.6 16.1 13.3L17.6 14.1L19.1 12.6L18.3 11.1C18.6 10.6 18.8 10.1 19 9.5L21 9ZM12 13C10.3 13 9 11.7 9 10C9 8.3 10.3 7 12 7C13.7 7 15 8.3 15 10C15 11.7 13.7 13 12 13Z"/>
                  </svg>
                </div>
                
                {/* Honor Medal */}
                <div className="absolute top-40 right-40 w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl flex items-center justify-center animate-float delay-1000 shadow-lg backdrop-blur-sm border border-pink-300/50">
                  <svg className="w-7 h-7 text-pink-600 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="7" r="5" fill="currentColor"/>
                    <path d="M7 12l5 10 5-10z" fill="currentColor" opacity="0.8"/>
                    <circle cx="12" cy="7" r="2" fill="white"/>
                  </svg>
                </div>
              </div>

          {/* Left Content Section */}
          <div className="text-white">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-6">
                <svg className="w-6 h-6 text-yellow-300 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="12" cy="8" r="3" fill="currentColor" />
                  <path d="M12 14l-3 8h6l-3-8z" fill="currentColor" />
                </svg>
                <span className="text-yellow-200 font-bold text-lg">Excellence Award</span>
                <svg className="w-6 h-6 text-yellow-300 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  <circle cx="12" cy="12" r="4" fill="white" />
                </svg>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Fill Your <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Nomination Form!</span>
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Recognize outstanding achievements in business excellence. Submit your nomination for the prestigious AICC Excellence Award and celebrate success stories that inspire the business community.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-2">
                    <svg className="w-8 h-8 text-yellow-300 group-hover:scale-110 transition-transform duration-300 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
                      <circle cx="12" cy="8" r="3" fill="currentColor" />
                      <path d="M12 14l-3 8h6l-3-8z" fill="currentColor" />
                    </svg>
                    <div className="text-3xl font-bold text-yellow-300">25+</div>
                  </div>
                  <div className="text-gray-200">Award Categories</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-2">
                    <svg className="w-8 h-8 text-orange-300 group-hover:scale-110 transition-transform duration-300 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z" />
                      <circle cx="12" cy="10" r="2" fill="currentColor" />
                    </svg>
                    <div className="text-3xl font-bold text-orange-300">500+</div>
                  </div>
                  <div className="text-gray-200">Past Winners</div>
                </div>
              </div>
              <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1">
                <span className="flex items-center space-x-3">
                  <svg className="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    <circle cx="16" cy="6" r="2" fill="gold" />
                  </svg>
                  <span>Click Here</span>
                  <div className="w-3 h-3 bg-white rounded-full group-hover:animate-ping"></div>
                </span>
              </button>
            </div>
          </div>

          {/* Right Showcase Section (placeholders only) */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
               {/* Award Winner Categories Grid */}
                      <div className="grid grid-cols-3 gap-6 mb-8">
                        <div className="text-center group">
                          <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl backdrop-blur-sm border-2 border-yellow-300/50">
                            <svg className="w-12 h-12 text-yellow-600 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
                              <circle cx="12" cy="10" r="2" fill="currentColor"/>
                              <path d="M12 13L10 15H14L12 13Z" fill="currentColor"/>
                            </svg>
                          </div>
                          <div className="text-yellow-300 font-bold">Gold</div>
                          <div className="text-yellow-200 text-sm">Trophy</div>
                        </div>
                        
                        <div className="text-center group">
                          <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl backdrop-blur-sm border-2 border-blue-300/50">
                            <svg className="w-14 h-14 text-blue-600 animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
                              <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
                              <circle cx="12" cy="8" r="3" fill="currentColor"/>
                              <path d="M12 14l-3 8h6l-3-8z" fill="currentColor"/>
                              <path d="M9 14l-1 3h2l1-3z" fill="white" opacity="0.7"/>
                              <path d="M15 14l1 3h-2l-1-3z" fill="white" opacity="0.7"/>
                            </svg>
                          </div>
                          <div className="text-blue-300 font-bold">Excellence</div>
                          <div className="text-blue-200 text-sm">Medal</div>
                        </div>
                        
                        <div className="text-center group">
                          <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl backdrop-blur-sm border border-green-300/50">
                            <svg className="w-12 h-12 text-green-600 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                              <path d="M8 12h8M8 16h5" stroke="white" strokeWidth="1" fill="none"/>
                              <circle cx="16" cy="6" r="2" fill="gold"/>
                            </svg>
                          </div>
                          <div className="text-green-300 font-bold">Achievement</div>
                          <div className="text-green-200 text-sm">Certificate</div>
                        </div>
                      </div>

                      {/* Previous Winners Showcase */}
                      <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-2xl p-6 border border-white/30">
                        <div className="text-center mb-4">
                          <div className="text-white font-bold text-lg mb-2">Previous Award Winners</div>
                          <div className="text-gray-300 text-sm">Join the prestigious list of excellence</div>
                        </div>
                        
                        <div className="grid grid-cols-4 gap-4">
                          <div className="bg-white/20 rounded-xl p-3 flex items-center justify-center group hover:bg-white/30 transition-all duration-300">
                            <svg className="w-8 h-8 text-yellow-400 animate-bounce group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                              <circle cx="12" cy="8" r="4" fill="currentColor"/>
                              <path d="M8 12l4 8 4-8z" fill="currentColor" opacity="0.8"/>
                              <path d="M10 12l2 4 2-4z" fill="white"/>
                            </svg>
                          </div>
                          <div className="bg-white/20 rounded-xl p-3 flex items-center justify-center group hover:bg-white/30 transition-all duration-300">
                            <svg className="w-8 h-8 text-blue-400 animate-pulse group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2L13.09 8.26L20 9L14 14L16 22L12 18L8 22L10 14L4 9L10.91 8.26L12 2Z"/>
                              <circle cx="12" cy="9" r="2" fill="white"/>
                            </svg>
                          </div>
                          <div className="bg-white/20 rounded-xl p-3 flex items-center justify-center group hover:bg-white/30 transition-all duration-300">
                            <svg className="w-8 h-8 text-green-400 animate-bounce group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                              <circle cx="16" cy="6" r="2" fill="gold"/>
                            </svg>
                          </div>
                          <div className="bg-white/20 rounded-xl p-3 flex items-center justify-center group hover:bg-white/30 transition-all duration-300">
                            <svg className="w-8 h-8 text-orange-400 animate-pulse group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                              <circle cx="12" cy="12" r="6" fill="currentColor"/>
                              <path d="M12 8l1.5 3h3l-2.5 2 1 3-3-2-3 2 1-3-2.5-2h3L12 8z" fill="white"/>
                            </svg>
                          </div>
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
