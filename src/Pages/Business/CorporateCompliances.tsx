import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileText,
  Users,
  ClipboardList,
  Briefcase,
  Building2,
  BookOpenCheck,
  CheckCircle,
  Globe,
  Rocket
} from "lucide-react";

const CorporateCompliances = () => {
  const compliances = [
    {
      icon: ShieldCheck,
      title: "Board Meetings",
      description:
        "Hold regular board meetings and maintain clear records for legal transparency.",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      icon: FileText,
      title: "Auditor Appointment",
      description:
        "Appoint your company’s first auditor within 30 days and keep filings up to date.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: ClipboardList,
      title: "Director Disclosures",
      description:
        "Directors must disclose interests each year using Form MBP-1 to stay compliant.",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: Building2,
      title: "Registered Office",
      description:
        "Verify and register your office address within a month using Form INC-22.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Briefcase,
      title: "PAN & TAN",
      description:
        "Obtain essential PAN & TAN for smooth banking and tax operations from day one.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: BookOpenCheck,
      title: "Statutory Registers",
      description:
        "Maintain updated statutory registers at your registered office for audits.",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Annual Filings",
      description:
        "Submit annual returns and statements timely to avoid penalties and maintain trust.",
      gradient: "from-fuchsia-500 to-pink-600"
    },
    {
      icon: Globe,
      title: "CSR Obligations",
      description:
        "Meet your Corporate Social Responsibility obligations if applicable.",
      gradient: "from-orange-500 to-amber-600"
    },
     {
    icon: CheckCircle, 
    title: "Tax Compliance",
    description:
      "Ensure timely tax filings and advance tax payments to stay penalty-free.",
    gradient: "from-green-500 to-lime-600"
  }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-100">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center py-20 sm:py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/30 via-pink-800/30 to-indigo-800/30"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          {/* Build Your Business Badge */}
    <motion.div
  className="inline-flex items-center gap-2 mb-6 sm:mb-8 bg-gradient-to-r from-green-600 via-blue-600 to-emerald-600 text-white px-5 py-2 rounded-full text-sm sm:text-base font-semibold shadow-lg"
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
  Build Your Business
</motion.div>
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent uppercase"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Corporate Compliance
          </motion.h1>

          <motion.p
            className="text-base sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Navigate the Companies Act, 2013 with confidence — keep your business transparent, up-to-date, and future-ready.
          </motion.p>

          <motion.div
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-lg border border-white/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-purple-400" />
            <span className="text-gray-200 font-medium text-sm sm:text-lg">
              Reliable. Transparent. Compliant.
            </span>
          </motion.div>
        </div>
      </section>

      {/* Compliance Cards */}
      <section className="py-12 bg-white relative overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05),transparent_50%)] pointer-events-none"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-12">
      <h2 className="text-4xl sm:text-5xl font-bold tanimate-fadeIn text-black">
        Core Compliance Essentials
      </h2>
      <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fadeIn delay-100">
        Safeguard your business with these streamlined compliance steps, designed for trust and security.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {compliances.map((item, index) => (
        <div
          key={index}
          className="group relative bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-slideUp"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-purple-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:ring-4 group-hover:ring-purple-300/30 transition-all duration-300`}
              >
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                {item.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      ))}
    </div>
  </div>

  <style>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeIn 0.8s ease-out forwards;
    }
    .animate-slideUp {
      animation: slideUp 0.6s ease-out forwards;
    }
    .delay-100 {
      animation-delay: 100ms;
    }
  `}</style>
</section>


      {/* CTA Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-900 via-gray-950 to-black overflow-hidden">
  {/* Color tint overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-800/30 via-pink-800/30 to-indigo-800/30"></div>

  {/* Content container */}
  <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
    <div className="flex justify-center mb-8">
      <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
        <CheckCircle className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
      </div>
    </div>

    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6">
      Relax — We’ve Got Compliance Covered
    </h3>

    <p className="text-base sm:text-xl text-purple-100 mb-8 leading-relaxed">
      Focus on growth while our experts handle filings, records, and updates — end-to-end.
    </p>

    <div className="text-lg sm:text-2xl font-bold text-white">
      Get Your Compliance Plan Started
    </div>
  </div>
</section>

    </div>
  );
};

export default CorporateCompliances;
