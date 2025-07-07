import { motion } from "framer-motion";
import {
  FileText,
  DollarSign,
  Building2,
  UserCheck,
  Briefcase,
  Percent,
  ClipboardList,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: Percent,
    title: "GST Compliance",
    description:
      "Timely filing of GST returns to avoid penalties and maintain compliance with evolving GST laws.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: DollarSign,
    title: "Income Tax Filing",
    description:
      "Accurate preparation and filing of income tax returns for individuals, firms, and companies.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Building2,
    title: "ROC Annual Filing",
    description:
      "Ensure timely ROC filings including annual returns and financial statements as per MCA norms.",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: UserCheck,
    title: "Director KYC",
    description:
      "Manage Director KYC filings and updates to keep your company records compliant.",
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    icon: Briefcase,
    title: "Labour Law Compliance",
    description:
      "Assist with periodic filings under various labour laws, including PF, ESIC and professional tax.",
    gradient: "from-fuchsia-500 to-rose-600",
  },
  {
    icon: FileText,
    title: "TDS Returns",
    description:
      "Prepare and submit TDS returns accurately to avoid notices and penalties.",
    gradient: "from-cyan-500 to-teal-600",
  },
];

const RegulatoryFiling = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900">
      {/* Hero */}
      <section className="relative flex items-center justify-center py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/40 via-blue-100/30 to-emerald-100/20"></div>
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
            className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight bg-gradient-to-r from-green-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent uppercase"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Regulatory Filing
          </motion.h1>

          <motion.p
            className="text-base sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Expert regulatory filing services covering GST, Income Tax, ROC, and Labour Law compliance — so you can focus on growth while we handle the rest.
          </motion.p>

          <motion.div
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-lg border border-white/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ClipboardList className="w-5 sm:w-6 h-5 sm:h-6 text-green-600" />
            <span className="text-gray-800 font-medium text-sm sm:text-lg">
              Smart. Simple. Sorted.
            </span>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.03),transparent_50%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold animate-fadeIn text-black">
              Regulatory Compliance Services
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fadeIn delay-100">
              Keep your business compliant and stress-free with our comprehensive suite of filing services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-green-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:ring-4 group-hover:ring-green-300/30 transition-all duration-300`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

      {/* CTA */}
      <section className="relative py-16 bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 via-blue-100/20 to-emerald-100/20"></div>
  <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
    <div className="flex justify-center mb-8">
      <div className="w-16 sm:w-20 h-16 sm:h-20 bg-green-600/10 rounded-full flex items-center justify-center backdrop-blur-md">
        <ClipboardList className="w-8 sm:w-10 h-8 sm:h-10 text-green-700" />
      </div>
    </div>

    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
      Sit Back — We’ll Keep You Compliant
    </h3>

    <p className="text-base sm:text-xl text-green-900 mb-8 leading-relaxed">
      Forget penalties and late fees. Our experts manage your returns, filings, and statutory updates — accurately and on time.
    </p>

    <div className="text-lg sm:text-2xl font-bold text-green-700">
      Start Filing Smarter Today
    </div>
  </div>
</section>
    </div>
  );
};

export default RegulatoryFiling;
