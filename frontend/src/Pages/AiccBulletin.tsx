import { useState, useEffect } from 'react';
import {
  Calendar,
  User,
  ArrowRight,
  Clock,
  Eye,
  BookOpen,
  Tags,
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Article {
  _id: string;
  title: string;
  content: string;
  image?: string;
  date: string;
  author: string;
  comments: number;
  category: string;
  readTime: string;
  views: number;
}

const BulletinPage = () => {
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [recentPosts, setRecentPosts] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [currentView, setCurrentView] = useState<'blog' | 'article'>('blog');

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs`);
        const data = await response.json();

        const transformedArticles = data.map((item: any) => ({
          _id: item._id,
          title: item.title || 'Untitled Article',
          content: item.content || 'No description available',
          image: item.image || 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
          date: item.date
            ? new Date(item.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })
            : new Date().toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              }),
          author: item.author || 'ADMIN',
          comments: item.comments || Math.floor(Math.random() * 20),
          category: item.category || 'business',
          readTime: item.readTime || `${Math.floor(Math.random() * 5 + 3)} min read`,
          views: item.views || Math.floor(Math.random() * 1000 + 500),
        }));

        setAllArticles(transformedArticles);
        setRecentPosts(transformedArticles.slice(0, 5));
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openArticle = (article: Article) => {
    setSelectedArticle(article);
    setCurrentView('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToBlog = () => {
    setSelectedArticle(null);
    setCurrentView('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-600">
        <svg className="animate-spin h-12 w-12 text-orange-500 mb-4" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.372 0 0 5.372 0 12h4z" />
        </svg>
        <div className="text-lg font-medium">Loading latest blog posts...</div>
      </div>
    );
  }

  if (currentView === 'article' && selectedArticle) {
    const formattedContent = selectedArticle.content
      .split(/\n+/)
      .filter((p) => p.trim() !== '')
      .map((para) => `<p>${para.trim()}</p>`)
      .join('')
      .replace(/<\/p><p>/g, '</p><p>&nbsp;</p><p>');

   return (
  <div className="min-h-screen bg-gradient-to-b from-white to-slate-100">

  {/* Hero Section */}
  <div className="relative h-[70vh] sm:h-[60vh] w-full">
    <img
      src={selectedArticle.image}
      alt={selectedArticle.title}
      className="w-full h-full object-cover brightness-50"
    />

    {/* Top-Left Back Button */}
    <div className="absolute top-4 left-8 z-10">
      <button
        onClick={backToBlog}
        className="flex items-center gap-2 bg-white/90 text-gray-900 hover:bg-white/70 font-medium px-4 py-2 rounded-full backdrop-blur-sm shadow-md transition"
      >
        <ArrowRight className="w-4 h-4 rotate-180" />
        Back
      </button>
    </div>

    {/* Hero Content */}
    <div className="absolute inset-0 flex items-center justify-center px-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 max-w-4xl text-center shadow-xl">
        <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold rounded-full bg-indigo-500/70 text-white shadow-sm">
          Featured Article
        </span>
        <h1 className="text-white text-xl sm:text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg">
          {selectedArticle.title}
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4 mt-6 text-sm text-slate-200 font-medium">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4 text-orange-300" />
            {selectedArticle.author}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-orange-300" />
            {selectedArticle.date}
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Article Body */}
  <section className="max-w-4xl mx-auto px-4 py-12">
    <article
      className="prose prose-lg md:prose-xl prose-slate max-w-none leading-relaxed text-justify"
      style={{
        wordBreak: 'break-word',
        textWrap: 'pretty',
      }}
      dangerouslySetInnerHTML={{ __html: formattedContent }}
    />
  </section>
</div>

);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16 px-4">
  <div className="max-w-7xl mx-auto text-center">
    <h1 className="text-5xl md:text-6xl font-bold mb-4">AICC Bulletin</h1>

    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-6">
      Stay informed with the latest news, updates, and insights from AICC — your trusted source for industry developments and thought leadership.
    </p>

   <div className="flex items-center justify-center space-x-2 text-gray-300 mb-8">
  <Link to="/" className="hover:text-orange-400 transition-colors">
    Home
  </Link>
  <ArrowRight className="w-4 h-4 text-orange-500" />
  <span className="text-orange-400">AICC Bulletin</span>
</div>
  </div>
</div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3 space-y-10">
            {allArticles.map((article) => (
              <div key={article._id} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="relative">
                  <img src={article.image} alt={article.title} className="w-full h-80 object-cover" />
                </div>

                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {article.content.slice(0, 180)}...
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>{article.views} views</span>
                      </div>
                    </div>

                    <button
  onClick={() => openArticle(article)}
  className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600 text-white px-4 py-2 rounded-2xl font-semibold text-xs transition-all duration-300 transform hover:scale-105 w-fit self-center"
>
  <span>Read More</span>
  <ArrowRight className="w-5 h-5" />
</button>
                  </div>
                </div>
              </div>
            ))}
          </div>


          <div className="lg:col-span-1 space-y-8">
  {/* Recent Posts */}
  <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
      <BookOpen className="w-6 h-6 text-orange-600" />
      <span>Recent Posts</span>
    </h3>
    <div className="space-y-6">
      {recentPosts.map((post) => (
        <div key={post._id} className="group cursor-pointer" onClick={() => openArticle(post)}>
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

  {/* Popular Topics */}
 <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
    <Tags className="w-5 h-5 text-orange-600" />
    <span>Popular Topics</span>
  </h3>

  <div className="flex flex-col gap-2">
    {['Economy', 'Startups', 'Politics', 'Trade', 'Leadership'].map((topic) => (
      <span
        key={topic}
        className="w-full bg-orange-100 text-orange-700 text-sm font-medium px-4 py-2 rounded-full hover:bg-orange-200 transition text-center cursor-pointer"
      >
        {topic}
      </span>
    ))}
  </div>
</div>
  
  {/* Subscribe */}
  <div className="bg-gradient-to-br from-orange-100 to-white rounded-3xl shadow-lg p-6 border border-gray-100 text-center">
    <h3 className="text-xl font-semibold text-orange-700 mb-2">Stay Updated</h3>
    <p className="text-sm text-gray-600 mb-4">
      Subscribe to get the latest bulletins, events, and insights.
    </p>
    <a
      href="mailto:info@aicc.ind.in?subject=Subscribe%20Me&body=I%20would%20like%20to%20receive%20updates%20from%20AICC%20Bulletin."
      className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full font-medium hover:bg-orange-600 transition"
    >
      Subscribe Now
    </a>
  </div>

</div>
        </div>
      </div>
    </div>
  );
};

export default BulletinPage;
