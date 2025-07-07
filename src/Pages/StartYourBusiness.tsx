import { motion } from "framer-motion";

export default function FirstStep() {
  return (
    <section className="py-12 bg-white max-w-7xl mx-auto">
      <div className="mx-auto px-4 sm:px-8">
        {/* Centered Heading */}
        <motion.h2
          className="text-4xl sm:text-7xl font-bold text-center mb-2 
    bg-gradient-to-r from-[#FF9933] to-[#138808] 
    bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Start Your Business
        </motion.h2>

        {/* Breadcrumb */}
        <motion.div
          className="text-sm text-gray-600 mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="hover:underline cursor-pointer">Home</span>
          <span className="mx-2">&gt;</span>
          <span>Start Your Business</span>
        </motion.div>

        {/* Two Columns */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
          {/* Left: Content */}
          <motion.div
            className="flex-1 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-700 mb-4">
              The world’s corporate giants were not born overnight. Behind every
              towering corporation today, there was once an individual or a
              small team with a simple idea and the courage to bring it to life.
              Somebody somewhere took that idea, developed a detailed plan,
              gathered the necessary resources, secured funding, and launched a
              small venture with great ambition. It was their uniqueness,
              relentless dedication, and commitment to delivering superior
              products and services that nurtured that small beginning into a
              thriving business.
            </p>
            <p className="text-gray-700 mb-4">
              Over time, it is quality and consistent branding that preserves a
              company’s growth and reputation in an ever-changing market. A look
              into the history of any major corporation clearly demonstrates
              this timeless principle: that success is not accidental but rather
              a result of careful planning, innovation, and unwavering belief in
              delivering the best.
            </p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src="/make-in-India-logo.jpg"
              alt="Make in India Logo"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
            />
          </motion.div>
        </div>

        {/* Make In India Section */}
        <div className="py-12">
          <div className="mx-auto">
            <motion.h3
              className="text-3xl sm:text-4xl font-bold mb-4 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Make In India
            </motion.h3>
            <motion.p
              className="text-gray-700"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              ‘Make In India’, a pioneering program in the history of the
              world’s largest democracy was flagged off on September 25, 2014 by{" "}
              <span className="font-semibold">
                Prime Minister Narendra Modi.
              </span>{" "}
              The <span className="font-semibold">‘Make In India’</span>{" "}
              initiative is three-pronged. It encourages Indian manufacturers
              and service providers to upscale quality to meet and exceed global
              standards. <span className="font-semibold">‘Make In India’</span>{" "}
              also encourages entrepreneurship among Indians through incentives
              and offerings for establishing micro, small and medium
              enterprises.
            </motion.p>
          </div>
        </div>

        {/* New Two-Column Section */}
<div className="flex flex-col lg:flex-row lg:space-x-10 py-8">
  {/* Left Column */}
  <motion.div
    className="flex-1 mb-4 lg:mb-0"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <h3 className="text-xl font-semibold mb-2 text-center sm:text-start">Evaluate Your Idea</h3>
    <p className="text-gray-700 mb-8 text-justify">
      Once you have zeroed in on an idea, start analysing whether your business
      answers some basic questions like: <br/>What problem is your product or
      service going to address?<br/> Who will be the target audience? <br/>Will it be a
      side project or a full-fledged business?<br/> Who will be the competitors?<br/>
      What will be the means of running the business whether stores, online?<br/> Is
      there an international scope for it?
    </p>
    <h4 className="text-xl font-semibold mb-2 text-center sm:text-start">Private Limited Company</h4>
    <p className="text-gray-700 mb-8 text-justify">
      If you are planning to seek funding from investors and venture
      capitalists, to get bank loans and to have shareholders, this should be
      your choice.<br/><br/> A private limited company is the one in which the
      shareholders and owners are only liable to their shares upon the instance
      of a financial crisis. In other words, they would not be at the risk of
      losing their personal assets. To start a private limited company, you
      need a minimum of 2 people and a maximum of 200. The Companies Act holds
      provisions related to private limited companies in India and all such
      entities must be registered with the Registrar of Companies (RoC). <br/><br/>It is
      also required to file mandatory annual compliance regularly which may
      lead to legal repercussions if ignored.
    </p>
    <h4 className="text-xl font-semibold mb-2 text-center sm:text-start">One Person Company</h4>
    <p className="text-gray-700 mb-8 text-justify">
      An OPC has only one director who is the sole shareholder. An OPC
      structure has high compliance requirements and cost and limited tax
      advantages.
    </p>
    <h4 className="text-xl font-semibold mb-2 text-center sm:text-start">Sole Proprietorship</h4>
    <p className="text-gray-700 mb-8 text-justify">
      In a sole proprietorship, a person who is the owner of the business and
      runs the business is solely, personally liable for business debts. This
      type of firm has no separate legal identity under the law. Sole
      proprietors cannot raise capital by selling an interest in the business.
    </p>
    <h4 className="text-xl font-semibold mb-2 text-center sm:text-start">Get Government Registrations And Other Licenses</h4>
    <p className="text-gray-700 mb-8 text-justify">
      All mandatory government registrations and licenses required to run a
      registered entity differ based on the place of business, sector or
      industry, entity type, number of employees, etc. However, all
      incorporated businesses must apply for and obtain PAN and TAN.<br/><br/> The former
      is mandatory for opening bank accounts and filing income tax returns and
      TDS returns, while the latter is required by all companies engaged in
      deducting or collecting tax.
    </p>
    <h4 className="text-xl font-semibold mb-2 text-center sm:text-start">Import Export Code</h4>
    <p className="text-gray-700 mb-8 text-justify">
      Often called IEC, this is a 10-digit code required by importers and
      exporters to clear customs and shipments and transfer money to foreign
      banks. IEC can be secured with a minimum number of documents easily.
    </p>
    <h4 className="text-xl font-semibold mb-2 text-center sm:text-start">Maintaining Accounts And Compliance</h4>
    <p className="text-gray-700 mb-8 text-justify">
      One of the most crucial things in a startup is to get an Accounting and
      compliance system in place. Maintaining your books and financial records
      help you study the cash flow, display the financial health to
      stakeholders, plan budgets, take key decisions, report profits and more.
    </p>
    <h4 className="text-xl font-semibold mb-2 text-center sm:text-start">Form The Team</h4>
    <p className="text-gray-700 mb-8 text-justify">
      If you are looking to hire employees, now is the right time. Make sure to
      specify the designation, roles, and responsibilities for each position
      clear enough after thorough analysis. Many startups fail in hiring
      strategies due to inadequate teams, not conducting market analysis, etc.,
      which could be costly.
    </p>
    <h4 className="text-xl font-semibold mb-2 text-center sm:text-start">Employees’ Provident Fund</h4>
    <p className="text-gray-700 mb-8 text-justify">
      If the business employs 10 or more persons and is engaged in any of the
      industries notified by the government, the business is required to be
      registered under the Employees Provident Funds and Miscellaneous
      Provisions Act, 1952.
    </p>
    <h4 className="text-xl font-semibold mb-2 text-center sm:text-start">Raise Funding</h4>
    <p className="text-gray-700 mb-8 text-justify">
      To source funds for your startup, some options are crowdfunding,
      bootstrapping or self-funding, Angel investment, venture capital,
      business incubators, bank loans, government schemes, etc.<br/><br/> Having a
      business plan with market analysis, organization management, financial
      projections, marketing, and sales strategies help impress potential
      investors.
    </p>
    <h4 className="text-xl font-semibold mb-2 text-center sm:text-start">Protect The Brand</h4>
    <p className="text-gray-700 mb-8 text-justify">
      Brand is one of the key assets of an enterprise, whether it is small,
      mid-sized, or large. Your brand is how a customer perceives your business
      and identifies in the market.<br/><br/> Protecting intellectual property, which
      includes trademark, copyright, patent, industrial designs, software,
      inventions, etc., is important. Many startups do not prioritize IP
      management in their early stages due to a lack of awareness.<br/><br/> But when
      you’re trying to woo investors or pitch to potential team members, it is
      important to protect both the business ideas and the brand.
    </p>
  </motion.div>

  {/* Right Column */}
  <motion.div
    className="flex-1"
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
  >
    <h3 className="text-xl font-semibold mb-2 text-center sm:text-start">Identify Your Business Structure</h3>
    <p className="text-gray-700 mb-8 text-justify">
      When you are clear of all the questions, your next step will be to assess
      the type of entity that best suits.<br/><br/> In India, a startup can be registered
      as a Private Limited Company, Limited Liability Partnership, Partnership
      Firm, Sole Proprietorship, or One Person Company.
    </p>
    <h4 className="text-xl font-semibold mb-2 text-center sm:text-start">Limited Liability Partnership (LLP)</h4>
    <p className="text-gray-700 mb-8 text-justify">
      Professional and advisory firms that do not require equity funding can
      choose to register as an LLP.<br/><br/> Unlike a private limited company, LLP
      offers the benefit of flexible partnerships wherein partners can choose
      their own internal structure, and it has fewer compliance requirements
      with low costs. <br/><br/>An LLP can have any number of partners; however, a
      minimum of two partners are required during registration.
    </p>
    <h4 className="text-xl font-semibold mb-2 text-center sm:text-start">Partnership Firm</h4>
    <p className="text-gray-700 mb-8 text-justify">
      As the name suggests, if two or more persons look to establish a small company, then it can be registered as a partnership firm. This type of entity is controlled by the Indian Partnerships Act, 1932 and allows a maximum of 20 partners. The terms and conditions are bound by a partnership deed which must be signed by all the partners. <br/><br/>Partners cannot transfer their interest in the firm to anybody
      without the consent of other partners. This is highly suitable for small
      businesses as debts can be recovered from the partners’ personal assets.
    </p>
    <h4 className="text-xl font-semibold mb-2 text-center sm:text-start">Make It Official</h4>
    <p className="text-gray-700 mb-8 text-justify">
      When you have decided on the structure you will need to register the business. The registration process may differ based on the type of entity and below are the steps to register the most common type of entity Private Limited Company.

<ul className="list-disc list-inside text-gray-700 mb-8 mt-2">
  <li>Apply for Digital Signature Certificate</li>
  <li>Apply for Director Identification Number</li>
  <li>Check the company name availability</li>
  <li>Apply for PAN (Permanent Account Number) and TAN (Tax Deduction Account Number)</li>
  <li>Get the Incorporation Certificate from RoC</li>
  <li>Open a current bank account</li>
</ul>
    </p>
    <h4 className="text-xl font-semibold mb-2 text-center sm:text-start">Shop & Establishment Act</h4>
    <p className="text-gray-700 mb-8 text-justify">
      This is a license requirement for shops, eateries, restaurants, places of
      interest, theatres, etc.<br/><br/> The Act regulates the working conditions of
      employees with respect to working hours, holidays, payment of wages,
      health and safety measures, etc.
    </p>
    <h4 className="text-xl font-semibold mb-2 text-center sm:text-start">GST Registration</h4>
    <p className="text-gray-700 mb-8 text-justify">
  GST is mandatory for all companies whose annual turnover exceeds Rs. 40 lakhs, and Rs. 20 lakhs for businesses operating in States under the “Special Category”.<br /><br /> GST registration is also mandatory for businesses involved in the intrastate supply of goods, regardless of their turnover. This means that even small businesses must obtain a valid GST number if they supply goods or services across state borders or fall under specific categories such as e-commerce, online marketplaces, or businesses that wish to avail input tax credit.<br /><br /> Failing to register for GST when required can lead to penalties, legal action, and restrictions on doing business with larger clients who need valid GST invoices. Hence, it is crucial for every business to understand their obligations and ensure compliance with GST laws to operate smoothly and maintain credibility in the market.
</p>

    <h4 className="text-xl font-semibold mb-2 text-center sm:text-start">Create Online Presence</h4>
    <p className="text-gray-700 mb-8 text-justify">
      In this digital era, it is absolutely necessary for your business to create an online presence. Having an interactive website and social media pages help in showcasing your services and products while attracting potential customers.<br/><br/> Before developing a website do remember that Terms of Service and Privacy Policy statements are the most important components, especially if you will be collecting customers’ data like email address and contact number.
    </p>
    <h4 className="text-xl font-semibold mb-2 text-center sm:text-start">ESOPs</h4>
    <p className="text-gray-700 mb-8 text-justify">
      You can also leverage ESOPs (Employee Stock Option Plans) to attract and motivate the right pool of talent. ESOPs are an employee benefits scheme which offers them an ownership interest in the company. As an employer, it is up to you to issue ESOP as direct stock or as profit-sharing bonuses to employees of your choice. ESOPs, help in reduce incentive-related problems.<br/><br/>  The right to purchase may vest only after a stipulated period of time. ESOPs may serve as a lock-in mechanism as the employees would have to wait until they are vested with the right to purchase the shares of the company. However, founders may want to consider ESOPs carefully before employing them in their compensation packages as they will lead to a dilution of their own stakes eventually. ESOPs are, however, an attractive option for employees as their stake in the business increases as the performance and value of the business increases, which is a good way to retain top talent.
    </p>
  </motion.div>
</div>


        {/* Final Call To Action Section */}
<motion.section
  className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 px-6 sm:px-12 text-center text-white rounded-3xl shadow-lg mt-12"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <h2 className="text-xl sm:text-4xl font-bold mb-4">
    Start Your Entrepreneurial Journey With Us Today
  </h2>
  <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto">
    Get expert guidance, legal support, and the right tools to launch your business idea and take it to new heights.
  </p>
  <motion.a
    href="/contact-us"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
  >
    Get Started Now
  </motion.a>
</motion.section>

      </div>
    </section>
  );
}
