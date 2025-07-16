import { useEffect } from 'react';
import {
  BookOpen, Users, Globe, TrendingUp, Shield, Megaphone, Truck, Building, FileText, Target, DollarSign,
  ArrowRight, CheckCircle, Award, Clock, Monitor, Star, Sparkles
} from 'lucide-react';

function EducationalInitiative() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const benefits = [
  {
    title: "Fast-Track Your Career",
    description: "Accelerate your professional growth in the lucrative import-export industry with proven strategies.",
    icon: TrendingUp,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Learn at Your Own Pace",
    description: "Study whenever and wherever you want. No need to waste time and money traveling to classes.",
    icon: Monitor,
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Expert Tutor Access",
    description: "Get personalized guidance from industry professionals with years of international trade experience.",
    icon: Users,
    gradient: "from-purple-500 to-violet-600",
  },
  {
    title: "Industry-Recognized Certification",
    description: "Receive an official certificate from AICC that validates your expertise in international trade.",
    icon: Award,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Global Business Network",
    description: "Connect with international suppliers, buyers, and trade professionals worldwide.",
    icon: Globe,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Maximize Your Profits",
    description: "Learn how to calculate profits, manage risks, and ensure you get paid for every deal.",
    icon: DollarSign,
    gradient: "from-yellow-500 to-orange-500",
  },
];


  return (
   <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
  {/* Educational Initiative Section - Full Screen (Final Enhanced Version) */}
  <div className="h-auto min-h-[80vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col lg:flex-row items-center relative overflow-hidden py-12 px-4 sm:px-6 md:px-8">
  {/* Animated background */}
  <div className="absolute inset-0">
    <div className="absolute top-10 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
  </div>

  <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between w-full max-w-7xl mx-auto gap-12">
    {/* Left content */}
    <div className="text-center lg:text-left space-y-6 w-full max-w-2xl">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-medium text-blue-200 border border-blue-400/20">
        <Sparkles className="w-4 h-4" />
        AICC Certified Program
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight uppercase">
        Educational Initiative
      </h1>
      <div className="flex items-center justify-center lg:justify-start gap-3 text-base sm:text-lg text-blue-200 flex-wrap">
        <a href="/" className="hover:text-orange-400 transition-colors cursor-pointer font-light">
          Home
        </a>
        <ArrowRight className="w-5 h-5 font-light" />
        <span className="text-white font-light">Educational Initiative</span>
      </div>
      <p className="text-blue-100 text-base sm:text-lg md:text-xl leading-relaxed font-light">
        AICC educates and trains candidates on Export & Import Procedures and Documentation globally. This online certificate course offers a practical overview and is conducted by AICC with a certification on completion.
      </p>
    </div>

    {/* Right content */}
    <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl w-full max-w-md">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-lg">
          <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-xl sm:text-2xl text-white">Import-Export Mastery</h3>
          <p className="text-blue-200 text-xs sm:text-sm">Complete certification program</p>
        </div>
      </div>
      <div className="space-y-4">
        {[
          "Online learning at your pace",
          "Industry-designed curriculum",
          "Expert tutor access",
          "AICC certification"
        ].map((text, index) => (
          <div key={index} className="flex items-center gap-3 sm:gap-4">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <span className="text-white text-sm sm:text-base md:text-lg font-medium">{text}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

          {/* Course Outline */}
      <div className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Course Outline: What You Will Cover</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto">
              The International Trade (Import-Export) course gives you skills that you can put to immediate use. Whether you are expanding your business into the international market, starting a business or simply looking at working for an international trade company this course will quickly teach you the 'ins' and 'outs' of the import-export trade.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column */}
            <div className="space-y-6 md:space-y-8">
              {/* Introduction */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 md:p-8 border border-orange-100">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">INTRODUCTION</h3>
                </div>
                <ul className="space-y-2 md:space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-orange-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Your role as an import-export agent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-orange-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">How much money can I make?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-orange-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">You as a business operator</span>
                  </li>
                </ul>
              </div>

              {/* Starting in Import/Export */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8 border border-blue-100">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Truck className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">STARTING IN IMPORTING AND EXPORT</h3>
                </div>
                <ul className="space-y-2 md:space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Don'ts of exporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Don'ts of importing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Exporting life cycle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Getting started in international trade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Going global</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Guide to sources of information on importers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">How to succeed in international business</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Importing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Export process</span>
                  </li>
                    <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Safe trading</span>
                  </li> 
                   <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Step-by-step approach to market research</span>
                  </li>
                    <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Business planning</span>
                  </li>
                    <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Business structure
</span>
                  </li>
                </ul>
              </div>

              {/* Advertising */}
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6 md:p-8 border border-purple-100">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center">
                    <Megaphone className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">ADVERTISING</h3>
                </div>
                <ul className="space-y-2 md:space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-purple-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">How to write display ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-purple-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Press releases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-purple-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">The art of writing classified ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-purple-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">How to make your classified ads work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-purple-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">How to write irresistible advertising copy</span>
                  </li>
                </ul>
              </div>

              {/* Laws & Regulations */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 md:p-8 border border-green-100">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">LAWS & REGULATIONS</h3>
                </div>
                <ul className="space-y-2 md:space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-green-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Prohibited and restricted imports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-green-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Importation permits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-green-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Document requirements for import-export</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-green-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Completing and checking documents</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 md:space-y-8">
              {/* Agency Agreement */}
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 md:p-8 border border-cyan-100">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">THE AGENCY AGREEMENT</h3>
                </div>
                <ul className="space-y-2 md:space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-cyan-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Your commission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-cyan-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Advertising promotions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-cyan-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Exclusive territory</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-cyan-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">How long your contract lasts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-cyan-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Testing market potential</span>
                  </li>
                   <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-cyan-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Promotional material</span>
                  </li>
                </ul>
              </div>

              {/* Sourcing Products */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 md:p-8 border border-yellow-100">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <Target className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">SOURCING PRODUCTS AND SELLERS</h3>
                </div>
                <ul className="space-y-2 md:space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-yellow-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">The freight forwarder</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-yellow-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">How to find unlimited products to import</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-yellow-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Customs procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-yellow-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Trade assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-yellow-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Buy and sell over the internet</span>
                  </li>
                   <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-yellow-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Testing market potential</span>
                  </li>
                </ul>
              </div>

              {/* How to Find Buyers */}
              <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 md:p-8 border border-rose-100">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Building className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">HOW TO FIND BUYERS</h3>
                </div>
                <ul className="space-y-2 md:space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-rose-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Set up or find distributors in your target country</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-rose-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Manufacturers representatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-rose-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Sell directly to department stores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-rose-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Using Chambers of Commerce</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-rose-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Entering markets</span>
                  </li>
                </ul>
              </div>

              {/* Trade Differences */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 md:p-8 border border-indigo-100">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 uppercase">Agent and Merchant: Key Difference</h3>
                </div>
                <ul className="space-y-2 md:space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-indigo-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Letters of Credit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-indigo-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Methods of Payment in international trade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-indigo-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">International trade risks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-indigo-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">Steps to exporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
  <div className="text-center mb-6 md:mb-8">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Will You Benefit?</h2>
    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
      Transform your career with practical skills and insider knowledge of the international trade industry
    </p>
  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
    {benefits.map((benefit, index) => (
      <div
        key={index}
        className="bg-white rounded-xl p-4 md:p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
      >
        <div className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br ${benefit.gradient} rounded-lg flex items-center justify-center mb-3`}>
          <benefit.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </div>
        <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">{benefit.title}</h3>
        <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{benefit.description}</p>
      </div>
    ))}
  </div>
</div>

      {/* Master the Inside Secrets - Moved up with reduced gap */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">Master the Inside Secrets</h3>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 text-sm md:text-base">How to set up your business (sole trader, partnership or company)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 text-sm md:text-base">How to source products and suppliers</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 text-sm md:text-base">How to find buyers and sellers</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 text-sm md:text-base">How to get free government assistance</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 text-sm md:text-base">Important banking and foreign exchange procedures</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 text-sm md:text-base">How to find the right freight forwarder</span>
                </div>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 text-sm md:text-base">Customs procedures for importing and exporting</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 text-sm md:text-base">How to calculate profits and ensure payment</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 text-sm md:text-base">How to take the risk out of all your deals</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 text-sm md:text-base">Strategies and sample letters to get you started</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 text-sm md:text-base">How to obtain and source vital contacts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-6">Ready to Transform Your Future?</h2>
          <p className="text-base md:text-xl text-blue-100 mb-6 md:mb-8 leading-relaxed">
            Join thousands of successful graduates who have launched their international trade careers with our comprehensive certification program.
          </p>
          
          <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3 md:w-4 md:h-4" />
              <span>Self-paced learning</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-3 h-3 md:w-4 md:h-4" />
              <span>AICC certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-3 h-3 md:w-4 md:h-4" />
              <span>Expert support</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-3 h-3 md:w-4 md:h-4" />
              <span>Industry recognized</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default EducationalInitiative;
