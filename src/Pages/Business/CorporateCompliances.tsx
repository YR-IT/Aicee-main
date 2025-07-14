import { color, motion } from "framer-motion";
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
      gradient: "from-slate-400 via-slate-400 to-slate-400"
    
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
    <section className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative z-10 py-20 px-4 bg-gradient-to-br from-indigo-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_70%)]"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center gap-2 bg-white text-gray-800 px-6 py-2 rounded-full text-sm font-medium shadow-sm mb-10 border border-purple-300"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Rocket className="w-4 h-4" /> Build with Confidence
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-10 uppercase"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Corporate Compliance
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Navigate the Companies Act, 2013 with ease — ensuring your organization remains transparent, accountable, and future-proof.
          </motion.p>
        </div>
      </div>

      {/* Compliance Grid */}
      <div className="bg-white py-16 px-4">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-14">
            Core Compliance Essentials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {compliances.map((item, index) => (
              <motion.div
                key={index}
               className="rounded-3xl border-2 border-gray-200 p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-left text-black"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 shadow-sm mb-5">
                  <item.icon className="w-7 h-7 text-gray-800" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-indigo-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 via-pink-800/20 to-indigo-800/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
              <CheckCircle className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
            </div>
          </div>

          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Relax — We’ve Got Compliance Covered
          </h3>

          <p className="text-base sm:text-xl text-gray-300 mb-6 leading-relaxed">
            Focus on growth while our experts handle filings, records, and updates — end-to-end.
          </p>

          <div className="text-lg sm:text-2xl font-bold text-white">
            Get Your Compliance Plan Started
          </div>
        </div>
      </section>
    </section>
  );
};

export default CorporateCompliances;
