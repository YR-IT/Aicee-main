import React, { useState, useEffect } from 'react';
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
import { Link } from 'react-router-dom';



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
      name: 'Ashok Brothers Impex Pvt. Ltd.',
      address: '638/D, 2Nd Floor, Dr. Rajkumar Road, Rajaninagar, 2Nd Stage',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560010',
      country: 'India',
      category: 'Manufacturing',
      business_description: 'Machine Tools & Accessories, Balancing Machine, Sheet Metal Machine Tools Accessories',
      website: 'http://www.abi-india.com',
      email: 'abibo@bgl.vsnl.net.in',
      phone: '080-23323096',
      fax: '080-23323096',
      rating: 4.8,
      verified: true
    },
    {
      id: 2,
      name: 'Stalwart Creations',
      address: '410-411, Udyog Vihar, Phase-IV',
      city: 'Gurgaon',
      state: 'Haryana',
      pincode: '122001',
      country: 'India',
      category: 'Manufacturing',
      business_description: 'Industrial Manufacturing and Production Solutions, Quality Engineering Services',
      website: 'http://www.stalwartcreations.com',
      email: 'info@stalwartcreations.com',
      phone: '+91-124-4367655',
      fax: '+91-124-4367656',
      rating: 4.6,
      verified: true
    },
    {
      id: 3,
      name: 'Gold Marine Exports (P) Ltd.',
      address: 'New No. 16 (Old No. 25), Dharmaja Koil Street, Chintadripet',
      city: 'Chennai',
      state: 'Tamil Nadu',
      pincode: '600002',
      country: 'India',
      category: 'Export',
      business_description: 'Marine Products Export, Seafood Processing and International Trade',
      website: 'http://www.goldmarineexports.com',
      email: 'info@goldmarineexports.com',
      phone: '+91-44-28524567',
      fax: '+91-44-28524568',
      rating: 4.9,
      verified: true
    },
    {
      id: 4,
      name: 'Emkay Aromatics Limited',
      address: 'L-6, Industrial Estate, Ambattur',
      city: 'Chennai',
      state: 'Tamil Nadu',
      pincode: '600058',
      country: 'India',
      category: 'Chemicals',
      business_description: 'Aromatic Chemicals, Essential Oils, Fragrance and Flavor Manufacturing',
      website: 'http://www.emkayaromatics.com',
      email: 'info@emkayaromatics.com',
      phone: '+91-44-26254789',
      fax: '+91-44-26254790',
      rating: 4.7,
      verified: true
    },
    {
      id: 5,
      name: 'Bangalore Granites',
      address: 'No. 130, Magadi Main Road, Machohalli Gate',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560091',
      country: 'India',
      category: 'Construction',
      business_description: 'Granite Mining, Processing and Export, Natural Stone Products',
      website: 'http://www.bangaloregranites.com',
      email: 'info@bangaloregranites.com',
      phone: '+91-80-28394567',
      fax: '+91-80-28394568',
      rating: 4.5,
      verified: true
    },

    {
      id: 6,
      name: 'EcoBuild Materials',
      address: 'Sector 22, Industrial Area, Chandigarh, Punjab - 160022',
      state: 'Punjab',
      country: 'India',
      category: 'Construction',
      rating: 4.8,
      verified: true,
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
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when page loads
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-16 px-4 overflow-hidden">
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
          
          <h1 className="text-4xl md:text-6xl font-bold mb-12 leading-tight ">
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
                    className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl px-6 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none cursor-pointer font-medium"
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
                    className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl px-6 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 font-medium"
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" />
                </div>

                {/* Search Button */}
                <button 
                  onClick={handleSearch}
                  className="bg-white text-orange-600 px-8 py-3 rounded-2xl font-bold hover:bg-orange-50 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
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
{/* Clean & Compact Members Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredMembers.map((member) => (
    <div
      key={member.id}
      className="bg-white rounded-xl border border-gray-200 shadow-md p-6 flex flex-col hover:shadow-lg transition"
    >
      {/* Top: Logo + Name + Rating */}
      <div className="flex items-center space-x-4 mb-4">
        {/* Logo/Initial */}
        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-lg">
          {member.name.charAt(0)}
        </div>

        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-900">{member.name}</h3>
         
        </div>
      </div>

      {/* Address */}
      <div className="flex items-start space-x-3 mb-4">
        <MapPin className="w-5 h-5 text-orange-500 mt-1" />
        <p className="text-sm text-gray-700 leading-relaxed">{member.address}</p>
      </div>

      {/* More Info */}
      <Link
  to={`/company/${member.id}`}
  className="group inline-flex items-center text-orange-600 font-semibold text-sm hover:underline hover:underline-offset-4 transition mt-auto"
>
  <span>More Info</span>
  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
</Link>

    </div>
  ))}
</div>


          {/* Load More Button */}
          {filteredMembers.length > 0 && (
            <div className="text-center mt-16">
            
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
