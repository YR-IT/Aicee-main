import { useEffect } from 'react';
import {
  Shield, Lock, Eye, UserCheck, FileText, Clock, ChevronRight, Key
} from 'lucide-react';

function IntellectualProperty() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const protectionMethods = [
    {
      icon: Eye,
      title: "Keep it under scrutiny",
      description: "Maintain careful oversight and monitoring of your intellectual property assets",
      gradient: 'from-blue-400 to-teal-600'
    },
    {
      icon: Shield,
      title: "Be aware of your Intellectual Property Rights",
      description: "Stay informed about the scope and limitations of your IP protections",
      gradient: 'from-purple-400 to-indigo-600'
    },
    {
      icon: UserCheck,
      title: "Consult an expert",
      description: "Work with qualified IP attorneys and professionals for guidance",
      gradient: 'from-green-400 to-emerald-600'
    },
    {
      icon: FileText,
      title: "Hire an auditor",
      description: "Regular IP audits help identify vulnerabilities and opportunities",
      gradient: 'from-cyan-400 to-blue-600'
    },
    {
      icon: Lock,
      title: "Keep a record of almost everything related",
      description: "Document your development process, ideas, and related communications",
      gradient: 'from-pink-400 to-rose-600'
    },
    {
      icon: Clock,
      title: "Protect your IP without delay",
      description: "Time is crucial - file applications and establish protections early",
      gradient: 'from-amber-400 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative sm:h-[80vh] h-[90vh] overflow-hidden flex items-center justify-center py-20 sm:py-24 lg:py-32 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Shield className="w-16 sm:w-24 h-16 sm:h-24 text-white animate-pulse" />
              <div className="absolute -top-2 -right-2 w-6 sm:w-8 h-6 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Key className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight uppercase">
            Protecting Intellectual Property Rights
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center space-x-4 text-gray-300 mb-6">
            <a href="/" className="hover:text-teal-400 transition-colors cursor-pointer">
              Home
            </a>
            <ChevronRight className="w-4 h-4 text-gray-300" />
            <span className="text-blue-300">Intellectual Property</span>
          </div>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-gray-200 mb-8 sm:mb-12 max-w-5xl mx-auto leading-relaxed px-2">
            Intellectual Property (IP) includes copyrights, patents, trademarks, unique concepts, and ideas.
            Protect your ideas and creations with proper strategy and legal safeguards.
          </p>

          {/* CTA Button */}
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 sm:px-6 py-3 sm:py-3 shadow-lg border border-blue-200">
            <Shield className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
            <span className="text-gray-700 font-medium text-sm sm:text-base">Learn how to secure your IP assets</span>
          </div>
        </div>
      </section>

      {/* Protection Methods Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ways to Protect Your Intellectual Property
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
              Your ideas are valuable. Use these practical strategies to safeguard them and keep your competitive edge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {protectionMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white/10 backdrop-blur-lg rounded-2xl hover:bg-white/20 transition-all duration-300 p-6 border border-white/20 hover:border-blue-400/50 hover:-translate-y-2 shadow-xl hover:shadow-2xl"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-teal-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {method.title}
                    </h3>
                    
                    <p className="text-white/80 leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                );
              })}
            </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-12 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Shield className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Secure Your Innovation Today
          </h3>

          <p className="text-base sm:text-xl text-blue-100 mb-8 leading-relaxed px-2">
            Your intellectual property is one of your most valuable business assets.
            Work with professionals, stay vigilant, and protect your rights to keep your ideas safe.
          </p>

          <div className="text-lg sm:text-2xl font-bold text-white">
            Protect. Innovate. Lead.
          </div>
        </div>
      </section>
    </div>
  );
}

export default IntellectualProperty;
