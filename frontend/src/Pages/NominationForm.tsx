import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { 
  Award, 
  Trophy, 
  Star, 
  User, 
  Building2, 
  Phone, 
  Mail, 
  FileText, 
  Send, 
  CheckCircle,
  ArrowRight,
  Upload,
  Calendar,
  MapPin
} from 'lucide-react';


const NominationForm = () => {
  const [formData, setFormData] = useState({
    category: '',
    organizationName: '',
    organizationPhone: '',
    organizationEmail: '',
    nomineeName: '',
    nomineePhone: '',
    nomineeEmail: '',
    nomineeBiography: '',
    nominatorSignature: '',
    nominatorName: '',
    nominatorDesignation: '',
    nominatorOrganization: '',
    nominatorPhone: '',
    nominatorEmail: '',
    supportingDocuments: null
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    'Rising Star in Business of the year',
    'Emerging Start-Up of the year',
    'Sportsman of the year',
    'Excellence in Manufacturing',
    'Excellence in Export',
    'Excellence in Innovation',
    'Excellence in Leadership',
    'Excellence in Social Impact',
    'Lifetime Achievement Award',
    'Young Entrepreneur of the Year',
    'Women Entrepreneur of the Year',
    'Excellence in Technology',
    'Excellence in Healthcare',
    'Excellence in Education',
    'Excellence in Agriculture'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


    function handleSubmit(_event: FormEvent<HTMLFormElement>): void {
        throw new Error('Function not implemented.');
    }

    function handleFileChange(_event: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.');
    }
     useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
      }, []);
    

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 px-6 md:px-16 shadow-md">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">

    {/* Left Section - Icon + Title */}
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-5">
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white bg-opacity-20 shadow-lg flex items-center justify-center">
        <Trophy className="w-10 h-10 md:w-12 md:h-12 text-white" />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight drop-shadow">
          Excellence Awards
        </h1>
        <p className="text-sm md:text-base text-white/80 mt-1 font-light tracking-wide">
          Nominate for Excellence in Business
        </p>

        {/* ⭐ Animated Stars */}
        <div className="flex justify-center md:justify-start mt-3 space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 md:w-6 md:h-6 text-amber-400 fill-current drop-shadow-sm animate-pulseStar`}
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>

    {/* Right Section - Info + Breadcrumb */}
    <div className="text-center md:text-right">
      <p className="text-lg md:text-xl font-medium">Nomination Form</p>
      <div className="mt-1 text-sm text-white/80">
        <span>Home</span>
        <span className="mx-1">›</span>
        <span className="font-semibold text-white">Nomination</span>
      </div>
    </div>

  </div>
</div>



    

      {/* Form Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Form Header */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-gray-100">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl sm:4xl font-bold text-gray-800">Excellence Awards Nomination</h2>
              </div>
              <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Recognize outstanding achievements in business excellence. Submit your nomination for the prestigious AICC Excellence Award.
              </p>
            </div>

            {/* Award Categories */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Award Categories</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {categories.slice(0, 6).map((category, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-700">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{category}</span>
                  </div>
                ))}
              </div>
              {/* <div className="text-center mt-4">
                <span className="text-gray-600 text-sm">And many more categories...</span>
              </div> */}
            </div>
          </div>

          {/* Success Message */}
          {isSubmitted && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl flex items-center space-x-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <div>
                <h3 className="text-lg font-bold text-green-800">Nomination Submitted Successfully!</h3>
                <p className="text-green-700">Thank you for your nomination. We will review it and get back to you soon.</p>
              </div>
            </div>
          )}

          {/* Main Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-4 border border-gray-100">
            {/* Category Selection */}
            <div className="mb-8">
  <label className="block text-gray-700 font-bold text-lg mb-3">
    Category <span className="text-red-500">*</span>
  </label>

  <div className="relative">
    <select
      name="category"
      value={formData.category}
      onChange={handleInputChange}
      required
      className="appearance-none w-full px-5 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 sm:text-lg text-base"
    >
      <option value="">Select Category</option>
      {categories.map((category, index) => (
        <option key={index} value={category}>{category}</option>
      ))}
    </select>

    {/* Custom arrow */}
    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
      <svg
        className="h-5 w-5 text-gray-800"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>
</div>


            {/* Organization Details */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Organization Details</h3>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Name of Organisation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter organization name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Telephone Number(s) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="organizationPhone"
                        value={formData.organizationPhone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email-Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="organizationEmail"
                        value={formData.organizationEmail}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nominee Details */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Nominee Details</h3>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Name of Person being Nominated <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nomineeName"
                    value={formData.nomineeName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter nominee's full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Telephone Number(s) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="nomineePhone"
                        value={formData.nomineePhone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter nominee's phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email-Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="nomineeEmail"
                        value={formData.nomineeEmail}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter nominee's email"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nominee Biography
                  </label>
                  <textarea
                    name="nomineeBiography"
                    value={formData.nomineeBiography}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Provide detailed information about the nominee's achievements, contributions, and why they deserve this award..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Nominator Details */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Nominator Details</h3>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Signed (by person making nomination) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nominatorSignature"
                    value={formData.nominatorSignature}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Type your full name as signature"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nominatorName"
                      value={formData.nominatorName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Designation <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nominatorDesignation"
                      value={formData.nominatorDesignation}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your designation"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Organization <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nominatorOrganization"
                    value={formData.nominatorOrganization}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your organization name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="nominatorPhone"
                        value={formData.nominatorPhone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="nominatorEmail"
                        value={formData.nominatorEmail}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your email address"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting Documents */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Supporting Documents</h3>
              </div>

              <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-orange-400 transition-colors duration-300">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <label className="cursor-pointer">
                  <span className="text-lg font-semibold text-gray-700 hover:text-orange-600 transition-colors duration-300">
                    Click to upload supporting documents
                  </span>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    multiple
                  />
                </label>
                <p className="text-gray-500 mt-2">PDF, DOC, DOCX, JPG, PNG files up to 10MB</p>
            
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-5 py-3 rounded-2xl font-bold sm:text-lg text-sm transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3 mx-auto"
              >
                <Send className="w-6 h-6" />
                <span>Submit Nomination</span>
              </button>
              <p className="text-gray-600 mt-4 text-sm">
                By submitting this form, you agree to our terms and conditions and privacy policy.
              </p>
            </div>
          </form>

          {/* Additional Information */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Important Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span>Submission Deadline</span>
                </h4>
                <p className="text-gray-600">All nominations must be submitted by December 31st, 2024.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center space-x-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span>Selection Process</span>
                </h4>
                <p className="text-gray-600">Nominations will be reviewed by our expert panel and winners will be announced in January 2025.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Award Ceremony</span>
                </h4>
                <p className="text-gray-600">The award ceremony will be held in New Delhi with all winners invited to attend.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>Contact Support</span>
                </h4>
                <p className="text-gray-600">For any queries, contact us at +91-99907 33308 or info@aicc.ind.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NominationForm;
