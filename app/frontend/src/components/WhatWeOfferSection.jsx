import React from 'react';
import { CheckCircle, Users, BookOpen, DollarSign, Calendar } from 'lucide-react';

export const WhatWeOfferSection = () => {
  const offerings = [
    {
      icon: CheckCircle,
      title: 'Idea Validation Programs',
      description: 'Structured workshops to test your assumptions and validate product-market fit',
      image: 'https://images.unsplash.com/photo-1588856122867-363b0aa7f598?w=600',
      features: ['Customer discovery', 'Market research', 'Competitive analysis', 'MVP planning'],
    },
    {
      icon: Users,
      title: 'Founder Mentorship',
      description: '1-on-1 guidance from experienced entrepreneurs who\'ve been in your shoes',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?w=600',
      features: ['Weekly mentor sessions', 'Strategic planning', 'Problem solving', 'Network access'],
    },
    {
      icon: BookOpen,
      title: 'Startup Bootcamps',
      description: 'Intensive programs covering everything from ideation to pitch preparation',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600',
      features: ['Product development', 'Business model design', 'Team building', 'Go-to-market strategy'],
    },
    {
      icon: DollarSign,
      title: 'Investor & Funding Access',
      description: 'Connect with angel investors, VCs, and access to funding opportunities',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600',
      features: ['Pitch deck review', 'Investor introductions', 'Funding readiness', 'Cap table planning'],
    },
    {
      icon: Calendar,
      title: 'Demo Days and Networking',
      description: 'Showcase your startup to investors and connect with fellow founders',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600',
      features: ['Quarterly demo days', 'Founder meetups', 'Industry events', 'Community support'],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support for every stage of your startup journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={offering.image}
                    alt={offering.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-2">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{offering.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{offering.description}</p>
                  <ul className="space-y-2">
                    {offering.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};