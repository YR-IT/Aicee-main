import { ChevronRight, Building2, TrendingUp, Users, Globe, FileText, HelpCircle, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import AnimatedNumber from '../../components/AnimatedNumber';
function MSMESupportOutreach() {
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
     <div className="min-h-[80vh] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 flex flex-col">
    <div className="flex-1 flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center w-full">
        {/* Left content */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-blue-200 mb-4 sm:mb-6 flex-wrap">
            <a href="/" className="hover:text-orange-400 transition-colors cursor-pointer">
              Home
            </a>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-white">MSME Support & Outreach</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight text-center lg:text-start uppercase">
            MSME Support & <span className="text-blue-300 block">Outreach</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto lg:mx-0 mb-8 text-center lg:text-left">
            Empowering India's micro, small, and medium enterprises through innovative frameworks,
            global competitiveness, and sustainable growth initiatives.
          </p>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
  {[
    { label: 'MSMEs in India', value: 75, suffix: 'M+', color: 'text-blue-300' },
    { label: 'GDP Contribution', value: 30, suffix: '%', color: 'text-green-300' },
    { label: 'Employment', value: 120, suffix: 'M+', color: 'text-purple-300' },
    { label: 'Exports', value: 45, suffix: '%', color: 'text-orange-300' }
  ].map((stat, index) => (
    <div key={index} className="text-center">
      <div className={`text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 ${stat.color}`}>
        <AnimatedNumber target={stat.value} duration={2000} />{stat.suffix}
      </div>
      <div className="text-[10px] sm:text-xs md:text-sm text-blue-200">{stat.label}</div>
    </div>
  ))}
</div>
        </div>

        {/* Right content */}
        <div className="flex flex-col items-center space-y-6 w-full">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition duration-300 w-full max-w-xs mx-auto">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-2xl mx-auto">
              <Building2 className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-blue-900" />
            </div>
            <div className="text-center">
              <div className="text-[10px] sm:text-xs text-blue-200 mb-1 sm:mb-2">Government of India</div>
              <div className="text-base sm:text-lg font-semibold">Ministry of MSME</div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-4 sm:px-6 py-2 sm:py-3 border border-white/10 w-full max-w-xs mx-auto">
            <div className="text-center">
              <div className="text-sm sm:text-base font-semibold text-blue-200">Atmanirbhar Bharat</div>
              <div className="text-[10px] sm:text-xs text-blue-300">Self-Reliant India</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="flex justify-center pb-8">
      <div className="animate-bounce">
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 rotate-90" />
      </div>
    </div> */}
  </div>
</div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
  {[
    {
      icon: TrendingUp,
      title: 'Growth & Innovation',
      text: 'Fostering innovation and rewarding growth in emerging industry sectors'
    },
    {
      icon: Globe,
      title: 'Global Competitiveness',
      text: 'Building competitive edge for MSMEs in the global marketplace'
    },
    {
      icon: Users,
      title: 'Productivity Enhancement',
      text: 'Improving productivity through strategic support and outreach programs'
    }
  ].map((item, index) => (
    <div
      key={index}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
        {item.title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600">{item.text}</p>
    </div>
  ))}
</div>

        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-16">
          <div className="flex items-center mb-6">
            <div className="bg-blue-600 w-1 h-6 sm:h-8 rounded-full mr-4"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">New Wave MSME Framework</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                A comprehensive framework that considers the global context and benchmarks, emerging 
                opportunities in top industry growth sectors, and India's socio-economic imperatives.
              </p>
              <ul className="space-y-4">
                {[
                  'Rewarding growth, innovation, and productivity',
                  'Building global competitive edge for the sector',
                  'Adapting to global economic environment',
                  'Responding to changing domestic economic scenario'
                ].map((point, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-sm sm:text-base text-gray-600">{point}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6 text-center">Framework Impact</h3>
              <div className="space-y-4">
                {[
                  ['Innovation Index', '↑ 25%', 'text-blue-600'],
                  ['Export Growth', '↑ 18%', 'text-green-600'],
                  ['Digital Adoption', '↑ 40%', 'text-purple-600'],
                  ['Credit Access', '↑ 30%', 'text-orange-600']
                ].map(([label, value, color], index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                    <span className="text-gray-700 text-sm sm:text-base">{label}</span>
                    <span className={`font-semibold ${color}`}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center justify-center mb-8">
            <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">FAQ's On MSME</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              ['What is MSME classification?', 'Learn about the criteria for micro, small, and medium enterprises classification based on investment and turnover.'],
              ['Registration Process', 'Step-by-step guide for MSME registration and required documentation for the process.'],
              ['Government Schemes', 'Explore various government schemes and incentives available for MSMEs across different sectors.'],
              ['Financial Support', 'Information about loans, subsidies, and financial assistance programs for MSMEs.'],
               ['Compliance & Regulations', 'Understand the legal and compliance requirements for running an MSME smoothly.'],
    ['Market Access & Export', 'Learn how MSMEs can expand their market reach domestically and internationally.'],
            ].map(([title, desc], index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              View All FAQs
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default MSMESupportOutreach;
