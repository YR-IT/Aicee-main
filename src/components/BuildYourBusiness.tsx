import React from "react";
import {
  Briefcase,
  Settings,
  FileText,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const businessSteps = [
  {
    id: 1,
    title: "Start Your Business",
    description:
      "Turn your idea into a legal entity and lay the groundwork for lasting success.",
    icon: Briefcase,
    bg: "bg-indigo-100",
    text: "text-indigo-600",
  },
  {
    id: 2,
    title: "Maintain Your Business",
    description:
      "Stay compliant and keep operations running smoothly with routine filings.",
    icon: Settings,
    bg: "bg-purple-100",
    text: "text-purple-600",
  },
  {
    id: 3,
    title: "Regulatory Filing",
    description:
      "File statutory documents on time to avoid penalties and maintain good standing.",
    icon: FileText,
    bg: "bg-sky-100",
    text: "text-sky-600",
  },
  {
    id: 4,
    title: "Corporate Compliances",
    description:
      "Manage governance, meetings, and annual reports seamlessly and efficiently.",
    icon: CheckCircle,
    bg: "bg-pink-100",
    text: "text-pink-600",
  },
];

export default function BuildYourBusiness() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-16 text-center">
        <motion.h2
  className="text-4xl sm:text-7xl font-bold mb-4"
  initial={{ opacity: 0, y: -10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Build Your Business
</motion.h2>
        <motion.p
          className="text-gray-800 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Every work process shapes how teams turn ideas into value. Great
          companies craft thoughtful, industry-specific workflows to complete
          tasks smoothly and drive sustainable success.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {businessSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition group cursor-pointer border border-gray-200 hover:border-gray-300 flex flex-col items-center text-center"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full ${step.bg} mb-4 transition-transform group-hover:scale-110`}
              >
                <step.icon className={`w-7 h-7 ${step.text}`} />
              </div>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-700 mb-6">{step.description}</p>
              <a
  href={
    step.id === 1
      ? "/start-your-business"
      : step.id === 2
      ? "/maintain-your-business"
      : step.id === 3
      ? "/regulatory-filing"
      : step.id === 4
      ? "/corporate-compliances"
      : "#"
  }
  className={`inline-flex items-center text-sm font-semibold ${step.text} group-hover:underline`}
>
  Read More
  <ArrowRight className="w-4 h-4 ml-1" />
</a>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
