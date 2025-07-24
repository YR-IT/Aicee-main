import React, { useState, useEffect } from 'react';
import { 
      Phone, 
      Mail, 
      Clock, 
      Building,
      Users,
      Award,
      Globe,
      BookOpen,
      Star,
      ArrowRight,
      Calendar,
      MapPin,
      X
    } from 'lucide-react';

    // AnimatedNumber component
    interface AnimatedNumberProps {
      target: number;
      duration: number;
    }

    const AnimatedNumber = ({ target, duration }: AnimatedNumberProps) => {
      const [count, setCount] = useState(0);
      useEffect(() => {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.ceil(start));
          }
        }, 16);
        return () => clearInterval(timer);
      }, [target, duration]);
      return <span>{count}</span>;
    };

    interface FormData {
      fullName: string;
      phone: string;
      email: string;
      address: string;
      city: string;
      country: string;
      zipCode: string;
      businessDescription: string;
      website: string;
      fax: string;
    }

    function App() {
      const [formData, setFormData] = useState<FormData>({
        fullName: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        country: '',
        zipCode: '',
        businessDescription: '',
        website: '',
        fax: ''
      });

      const [errors, setErrors] = useState<Partial<FormData>>({});
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [showPopup, setShowPopup] = useState(false);

      useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);

      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormData]) {
          setErrors(prev => ({ ...prev, [name]: '' }));
        }
      };

      const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.country.trim()) newErrors.country = 'Country is required';
        if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip code is required';
        if (showPopup) {
          if (!formData.businessDescription.trim()) newErrors.businessDescription = 'Business description is required';
          if (formData.website.trim() && !/^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/.test(formData.website)) 
            newErrors.website = 'Website URL is invalid';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        if (!showPopup) {
          setShowPopup(true);
          return;
        }
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setShowPopup(false);
        alert('Membership application submitted successfully!');
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          address: '',
          city: '',
          country: '',
          zipCode: '',
          businessDescription: '',
          website: '',
          fax: ''
        });
      };

      const handlePopupClose = () => {
        setShowPopup(false);
        setErrors(prev => ({
          ...prev,
          businessDescription: '',
          website: '',
          fax: ''
        }));
      };

      const membershipBenefits = [
        { icon: Users, title: 'Networking Opportunities', description: 'Connect with industry leaders and professionals worldwide' },
        { icon: Award, title: 'Recognition Programs', description: 'Get recognized for your business achievements and excellence' },
        { icon: BookOpen, title: 'Educational Resources', description: 'Access to workshops, seminars, and training programs' },
        { icon: Globe, title: 'Global Connections', description: 'Expand your business internationally with our network' },
      ];

      const countries = [
        'India', 'United States', 'United Kingdom', 'Canada', 'Australia', 
        'Germany', 'France', 'Japan', 'Singapore', 'UAE'
      ];

      const testimonials = [
        {
          name: 'Rajesh Kumar',
          company: 'Tech Solutions Ltd.',
          text: 'Joining AICC has transformed our business reach globally. The networking opportunities are unparalleled.',
          rating: 5
        },
        {
          name: 'Sarah Johnson',
          company: 'Global Exports Inc.',
          text: 'The educational resources and business support have been invaluable for our company growth.',
          rating: 5
        },
      ];

      return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-slate-600 via-slate-600 to-slate-800 text-white py-12 sm:py-16">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
                <div className="flex flex-col sm:flex-row items-center sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                    <Building className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight">ALL INDIA CHAMBER</h1>
                    <h2 className="text-2xl md:text-2xl font-semibold -mt-1">OF COMMERCE</h2>
                  </div>
                </div>
                <p className="text-base md:text-lg text-orange-100 mt-2">
                  WE FACILITATE BUSINESS ACROSS THE GLOBE
                </p>
              </div>
              <div className="text-center md:text-right space-y-2 md:space-y-3">
                <h3 className="text-3xl md:text-4xl font-bold">Become a Member</h3>
                <p className="text-base sm:text-base md:text-lg text-orange-100">
                  Get in touch with us for any inquiries, support, or business opportunities
                </p>
                <div className="flex flex-wrap justify-center md:justify-end gap-1 sm:gap-2 text-sm sm:text-sm text-orange-100">
                  <a href="/" className="hover:text-orange-400 transition-colors cursor-pointer">
                    Home
                  </a>
                  <span>›</span>
                  <span className="font-semibold">Become a Member</span>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <main className="w-full">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid lg:grid-cols-12 gap-6 items-stretch min-h-[600px]">
                {/* Left Sidebar - Benefits */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <Award className="w-6 h-6 text-orange-500 mr-2" />
                      Membership Benefits
                    </h3>
                    <div className="space-y-3">
                      {membershipBenefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-orange-50 transition-colors duration-200 group">
                          <div className="bg-gradient-to-br from-orange-500 to-red-500 p-2 rounded-lg group-hover:scale-110 transition-transform duration-200">
                            <benefit.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-gray-800">{benefit.title}</h4>
                            <p className="text-xs text-gray-600">{benefit.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <Calendar className="w-6 h-6 text-orange-500 mr-2" />
                      Upcoming Events
                    </h3>
                    <div className="space-y-3">
                      <div className="border-l-4 border-orange-500 pl-4 py-2">
                        <h4 className="font-semibold text-sm text-gray-800">Global Business Summit</h4>
                        <p className="text-xs text-gray-600 flex items-center mt-1">
                          <MapPin className="w-3 h-3 mr-1" />
                          Mumbai • Dec 15, 2024
                        </p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4 py-2">
                        <h4 className="font-semibold text-sm text-gray-800">Export-Import Workshop</h4>
                        <p className="text-xs text-gray-600 flex items-center mt-1">
                          <MapPin className="w-3 h-3 mr-1" />
                          Delhi • Dec 20, 2024
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center - Membership Form */}
                <div className="lg:col-span-5">
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold text-gray-800 mb-3">Join Our Community</h2>
                      <p className="text-gray-600 text-sm">
                        Fields marked with <span className="text-red-500 font-semibold">*</span> are required
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 ${
                              errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-orange-500'
                            }`}
                          />
                          {errors.fullName && (
                            <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 ${
                              errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-orange-500'
                            }`}
                          />
                          {errors.phone && (
                            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                          )}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 ${
                            errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-orange-500'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Enter your address"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                        />
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Enter your city"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Country <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 ${
                              errors.country ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-orange-500'
                            }`}
                          >
                            <option value="">Select Country</option>
                            {countries.map(country => (
                              <option key={country} value={country}>{country}</option>
                            ))}
                          </select>
                          {errors.country && (
                            <p className="mt-1 text-sm text-red-600">{errors.country}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Zip Code <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            placeholder="Enter zip code"
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 ${
                              errors.zipCode ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-orange-500'
                            }`}
                          />
                          {errors.zipCode && (
                            <p className="mt-1 text-sm text-red-600">{errors.zipCode}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="mt-2 w-500 bg-gradient-to-r from-slate-600 via-slate-600 to-slate-800 text-white py-2 px-4 rounded-lg font-semibold text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                        >
                          {isSubmitting ? 'Submitting...' : (
                            <>
                              Submit Application
                              <ArrowRight className="w-5 h-5 ml-2" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Right Sidebar */}
                <div className="lg:col-span-3 space-y-6">
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                      <Users className="w-5 h-5 text-orange-500 mr-2" />
                      What Members Say
                    </h3>
                    <div className="space-y-3">
                      {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-3 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg">
                          <div className="flex items-center mb-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                            ))}
                          </div>
                          <p className="text-xs text-gray-700 mb-2">"{testimonial.text}"</p>
                          <div>
                            <p className="text-xs font-semibold text-gray-800">{testimonial.name}</p>
                            <p className="text-xs text-gray-600">{testimonial.company}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                      <Phone className="w-5 h-5 text-orange-500 mr-2" />
                      Need Help?
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="bg-orange-100 p-2 rounded-lg">
                          <Phone className="w-4 h-4 text-orange-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-gray-800">Call Us</p>
                          <p className="text-xs text-gray-600">+91-99907-33308</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-orange-100 p-2 rounded-lg">
                          <Mail className="w-4 h-4 text-orange-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-gray-800">Email Us</p>
                          <p className="text-xs text-gray-600">info@aicc.ind.in</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-orange-100 p-2 rounded-lg">
                          <Clock className="w-4 h-4 text-orange-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-gray-800">Office Hours</p>
                          <p className="text-xs text-gray-600">Mon - Fri: 8:00am - 7:00pm</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Popup for Additional Business Info */}
            {showPopup && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
                  <button
                    onClick={handlePopupClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Business Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Business Description <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="businessDescription"
                        value={formData.businessDescription}
                        onChange={handleInputChange}
                        placeholder="Describe your business"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 ${
                          errors.businessDescription ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-orange-500'
                        }`}
                        rows={4}
                      />
                      {errors.businessDescription && (
                        <p className="mt-1 text-sm text-red-600">{errors.businessDescription}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Website
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="Enter your website URL"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 ${
                          errors.website ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-orange-500'
                        }`}
                      />
                      {errors.website && (
                        <p className="mt-1 text-sm text-red-600">{errors.website}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Fax
                      </label>
                      <input
                        type="tel"
                        name="fax"
                        value={formData.fax}
                        onChange={handleInputChange}
                        placeholder="Enter your fax number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                      />
                    </div>
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={handlePopupClose}
                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-all duration-200"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="px-4 py-2 bg-gradient-to-r from-slate-600 to-slate-800 text-white rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Submitting...' : 'Confirm'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>

          {/* Animated Logo Section */}
          <section className="bg-gradient-to-r from-orange-100 via-white to-red-100 py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center">
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-32 h-32 border-4 border-orange-200 rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
                    <div className="absolute inset-2 w-28 h-28 border-2 border-red-300 rounded-full animate-pulse"></div>
                    <div className="absolute inset-4 w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
                      <Building className="w-12 h-12 text-white animate-bounce" style={{animationDuration: '2s'}} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 -left-4 w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute top-1/2 -right-4 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-800 animate-fade-in">
                    Connecting Businesses Worldwide
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up">
                    Join our global network of successful entrepreneurs and business leaders
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    <div className="text-center transform hover:scale-105 transition-transform duration-300">
                      <div className="text-3xl font-bold text-orange-600">
                        <AnimatedNumber target={10000} duration={2000} />+
                      </div>
                      <div className="text-sm text-gray-600">Active Members</div>
                    </div>
                    <div className="text-center transform hover:scale-105 transition-transform duration-300">
                      <div className="text-3xl font-bold text-red-600">
                        <AnimatedNumber target={50} duration={2000} />+
                      </div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                    <div className="text-center transform hover:scale-105 transition-transform duration-300">
                      <div className="text-3xl font-bold text-orange-600">
                        <AnimatedNumber target={500} duration={2000} />+
                      </div>
                      <div className="text-sm text-gray-600">Events</div>
                    </div>
                    <div className="text-center transform hover:scale-105 transition-transform duration-300">
                      <div className="text-3xl font-bold text-red-600">
                        <AnimatedNumber target={25} duration={2000} />
                      </div>
                      <div className="text-sm text-gray-600">Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Custom CSS */}
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
    }
    export default App;