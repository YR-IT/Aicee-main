import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Network,
  Megaphone,
  TrendingUp,
  ShieldCheck,
  Info,
  Lightbulb,
  Globe,
  HeartHandshake,
  CheckCircle,
  Award,
} from "lucide-react";

const benefits = [
  {
    title: "Stay Connected",
    icon: Network,
    description:
      "Platform for networking with members, institutions, government officials, diplomats, and more. Expand your business, share problems, find solutions, and build connections at networking receptions and dinners.",
    points: [
      "Network and liaise with member constituents, institutions, Central and State Government Officials, Diplomats, etc.",
      "Expand your business and enable a conducive learning environment.",
      "Share problems and find prospective solutions.",
      "Build your connections at networking receptions and dinners.",
    ],
  },
  {
    title: "Reach Out",
    icon: Megaphone,
    description:
      "Design and execute a cost-effective business-to-business marketing plan. Get solutions to your marketing and trading queries.",
    points: [
      "Business Marketing Plan.",
      "Solutions and Queries.",
      "Monthly Bulletin Advertising opportunities.",
    ],
  },
  {
    title: "Garner Your Growth",
    icon: TrendingUp,
    description:
      "A forum for young entrepreneurs to connect and grow together through management development.",
    points: [
      "Forum for Young Entrepreneurs brings Generation Next entrepreneurs together.",
      "Organises management development programmes with associations.",
    ],
  },
  {
    title: "Your Issues, Our Concern",
    icon: ShieldCheck,
    description:
      "Get clarifications on major policy issues from Central and State Governments.",
    points: [
      "Campaigning and lobbying on your behalf.",
      "Clarifications on major policy issues.",
      "Have your say through representations.",
    ],
  },
  {
    title: "Avail Timely and Vital Information",
    icon: Info,
    description: "Stay updated with timely notices, circulars, and bulletins.",
    points: [
      "Disseminates comprehensive information through notices and circulars.",
      "Provides updates on latest activities and programmes through the Bulletin.",
    ],
  },
  {
    title: "Enlightenment on Topical Issues",
    icon: Lightbulb,
    description:
      "Receive expert advice and advisory services on regulatory topics.",
    points: [
      "Regulatory advice on foreign exchange, import/export, excise, customs, industrial relations, income tax, energy conservation, etc.",
      "Labour Advisory Services.",
    ],
  },
  {
    title: "Have Global Network",
    icon: Globe,
    description:
      "Develop your global business presence with international forums and delegations.",
    points: [
      "Buyer Seller Fora for business development.",
      "Takes business delegations abroad for bilateral trade.",
      "Organises meetings with foreign delegations and international agencies.",
      "Disseminates commercial and economic information including trade enquiries and tenders from abroad.",
    ],
  },
  {
    title: "Express Your Social Concern",
    icon: HeartHandshake,
    description:
      "Shoulder your Corporate Social Responsibility by participating in social welfare.",
    points: [
      "Participate in social welfare activities and community development programmes through three Social Welfare Foundations.",
       "Collaborate with NGOs and local communities to make a measurable social impact.",
    ],
  },
  {
    title: "Certification",
    icon: CheckCircle,
    description:
      "Get certification for export-related documents and Visa recommendation letters.",
    points: [
      "Certification of export-related documents.",
      "Visa recommendation letters for business promotion visits.",
    ],
  },
  {
    title: "Get Recognised",
    icon: Award,
    description:
      "Be rewarded for your excellence at our Annual Awards Ceremony.",
    points: [
      "Get rewarded for excellence in your specialised field at the Annual Awards Ceremony.",
      "Gain industry recognition and media coverage to boost your brand reputation.",
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const pointVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const MemberBenefits: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white text-center flex flex-col items-center justify-center min-h-[70vh] px-4 py-16">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold mb-6 uppercase relative z-10"
        >
          Member Benefits
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg md:text-xl opacity-90 relative z-10 mb-6"
        >
          Discover the exclusive advantages of being part of the All India Chamber of Commerce,
          designed to empower your business, expand your network, and foster growth.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-base md:text-lg opacity-70 relative z-10 mb-10"
        >
          Join a trusted community of industry leaders, entrepreneurs, and innovators dedicated to driving India’s global success.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-32 h-1 mx-auto bg-gradient-to-r from-orange-400 to-indigo-400 rounded-full mb-8 relative z-10"
        ></motion.div>

        <motion.a
          href="#benefits"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
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
          Explore Benefits
        </motion.a>
      </div>

      {/* Benefits Section */}
      <motion.div
  id="benefits"
  className="max-w-7xl mx-auto px-4 sm:py-24 py-12 grid gap-12 md:gap-16"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {benefits.map((benefit, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      className={`grid grid-cols-1 md:grid-cols-12 items-center gap-8`}
    >
      {/* Icon Side */}
      <motion.div
        className={`md:col-span-5 flex items-center justify-center`}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="bg-white shadow-lg rounded-2xl p-10 flex items-center justify-center border border-gray-200">
          <benefit.icon className="w-24 h-24 text-orange-500" />
        </div>
      </motion.div>

      {/* Text Side */}
      <div
        className={`md:col-span-7 space-y-6 ${
          index % 2 !== 0 ? "md:order-first" : ""
        }`}
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-4xl font-bold text-gray-800"
        >
          {`0${index + 1} | ${benefit.title}`}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-700 leading-relaxed text-base md:text-lg"
        >
          {benefit.description}
        </motion.p>

        <ul className="space-y-3">
          {benefit.points.map((point, idx) => (
            <motion.li
              key={idx}
              variants={pointVariants}
              className="flex items-start gap-3 text-gray-600"
            >
              <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  ))}
</motion.div>
    </section>
  );
};

export default MemberBenefits;
