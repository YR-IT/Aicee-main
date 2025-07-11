import { useEffect, useState } from "react";
import { ArrowDown, MapPin } from "lucide-react";
import { organizations } from "../../data/international";

function International() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
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

        <div
          className={`text-center px-4 sm:px-6 md:px-8 max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            International
            <span className="block text-blue-300">Partnerships</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-2">
            All India Chamber of Commerce has entered into mutual co-operation
            agreements with international organizations to promote and develop
            bilateral economic relations by providing a platform for businessmen
            to meet, discuss and explore business opportunities.
          </p>
          <p className="text-blue-200 italic text-sm sm:text-base md:text-lg max-w-2xl mx-auto flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5 text-blue-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 7H7a5 5 0 00-5 5v5h7V7zm12 0h-2a5 5 0 00-5 5v5h7V7z" />
            </svg>
            “Building bridges for better business worldwide.”
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </section>

      {/* Partners Section */}
      <section
        id="partners-section"
        className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto h-full flex flex-col">
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-3">
              Our Global Partners
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Building bridges across continents through strategic partnerships
              with leading chambers of commerce and industry organizations
              worldwide.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-6 gap-6 content-start justify-center">
            {organizations.map((org, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-blue-200 flex flex-col items-center w-full border-2 border-gray-200"
                style={{
                  minHeight: "150px",
                  animationDelay: `${index * 50}ms`,
                  animation: isVisible
                    ? "fadeInUp 0.6s ease-out forwards"
                    : "none",
                }}
              >
                <div className="w-full h-24 mb-2 rounded-md overflow-hidden group-hover:scale-105 transition-transform duration-300 relative">
                  <img
                    src={org.image}
                    alt={org.name}
                    className="w-full h-full object-fill"
                    onError={(e) => {
                      const nextElement = e.currentTarget
                        .nextElementSibling as HTMLElement | null;
                      if (nextElement) {
                        nextElement.style.display = "flex";
                      }
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  {/* <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 rounded-md hidden items-center justify-center text-xl absolute top-0 left-0">
                    {org.logo}
                  </div> */}
                </div>

                <div className="text-center flex-1 flex flex-col justify-center gap-2 overflow-hidden">
                  <h3 className="font-semibold text-gray-900 mb-1 text-xs leading-tight group-hover:text-blue-700 transition-colors line-clamp-3">
                    {org.name}
                  </h3>

                  <p className="text-blue-600 font-medium text-xs flex items-center justify-center w-full">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 shrink-0" />
                    <span className="truncate max-w-[80%]">{org.country}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default International;
