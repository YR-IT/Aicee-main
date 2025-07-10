import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  FileText,
  Users,
  Rocket,
  BarChart,
  Briefcase,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Automated Compliance Tracking",
    description:
      "Automatically monitor licenses and permits to ensure you stay compliant with all local and national regulations.",
    bg: "bg-gradient-to-br from-white-50 to-blue-50",
    iconColor: "text-blue-600",
    titleColor: "text-blue-800",
  },
  {
    icon: Clock,
    title: "Timely Renewal Reminders",
    description:
      "Get timely alerts for upcoming renewals and filings — never miss a critical deadline again.",
    bg: "bg-gradient-to-br from-white-50 to-blue-50",
    iconColor: "text-green-600",
    titleColor: "text-green-800",
  },
  {
    icon: FileText,
    title: "Expert Regulatory Guidance",
    description:
      "Receive up-to-date guidance from seasoned professionals on evolving regulations.",
    bg: "bg-gradient-to-br from-white-50 to-blue-50",
    iconColor: "text-red-600",
    titleColor: "text-red-800",
  },
  {
    icon: BarChart,
    title: "Comprehensive Audit Support",
    description:
      "Get fully prepared for audits with streamlined documentation and expert oversight.",
    bg: "bg-gradient-to-br from-white-50 to-blue-50",
    iconColor: "text-pink-600",
    titleColor: "text-pink-800",
  },
  {
    icon: Users,
    title: "Dedicated Business Support",
    description:
      "A team of compliance specialists at your side to simplify complex filings and paperwork.",
    bg: "bg-gradient-to-br from-white-50 to-blue-50",
    iconColor: "text-yellow-600",
    titleColor: "text-yellow-800",
  },
  {
    icon: Briefcase,
    title: "Performance Dashboards",
    description:
      "Monitor operational compliance metrics via detailed reports and dashboards.",
    bg: "bg-gradient-to-br from-white-50 to-blue-50",
    iconColor: "text-purple-600",
    titleColor: "text-purple-800",
  },
];

const MaintainYourBusiness = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative z-10 py-32 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,128,128,0.1),transparent_70%)]"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center gap-2 bg-white text-emerald-700 px-6 py-2 rounded-full text-sm font-medium shadow-sm mb-6 border border-emerald-200"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Rocket className="w-4 h-4" /> Empower Your Business Journey
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-100 mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Stay Compliant. Stay Focused.
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We handle the paperwork and regulations so you can concentrate on growing your business. From licenses to renewals and reports — we’ve got you covered.
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-white py-24 px-4">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-14">
            Our Maintenance Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className={`rounded-3xl p-6 ${service.bg} shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-left`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <div className={`w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-sm mb-5 ${service.iconColor}`}>
                  <service.icon className={`w-7 h-7`} />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${service.titleColor}`}>{service.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MaintainYourBusiness;
