import React, { useEffect, useState } from 'react';
import {
  Clock, Users, Star, CheckCircle, BookOpen, Shield, X
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ExportCourseDetails = () => {
  const [showBuyNowForm, setShowBuyNowForm] = useState(false);

  const course = {
    title: 'Certificate Course on Export-Import Management',
    description: `This Certificate Course is developed by the All India Chamber of Commerce (AICC), recognized by the Govt of India. It covers essential steps involved in Exporting from India, including working knowledge on Export Documentation, with videos, PDFs, and slides. Duration: 2 months. Online test and certification on completion.`,
    price: 15421,
    duration: '2 months',
    students: 2500,
    rating: 4.8,
    reviews: 450,
    modules: [
      'How to start Export-Import Business?',
      'How to get Export-Import Orders?',
      'What are the risks and solutions in Export-Import Business?',
      'How to prepare Export-Import Invoice?',
      'How to get certificate of origin?',
      'How does letter of credit work?',
      'What are the terms of Payment in Export-Import Trade?',
      'Terms of Delivery in International Business',
      'How to settle dispute in Export-Import Business?'
    ],
    audience: [
      'Businessmen',
      'Working Professionals',
      'Students',
      'Graduates',
      'Job Seekers',
      'Housewives',
      'Executives'
    ],
    benefits: [
      'Self Study mode',
      'Study material will be provided',
      'Online Industry Expert Lectures (24x7 access)',
      'Post-program query support via email',
      'Online computer-based exams',
      'Certificate by AICC – Govt recognized'
    ]
  };

  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when page loads
    }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center space-x-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-6 py-2 mb-6">
            <BookOpen className="w-5 h-5 text-orange-300" />
            <span className="text-orange-300 font-semibold">eKnowledge – An AICC Initiative</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            CERTIFICATE COURSE ON <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">EXPORT-IMPORT MANAGEMENT</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Empower yourself with real-world knowledge and certification in international trade, recognized by the Govt. of India.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-16">
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10">
          {/* Top Meta */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{course.title}</h2>
          <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm mb-6">
            <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>{course.duration}</span></div>
            <div className="flex items-center gap-1"><Users className="w-4 h-4" /><span>{course.students}+ students</span></div>
            <div className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400" /><span className="font-bold">{course.rating}</span><span>({course.reviews} reviews)</span></div>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">{course.description}</p>

          {/* Modules */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Details of the Course</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            {course.modules.map((mod, i) => <li key={i}>{mod}</li>)}
          </ul>
          <p className="text-sm text-gray-500 italic mb-10">To resolve any query, our experts are available. Email us and get a response within 24 hours.</p>

          {/* Audience */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Who Can Join?</h3>
          <div className="flex flex-wrap gap-2 mb-10">
            {course.audience.map((aud, i) => (
              <span key={i} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">{aud}</span>
            ))}
          </div>

          {/* Benefits */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">What You'll Learn</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {course.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span className="text-gray-800">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Price + Actions */}
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-2">You Pay</h3>
            <div className="bg-orange-100 p-4 rounded-xl">
              <p className="text-2xl sm:text-3xl font-bold text-orange-800">₹ {course.price.toLocaleString()}</p>
              <p className="text-sm text-gray-600 italic mb-4">Inclusive of taxes & certification</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex gap-2">
                  <input type="text" placeholder="Enter Coupon Code" className="px-3 py-2 rounded-lg border border-gray-300 w-full sm:w-auto" />
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition">Apply</button>
                </div>
                <button onClick={() => setShowBuyNowForm(true)} className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition w-full sm:w-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Store & Login Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://play.google.com/store/apps/details?id=co.davos.yuoty" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Download on Google Play" className="h-12" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on App Store" className="h-12" />
            </a>
            <a href="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition text-sm">Login</a>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="mt-12 bg-slate-800 text-white rounded-2xl px-6 sm:px-8 py-10 text-center">
  <h3 className="text-2xl font-semibold mb-2">Have a query?</h3>
  <p className="text-sm text-gray-300 mb-6">Contact us and we will get back to you on your number</p>
  <div className="flex flex-col sm:flex-row justify-center gap-4">
    
    {/* Internal Contact Us Route */}
    <Link
      to="/contact-us"
      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition"
    >
      Contact Us
    </Link>

    {/* External Privacy Policy Link */}
    <a
      href="https://privacy-policy.courses.store/yuoty?defaultLanguage=EN"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition"
    >
      View Privacy Policy
    </a>
    
  </div>
</div>


        {/* Disclaimer */}
        <div className="mt-6 flex items-center space-x-2 text-xs text-gray-500">
          <Shield className="w-4 h-4" />
          <span>This course is officially recognized by Government authorities. All rights reserved by AICC.</span>
        </div>
      </div>

      {/* Buy Now Form Modal */}
      {showBuyNowForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-lg rounded-2xl p-6 relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowBuyNowForm(false)} className="absolute top-4 right-4">
              <X className="w-6 h-6 text-gray-600" />
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center">Please fill the details</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Full Name*</label>
                <input type="text" placeholder="e.g. Harsh" className="w-full mt-1 px-4 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium">Mobile Number*</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 border border-r-0 rounded-l-lg bg-gray-100">IN</span>
                  <input type="text" placeholder="e.g. 81XXXXXXXX" className="w-full px-4 py-2 border border-l-0 rounded-r-lg" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" placeholder="Enter your Email" className="w-full mt-1 px-4 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium">State*</label>
                <select className="w-full mt-1 px-4 py-2 border rounded-lg">
                  <option>Maharashtra</option>
                  <option>Delhi</option>
                  <option>Gujarat</option>
                  <option>Tamil Nadu</option>
                  <option>Uttar Pradesh</option>
                  <option>Karnataka</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="pt-4 text-center">
                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExportCourseDetails;
