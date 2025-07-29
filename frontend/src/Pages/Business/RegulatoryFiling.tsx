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
import React from "react";

const services = [
  {
    icon: Percent,
    title: "GST Compliance",
    description:
      "Timely filing of GST returns to avoid penalties and maintain compliance with evolving GST laws.",
    gradient: "from-green-400 via-green-500 to-green-600",
  },
  {
    icon: DollarSign,
    title: "Income Tax Filing",
    description:
      "Accurate preparation and filing of income tax returns for individuals, firms, and companies.",
    gradient: "from-blue-400 via-indigo-500 to-indigo-600",
  },
  {
    icon: Building2,
    title: "ROC Annual Filing",
    description:
      "Ensure timely ROC filings including annual returns and financial statements as per MCA norms.",
    gradient: "from-purple-400 via-pink-500 to-pink-600",
  },
  {
    icon: UserCheck,
    title: "Director KYC",
    description:
      "Manage Director KYC filings and updates to keep your company records compliant.",
    gradient: "from-yellow-400 via-orange-500 to-orange-600",
  },
  {
    icon: Briefcase,
    title: "Labour Law Compliance",
    description:
      "Assist with periodic filings under various labour laws, including PF, ESIC and professional tax.",
    gradient: "from-pink-400 via-rose-500 to-rose-600",
  },
  {
    icon: FileText,
    title: "TDS Returns",
    description:
      "Prepare and submit TDS returns accurately to avoid notices and penalties.",
    gradient: "from-cyan-400 via-teal-500 to-teal-600",
  },
];

const RegulatoryFiling = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-50 to-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,128,0,0.05),transparent)] pointer-events-none"></div>
        <div className="relative max-w-6xl mx-auto z-10">
          <motion.div
            className="inline-flex items-center gap-2 mb-10 bg-gradient-to-r from-green-600 via-blue-600 to-emerald-600 text-white px-6 py-2 rounded-full text-base font-semibold shadow-xl"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Rocket className="w-5 h-5" /> Empowering Your Growth
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl font-bold mb-6 text-white uppercase tracking-tight"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Smarter Regulatory Filing
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Simplified, streamlined and seamless compliance across GST, Tax, ROC, and Labour Laws — managed by experts.
          </motion.p>

          <motion.div
            className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-full px-5 py-3 sm:px-8 sm:py-4 shadow-lg border border-white/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ClipboardList className="w-6 h-6 text-gray-300" />
            <span className="text-gray-200 font-medium text-lg">
              Effortless. Compliant. Ready.
            </span>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Complete Compliance Services
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            End-to-end regulatory support so you can focus on building your business.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
  {services.map((item, index) => (
    <motion.div
      key={index}
      className="group bg-white border border-gray-100 rounded-2xl shadow-sm p-6 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        className={`w-14 h-14 mb-4 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}
      >
        <item.icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
        {item.title}
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        {item.description}
      </p>
    </motion.div>
  ))}
</div>
        </div>
      </section>

      {/* CTA Section */}
  
<section className="relative py-12 bg-gradient-to-br from-green-50 via-white to-emerald-50">
  <div className="absolute inset-0 bg-gradient-to-r from-green-100/30 via-blue-100/30 to-emerald-100/30"></div>
  <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
    <div className="flex justify-center mb-8">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center shadow-md">
        <ClipboardList className="w-10 h-10 text-green-700" />
      </div>
    </div>

    <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
      Sit Back — We’ll Keep You Compliant
    </h3>

    <p className="text-lg sm:text-xl text-gray-700 mb-8">
      Avoid penalties and delays. Let our compliance professionals manage your statutory obligations with precision and care.
    </p>

    <motion.p
      whileHover={{ scale: 1.02 }}
      className="text-slate-700 text-lg sm:text-xl font-semibold"
    >
      Start Filing Smarter
    </motion.p>
  </div>
</section>

    </div>
  );
};

export default RegulatoryFiling;
