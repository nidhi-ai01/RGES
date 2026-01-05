import React from 'react';
import { GraduationCap, Lightbulb, Users, Zap } from 'lucide-react';

export const WhoWeSupportSection = () => {
  const supporters = [
    {
      icon: Lightbulb,
      title: 'First-Time Entrepreneurs',
      description: 'Guidance for founders taking their first leap into entrepreneurship',
      image: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=600',
    },
    {
      icon: GraduationCap,
      title: 'Student Founders',
      description: 'Support for students building startups while pursuing their education',
      image: 'https://images.pexels.com/photos/722244/pexels-photo-722244.jpeg?w=600',
    },
    {
      icon: Users,
      title: 'Early-Stage Innovators',
      description: 'Resources for teams in the ideation and validation phases',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600',
    },
    {
      icon: Zap,
      title: 'Zero-to-One Builders',
      description: 'Tools and mentorship for founders creating something from nothing',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Who We Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here for dreamers, builders, and innovators at the start of their journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supporters.map((supporter, index) => {
            const Icon = supporter.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={supporter.image}
                    alt={supporter.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{supporter.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{supporter.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};