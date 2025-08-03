import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  Filter,
  ChevronDown,
  ExternalLink,
  Users,
} from 'lucide-react';
import { fetchApprovedMembers } from './admin/api/memberApi';

interface Member {
  _id: string;
  fullName: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  category: string;
  business_description: string;
  website?: string;
  email: string;
  phone: string;
  fax?: string;
  rating: number;
  verified: boolean;
}

const MembersDirectory: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedState, setSelectedState] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('');

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const states = [
    'All States', 'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 
    'Gujarat', 'Haryana', 'Karnataka', 'Kerala', 'Maharashtra', 'Punjab', 
    'Rajasthan', 'Tamil Nadu', 'Uttar Pradesh', 'West Bengal'
  ];

  useEffect(() => {
    const getMembers = async () => {
      try {
        const res = await fetchApprovedMembers();
        console.log('API Response:', res);  // ✅ Add this line to see API response
        if (res.members && Array.isArray(res.members)) {
          setMembers(res.members);  // ✅ Correct: res.members
        } else {
          throw new Error('Invalid API Response Shape');
        }
      } catch (err: any) {
        console.error('❌ Error fetching members:', err);
        setError("Failed to load members. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
  
    getMembers();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  const filteredMembers = members.filter(member => {
    const matchesState = !selectedState || selectedState === 'All States' || member.state === selectedState;
    const matchesKeyword = !searchKeyword || member.fullName.toLowerCase().includes(searchKeyword.toLowerCase());
    const matchesLetter = !selectedLetter || member.fullName.charAt(0).toUpperCase() === selectedLetter;
    return matchesState && matchesKeyword && matchesLetter;
  });

  const handleSearch = () => {
    console.log('Searching with:', { selectedState, searchKeyword, selectedLetter });
  };

  if (loading) return <div className="text-center py-10 text-gray-600">Loading members...</div>;
  if (error) return <div className="text-center text-red-600 py-10">{error}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-16 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8">
            <Users className="w-5 h-5" />
            <span className="font-semibold">Members Directory</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-12 leading-tight">
            Find the <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Business Members</span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="relative">
                  <select 
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl px-6 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none cursor-pointer font-medium"
                  >
                    <option value="" className="text-gray-800">Select State</option>
                    {states.map(state => (
                      <option key={state} value={state} className="text-gray-800">{state}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70 pointer-events-none" />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Type the keyword"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl px-6 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 font-medium"
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" />
                </div>

                <button 
                  onClick={handleSearch}
                  className="bg-white text-orange-600 px-8 py-3 rounded-2xl font-bold hover:bg-orange-50 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Search className="w-5 h-5" />
                  <span>SEARCH</span>
                </button>
              </div>

              <div className="border-t border-white/20 pt-6">
                <p className="text-white/90 font-semibold mb-4 text-center">Search by Alphabet:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {alphabet.map(letter => (
                    <button
                      key={letter}
                      onClick={() => setSelectedLetter(selectedLetter === letter ? '' : letter)}
                      className={`w-10 h-10 rounded-xl font-bold transition-all duration-300 transform hover:scale-110 ${
                        selectedLetter === letter
                          ? 'bg-white text-orange-600 shadow-lg'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      {letter}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Find the Best <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">Members in Town</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with verified business members across India. Discover opportunities and build valuable partnerships.
            </p>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl px-4 py-3">
                <span className="text-orange-700 font-bold">
                  {filteredMembers.length} Members Found
                </span>
              </div>
              {(selectedState || searchKeyword || selectedLetter) && (
                <button 
                  onClick={() => {
                    setSelectedState('');
                    setSearchKeyword('');
                    setSelectedLetter('');
                  }}
                  className="text-gray-600 hover:text-orange-600 font-medium transition-colors duration-300"
                >
                  Clear Filters
                </button>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600 font-medium">Sort by Relevance</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member._id}
                className="bg-white rounded-xl border border-gray-200 shadow-md p-6 flex flex-col hover:shadow-lg transition"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-lg">
                    {member.fullName.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-900">{member.fullName}</h3>
                  </div>
                </div>

                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                  <p className="text-sm text-gray-700 leading-relaxed">{member.address}</p>
                </div>

                <Link
                  to={`/company/${member._id}`}
                  className="group inline-flex items-center text-orange-600 font-semibold text-sm hover:underline hover:underline-offset-4 transition mt-auto"
                >
                  <span>More Info</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 md:py-20 py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Want to Join Our <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Business Network?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-12 leading-relaxed">
            Become a member of AICC and connect with thousands of businesses across India. 
            Expand your network and grow your business with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/become-a-member">
              <button className="bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600 text-white px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-orange-500/25 transform hover:scale-103 hover:-translate-y-0.5">
                Become a Member
              </button>
            </Link>
            <Link to="/about">
              <button className="border border-orange-500 text-orange-600 px-11 py-2.5 rounded-xl font-bold text-base hover:bg-orange-50 hover:text-orange-700 transition-all duration-300">
                Learn More
              </button>
            </Link>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default MembersDirectory;
