import React from 'react';
import {
  Clock, Users, Star, CheckCircle, BookOpen, Shield
} from 'lucide-react';

const ExportCourseDetails = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center space-x-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-6 py-2 mb-6">
            <BookOpen className="w-5 h-5 text-orange-300" />
            <span className="text-orange-300 font-semibold">eKnowledge – An AICC Initiative</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            CERTIFICATE COURSE ON <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">EXPORT-IMPORT MANAGEMENT</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Empower yourself with real-world knowledge and certification in international trade, recognized by the Govt. of India.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 mt-16">
        <div className="bg-white rounded-3xl shadow-xl p-10">
          {/* Meta */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{course.title}</h2>
            <div className="flex flex-wrap items-center space-x-6 text-gray-600 text-sm">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{course.students}+ students</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="font-bold">{course.rating}</span>
                <span>({course.reviews} reviews)</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed text-lg mb-6">{course.description}</p>

          {/* Details of the Course */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Details of the Course</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {course.modules.map((mod, i) => (
                <li key={i}>{mod}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-500 italic">
              To resolve any query, our experts are available. The participant may email their query and get a response within 24 hours.
            </p>
          </div>

          {/* Who Can Join */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who Can Join?</h3>
            <div className="flex flex-wrap gap-3">
              {course.audience.map((aud, i) => (
                <span key={i} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  {aud}
                </span>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">What You'll Learn</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {course.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <span className="text-gray-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fee & Certificate */}
          <div className="border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div>
              <p className="text-xl text-gray-800 font-bold">Course Fee: ₹ {course.price.toLocaleString()}</p>
              <p className="text-sm text-gray-500 italic">
                *Inclusive of taxes. Certificate included.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                📜 At the end of the course, the participant shall take an online exam and upon successful completion, will be awarded a certificate by AICC.
              </p>
            </div>
            <button className="bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold py-3 px-8 rounded-2xl shadow-lg transition-transform hover:scale-105">
              Buy Now
            </button>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-6 flex items-center space-x-2 text-xs text-gray-500">
          <Shield className="w-4 h-4" />
          <span>This course is officially recognized by Government authorities. All rights reserved by AICC.</span>
        </div>
      </div>
    </div>
  );
};

export default ExportCourseDetails;
