import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Building2, 
  Phone, 
  Mail, 
  Globe, 
  Filter,
  ChevronDown,
  ExternalLink,
  Users,
  Star,
  Award,
  
} from 'lucide-react';
import Footer from '../components/Footer';

const MembersDirectory = () => {
  const [selectedState, setSelectedState] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('');

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  const states = [
    'All States', 'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 
    'Gujarat', 'Haryana', 'Karnataka', 'Kerala', 'Maharashtra', 'Punjab', 
    'Rajasthan', 'Tamil Nadu', 'Uttar Pradesh', 'West Bengal'
  ];

  const members = [
    {
      id: 1,
      name: 'Stalwart Creations',
      address: '410-411, Udyog Vihar, Phase-IV, Haryana - 122001',
      state: 'Haryana',
      country: 'India',
      category: 'Manufacturing',
      rating: 4.8,
      verified: true
    },
    {
      id: 2,
      name: 'Sahni Trading Corp.',
      address: '5-B, Marwari Vidyalaya, 473, S.V.P. Road, Charni Road, Maharashtra - 400004',
      state: 'Maharashtra',
      country: 'India',
      category: 'Trading',
      rating: 4.6,
      verified: true
    },
    {
      id: 3,
      name: 'Bangalore Granites',
      address: 'No. 130, Magadi Main Road, Machohalli Gate, Karnataka - 560091',
      state: 'Karnataka',
      country: 'India',
      category: 'Construction',
      rating: 4.7,
      verified: true
    },
    {
      id: 4,
      name: 'Gold Marine Exports (P) Ltd.',
      address: 'New No. 16 (Old No. 25), Dharmaja Koil Street, Chintadripet, Tamil Nadu - 600002',
      state: 'Tamil Nadu',
      country: 'India',
      category: 'Export',
      rating: 4.9,
      verified: true
    },
    {
      id: 5,
      name: 'Aggarwal Fibre & Plastic Industries',
      address: '3060, D. B. Gupta Road, Chuna Mandi, Pahar Ganj, Delhi - 110055',
      state: 'Delhi',
      country: 'India',
      category: 'Manufacturing',
      rating: 4.5,
      verified: true
    },
    {
      id: 6,
      name: 'Emkay Aromatics Limited',
      address: 'L-6, Industrial Estate, Ambattur, Tamil Nadu - 600058',
      state: 'Tamil Nadu',
      country: 'India',
      category: 'Chemicals',
      rating: 4.8,
      verified: true
    }
  ];

  const filteredMembers = members.filter(member => {
    const matchesState = !selectedState || selectedState === 'All States' || member.state === selectedState;
    const matchesKeyword = !searchKeyword || member.name.toLowerCase().includes(searchKeyword.toLowerCase());
    const matchesLetter = !selectedLetter || member.name.charAt(0).toUpperCase() === selectedLetter;
    return matchesState && matchesKeyword && matchesLetter;
  });

  const handleSearch = () => {
    // Search functionality is handled by the filter above
    console.log('Searching with:', { selectedState, searchKeyword, selectedLetter });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 via-blue-900 to-blue-900 py-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        {/* City Skyline Illustration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent">
          <div className="max-w-7xl mx-auto h-full flex items-end justify-center space-x-4 opacity-30">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className={`bg-white/40 rounded-t-lg animate-pulse`}
                style={{
                  width: `${Math.random() * 30 + 20}px`,
                  height: `${Math.random() * 60 + 40}px`,
                  animationDelay: `${i * 0.2}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8">
            <Users className="w-5 h-5" />
            <span className="font-semibold">Members Directory</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Find the <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Business Members</span>
          </h1>
          
          {/* Search Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* State Selector */}
                <div className="relative">
                  <select 
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl px-6 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none cursor-pointer font-medium"
                  >
                    <option value="" className="text-gray-800">Select State</option>
                    {states.map(state => (
                      <option key={state} value={state} className="text-gray-800">{state}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70 pointer-events-none" />
                </div>

                {/* Keyword Search */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Type the keyword"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl px-6 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 font-medium"
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" />
                </div>

                {/* Search Button */}
                <button 
                  onClick={handleSearch}
                  className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold hover:bg-orange-50 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Search className="w-5 h-5" />
                  <span>SEARCH</span>
                </button>
              </div>

              {/* Alphabet Filter */}
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

      {/* Members Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Find the Best <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">Members in Town</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with verified business members across India. Discover opportunities and build valuable partnerships.
            </p>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl px-6 py-3">
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

          {/* Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member) => (
              <div key={member.id} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {/* Member Header */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-900 p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                        <Building2 className="w-8 h-8 text-white" />
                      </div>
                      {member.verified && (
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                          <Award className="w-3 h-3" />
                          <span>Verified</span>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-200 transition-colors duration-300">
                      {member.name}
                    </h3>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                        <span className="text-white text-sm font-medium">{member.category}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-300 fill-current" />
                        <span className="text-white font-bold text-sm">{member.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Member Details */}
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div className="text-gray-600 text-sm leading-relaxed">
                        {member.address}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-600 font-medium">{member.country}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-blue-500 via-blue-900 to-blue-500 hover:from-orange-700 hover:to-red-600 text-white py-3 px-6 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                      <ExternalLink className="w-5 h-5" />
                      <span>More Info</span>
                    </button>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <button className="bg-gray-100 hover:bg-orange-100 text-gray-700 hover:text-orange-600 py-2 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>Call</span>
                      </button>
                      <button className="bg-gray-100 hover:bg-orange-100 text-gray-700 hover:text-orange-600 py-2 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>Email</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {filteredMembers.length > 0 && (
            <div className="text-center mt-16">
              <button className="bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600 text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                Load More Members
              </button>
            </div>
          )}

          {/* No Results */}
          {filteredMembers.length === 0 && (
            <div className="text-center py-16">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Search className="w-16 h-16 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No Members Found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search criteria or browse all members.</p>
              <button 
                onClick={() => {
                  setSelectedState('');
                  setSearchKeyword('');
                  setSelectedLetter('');
                }}
                className="bg-gradient-to-r from-orange-600 to-red-500 text-white px-8 py-3 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                View All Members
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Want to Join Our <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Business Network?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Become a member of AICC and connect with thousands of businesses across India. 
            Expand your network and grow your business with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 hover:-translate-y-1">
              Become a Member
            </button>
            <button className="border-2 border-white/30 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1">
              Learn More
            </button>
          </div>
        </div>
 
</div>
<Footer />
<style>{`
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`}</style>
</div>



    
  );
};

export default MembersDirectory;
