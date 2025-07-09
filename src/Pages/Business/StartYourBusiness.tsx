import { motion } from "framer-motion";
import { Rocket, CheckCircle, ShieldCheck, Clock3, FileText, BarChart, Users, LayoutDashboard } from "lucide-react";

const sections = [
  {
    title: "Evaluate Your Idea",content:
  "Once you have zeroed in on an idea, start analysing whether your business" +
 " answers some basic questions like: What problem is your product or" +
  "service going to address? Who will be the target audience? Will it be a"+
  "side project or a full-fledged business? Who will be the competitors?"+
  "What will be the means of running the business whether stores, online? Is"+
  "there an international scope for it?"


     
},
{
  title: "Private Limited Company",
  content:
    `If you are planning to seek funding from investors and venture capitalists, to get bank loans and to have shareholders, this should be your choice.
     A private limited company is the one in which the
    shareholders and owners are only liable to their shares upon the instance
    of a financial crisis. In other words, they would not be at the risk of
    losing their personal assets. To start a private limited company, you
    need a minimum of 2 people and a maximum of 200. The Companies Act holds
    provisions related to private limited companies in India and all such
    entities must be registered with the Registrar of Companies (RoC). It is
    also required to file mandatory annual compliance regularly which may
    lead to legal repercussions if ignored.
`,
},
{
  title: "One Person Company",
  content:
  `An OPC has only one director who is the sole shareholder. An OPC
  structure has high compliance requirements and cost and limited tax
  advantages.`
},
{
  title: "Sole Proprietorship",
  content:
    `  In a sole proprietorship, a person who is the owner of the business and
    runs the business is solely, personally liable for business debts. This
    type of firm has no separate legal identity under the law. Sole
    proprietors cannot raise capital by selling an interest in the business.`
},
{
  title: "Get Government Registrations And Other Licenses",
  content:
  `All mandatory government registrations and licenses required to run a
  registered entity differ based on the place of business, sector or
  industry, entity type, number of employees, etc. However, all
  incorporated businesses must apply for and obtain PAN and TAN.<br/><br/> The former
  is mandatory for opening bank accounts and filing income tax returns and
  TDS returns, while the latter is required by all companies engaged in
  deducting or collecting tax.`

},
{
  title: "Import Export Code",
  content:
 ` Often called IEC, this is a 10-digit code required by importers and
  exporters to clear customs and shipments and transfer money to foreign
  banks. IEC can be secured with a minimum number of documents easily.`

},
{
  title: "Maintaining Accounts And Compliance",
  content:
  `One of the most crucial things in a startup is to get an Accounting and
  compliance system in place. Maintaining your books and financial records
  help you study the cash flow, display the financial health to
  stakeholders, plan budgets, take key decisions, report profits and more.`

},
{
  title: "Form The Team",
  content:
  `If you are looking to hire employees, now is the right time. Make sure to
  specify the designation, roles, and responsibilities for each position
  clear enough after thorough analysis. Many startups fail in hiring
  strategies due to inadequate teams, not conducting market analysis, etc.,
  which could be costly.`

},
{
  title: "Employees’ Provident Fund",
  content:
  `If the business employs 10 or more persons and is engaged in any of the
  industries notified by the government, the business is required to be
  registered under the Employees Provident Funds and Miscellaneous
  Provisions Act, 1952.`

},
{
  title: "Raise Funding",
  content:
  `To source funds for your startup, some options are crowdfunding,
  bootstrapping or self-funding, Angel investment, venture capital,
  business incubators, bank loans, government schemes, etc.<br/><br/> Having a
  business plan with market analysis, organization management, financial
  projections, marketing, and sales strategies help impress potential
  investors.`

},
{
  title: "Protect The Brand",
  content:
  `Brand is one of the key assets of an enterprise, whether it is small,
  mid-sized, or large. Your brand is how a customer perceives your business
  and identifies in the market.<br/><br/> Protecting intellectual property, which
  includes trademark, copyright, patent, industrial designs, software,
  inventions, etc., is important. Many startups do not prioritize IP
  management in their early stages due to a lack of awareness.<br/><br/> But when
  you’re trying to woo investors or pitch to potential team members, it is
  important to protect both the business ideas and the brand.`

},
{
  title: "Identify Your Business Structure",
  content:
 ` When you are clear of all the questions, your next step will be to assess
  the type of entity that best suits.<br/><br/> In India, a startup can be registered
  as a Private Limited Company, Limited Liability Partnership, Partnership
  Firm, Sole Proprietorship, or One Person Company.`

},
{
  title: "Limited Liability Partnership (LLP)",
  content:
  `Professional and advisory firms that do not require equity funding can
  choose to register as an LLP.<br/><br/> Unlike a private limited company, LLP
  offers the benefit of flexible partnerships wherein partners can choose
  their own internal structure, and it has fewer compliance requirements
  with low costs. <br/><br/>An LLP can have any number of partners; however, a
  minimum of two partners are required during registration.`

},
{
  title: "Partnership Firm",
  content:
  `As the name suggests, if two or more persons look to establish a small company, then it can be registered as a partnership firm. This type of entity is controlled by the Indian Partnerships Act, 1932 and allows a maximum of 20 partners. The terms and conditions are bound by a partnership deed which must be signed by all the partners. <br/><br/>Partners cannot transfer their interest in the firm to anybody
  without the consent of other partners. This is highly suitable for small
  businesses as debts can be recovered from the partners’ personal assets.

  When you have decided on the structure you will need to register the business. 
  The registration process may differ based on the type of entity and below are the steps to register 
  the most common type of entity Private Limited Company.`


},

{
  title: "GST Registration",
  content:
  `GST is mandatory for all companies whose annual turnover exceeds Rs. 
  40 lakhs, and Rs. 20 lakhs for businesses operating in States under
   the “Special Category”. GST registration is also mandatory 
   for businesses involved in the intrastate supply of goods, regardless of
    their turnover. This means that even small businesses must obtain a 
    valid GST number if they supply goods or services across state borders
     or fall under specific categories such as e-commerce, online marketplaces, 
     or businesses that wish to avail input tax credit. Failing to
   register for GST when required can lead to penalties, legal action, and
    restrictions on doing business with larger clients who need valid GST 
    invoices. Hence, it is crucial for every business to understand their
     obligations and ensure compliance with GST laws to operate smoothly
      and maintain credibility in the market.`

},
{
  title: "Create Online Presence",
  content:
 ` In this digital era, it is absolutely necessary for your business to 
 create an online presence. Having an interactive website and 
 social media pages help in showcasing your services and products 
 while attracting potential customers.<br/><br/> Before developing a 
 website do remember that Terms of Service and Privacy Policy statements 
 are the most important components, especially if you will be collecting 
 customers’ data like email address and contact number.`

},
{
  title: "ESOPs",
  content:
  `You can also leverage ESOPs (Employee Stock Option Plans) to attract
   and motivate the right pool of talent. ESOPs are an employee benefits 
   scheme which offers them an ownership interest in the company. As an employer, it is up to 
   you to issue ESOP as direct stock or as profit-sharing bonuses to employees of your choice. 
   ESOPs, help in reduce incentive-related problems.<br/><br/>  The right to purchase may vest 
   only after a stipulated period of time. ESOPs may serve as a lock-in mechanism as the employees 
   would have to wait until they are vested with the right to purchase the shares of the company. 
   However, founders may want to consider ESOPs carefully before employing them in their compensation 
   packages as they will lead to a dilution of their own stakes eventually. ESOPs are, however, an attractive 
   option for employees as their stake in the business increases as the performance and value of the business 
   increases, which is a good way to retain top talent.`

},

];

export default function FirstStep() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center py-20 sm:py-28 px-4">
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
      <section className="px-4 pb-20 sm:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Maintenance Solutions
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl p-6 sm:p-8 ${section.color} shadow-md hover:shadow-lg transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="mb-4">{section.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {section.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="relative py-16 bg-gradient-to-br from-orange-500 via-green-600 to-emerald-600 text-white text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center shadow-md">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Start Your Entrepreneurial Journey Today
          </h2>
          <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto">
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
