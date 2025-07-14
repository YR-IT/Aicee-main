import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-28 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1">
          {/*  Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 text-center sm:text-left leading-relaxed">
            <span className="bg-gradient-to-r from-white via-orange-300 to-orange-500 bg-clip-text text-transparent animate-pulse">
              Grow Together
            </span>
          </h1>

          <h2 className="text-base sm:text-lg font-light mb-4 text-left leading-relaxed text-gray-300">
            As India draws global attention, AICC works to strengthen India’s
            international ties and aims to be the first choice for overseas
            delegations and Indian industries seeking new markets.
          </h2>

          <p className="text-base sm:text-lg font-light mb-4 text-left leading-relaxed text-gray-300">
            AICC’s main goal is to connect Indian businesses globally, open new
            markets for exporters, support small sectors, and build strong
            partnerships with counterpart organizations.
          </p>

          <p className="text-base sm:text-lg font-light mb-4 text-left leading-relaxed text-gray-300">
            We host international events, exhibitions, seminars, and networking
            sessions to boost trade and investment between India and the world.
          </p>

          <div className="mb-8 text-left">
            <p className="text-base text-gray-400">Regards,</p>
            <p className="text-lg font-semibold text-white">
              Rajendra Kumar Goel
            </p>
            <p className="text-base text-gray-400">
              Chairman, All India Chamber of Commerce
            </p>
          </div>

          <div className="sm:flex justify-center flex">
            <Link to="/members" className="group inline-block">
              <button className="inline-block bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600 text-white sm:px-4 sm:py-2 px-4 py-2 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/30 transform hover:scale-105">
                Become a Member
              </button>
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src="image_1.jpg"
            alt="AICC Vision"
            className="rounded-2xl shadow-2xl w-full max-w-md h-80 md:h-[28rem] object-cover transition-transform duration-500 hover:scale-105 hover:-translate-y-1"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
