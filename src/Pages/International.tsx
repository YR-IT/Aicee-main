import { useEffect, useState } from 'react';
import {
   Globe, ArrowDown, Building2,
  MapPin, // Removed unused: Users, Handshake, Mail, Phone
  
} from 'lucide-react';
import Footer from '../components/Footer';
const organizations = [ {
    name: "The Chamber of Commerce and Industry of the Republic of Abkhazia",
    country: "Republic of Abkhazia",
    logo: "🏛️",
    image: "https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Camara de Comercio Exterior de Rosario",
    country: "Argentina", 
    logo: "🇦🇷",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Chamber of Arcadia",
    country: "Greece",
    logo: "🏛️",
    image: "https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Brussels Enterprises Commerce & Industry",
    country: "Belgium",
    logo: "🇧🇪",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Camara de Comercio de Guatemala",
    country: "Guatemala",
    logo: "🇬🇹",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Centre National de Promotion des Echanges",
    country: "Republic of Cameroon",
    logo: "🇨🇲",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Egyptian Businessmen's Association",
    country: "Egypt",
    logo: "🇪🇬",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Mekelle Chamber of Commerce",
    country: "Ethiopia",
    logo: "🇪🇹",
    image: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Timis Chamber of Commerce, Industry and Agriculture",
    country: "Romania",
    logo: "🇷🇴",
    image: "https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Islamic Chamber Research & Information Centre",
    country: "Iran",
    logo: "🇮🇷",
    image: "https://images.pexels.com/photos/3184342/pexels-photo-3184342.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Camara de Comert si Industrie Cluj",
    country: "Romania",
    logo: "🇷🇴",
    image: "https://images.pexels.com/photos/3184343/pexels-photo-3184343.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "The National Chamber of Commerce of Sri Lanka",
    country: "Sri Lanka",
    logo: "🇱🇰",
    image: "https://images.pexels.com/photos/3184344/pexels-photo-3184344.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "The Federation of Israeli Chambers of Commerce",
    country: "Israel",
    logo: "🇮🇱",
    image: "https://images.pexels.com/photos/3184345/pexels-photo-3184345.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Amman Chamber of Commerce",
    country: "Jordan",
    logo: "🇯🇴",
    image: "https://images.pexels.com/photos/3184346/pexels-photo-3184346.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Cyprus Chamber of Commerce and Industry",
    country: "Cyprus",
    logo: "🇨🇾",
    image: "https://images.pexels.com/photos/3184347/pexels-photo-3184347.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "The Federation of Swaziland Employers and Chamber of Commerce",
    country: "Swaziland",
    logo: "🏛️",
    image: "https://images.pexels.com/photos/3184348/pexels-photo-3184348.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Sabaragamuwa Chamber of Commerce & Industry",
    country: "Sri Lanka",
    logo: "🇱🇰",
    image: "https://images.pexels.com/photos/3184349/pexels-photo-3184349.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "International Trade Association",
    country: "Global",
    logo: "🌍",
    image: "https://images.pexels.com/photos/3184350/pexels-photo-3184350.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];



function International() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Floating Elements */}
        <div
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/5 backdrop-blur-sm"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div
          className="absolute bottom-40 right-32 w-24 h-24 rounded-full bg-blue-400/10 backdrop-blur-sm"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        />

        <div className={`text-center px-8 max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-8">
            <Globe className="w-16 h-16 text-blue-300 mr-4" />
            <div className="h-12 w-px bg-blue-300/50 mr-4" />
            <Building2 className="w-16 h-16 text-blue-300" />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            International
            <span className="block text-blue-300">Partnerships</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            All India Chamber of Commerce has entered into mutual co-operation agreements with international organizations to promote and develop bilateral economic relations by providing a platform for businessmen to meet, discuss and explore business opportunities.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners-section" className="h-screen py-8 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto h-full flex flex-col">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Our Global Partners
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Building bridges across continents through strategic partnerships with leading chambers of commerce and industry organizations worldwide.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-3 md:grid-cols-6 gap-3 content-start overflow-hidden">
            {organizations.map((org, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-blue-200 flex flex-col items-center h-fit"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                }}
              >
                <div className="w-full h-16 mb-2 rounded-md overflow-hidden group-hover:scale-105 transition-transform duration-300 relative">
                  <img
                    src={org.image}
                    alt={org.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement | null;
                      if (nextElement) {
                        nextElement.style.display = 'flex';
                      }
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 rounded-md hidden items-center justify-center text-xl absolute top-0 left-0">
                    {org.logo}
                  </div>
                </div>

                <div className="text-center flex-1 flex flex-col justify-between">
                  <h3 className="font-semibold text-gray-900 mb-1 text-xs leading-tight group-hover:text-blue-700 transition-colors line-clamp-2">
                    {org.name}
                  </h3>

                  <p className="text-blue-600 font-medium text-xs flex items-center justify-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span className="truncate">{org.country}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <p className="text-lg text-gray-500 font-light">
              and many more...
            </p>
          </div>
        </div>
      </section>
<Footer />
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default International;
