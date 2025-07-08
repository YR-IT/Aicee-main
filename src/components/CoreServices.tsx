import {
  Globe2,
  LifeBuoy,
  Package,
  MoveRight
} from 'lucide-react';

const services = [
  {
    title: "Global Network",
    description:
      "Connect with businesses and opportunities across international markets through our extensive global network spanning over 150 countries.",
    icon: <Globe2 className="w-10 h-10 text-white" />,
    bg: "from-pink-500 to-red-400",
  },
  {
    title: "Business Support",
    description:
      "Get comprehensive support for your business growth with our expert guidance, industry expertise, and personalized consultation services.",
    icon: <LifeBuoy className="w-10 h-10 text-white" />,
    bg: "from-indigo-500 to-blue-400",
  },
  {
    title: "Trade Facilitation",
    description:
      "Streamline your trade operations with our comprehensive facilitation services, industry connections, and regulatory expertise.",
    icon: <Package className="w-10 h-10 text-white" />,
    bg: "from-green-500 to-emerald-400",
  },
];

const CoreServices = () => {
  return (
    <section className="pt-16 pb-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 leading-tight">
            Our <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">Core Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering businesses worldwide with comprehensive solutions and unparalleled expertise
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white/90 rounded-3xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transform transition duration-500 hover:-translate-y-2 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: "both" }}
            >
              {/* Icon */}
              <div className="w-full flex justify-center">
  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.bg} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
    {service.icon}
  </div>
</div>

              {/* Title */}
              <h3 className="text-xl sm:text-3xl text-center font-bold mb-4 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-2 text-base md:text-lg text-center">
                {service.description}
              </p>

              {/* Learn More */}
              {/* <button className="text-orange-600 font-semibold hover:text-red-500 transition-colors duration-300 flex items-center space-x-2 group-hover:translate-x-2">
                <span>Learn More</span>
                <MoveRight className="w-4 h-4" />
              </button> */}
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default CoreServices;
