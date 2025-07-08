import { useEffect } from 'react';
import { Shield, Lock, Eye, UserCheck, FileText, Clock, ChevronRight } from 'lucide-react';

function IntellectualProperty() {
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const protectionMethods = [
    {
      icon: Eye,
      title: "Keep it under scrutiny",
      description: "Maintain careful oversight and monitoring of your intellectual property assets"
    },
    {
      icon: Shield,
      title: "Be aware of your Intellectual Property Rights",
      description: "Stay informed about the scope and limitations of your IP protections"
    },
    {
      icon: UserCheck,
      title: "Consult an expert",
      description: "Work with qualified IP attorneys and professionals for guidance"
    },
    {
      icon: FileText,
      title: "Hire an auditor",
      description: "Regular IP audits help identify vulnerabilities and opportunities"
    },
    {
      icon: Lock,
      title: "Keep a record of almost everything related",
      description: "Document your development process, ideas, and related communications"
    },
    {
      icon: Clock,
      title: "Protect your IP without delay",
      description: "Time is crucial - file applications and establish protections early"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Full Screen Hero Section with Content */}
      <div className="min-h-screen flex flex-col justify-center px-6 py-8">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header with Logo */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              {/* Logo */}
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl shadow-2xl mr-6">
                <Shield className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                Protecting Intellectual Property Rights
              </h1>
            </div>
            
            {/* Breadcrumb */}
            <div className="flex items-center justify-center text-slate-300 text-lg mb-12">
              <span className="hover:text-white transition-colors cursor-pointer">Home</span>
              <ChevronRight className="w-5 h-5 mx-3" />
              <span className="text-blue-300">Protecting Intellectual Property Rights</span>
            </div>
          </div>

          {/* Summary Content */}
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <div className="prose prose-xl max-w-none text-white">
                <p className="text-white/90 leading-relaxed mb-8 text-xl">
                  <strong className="text-white">Intellectual Property (IP)</strong> is the categorized representation of intangible things such as copyrights, patents, trademarks, unique concepts, and ideas. According to the rule of Intellectual Property, these intangible services should receive same legal protection just as the tangible property. In brief, it refers to the mere ownership of one's ideas.
                </p>
                
                <p className="text-white/90 leading-relaxed text-xl mb-12">
                  Creating a unique product for your business or bringing innovative ideas into reality can prove to be a priceless asset. Majority of the new entrepreneurs don't recognize the need of protecting their Intellectual Property, and the ones who know are not aware of where to start.
                </p>
              </div>
            </div>
          </div>

          {/* Protection Methods Section */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ways to Protect Your Intellectual Property
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full"></div>
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

          {/* Closing Statement */}
          <div className="mt-16 bg-gradient-to-r from-blue-500/20 to-teal-500/20 backdrop-blur-lg rounded-3xl p-8 md:p-12 text-white text-center border border-white/20 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Secure Your Innovation Today
            </h3>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Your intellectual property is one of your most valuable business assets. By implementing these protection strategies and working with qualified professionals, you can safeguard your innovations and maintain your competitive advantage in the marketplace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntellectualProperty;