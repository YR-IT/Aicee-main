import React, { useState, useEffect } from 'react';
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
  verified: boolean;
}

const CompanyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [messageForm, setMessageForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    fetchCompanyDetails();
  }, [id]);

  const fetchCompanyDetails = async () => {
    try {
      const response = await fetch(`https://api.jsonbin.io/v3/qs/6870fafd013b9e4bdcc0ad7a`);
      if (!response.ok) {
        throw new Error('Company not found');
      }
      const data = await response.json();
      setCompany(data);
    } catch (err) {
      setError('Failed to load company details');
      console.error('Error fetching company:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/companies/${id}/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageForm),
      });

      if (response.ok) {
        setMessageSent(true);
        setMessageForm({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => {
          setMessageSent(false);
          setShowMessageForm(false);
        }, 3000);
      }
    } catch (err) {
      console.error('Error sending message:', err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMessageForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
 useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when page loads
  }, []);
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <p className="text-gray-600 font-medium">Loading company details...</p>
        </div>
      </div>
    );
  }

  if (error || !company) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Building2 className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Company Not Found</h2>
          <p className="text-gray-600 mb-6">{error}</p>
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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

      {/* Company Details */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Company Header */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 border-b border-gray-100">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{company.name}</h1>
                    <div className="flex items-center space-x-4">
                      <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {company.category}
                      </div>
                      {company.verified && (
                        <div className="flex items-center space-x-1 text-green-600">
                          <Award className="w-4 h-4" />
                          <span className="text-sm font-semibold">Verified</span>
                        </div>
                      )}
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Address */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="flex items-start space-x-3 mb-3">
                      <MapPin className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">Address:</h3>
                        <div className="text-gray-600 leading-relaxed">
                          {company.address}<br />
                          {company.city}, {company.state} - {company.pincode}<br />
                          {company.country}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Business Description */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Long Business Description:</h3>
                    <p className="text-gray-600 leading-relaxed">{company.business_description}</p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Contact Information */}
                  <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                    {/* Website */}
                    {company.website && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Globe className="w-5 h-5 text-orange-500" />
                          <span className="font-semibold text-gray-700">Website:</span>
                        </div>
                        <a 
                          href={company.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
                        >
                          <span>{company.website}</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    )}

                    {/* Email */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-orange-500" />
                        <span className="font-semibold text-gray-700">E-mail Address:</span>
                      </div>
                      <a 
                        href={`mailto:${company.email}`}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        {company.email}
                      </a>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-orange-500" />
                        <span className="font-semibold text-gray-700">Business Phone Number:</span>
                      </div>
                      <a 
                        href={`tel:${company.phone}`}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        {company.phone}
                      </a>
                    </div>

                    {/* Fax */}
                    {company.fax && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Fax className="w-5 h-5 text-orange-500" />
                          <span className="font-semibold text-gray-700">Business Fax:</span>
                        </div>
                        <span className="text-gray-600 font-medium">{company.fax}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Message Button */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowMessageForm(true)}
                  className="bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600 text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  Send Message To Listing Owner
                </button>
              </div>
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
                      placeholder="Enter your full name"
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