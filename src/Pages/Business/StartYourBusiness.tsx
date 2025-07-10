import { motion } from "framer-motion";
import { Rocket, CheckCircle, ShieldCheck, Clock3, FileText, BarChart, Users, LayoutDashboard } from "lucide-react";

const sections = [
  {
    title: "Evaluate Your Idea",
    content:
      "Before launching your business, think carefully about the problem your product or service solves. Identify your target audience, understand your competitors, and plan how you will operate — online, offline, or both. Consider whether it will stay a side project or grow into a full business with an international reach. Answering these key questions will help you assess the market, prepare for challenges, and convince investors and partners that your idea is practical and worth pursuing."
  },
  {
    title: "Private Limited Company",
    content:
      "A Private Limited Company is the most popular business structure for startups planning to raise funds from investors or banks. It limits the owners’ liability to their shares, so their personal assets are protected. You need at least two people and can have up to 200 shareholders. All such companies must register with the Registrar of Companies (RoC) and comply with annual filings under the Companies Act. Ignoring mandatory compliance can lead to penalties or legal trouble later."
  },
  {
    title: "One Person Company",
    content:
      "An OPC lets a single entrepreneur run a business as a separate legal entity while enjoying limited liability. The sole shareholder acts as the director and has complete control over decisions. OPCs have higher compliance costs than sole proprietorships but add credibility with banks and clients. They also provide some tax benefits. However, OPCs are not suitable for businesses planning to raise venture capital, as they are limited by structure and regulations on ownership and funding sources."
  },
  {
    title: "Sole Proprietorship",
    content:
      "A sole proprietorship is the easiest and most common form of business in India. It is owned and managed by one person who is personally liable for all debts and obligations. There is no separate legal identity, so personal assets are at risk. It is ideal for small businesses that don’t need outside investment or shareholders. This structure is simple to set up and run but offers no protection for personal wealth if the business incurs debts or faces lawsuits. Many freelancers and local shop owners choose this model because of its simplicity and minimal compliance requirements."
  },
  {
    title: "Get Government Registrations",
    content:
      "All businesses must complete mandatory registrations and licenses to operate legally. Requirements vary by industry, location, and company size, but a Permanent Account Number (PAN) is essential for opening bank accounts and filing taxes. A Tax Deduction and Collection Account Number (TAN) is required if you deduct or collect tax at source. Depending on your business, you may also need trade licenses, labor law registrations, or specific permits to meet local or industry compliance standards. It’s important to stay updated with changes in rules to avoid penalties."
  },
  {
    title: "Import Export Code",
    content:
      "An Import Export Code (IEC) is mandatory for any business that wants to trade goods or services internationally. It is a 10-digit number issued by the Director General of Foreign Trade (DGFT). Without an IEC, you cannot clear customs or send and receive payments for imports and exports. Obtaining an IEC is quick and requires minimal paperwork. This simple step opens the door for your business to reach international markets and connect with customers and partners worldwide, expanding your global growth opportunities significantly and efficiently."
  },
  {
    title: "Maintaining Accounts & Compliance",
    content:
      "Setting up an accounting and compliance system is critical for any business, especially a startup. Keeping accurate financial records helps you track expenses, monitor cash flow, report profits, and prepare tax returns on time. Investors and partners often ask to see your financial statements to assess the business’s health. Hiring an accountant or using good accounting software ensures you stay compliant with regulations, avoid penalties, and make informed decisions based on reliable financial data."
  },
  {
    title: "Form The Team",
    content:
      "Building the right team is one of the most important parts of launching a startup. Identify the skills you need, create clear job roles, and define responsibilities for every position. Many startups fail because they don’t plan their hiring properly or underestimate the importance of a strong team. Invest time in choosing people who share your vision and complement your strengths. A motivated, well-structured team can help your startup succeed and grow faster in a competitive market, adapting quickly to challenges and new opportunities as they arise."
  },
  {
    title: "Employees’ Provident Fund",
    content:
      "Any business employing ten or more people in industries notified by the government must register under the Employees’ Provident Funds and Miscellaneous Provisions Act, 1952. This scheme provides financial security to employees after retirement or in case of disability. Registering for EPF builds trust with your team and ensures you follow labor laws. Non-compliance can lead to penalties and hurt your reputation as an employer. It’s a simple but important part of growing a stable and sustainable company that attracts and retains talent."
  },
  {
    title: "Raise Funding",
    content:
      "Funding is vital for growing your business. Options include bootstrapping, bank loans, crowdfunding, angel investors, venture capital, or government schemes. Each method requires a clear business plan with market research, budgets, and financial projections. Investors look for a strong plan, growth potential, and a credible team. Prepare to pitch your vision confidently and explain how the funds will be used to scale operations, expand into new markets, hire talent, and meet long-term business goals successfully."
  },
  {
    title: "Protect The Brand",
    content:
      "Your brand sets you apart from competitors and builds trust with customers. Protecting intellectual property like trademarks, copyrights, patents, or designs ensures no one can copy your ideas or products. Many startups neglect IP early on and face disputes later. Register your brand assets as soon as possible to avoid legal battles and attract investors. A strong, protected brand gives you an edge in the market and shows partners and customers that you take your business seriously and plan for long-term success and stability.."
  },
  {
    title: "Identify Your Business Structure",
    content:
      "After validating your idea, choose the best business structure for your goals. Options in India include Private Limited Company, Limited Liability Partnership (LLP), Partnership Firm, Sole Proprietorship, or One Person Company (OPC). Each has different tax rules, compliance needs, and funding possibilities. Take time to understand the pros and cons of each structure and decide based on your budget, plans for growth, and whether you plan to raise external funding or keep the business small."
  },
  {
    title: "Limited Liability Partnership",
    content:
      "A Limited Liability Partnership (LLP) is a popular choice for professionals and firms that don’t need equity funding. LLPs combine the flexibility of partnerships with the benefits of limited liability, which means personal assets are safe if the firm faces losses. LLPs have fewer compliance requirements and lower costs than private limited companies. They must have at least two partners but can add more easily. This makes an LLP suitable for consultants, agencies, and small service businesses."
  },
  {
    title: "Partnership Firm",
    content:
      "A Partnership Firm works well for small businesses owned by two or more people. It is governed by the Indian Partnership Act, 1932, and can have up to 20 partners. Partners sign a deed outlining terms, profit sharing, and responsibilities. Partners cannot transfer ownership without consent. This structure is easy to set up and manage but partners are personally liable for debts, so their assets are at risk. Registration rules vary by state and business nature, so it’s important to understand local requirements for smooth and legal operations."
  },
  {
    title: "GST Registration",
    content:
      "Goods and Services Tax (GST) registration is mandatory if your business’s annual turnover crosses Rs. 40 lakhs, or Rs. 20 lakhs in special category states. GST is also required if you supply goods across states or operate an online marketplace. Registering for GST lets you collect taxes, issue valid invoices, and claim input tax credits. Non-compliance can attract penalties and restrict business opportunities. It’s important to understand your GST obligations to avoid legal and financial issues."
  },
  {
    title: "Create Online Presence",
    content:
      "Every modern business needs a strong online presence. A well-designed website and active social media pages help you reach more customers, showcase your services, and build credibility. Make sure your website includes a Privacy Policy and Terms of Service, especially if you collect customer data. Online visibility also supports your marketing and sales efforts around the clock. A good digital presence helps customers discover, trust, and engage with your brand, which drives long-term business growth."
  },
  {
    title: "ESOPs",
    content:
      "Employee Stock Option Plans (ESOPs) are a great way to attract, motivate, and retain talented employees. ESOPs give staff the right to buy company shares at a later date, giving them a stake in the business’s success. This aligns employees’ interests with the company’s growth and helps reduce staff turnover. Founders must plan ESOPs wisely, as they lead to stake dilution. However, when used correctly, ESOPs can build loyalty and encourage employees to contribute more actively to contribute more actively to the company’s vision."
  }
];



export default function FirstStep() {
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 text-gray-900">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center py-20 sm:py-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/30 via-green-100/20 to-blue-100/10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-orange-500 via-green-600 to-emerald-500 text-white px-6 py-2 rounded-full text-sm sm:text-base font-semibold shadow-md"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Rocket className="w-5 h-5" /> Launch with Confidence
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-orange-500 via-green-600 to-emerald-600 bg-clip-text text-transparent uppercase tracking-tight"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Start Your Business
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Every great company starts with a single idea. From planning to branding and execution, learn the essential steps to turn your vision into a sustainable venture.
          </motion.p>

          <motion.div
            className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-lg rounded-full px-8 py-4 shadow border border-white/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <CheckCircle className="w-6 h-6 text-green-600" />
            <span className="text-gray-900 font-medium text-lg">
              Vision. Structure. Success.
            </span>
          </motion.div>
        </div>
      </section>

      {/* Grid Cards */}
      <section className="px-4 pb-20 sm:px-8 max-w-7xl mx-auto sm:mt-12">
  <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">
    Business Formation Roadmap
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {sections.map((section, index) => (
    <motion.div
      key={index}
      className="bg-white rounded-2xl shadow-md border border-orange-200 flex flex-col p-6 sm:p-8 min-h-[300px] transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.03 }}
    >
      <h3 className="text-lg sm:text-xl font-semibold text-orange-700 mb-3">
        {section.title}
      </h3>
      <div
        className="text-gray-700 text-sm leading-relaxed mt-auto text-justify"
        dangerouslySetInnerHTML={{ __html: section.content }}
      />
    </motion.div>
  ))}
</div>
</section>


      {/* CTA Section */}
      <motion.section
        className="relative py-16 bg-gradient-to-br from-slate-100 via-slate-100 to-slate-100 text-white text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-black/20 rounded-full flex items-center justify-center shadow-md">
              <CheckCircle className="w-10 h-10 text-black" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 ">
            Start Your Entrepreneurial Journey Today
          </h2>
          <p className="text-black sm:text-lg mb-8 max-w-2xl text- black mx-auto">
            Get expert guidance, legal support, and the right tools to launch your business idea and take it to new heights.
          </p>
          <motion.a
            href="/contact-us"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-green-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Get Started Now
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}
