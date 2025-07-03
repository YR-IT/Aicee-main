import React, { useEffect, useState } from 'react';
import {
  Globe, Users, TrendingUp, GraduationCap, FileText, Languages, Mail, Handshake,
  Package, ShoppingCart, Building, MessageSquare, Leaf, Send, BookOpen, Scale,
  ChevronRight, ArrowDown
} from 'lucide-react';
import Footer from '../components/Footer';

const activities = [
  {
    icon: Globe,
    title: "Advertising in Foreign Countries",
    description: "AICC brings a fortnightly newspaper, which has a wide circulation and offers companies unique opportunity of advertising your products in foreign countries.",
    image: "/images/Activity1.webp"
  },
  {
    icon: Users,
    title: "Recruitment of Experts",
    description: "AICC arranges professional skills at a premium. The companies can recruit experts on extremely favourable terms through AICC.",
    image: "images/Activity2.webp"
  },
  {
    icon: TrendingUp,
    title: "Marketing Services",
    description: "AICC extensive data bank helps the companies to access new suppliers, importers and exporters. The companies can market your business to over 600+ Chamber members.",
    image: "images/Activity3.webp"
  },
  {
    icon: GraduationCap,
    title: "Seminars, Workshops and Technology Conferences",
    description: "AICC organizes various educational events to help businesses stay updated with latest trends, technologies, and best practices in their respective industries.",
    image: "images/Activity4.webp"
  },
  {
    icon: FileText,
    title: "Business Visas",
    description: "AICC issues letters of recommendations to expedite the visa formalities for business trip to foreign countries.",
    image: "images/Activity5.webp"
  },
  {
    icon: Languages,
    title: "Translations",
    description: "AICC offers translation and interpreter services for companies' participation in global business activities.",
    image: "images/Activity6.webp"
  },
  {
    icon: Mail,
    title: "Direct Mailing",
    description: "To promote your product or prepare an event, AICC undertakes direct mailing on your behalf using its updated list.",
    image: "images/Activity7.webp"
  },
  {
    icon: Handshake,
    title: "Collaboration – Hand in Hand",
    description: "AICC helps companies find suitable collaborators in foreign countries using its network and expertise.",
    image: "images/Activity8.webp"
  },
  {
    icon: Package,
    title: "Exports – Made in India",
    description: "With AICC’s help, companies find suitable importers, agents, and get valuable trade information.",
    image: "images/Activity9.webp"
  },
  {
    icon: ShoppingCart,
    title: "Imports – Value for Money",
    description: "AICC helps companies identify foreign suppliers with product info and assistance.",
    image: "images/Activity10.webp"
  },
  {
    icon: Building,
    title: "Trade Fairs – Gateway to the World",
    description: "AICC ensures your participation in trade fairs is effective and impactful.",
    image: "images/Activity11.webp"
  },
  {
    icon: MessageSquare,
    title: "Public Policy Discussions",
    description: "AICC participates in major business policy discussions that shape industry outcomes.",
    image: "images/Activity12.webp"
  },
  {
    icon: Leaf,
    title: "Technology & Environment",
    description: "AICC supports firms in accessing foreign environmental technologies for pollution control.",
    image: "images/Activity13.webp"
  },
  {
    icon: Send,
    title: "Delegation – Access to the Target",
    description: "AICC organizes visits for Indian and foreign delegations for mutual growth.",
    image: "images/Activity14.webp"
  },
  {
    icon: BookOpen,
    title: "Publications – Business Guides",
    description: "AICC publishes business guides, law handbooks, and market studies.",
    image: "images/Activity15.webp"
  },
  {
    icon: Scale,
    title: "Legal Assistance",
    description: "AICC helps resolve business disputes through conciliation and arbitration.",
    image: "images/Activity16.webp"
  },
  {
    icon: FileText,
    title: "Protecting Intellectual Property",
    description: "AICC guides businesses on protecting their intellectual assets globally, including patents, trademarks, and copyrights through legal aid and partnerships.",
    image: "images/Activity17.webp"
  },


  {
    icon: Users,
    title: "Social Initiatives & Community Building",
    description: "Through various CSR drives and social outreach, AICC promotes inclusive growth and community empowerment alongside industrial development.",
    image: "images/Activity18.webp"
  }
];

const Activities: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    setTimeout(() => setShowCards(true), 800);
  }, []);

  const scrollToActivities = () => {
    document.getElementById('activities-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

      {/* Hero Section - Unchanged */}
      <div className="relative h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-lg opacity-15 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-gradient-to-r from-rose-400 to-red-400 rounded-full mix-blend-multiply filter blur-lg opacity-18 animate-pulse animation-delay-3000"></div>
          <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mix-blend-multiply filter blur-md opacity-25 animate-pulse animation-delay-500"></div>
          <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full mix-blend-multiply filter blur-md opacity-20 animate-pulse animation-delay-2500"></div>
          <div className="absolute top-16 right-16 w-24 h-24 bg-white opacity-5 transform rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-16 left-16 w-16 h-16 bg-white opacity-10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 via-transparent to-purple-900/30"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 py-8 flex flex-col justify-center h-full">
          <div className={`flex items-center justify-center text-blue-200 text-sm sm:text-lg mb-4 sm:mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span>Home</span>
            <ChevronRight className="mx-2 w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-white">Activities</span>
          </div>
          <div className="text-center mb-6 sm:mb-8">
            <h1 className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
                Activities
              </span>
            </h1>
            <div className={`max-w-4xl sm:max-w-5xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-gradient-to-r from-white/10 to-blue-100/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl">
                <p className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed mb-3 sm:mb-4">
                  <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
                    At the All India Chamber of Commerce, we are dedicated to helping your business succeed!
                  </span>
                </p>
                <p className="text-sm sm:text-base md:text-lg text-blue-100 leading-relaxed font-medium mb-3 sm:mb-4">
                  We exist to help your business grow and prosper in this marketplace and abroad. From networking opportunities to public policy representation, the Chamber positively impacts your bottom line.
                </p>
                <p className="text-base sm:text-lg md:text-xl font-semibold">
                  <span className="bg-gradient-to-r from-yellow-200 via-orange-200 to-pink-200 bg-clip-text text-transparent">
                    Let us join hands...to grow together.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-base sm:text-lg text-blue-200 mb-4 sm:mb-6 font-semibold">Various initiatives undertaken by AICC are below:</p>
            <button
              onClick={scrollToActivities}
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-white to-blue-50 text-blue-900 rounded-full font-bold text-base sm:text-lg hover:from-blue-50 hover:to-white transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl border-2 border-white/20"
            >
              Explore Our Services
            </button>
          </div>
        </div>
        <div className={`absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="animate-bounce">
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-blue-200" />
          </div>
        </div>
      </div>

      {/* Activities Section */}
     
<div id="activities-section" className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
  <div className="relative container mx-auto px-4 sm:px-6 py-8 sm:py-12">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
      {activities.map((activity, index) => {
        const Icon = activity.icon;
        return (
          <div
            key={index}
            className={`group bg-white/90 rounded-lg shadow-md hover:shadow-lg transition-all duration-400 transform hover:-translate-y-1 hover:scale-105 overflow-hidden border border-white/20 ${showCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: showCards ? `${index * 60}ms` : '0ms' }}
          >
            {/* Image Section */}
            <div className="relative h-24 sm:h-28 md:h-32 overflow-hidden">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute top-1 right-1 bg-indigo-600 p-1 rounded-md shadow">
                <Icon className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Title Section */}
            <div className="p-2">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-800 text-center">
                {activity.title}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</div>


      <Footer />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-2500 { animation-delay: 2.5s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
};

export default Activities;