import { Link } from "react-router-dom";

const ExportImportCourse = () => {
  return (
    <section className="px-4 py-16 bg-gradient-to-br from-yellow-50 via-rose-100 to-orange-100 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 grid grid-cols-1 lg:grid-cols-2">

          {/* 🎥 Videos Section with background pattern */}
          <div className="relative flex flex-col items-center justify-center gap-6 py-8 px-4 bg-gradient-to-br from-orange-200 to-pink-100 overflow-hidden">
            <div className="absolute inset-0 opacity-10 animate-bg-stars bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-cover z-0 pointer-events-none" />
            <div className="relative z-10 w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-lg border border-orange-300">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/jhgSBZ571KQ"
                title="Course Video 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="relative z-10 w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-lg border border-orange-300">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/K8OmGKErCzY"
                title="Course Video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* 📝 Text Content Section with background pattern */}
          <div className="relative p-6 sm:p-8 md:p-12 flex flex-col justify-between bg-gradient-to-br from-orange-50 to-red-50 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-10 animate-bg-stars bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-cover pointer-events-none" />

            {/* Featured Badge */}
            <div className="mb-4 z-10">
              <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2 rounded-full text-sm md:text-base font-semibold uppercase tracking-wider shadow-md">
                Featured Course
              </span>
            </div>

            {/* Heading with Animation */}
            <div className="mb-4 animate-fade-in-up z-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                Online Export-Import Management Courses
              </h3>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-700 mt-4 mb-6 leading-relaxed px-2 sm:px-6 lg:px-10 z-10">
              Master the fundamentals of international trade with our comprehensive online course. Learn export-import procedures, documentation, regulations, and best practices from industry experts.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center z-10">
              <a 
                href="https://eknowledge.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group inline-block"
              >
              <button className="bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600 text-white 
              sm:px-5 sm:py-2 px-4 py-2 rounded-2xl font-bold text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2">
                <span>Know More</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        @keyframes bg-stars {
          0% { background-position: 0 0; }
          100% { background-position: 100px 100px; }
        }

        .animate-bg-stars {
          animation: bg-stars 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ExportImportCourse;
