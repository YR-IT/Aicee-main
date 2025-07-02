import React, { useEffect, useState } from 'react';
import { 
  Globe, 
  Users, 
  TrendingUp, 
  GraduationCap, 
  FileText, 
  Languages, 
  Mail, 
  Handshake,
  Package,
  ShoppingCart,
  Building,
  MessageSquare,
  Leaf,
  Send,
  BookOpen,
  Scale,
  ChevronRight,
  ArrowDown
} from 'lucide-react';
import Footer from '../components/Footer';
const activities = [
  {
    icon: Globe,
    title: "Advertising in Foreign Countries",
    description: "AICC brings a fortnightly newspaper, which has a wide circulation and offers companies unique opportunity of advertising your products in foreign countries.",
    image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: Users,
    title: "Recruitment of Experts",
    description: "AICC arranges professional skills at a premium. The companies can recruit experts on extremely favourable terms through AICC.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: TrendingUp,
    title: "Marketing Services",
    description: "AICC extensive data bank helps the companies to access new suppliers, importers and exporters. The companies can market your business to over 600+ Chamber members.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: GraduationCap,
    title: "Seminars, Workshops and Technology Conferences",
    description: "AICC organizes various educational events to help businesses stay updated with latest trends, technologies, and best practices in their respective industries.",
    image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: FileText,
    title: "Business Visas",
    description: "AICC issues letters of recommendations to expedite the visa formalities for business trip to foreign countries.",
    image: "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: Languages,
    title: "Translations",
    description: "AICC has tied up with translation and interpretation services providing institutions and offer translation and interpreter services for companies' participation.",
    image: "https://images.pexels.com/photos/267669/pexels-photo-267669.jpg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: Mail,
    title: "Direct Mailing",
    description: "In order to promote companies' product and prepare a seminar or event, AICC undertakes a direct mailing on Companies' behalf using its comprehensive up-dated list.",
    image: "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: Handshake,
    title: "Collaboration – Hand in Hand",
    description: "With the help of data bank and experience, AICC assists companies at all levels to find suitable collaborators in foreign countries.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: Package,
    title: "Exports – Made in India",
    description: "AICC makes contacts and with its assistance, companies will find a suitable importer and agent. We supply trade information, publish market studies.",
    image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: ShoppingCart,
    title: "Imports – Value for Money, Quality at Door-step",
    description: "All India Chamber of Commerce helps companies to identify foreign supplies and representatives with up-to-date information on products.",
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: Building,
    title: "Trade Fairs – Gateway to the World",
    description: "Participation in trade fairs means promoting exports and opening up new markets. AICC can make companies' participation in trade fairs a success.",
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: MessageSquare,
    title: "Public Policy Discussions",
    description: "AICC engages in policy discussions across a broad spectrum of topics that have a direct impact on the business community.",
    image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: Leaf,
    title: "Technology & Environment – State-of-the-Art Foreign Technology",
    description: "AICC assists Indian Firms gaining access to foreign environment technology to deal with various areas of pollution control in India.",
    image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: Send,
    title: "Delegation – Access to the Target",
    description: "AICC plans and organizes the visit of various foreign delegations to India as well as Indian delegations to other countries.",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: BookOpen,
    title: "Publications – Guiding Good Business Practices",
    description: "AICC brings out a wide range of publications. These include market studies, guides, handbooks of law, taxation, market regulations.",
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: Scale,
    title: "Legal Assistance – Knowing the Law",
    description: "All India Chamber of Commerce helps companies to settle disputes through conciliation and through arbitration.",
    image: "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpg?auto=compress&cs=tinysrgb&w=600"
  }
];

const Activities: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});

  useEffect(() => {
    // Trigger animations on mount
    setTimeout(() => setIsVisible(true), 100);
    setTimeout(() => setShowCards(true), 800);
  }, []);

  const scrollToActivities = () => {
    document.getElementById('activities-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const getImageSrc = (activity: typeof activities[0], index: number) => {
    if (imageErrors[index]) {
      // Fallback to a different image if the original fails
      const fallbackImages = [
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpg?auto=compress&cs=tinysrgb&w=600"
      ];
      return fallbackImages[index % fallbackImages.length];
    }
    return activity.image;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Compact Hero Section */}
      <div className="relative h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden flex items-center">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Large floating orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          
          {/* Medium floating elements */}
          <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-lg opacity-15 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-gradient-to-r from-rose-400 to-red-400 rounded-full mix-blend-multiply filter blur-lg opacity-18 animate-pulse animation-delay-3000"></div>
          
          {/* Small accent elements */}
          <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mix-blend-multiply filter blur-md opacity-25 animate-pulse animation-delay-500"></div>
          <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full mix-blend-multiply filter blur-md opacity-20 animate-pulse animation-delay-2500"></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-16 right-16 w-24 h-24 bg-white opacity-5 transform rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-16 left-16 w-16 h-16 bg-white opacity-10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 via-transparent to-purple-900/30"></div>
        </div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px',
            animation: 'float 6s ease-in-out infinite'
          }}></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 py-8 flex flex-col justify-center h-full">
          {/* Breadcrumb */}
          <div className={`flex items-center justify-center text-blue-200 text-sm sm:text-lg mb-4 sm:mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span>Home</span>
            <ChevronRight className="mx-2 w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-white">Activities</span>
          </div>

          {/* Main Title with Enhanced Styling */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
                Activities
              </span>
            </h1>
            
            {/* Enhanced Subtitle with Gradient and Shadow */}
            <div className={`max-w-4xl sm:max-w-5xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-gradient-to-r from-white/10 to-blue-100/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl">
                <p className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed mb-3 sm:mb-4">
                  <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
                    At the All India Chamber of Commerce, we are dedicated to helping your business succeed!
                  </span>
                </p>
                <p className="text-sm sm:text-base md:text-lg text-blue-100 leading-relaxed font-medium mb-3 sm:mb-4">
                  We exist to help your business grow and prosper in this marketplace and abroad. From networking opportunities to public policy representation, the Chamber positively impacts your bottom line. We guide, facilitate and promote your business through odds and make it a success.
                </p>
                <p className="text-base sm:text-lg md:text-xl font-semibold">
                  <span className="bg-gradient-to-r from-yellow-200 via-orange-200 to-pink-200 bg-clip-text text-transparent">
                    Let us join hands...to grow together.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
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

        {/* Scroll Indicator */}
        <div className={`absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="animate-bounce">
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-blue-200" />
          </div>
        </div>
      </div>

      {/* Activities Section with Enhanced Cards */}
      <div id="activities-section" className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Background Elements for Activities Section */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-lg opacity-15 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-5 animate-pulse animation-delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          {/* Activities Grid with Smaller Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5 mb-16">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <div 
                  key={index}
                  className={`group bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-105 overflow-hidden border border-white/30 ${
                    showCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: showCards ? `${index * 80}ms` : '0ms' 
                  }}
                >
                  {/* Image Section - Smaller */}
                  <div className="relative h-24 sm:h-28 lg:h-32 overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
                    <img 
                      src={getImageSrc(activity, index)} 
                      alt={activity.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      onError={() => handleImageError(index)}
                      onLoad={(e) => {
                        // Ensure image is visible once loaded
                        (e.target as HTMLImageElement).style.opacity = '1';
                      }}
                      style={{ opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Icon Overlay - Smaller */}
                    <div className="absolute top-2 right-2 bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-600 p-1.5 sm:p-2 rounded-md sm:rounded-lg shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                      <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  </div>

                  {/* Content Section - Compact */}
                  <div className="p-2 sm:p-3 lg:p-4">
                    <h3 className="text-xs sm:text-sm lg:text-base font-bold text-gray-800 leading-tight mb-1 sm:mb-2 min-h-[2rem] sm:min-h-[2.5rem] flex items-center group-hover:text-indigo-700 transition-colors duration-300">
                      {activity.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 line-clamp-2 sm:line-clamp-3">
                      {activity.description}
                    </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-lg sm:rounded-xl"></div>
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Activities;