
import React, { useEffect, useState } from 'react';
import {
  Globe, Users, TrendingUp, GraduationCap, FileText, Languages, Mail, Handshake,
  Package, ShoppingCart, Building, MessageSquare, Leaf, Send, BookOpen, Scale,
  ChevronRight, ArrowDown
} from 'lucide-react';
import { Link } from 'react-router-dom';


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
     window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsVisible(true), 100);
    setTimeout(() => setShowCards(true), 800);
  }, []);

  const scrollToActivities = () => {
    document.getElementById('activities-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
<div className="relative flex items-center justify-center min-h-[80vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden py-12">
  {/* Background effects */}
  <div className="absolute inset-0 overflow-hidden">
    {/* Static background gradient overlays */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 via-transparent to-purple-900/30"></div>

    {/* Soft pulsing radial light effect */}
    <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-purple-500/10 rounded-full blur-3xl animate-softpulse"></div>

    {/*  Floating translucent circles */}
    <div
      className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/5 backdrop-blur-sm"
      style={{ transform: `translateY(0)` }}
    />
    <div
      className="absolute bottom-40 right-32 w-24 h-24 rounded-full bg-blue-400/10 backdrop-blur-sm"
      style={{ transform: `translateY(0)` }}
    />
  </div>

        {/* Hero Content */}
        <div className="relative w-full px-4 sm:px-6 max-w-6xl text-center flex flex-col justify-center items-center">
          <div className={`flex items-center justify-center text-blue-200 text-sm mb-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
  <Link to="/" className="hover:underline">
    Home
  </Link>
  <ChevronRight className="mx-2 w-4 h-4" />
  <span className="text-white">Activities</span>
</div>

          <h1 className={`text-5xl sm:text-6xl md:text-7xl font-extrabold mb-12 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="uppercase bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
              Activities
            </span>
          </h1>

          <div className={`max-w-4xl w-full transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="bg-gradient-to-r from-white/10 to-blue-100/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
              <p className="text-lg sm:text-xl font-bold text-blue-100 mb-3">
                <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  At the All India Chamber of Commerce, we are dedicated to helping your business succeed!
                </span>
              </p>
              <p className="text-sm sm:text-base md:text-lg text-blue-100 font-medium mb-2 leading-relaxed">
                We exist to help your business grow and prosper in this marketplace and abroad. From networking opportunities to public policy representation, the Chamber positively impacts your bottom line.
              </p>
              <p className="text-base font-semibold">
                <span className="bg-gradient-to-r from-yellow-200 via-orange-200 to-pink-200 bg-clip-text text-transparent">
                  Let us join hands...to grow together.
                </span>
              </p>
            </div>
          </div>

          <div className={`mt-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="text-sm sm:text-base text-blue-200 mb-8 font-semibold">Various Activities undertaken by AICC are below:</p>
            <button
              onClick={scrollToActivities}
              className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-white to-blue-50 text-blue-900 rounded-full font-bold text-sm sm:text-base hover:from-blue-50 hover:to-white transition-all duration-300 transform hover:scale-105 shadow-2xl border border-white/20"
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </div>

{/* Activities Grid Section */}
<div id="activities-section" className="relative bg-gradient-to-br from-slate-100 via-slate-100 to-slate-100 min-h-screen py-4 flex items-center">
  <div className="mx-auto px-2 sm:px-4 max-w-screen-xl w-full">
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
      {activities.map((activity, index) => {
        const Icon = activity.icon;
        return (
          <div
            key={index}
            className={`group bg-white/90 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:scale-[1.03] overflow-hidden border border-white/20 ${showCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
            style={{ transitionDelay: showCards ? `${index * 40}ms` : '0ms' }}
          >
            {/* Image + Icon */}
            <div className="relative h-20 sm:h-24">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-1 right-1 bg-indigo-600 p-1 rounded-md shadow">
                <Icon className="w-4 h-4 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Centered Title */}
            <div className="flex items-center justify-center px-2 py-3 h-[60px]">
              <h3 className="text-[10px] sm:text-xs font-bold text-center text-gray-900 leading-tight">
                {activity.title}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</div>

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


