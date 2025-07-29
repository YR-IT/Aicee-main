import React from "react";
import {
  TreePine,
  GraduationCap,
  Headphones,
  Shield,
  Scale,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const initiatives = [
  {
    id: 1,
    title: "Social Initiative",
    description:
      "Enhancing property values through sustainable landscaping with trees and plants for community development. Our comprehensive approach focuses on environmental conservation while creating beautiful, livable spaces.",
    icon: TreePine,
    gradient: "from-slate-800 to-blue-900",
    bgColor: "bg-green-50",
    textColor: "text-green-800",
    buttonBg: "bg-slate-800 hover:bg-slate-900",
  },
  {
    id: 2,
    title: "Educational Initiative",
    description:
      "AICC initiative to educate, train and develop skills across various professional aspects. We provide comprehensive training programs, workshops, and certification courses designed to enhance professional capabilities.",
    icon: GraduationCap,
    gradient: "from-slate-800 to-blue-900",
    bgColor: "bg-blue-50",
    textColor: "text-blue-800",
    buttonBg: "bg-slate-800 hover:bg-slate-900",
  },
  {
    id: 3,
    title: "MSME Support & Outreach",
    description:
      "New wave MSME framework considering global context, benchmarks and technological advancement. Our support system includes mentorship, funding guidance, market access facilitation, and digital transformation assistance.",
    icon: Headphones,
    gradient: "from-slate-800 to-blue-900",
    bgColor: "bg-orange-50",
    textColor: "text-orange-800",
    buttonBg: "bg-slate-800 hover:bg-slate-900",
  },
  {
    id: 4,
    title: "Protecting Intellectual Property Rights",
    description:
      "Safeguarding unique products and innovative ideas as priceless business assets requiring protection. We offer comprehensive IP consultation, patent filing assistance, trademark registration, and legal support.",
    icon: Shield,
    gradient: "from-slate-800 to-blue-900",
    bgColor: "bg-teal-50",
    textColor: "text-teal-800",
    buttonBg: "bg-slate-800 hover:bg-slate-900",
  },
  {
    id: 5,
    title: "Know The Indian Law",
    description:
      "Educating citizens about constitutional laws and rights protection that most people are unaware of. Our legal awareness programs cover fundamental rights, consumer protection, labor laws, and civil procedures.",
    icon: Scale,
    gradient: "from-slate-800 to-blue-900",
    bgColor: "bg-purple-50",
    textColor: "text-purple-800",
    buttonBg: "bg-slate-800 hover:bg-slate-900",
  },
];

const Initiatives: React.FC = () => {
  return (
    <section className=" relative overflow-hidden bg-gradient-to-br from-slate-100 via-purple-100 to-slate-100 flex flex-col">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-5 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-32 right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-10 left-1/4 w-56 h-56 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent skew-y-12 animate-pulse" />
          <div
            className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-500/10 to-transparent -skew-y-12 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-start sm:justify-center py-8 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto w-full">
          {/* Heading */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-14">
            <div className="relative inline-block">
              {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 blur-2xl opacity-30 animate-pulse" /> */}
              <h2 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 mb-4 tracking-relaxed">
                Our Initiatives
                <Sparkles
                  className="inline-block w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 animate-spin ml-2"
                  style={{ animationDuration: "3s" }}
                />
              </h2>
              <div className="relative mx-auto w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" />
              </div>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-900 max-w-3xl mx-auto px-2">
              Empowering communities through dedicated programs that drive
              positive change and sustainable development across various
              sectors.
            </p>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
            {initiatives.map((initiative) => {
              const Icon = initiative.icon;
              return (
                <div
                  key={initiative.id}
                  className={`group relative overflow-hidden rounded-2xl ${initiative.bgColor}
                    shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 flex flex-col h-full`}
                >
                  <div
                    className={`relative h-16 bg-gradient-to-r ${initiative.gradient} flex items-center justify-center`}
                  >
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10 flex items-center space-x-2 px-4">
                      <Icon className="w-5 h-5 text-white" />
                      <h3 className="text-white font-semibold text-xs sm:text-sm uppercase">
                        {initiative.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    {/* <h4 className={`font-bold ${initiative.textColor} text-base sm:text-lg mb-2 text-center`}>{initiative.title}</h4> */}
                    <p className="text-xs sm:text-sm text-gray-600 mb-4 flex-1 text-center">
                      {initiative.description}
                    </p>
                    <div className="mt-auto flex justify-center">
                      <Link
                        to={`/initiatives/${initiative.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        <button
                          className={`${initiative.buttonBg} text-white text-sm sm:text-base py-2 px-4 sm:px-4 rounded-xl flex items-center justify-center gap-2`}
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
