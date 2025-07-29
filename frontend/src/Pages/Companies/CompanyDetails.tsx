import React, { ReactNode, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, MapPin, Globe, Mail, Phone, Fan as Fax, Building2, Send, User, CheckCircle } from 'lucide-react';

interface Company {
  [x: string]: ReactNode;
  _id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  website?: string;
  fax?: string;
  zipcode: string;
  tax?: string;
  status: string;
  createdAt: string;
}

const CompanyDetails: React.FC = () => {
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
    const fetchCompany = async () => {
      try {
        console.log('Fetching company with ID:', id);
        const response = await axios.get(`http://localhost:5000/members/${id}`);
        setCompany(response.data);
      } catch (err: any) {
        console.error('❌ Error fetching company:', err);
        if (err.response?.status === 404) {
          setError('Company not found. Please check the ID or try another company.');
        } else {
          setError('Failed to load company details. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Building2 className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Loading...</h2>
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
          <p className="text-gray-600 mb-6">{error || 'The requested company could not be found.'}</p>
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
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Company Name */}
            <div className="text-center py-8 border-b border-gray-200">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{company.name}</h1>
            </div>

            {/* Company Information */}
            <div className="p-8 space-y-8">
              {/* Address */}
              <div className="flex items-start justify-between">
                <div className="w-32 text-right">
                  <span className="text-lg font-semibold text-gray-700">Address:</span>
                </div>
                <div className="flex-1 ml-8">
                  <div className="text-gray-600 leading-relaxed">
                    {company.address}<br />
                    {company.city} - {company.zipcode}<br />
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
                  <p className="text-gray-600 leading-relaxed">
                    {company.tax ? `${company.tax}, ` : ''}{company.business_description}
                  </p>
                </div>
              </div>

              {/* Website */}
              {company.website && (
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
              )}

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
              {company.fax && (
                <div className="flex items-center justify-between">
                  <div className="w-32 text-right">
                    <span className="text-lg font-semibold text-gray-700">Business Fax:</span>
                  </div>
                  <div className="flex-1 ml-8">
                    <span className="text-gray-600 font-medium">{company.fax}</span>
                  </div>
                </div>
              )}

              {/* Status */}
              <div className="flex items-center justify-between">
                <div className="w-32 text-right">
                  <span className="text-lg font-semibold text-gray-700">Status:</span>
                </div>
                <div className="flex-1 ml-8">
                  <span className="text-gray-600 font-medium">{company.status}</span>
                </div>
              </div>

              {/* Created At */}
              <div className="flex items-center justify-between">
                <div className="w-32 text-right">
                  <span className="text-lg font-semibold text-gray-700">Created At:</span>
                </div>
                <div className="flex-1 ml-8">
                  <span className="text-gray-600 font-medium">{new Date(company.createdAt).toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Send Message Button */}
            <div className="p-8 text-center">
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setShowMessageForm(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white font-semibold rounded-lg shadow-sm hover:bg-orange-700 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Send Message to Listing Owner</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Message Form Modal */}
      { showMessageForm && (
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

                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={() => setShowMessageForm(false)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600 text-white py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-1"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send</span>
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