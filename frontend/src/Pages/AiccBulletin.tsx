import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  User, 
  MessageCircle, 
  ArrowRight, 
  Search,
  Clock,
  Eye,
  BookOpen,
  TrendingUp,
  Globe,
  Building2,
  Briefcase,
  DollarSign,
  FileText,
  Tag
} from 'lucide-react';

interface Article {
  _id: string;
  title: string;
  excerpt: string;
  image?: string;
  date: string;
  author: string;
  comments: number;
  category: string;
  readTime: string;
  views: number;
}

const BulletinPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);
  const [recentPosts, setRecentPosts] = useState<Article[]>([]);
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'All Posts', icon: FileText },
    { id: 'monetary', name: 'Monetary Policy', icon: DollarSign },
    { id: 'business', name: 'Business News', icon: Briefcase },
    { id: 'international', name: 'International', icon: Globe },
    { id: 'technology', name: 'Technology', icon: TrendingUp },
    { id: 'policy', name: 'Policy Updates', icon: Building2 }
  ];

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        // Fetch all articles from blogs collection
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/blogs`);
        const data = await response.json();
        
        // Transform server data to match Article interface
        const transformedArticles = data.map((item: any) => ({
          _id: item._id,
          title: item.title || 'Untitled Article',
          excerpt: item.excerpt || 'No description available',
          image: item.image || 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
          date: item.date ? new Date(item.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          }) : new Date().toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          }),
          author: item.author || 'ADMIN',
          comments: item.comments || Math.floor(Math.random() * 20),
          category: item.category || 'business',
          readTime: item.readTime || `${Math.floor(Math.random() * 5 + 3)} min read`,
          views: item.views || Math.floor(Math.random() * 1000 + 500)
        }));

        // Set featured article (first article)
        setFeaturedArticle(transformedArticles[0] || null);

        // Set recent posts (latest 5 articles)
        setRecentPosts(transformedArticles.slice(0, 5));

        // Set all articles
        setAllArticles(transformedArticles);

      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredArticles = allArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleNavigation = (path: string) => {
    console.log('Navigating to:', path);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading articles...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">AICC Bulletin</h1>
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <span className="hover:text-orange-400 transition-colors cursor-pointer">Home</span>
            <ArrowRight className="w-4 h-4 text-orange-500" />
            <span className="text-orange-400">AICC Bulletin</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <button
              onClick={() => handleNavigation('AICC-Bulletin')}
              className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-100 font-semibold border-b"
            >
              AICC Bulletin
            </button>

            {/* Featured Article */}
            {featuredArticle && (
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12 border border-gray-100">
                <div className="relative">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-4 text-white">
                      <div className="flex items-center space-x-2 md:space-x-6 text-xs mb-3">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-orange-400" />
                          <span>{featuredArticle.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-orange-400" />
                          <span>{featuredArticle.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MessageCircle className="w-4 h-4 text-orange-400" />
                          <span>{featuredArticle.comments} Comments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>{featuredArticle.views} views</span>
                      </div>
                    </div>
                    
                    <button className="bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600 text-white px-4 py-2 rounded-2xl font-semibold text-xs transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                      <span>Read More</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Search and Filter */}
            <div className="bg-grey rounded-3xl shadow-lg p-8 mb-12 border border-gray-100">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-10 py-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-2xl font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-orange-600 to-red-500 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {filteredArticles.map((article) => (
                <div key={article._id} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group">
                  <div className="relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                        {categories.find(cat => cat.id === article.category)?.name}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight group-hover:text-orange-600 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{article.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{article.comments}</span>
                        </div>
                      </div>
                      
                      <button className="text-orange-600 hover:text-red-500 font-semibold flex items-center space-x-2 transition-colors duration-300">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Recent Posts */}
            <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                <BookOpen className="w-6 h-6 text-orange-600" />
                <span>Recent Posts</span>
              </h3>
              
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <div key={post._id} className="group cursor-pointer">
                    <h4 className="text-gray-800 font-semibold leading-tight mb-2 group-hover:text-orange-600 transition-colors duration-300">
                      {post.title}
                    </h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="h-px bg-gray-200 mt-4"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                <Tag className="w-6 h-6 text-orange-600" />
                <span>Categories</span>
              </h3>
              
              <div className="space-y-3">
                {categories.slice(1).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 border border-orange-200'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <category.icon className="w-5 h-5" />
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className="text-sm bg-white px-2 py-1 rounded-full">
                      {allArticles.filter(article => article.category === category.id).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-orange-600 to-red-500 rounded-3xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-orange-100 mb-6">
                Subscribe to our newsletter for the latest business insights and policy updates.
              </p>
              
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="w-full bg-white text-orange-600 py-3 px-6 rounded-2xl font-bold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes count-up {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.3s both;
        }
        
        .animate-count-up {
          animation: count-up 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default BulletinPage;