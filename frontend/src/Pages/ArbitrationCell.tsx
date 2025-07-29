import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Scale, FileText, GraduationCap, Clock } from "lucide-react";

const ArbitrationCell: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex flex-col">
      {/* ✅ Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white text-center flex flex-col items-center justify-center min-h-[60vh] px-4 py-16">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold mb-6 uppercase relative z-10"
        >
          Arbitration Cell
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg md:text-xl opacity-90 relative z-10 mb-6"
        >
          Facilitating efficient, neutral and cost-effective resolution of
          commercial disputes under the ALL INDIA CHAMBER OF COMMERCE.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-32 h-1 mx-auto bg-gradient-to-r from-orange-400 to-indigo-400 rounded-full mb-8 relative z-10"
        ></motion.div>

        <motion.a
          href="#details"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-flex items-center gap-2 bg-white text-orange-600 px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-orange-100 transition-all relative z-10"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
          Learn More
        </motion.a>
      </div>

      {/* ✅ Main Content Section */}
      <div
        id="details"
        className="relative bg-gradient-to-br from-white to-gray-50 py-16 md:py-20 px-4 overflow-hidden"
      >
        {/* Decorative background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-justify">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 md:text-start text-center">
              About the Arbitration Cell
            </h2>
            <p className="text-lg mb-4 text-gray-700 leading-relaxed">
              The <strong>ADR Cell</strong> provides robust institutional
              support for resolving complex commercial disputes through trusted
              Alternative Dispute Resolution (ADR) mechanisms. Our transparent
              processes align closely with the
              <strong> ALL INDIA CHAMBER OF COMMERCE (AICC)</strong> to ensure
              fairness, credibility, and operational efficiency.
            </p>
            <p className="text-lg mb-4 text-gray-700 leading-relaxed">
              Acting as a completely neutral secretariat, we guarantee fully
              transparent proceedings and regular updates at every stage,
              empowering businesses to resolve conflicts swiftly, securely, and
              cost-effectively for all parties.
            </p>
            <p className="text-lg mb-8 text-gray-700 leading-relaxed">
              We also assist organizations with meticulous contract drafting,
              and actively organize training, conferences, and specialized
              workshops to prepare, upskill, and build networks for arbitrators
              and industry experts nationwide.
            </p>
          </div>

          {/* Right: Image or Illustration */}
          <div className="w-full">
            <div className="relative">
              <img
                src="https://plus.unsplash.com/premium_photo-1661333820879-517c5e808bfe?q=80&w=1204&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Business Arbitration Meeting"
                className="w-full rounded-2xl shadow-2xl border-4 border-white transform scale-100 transition-transform duration-500 ease-in-out hover:scale-105"
              />

              {/* Optional overlay */}
              <div className="absolute inset-0 rounded-2xl border-4 border-blue-600 opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Highlights / Features */}
        <div className="relative mt-16 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              title: "Neutral & Transparent",
              description:
                "Independent case administration ensures fairness and impartiality.",
              icon: Scale,
            },
            {
              title: "Expert Guidance",
              description:
                "Receive support on contract drafting and legal compliance.",
              icon: FileText,
            },
            {
              title: "Capacity Building",
              description:
                "Engage in training, seminars and awareness programs for growth.",
              icon: GraduationCap,
            },
            {
  title: "Efficient Resolution",
  description:
    "Benefit from quick, cost-effective dispute settlements for businesses.",
  icon: Clock,
},
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition duration-300 border border-gray-200 flex flex-col items-center max-w-xs mx-auto"
            >
              <feature.icon className="w-10 h-10 mb-3 text-blue-600" />
              <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative mt-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl py-12 px-6 shadow-xl">
          <h4 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Resolve disputes the right way
          </h4>
          <p className="text-white opacity-90 mb-6 max-w-3xl mx-auto text-base md:text-xl">
            Partner with our dedicated team and experience seamless, fair, and
            efficient dispute resolution for your business.
          </p>
          <a href="/contact-us">
            <button className="bg-white text-blue-700 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition">
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArbitrationCell;
