import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Globe, Mail, Phone, Fan as Fax, Building2, Star, Award, Send, User, MessageSquare, ExternalLink, CheckCircle } from 'lucide-react';

interface Company {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  category: string;
  business_description: string;
  website: string;
  email: string;
  phone: string;
  fax: string;
  rating: number;
  verified: boolean;
}

const CompanyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [messageForm, setMessageForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Static company data - matches your screenshot
  const companies: Company[] = [
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
    }
  ];

  const company = companies.find(c => c.id === parseInt(id || '1'));

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessageSent(true);
    setMessageForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => {
      setMessageSent(false);
      setShowMessageForm(false);
    }, 3000);
  };
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMessageForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!company) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Building2 className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Company Not Found</h2>
          <p className="text-gray-600 mb-6">The requested company could not be found.</p>
          <Link 
            to="/members-directory" 
            className="bg-gradient-to-r from-orange-600 to-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          >
            Back to Directory
          </Link>
        </div>
      </div>
    );
  }
  
useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when page loads
  }, []);
  return (
    
    <div className="min-h-screen bg-gray-50">
      {/* Header - Exact match to screenshot */}
      <div className="bg-gradient-to-r from-orange-600 to-red-500 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link 
              to="/members-directory" 
              className="flex items-center space-x-2 text-white hover:text-orange-200 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Directory</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white font-semibold">
                DIRECTORY
              </div>
              <button className="bg-white text-orange-600 px-6 py-2 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-300">
                CLAIM YOUR LISTING
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Company Details - Exact layout from screenshot */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Company Name */}
            <div className="text-center py-8 border-b border-gray-200">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{company.name}</h1>
            </div>

            {/* Company Information - Exact format from screenshot */}
            <div className="p-8 space-y-8">
              {/* Address */}
              <div className="flex items-start justify-between">
                <div className="w-32 text-right">
                  <span className="text-lg font-semibold text-gray-700">Address:</span>
                </div>
                <div className="flex-1 ml-8">
                  <div className="text-gray-600 leading-relaxed">
                    {company.address}<br />
                    {company.state} - {company.pincode}<br />
                    {company.country}
                  </div>
                </div>
              </div>

              {/* Business Description */}
              <div className="flex items-start justify-between">
                <div className="w-32 text-right">
                  <span className="text-lg font-semibold text-gray-700">Long Business Description:</span>
                </div>
                <div className="flex-1 ml-8">
                  <p className="text-gray-600 leading-relaxed">{company.business_description}</p>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-center justify-between">
                <div className="w-32 text-right">
                  <span className="text-lg font-semibold text-gray-700">Website:</span>
                </div>
                <div className="flex-1 ml-8">
                  <a 
                    href={company.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {company.website}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between">
                <div className="w-32 text-right">
                  <span className="text-lg font-semibold text-gray-700">E-mail Address:</span>
                </div>
                <div className="flex-1 ml-8">
                  <a 
                    href={`mailto:${company.email}`}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {company.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between">
                <div className="w-32 text-right">
                  <span className="text-lg font-semibold text-gray-700">Business Phone Number:</span>
                </div>
                <div className="flex-1 ml-8">
                  <a 
                    href={`tel:${company.phone}`}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {company.phone}
                  </a>
                </div>
              </div>

              {/* Fax */}
              <div className="flex items-center justify-between">
                <div className="w-32 text-right">
                  <span className="text-lg font-semibold text-gray-700">Business Fax:</span>
                </div>
                <div className="flex-1 ml-8">
                  <span className="text-gray-600 font-medium">{company.fax}</span>
                </div>
              </div>
            </div>

            {/* Send Message Button - Exact styling from screenshot */}
            <div className="p-8 text-center">
              <button
                onClick={() => setShowMessageForm(true)}
                className="bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Send Message To Listing Owner
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Message Form Modal */}
      {showMessageForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Send Message</h2>
                <button
                  onClick={() => setShowMessageForm(false)}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-300"
                >
                  ×
                </button>
              </div>

              {messageSent && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-green-700 font-semibold">Message sent successfully!</span>
                </div>
              )}

              <form onSubmit={handleMessageSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={messageForm.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={messageForm.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={messageForm.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={messageForm.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Enter your message here..."
                  ></textarea>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowMessageForm(false)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 px-6 rounded-2xl font-bold transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600 text-white py-4 px-6 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyDetails;