import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  FileText,
  Users,
  Rocket,
  CheckCircle,
  BarChart,
  Briefcase,
} from "lucide-react";

const MaintainYourBusiness = () => {
  return (
    <section className="relative overflow-hidden">
      {/* HERO SECTION */}
      <div className="relative z-10 w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-200 via-white to-sky-200">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 via-pink-100/20 to-sky-100/20"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 via-blue-600 to-emerald-600 text-white px-6 py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg mb-10 sm:mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Rocket className="w-5 h-5 text-white" />
            Build Your Business
          </motion.div>

          {/* Gradient Heading */}
          <motion.h2
            className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight bg-gradient-to-r from-blue-600 via-green-600 to-emerald-600 bg-clip-text text-transparent uppercase"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Maintain Your Business
          </motion.h2>

          {/* Breadcrumb */}
          <motion.div
            className="text-sm text-gray-600 mb-8 sm:mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span
              className="hover:underline cursor-pointer"
              onClick={() => window.history.back()}
            >
              Home
            </span>
            <span className="mx-2">&gt;</span>
            <span>Maintain Your Business</span>
          </motion.div>

          {/* Body Text */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-12 max-w-5xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Stay compliant and stress-free. We help you obtain and renew all
            essential business licenses — from Factory Licenses to FSSAI and IEC
            — while providing comprehensive support for audits, reporting, and
            regulatory updates, so you can focus on scaling your business.
          </motion.p>
        </div>
      </div>

      {/* SERVICE HIGHLIGHTS SECTION */}
      <div className="bg-white py-16 px-4">
  <motion.div
    className="max-w-6xl mx-auto"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.4 }}
  >
    <h3 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-12 text-center">
      Comprehensive Business Maintenance Solutions
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <motion.div
        className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-2xl hover:bg-blue-50 transition-all duration-300"
        whileHover={{ scale: 1.05, rotate: -1 }}
        transition={{ duration: 0.4 }}
      >
        <Shield className="w-12 h-12 text-blue-600 mb-4" />
        <h4 className="text-xl font-bold text-blue-700 mb-3">
          Automated Compliance Tracking
        </h4>
        <p className="text-gray-700">
          Monitor licenses and permits automatically. Stay compliant with all local and national laws without manual tracking.
        </p>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-2xl hover:bg-green-50 transition-all duration-300"
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Clock className="w-12 h-12 text-green-600 mb-4" />
        <h4 className="text-xl font-bold text-green-700 mb-3">
          Timely Renewal Reminders
        </h4>
        <p className="text-gray-700">
          Get proactive alerts for renewals and filings to avoid last-minute compliance headaches.
        </p>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-2xl hover:bg-red-50 transition-all duration-300"
        whileHover={{ scale: 1.07, rotate: -2 }}
        transition={{ duration: 0.4 }}
      >
        <FileText className="w-12 h-12 text-red-600 mb-4" />
        <h4 className="text-xl font-bold text-red-700 mb-3">
          Expert Regulatory Guidance
        </h4>
        <p className="text-gray-700">
          Stay ahead with clear advice on changing regulations and compliance updates.
        </p>
      </motion.div>

      {/* Card 4 */}
      <motion.div
        className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-2xl hover:bg-pink-50 transition-all duration-300"
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ duration: 0.4 }}
      >
        <BarChart className="w-12 h-12 text-pink-600 mb-4" />
        <h4 className="text-xl font-bold text-pink-700 mb-3">
          Comprehensive Audit Support
        </h4>
        <p className="text-gray-700">
          Be ready for audits with organized documents and expert guidance.
        </p>
      </motion.div>

      {/* Card 5 */}
      <motion.div
        className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-2xl hover:bg-yellow-50 transition-all duration-300"
        whileHover={{ scale: 1.05, rotate: -1 }}
        transition={{ duration: 0.4 }}
      >
        <Users className="w-12 h-12 text-yellow-600 mb-4" />
        <h4 className="text-xl font-bold text-yellow-700 mb-3">
          Dedicated Business Support
        </h4>
        <p className="text-gray-700">
          Work directly with compliance managers who handle the details so you can focus on your business.
        </p>
      </motion.div>

      {/* Card 6 */}
      <motion.div
        className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-2xl hover:bg-purple-50 transition-all duration-300"
        whileHover={{ scale: 1.07, rotate: 2 }}
        transition={{ duration: 0.4 }}
      >
        <Briefcase className="w-12 h-12 text-purple-600 mb-4" />
        <h4 className="text-xl font-bold text-purple-700 mb-3">
          Detailed Performance Reports
        </h4>
        <p className="text-gray-700">
          Get clear, actionable performance reports that show how your compliance and operations are tracking over time.
        </p>
      </motion.div>
    </div>
  </motion.div>
</div>

    </section>
  );
};

export default MaintainYourBusiness;
