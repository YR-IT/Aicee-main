import {
  TreePine, Leaf, Heart, Shield, Home,
  DollarSign, Users, Wind, Sun, Droplets,
  ArrowRight
} from 'lucide-react';
import { useEffect } from 'react';

function SocialInitiative() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const benefits = [
    {
      icon: Wind,
      title: 'Clean Air',
      description: 'Trees filter pollutants and produce oxygen, improving air quality for everyone.',
      gradient: 'from-sky-400 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Wildlife Protection',
      description: 'Trees provide essential habitat and shelter for countless species of wildlife.',
      gradient: 'from-green-400 to-emerald-600'
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Tree roots prevent erosion and help maintain natural water cycles.',
      gradient: 'from-blue-400 to-cyan-600'
    },
    {
      icon: Sun,
      title: 'Climate Control',
      description: 'Trees provide natural cooling through shade and regulate local temperatures.',
      gradient: 'from-amber-400 to-orange-600'
    },
    {
      icon: Home,
      title: 'Property Value',
      description: 'Well-placed trees can increase property values by up to 15%.',
      gradient: 'from-purple-400 to-indigo-600'
    },
    {
      icon: Users,
      title: 'Community Health',
      description: 'Green spaces with trees promote mental well-being and social interaction.',
      gradient: 'from-pink-400 to-rose-600'
    },
    {
      icon: DollarSign,
      title: 'Economic Benefits',
      description: 'Trees reduce energy costs and create jobs in forestry and landscaping.',
      gradient: 'from-teal-400 to-green-600'
    },
    {
      icon: Heart,
      title: 'Stress Relief',
      description: 'Studies show that spending time around trees reduces stress and anxiety.',
      gradient: 'from-red-400 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden flex items-center justify-center py-20 sm:py-24 lg:py-32 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <TreePine className="w-20 sm:w-24 h-20 sm:h-24 text-white-900 animate-pulse" />
              <div className="absolute -top-2 -right-2 w-6 sm:w-8 h-6 sm:h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <Leaf className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight uppercase">
            <span className="text-white">
              Social Initiative
            </span>
          </h1>
          <div className="flex items-center justify-center space-x-4 text-gray-300 mb-6">
  <a href="/" className="hover:text-orange-400 transition-colors cursor-pointer">
    Home
  </a>
  <ArrowRight className="w-4 h-4 text-gray-300" />
  <span className="text-gray-200">Social Initiative</span>
</div>

          <p className="text-base sm:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-5xl mx-auto leading-relaxed px-2">
            Trees are a vital part of our world, and crucial to our survival. They provide us with the oxygen we need to
            <span className="font-semibold text-green-700"> breathe</span>,
            <span className="font-semibold text-emerald-700"> shelter for wildlife</span>, and
            <span className="font-semibold text-teal-700"> food to eat</span>.
            But there's so much more.
          </p>

          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-lg border border-green-200">
            <Leaf className="w-5 sm:w-6 h-5 sm:h-6 text-green-600" />
            <span className="text-gray-700 font-medium text-sm sm:text-lg">Discover the benefits of trees in your landscape</span>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Benefits of Trees
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
              Have you ever imagined what the world would be like without trees? The benefits of trees extend beyond their beauty.
              Trees planted today will offer social, environmental, and economic benefits for years to come.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden"
              >
                <div className="p-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>

                  <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
                <div className={`h-1 bg-gradient-to-r ${benefit.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <TreePine className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h3>

          <p className="text-base sm:text-xl text-green-100 mb-8 leading-relaxed px-2">
            Join our mission to create a greener, healthier world. Every tree planted today is an investment in tomorrow's future.
          </p>

          <div className="text-lg sm:text-2xl font-bold text-white">
            Plant a Tree Today
          </div>
        </div>
      </section>
    </div>
  );
}

export default SocialInitiative;
