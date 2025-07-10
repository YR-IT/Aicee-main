import { useEffect } from 'react';
import { 
  Scale, 
  Building, 
  Car, 
  Shield, 
  Home, 
  Users, 
  FileText, 
  Clock, 
  Heart, 
  Briefcase,
  AlertTriangle,
  Baby
} from 'lucide-react';

function IndianLaws() {
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const detailedLaws = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Motor Vehicle Act, 1988",
      shortDescription: "Wearing helmet is mandatory for two-wheeler riders. Maximum two riders allowed on bikes.",
      description: "As per the Section 129 of the Indian Motor Vehicle Act, wearing the helmet is must for two wheeler riders. Section 128 of this Motor Vehicle Act limits maximum two riders on the bikes. This law also says that if the traffic police officer snatches the key from the car or motorcycle, it is illegal. You have the full right to launch a Legal proceeding against the officer.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Criminal Procedure Code, Section 46",
      shortDescription: "Women cannot be arrested before 6 A.M. and after 6 P.M.",
      description: "No woman cannot be arrested before 6 A.M. and after 6 P.M.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Maternity Benefit Act, 1961",
      shortDescription: "Companies cannot fire pregnant women. Violation may lead to imprisonment.",
      description: "No company can fire a pregnant woman. It may be punishable by a maximum of 3 years of imprisonment.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Motor Vehicle Act 1988, Section -185 202",
      shortDescription: "Police can arrest without warrant if blood alcohol exceeds 30mg per 100ml.",
      description: "At the time of driving if your 100ml. blood contains more than 30mg. of alcohol then police can arrest you without a warrant.",
      color: "from-orange-600 to-red-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Police Act, 1861",
      shortDescription: "Police officers are always on duty, whether in uniform or not.",
      description: "A police officer is always on duty whether he/she wearing a uniform or not. If a person makes a complaint to the officer, he/she could not say that he can't help the victim because he/ she is not on the duty.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Income Tax Act, 1961",
      shortDescription: "Tax officers can arrest for violations but must send notice first.",
      description: "In the case of tax violations, the tax collection officer has the power to arrest you but before arresting you, he/she will have to send a notice to you. Only Tax Commissioner decides that how long you will stay in the custody.",
      color: "from-amber-600 to-red-500"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Indian Penal Code, 166 A",
      shortDescription: "Police cannot refuse to lodge FIR. Refusal can lead to imprisonment.",
      description: "A Police officer can't refuse to lodge an FIR if he/she does so they could be jailed for up to 6 months to 1 year.",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Hindu Marriage Act, Section -13",
      shortDescription: "Divorce can be applied on various grounds including adultery and abuse.",
      description: "As per the Hindu Marriage Act, 1955 (any husband or wife) may apply for divorce in the court on the basis of Adultery (physical relationship outside of marriage), physical and mental abuse, impotency, to leave home without information, to change Hindu religion and adopt other religion, insanity, incurable disease and no information about husband or wife for seven year.",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Code of Criminal Procedure, 1973",
      shortDescription: "Only women police can arrest women. Special rules apply for timing.",
      description: "Only women police constable can arrest to women. Male constable doesn't have the right to arrest women. Women have the right to deny going to police stations after the 6 P.M. and before the 6 A.M. In the case of a serious crime only after receipt of the written order from the magistrate a male policeman can arrest a woman.",
      color: "from-amber-500 to-red-500"
    }
  ];

  const lawFacts = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "As Per The Citizen Charter (Indian Oil Corporation Website)",
      shortDescription: "Gas agencies liable to pay Rs. 50 lakh compensation for cylinder blasts.",
      description: "There are very few people who know that if their gas cylinder blasts during the cooking of food then the gas agency is liable to pay Rs. 50 lakh to the victim as a compensation. To claim this compensation consumer need to lodge an FIR to the nearest police station and submit it to the concerned gas agency.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Maximum Retail Price Act, 2014",
      shortDescription: "Shopkeepers cannot charge more than printed price, but bargaining allowed.",
      description: "Any Shop keeper can't charge more than the printed price of any commodity but a consumer has the right to bargain for less than the printed price of a commodity.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Hotel Rules",
      shortDescription: "Hotels cannot prohibit access to drinking water and washrooms.",
      description: "Even any 5 star hotel can't prohibit you from drinking potable water and using its washrooms.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Foreign Contribution Regulation Act (FCRA), 2010",
      shortDescription: "Accepting gifts from companies on festivals can be considered bribery.",
      description: "It would surprise you to know that if you take a gift from any company on the occasion of a festival, it falls into the category of bribery. You can also be sentenced to jail for this crime.",
      color: "from-orange-600 to-red-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Limitation Act, 1963",
      shortDescription: "File FIR against unpaid office dues within 3 years or lose rights.",
      description: "If your office does not pay you then you have the power to file an FIR against it within 3 years. But if you report after 3 years, you will not get anything for the due.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Delhi Rent Control Act, 1958, Section 14",
      shortDescription: "Landlords cannot forcefully vacate tenants without prior notice.",
      description: "If you are living in Delhi then your land lord does not have the right to forcefully vacate your house without giving prior notice to you.",
      color: "from-amber-600 to-red-500"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Automotive (Amendment) Bill, 2016",
      shortDescription: "Cannot be fined twice for the same offense on the same day.",
      description: "If you are fined for a crime (like riding without a helmet or any other reason) then you will not be fined for the same reason in the same day.",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Section 294 of The Indian Penal Code",
      shortDescription: "Obscene activity in public can lead to 3 months imprisonment.",
      description: "If you are found involved in \"obscene activity\" at a public place, you can be imprisoned for 3 months. But in the absence of exact definition of obscene activity police has always misused this act.",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: <Baby className="w-6 h-6" />,
      title: "Hindu Adoption and Maintenance Act, 1956",
      shortDescription: "Hindus with sons cannot adopt second child. 21-year age gap required.",
      description: "If somebody belongs to Hindu religion and have a son or grandson then he can't adopt a second child. There must be a gap of at least 21 years between you (the adopter) and your adopted son.",
      color: "from-amber-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Full Screen Hero Section */}
      <div className="relative h-[80vh] sm:h-[80vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-20 py-12 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl mb-4 shadow-2xl">
              <Scale className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-red-400 bg-clip-text text-transparent">
              Know The
            </span>
            <br />
            <span className="text-white">Indian Laws</span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-300 max-w-5xl mx-auto leading-relaxed">
            Indian Constitution has provided so many rights to the people to protect their fundamental rights but unfortunately most of the people are not aware of their rights. So in this article we have mentioned such laws and the rights which not only protect their interests but also ease their daily life.
          </p>
        </div>
      </div>

      {/* Detailed Laws Section - Full Screen */}
      <div className="min-h-screen py-8 bg-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Detailed Legal Information
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive overview of important Indian laws and their practical applications in daily life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {detailedLaws.map((law, index) => (
              <div key={index} className="group h-full">
                <div className="bg-white rounded-xl shadow-md border border-slate-200 p-4 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 h-full flex flex-col relative group-hover:border-orange-300 hover:z-10 min-h-[180px] group-hover:min-h-[280px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-red-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                  <div className="flex items-start space-x-3 mb-3">
                    <div className={`bg-gradient-to-br ${law.color} text-white rounded-lg p-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl relative z-10`}>
                      {law.icon}
                    </div>
                    <div className="flex-1 relative z-10">
                      <h3 className="text-base font-bold text-slate-900 leading-tight group-hover:text-orange-700 transition-colors group-hover:text-lg">
                        {law.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-center relative z-10">
                    <p className="text-sm text-slate-600 leading-relaxed text-center transition-all duration-300">
                      <span className="group-hover:hidden">
                        {law.shortDescription}
                      </span>
                      <span className="hidden group-hover:block">
                        {law.description}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interesting Facts Section - Full Screen */}
      <div className="min-h-screen py-8 bg-gradient-to-br from-slate-100 to-orange-50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Interesting Facts About Supreme Court of India
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Discover fascinating legal facts that every Indian citizen should know
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lawFacts.map((fact, index) => (
              <div key={index} className="group h-full">
                <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 h-full flex flex-col relative group-hover:border-orange-300 hover:z-10 min-h-[180px] group-hover:min-h-[280px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                  <div className="p-4 flex-1 flex flex-col relative z-10">
                    <div className="flex items-start space-x-3 mb-3">
                      <div className={`bg-gradient-to-br ${fact.color} text-white rounded-lg p-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}>
                        {fact.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-slate-900 leading-tight group-hover:text-orange-700 transition-colors group-hover:text-lg">
                          {fact.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <p className="text-sm text-slate-600 leading-relaxed text-center transition-all duration-300">
                        <span className="group-hover:hidden">
                          {fact.shortDescription}
                        </span>
                        <span className="hidden group-hover:block">
                          {fact.description}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action - Full Screen */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl mb-6 shadow-2xl">
              <Scale className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Informed, Stay Protected</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Knowledge of your legal rights is your first line of defense. Share this information to help others understand their rights and responsibilities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IndianLaws;