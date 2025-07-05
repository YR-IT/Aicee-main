import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail,  
  Clock, 
  MapPin,
  Send,
  User,
  MessageSquare,
  Globe,
  Award,
  Users,
  Calendar,
} from 'lucide-react';


interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

function App() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    
    // Reset form or show success message
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91-99907-33308', '+91-22-1234-5678'],
      color: 'text-orange-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@aicc.ind.in', 'support@aicc.ind.in'],
      color: 'text-red-600'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Unit No. 836-A, Tower B-3, Spaze Tech Park', 'Badshahpur Sohna Rd Hwy, Sector 49', 'Gurugram, Haryana 122001'],
      color: 'text-orange-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon - Fri: 8:00am - 7:00pm', 'Sat: 9:00am - 5:00pm', 'Sun: Closed'],
      color: 'text-red-600'
    }
  ];



  const subjects = [
    'General Inquiry',
    'Membership Information',
    'Business Support',
    'Event Registration',
    'Partnership Opportunities',
    'Technical Support',
    'Complaint/Feedback',
    'Other'
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when page loads
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
  

      
           {/* Hero Section */}
           <section className="relative bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 text-white py-16">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between space-y-8 md:space-y-0">
          {/* Logo */}
          <div className="flex flex-col items-center justify-center md:flex-row md:items-center md:gap-6">
            <div className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
              <img src="/images/aicc-logo.png" alt="AICC Logo" className="w-10 h-10 object-contain" />
            </div>
            <div className="text-center md:text-left mt-4 md:mt-0">
              <h1 className="text-2xl md:text-3xl font-bold">ALL INDIA CHAMBER</h1>
              <h2 className="text-xl md:text-2xl font-semibold">OF COMMERCE</h2>
              <p className="text-sm text-orange-100">WE FACILITATE BUSINESS ACROSS THE GLOBE</p>
            </div>
          </div>

          {/* Page Info */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl md:text-4xl font-bold mb-2">Contact Us</h3>
            <p className="text-sm md:text-lg mb-2 max-w-xl mx-auto md:mx-0">
              Get in touch with us for any inquiries, support, or business opportunities
            </p>
            <div className="flex items-center justify-center md:justify-end space-x-2 text-xs md:text-sm">
              <span>Home</span>
              <span className="text-orange-200">›</span>
              <span className="text-orange-200">Contact Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="w-full">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-orange-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-lg mr-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{info.title}</h3>
                </div>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className={`text-sm ${info.color} font-medium`}>
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-orange-100">
                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Send us a Message</h2>
                  <p className="text-gray-600">
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 ${
                            errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-orange-500'
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 ${
                            errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-orange-500'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 ${
                            errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-orange-500'
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 ${
                          errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-orange-500'
                        }`}
                      >
                        <option value="">Select a subject</option>
                        {subjects.map(subject => (
                          <option key={subject} value={subject}>{subject}</option>
                        ))}
                      </select>
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        placeholder="Enter your message here..."
                        className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 resize-none ${
                          errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-orange-500'
                        }`}
                      />
                    </div>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

               <div className="flex justify-center">
  <button
    type="submit"
    disabled={isSubmitting}
    className="inline-flex bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none items-center justify-center"
  >
    {isSubmitting ? 'Sending...' : (
      <>
        Send Message
        <Send className="w-5 h-5 ml-2" />
      </>
    )}
  </button>
</div>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Map Placeholder */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <MapPin className="w-6 h-6 text-orange-500 mr-2" />
                  Our Location
                </h3>
                <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-lg p-8 text-center">
                  <Globe className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <p className="text-gray-700 font-medium">Interactive Map</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Unit No. 836-A, Tower B-3, Spaze Tech Park<br />
                    Badshahpur Sohna Rd Hwy, Sector 49<br />
                    Gurugram, Haryana 122001
                  </p>
                  <a
  href="https://www.google.com/maps/place/All+India+Chamber+of+Commerce/@28.3534306,76.9767154,11.25z/data=!4m14!1m7!3m6!1s0x390d239a2bc3229d:0xda2d71e9c23d76e6!2sAll+India+Chamber+of+Commerce!8m2!3d28.350357!4d77.0653901!16s%2Fg%2F11j91p0yly!3m5!1s0x390d239a2bc3229d:0xda2d71e9c23d76e6!8m2!3d28.350357!4d77.0653901!16s%2Fg%2F11j91p0yly?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4"
>
  <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg text-sm hover:from-orange-600 hover:to-red-600 transition-colors">
    View on Google Maps
  </button>
</a>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Award className="w-6 h-6 text-orange-500 mr-2" />
                  Why Choose Us
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <Users className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">10,000+ Members</p>
                      <p className="text-sm text-gray-600">Active business community</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-100 p-2 rounded-lg">
                      <Globe className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">50+ Countries</p>
                      <p className="text-sm text-gray-600">Global presence</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <Calendar className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">25 Years</p>
                      <p className="text-sm text-gray-600">Industry experience</p>
                    </div>
                  </div>
                  
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </main>

     

    
    </div>
  );
}

export default App;

