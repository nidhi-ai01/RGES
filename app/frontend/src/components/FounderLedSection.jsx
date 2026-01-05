import React from 'react';
import { Rocket, Heart, Zap, Target } from 'lucide-react';

export const FounderLedSection = () => {
  const values = [
    {
      icon: Rocket,
      title: 'Built by Founders',
      description: 'Our team has walked the startup journey and knows the challenges you face',
    },
    {
      icon: Heart,
      title: 'Community-First',
      description: 'A supportive ecosystem where founders help founders succeed',
    },
    {
      icon: Zap,
      title: 'Execution-Driven',
      description: 'Focus on practical action and real results, not just theory',
    },
    {
      icon: Target,
      title: 'Zero-to-One Focus',
      description: 'Specialized in early-stage challenges, from idea to first traction',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            A Founder-Led Ecosystem
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're not just an accelerator—we're founders helping founders build something meaningful
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-blue-100 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Quote Section */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12 text-center">
          <blockquote className="text-2xl sm:text-3xl font-semibold text-white mb-6 leading-relaxed">
            "The best way to predict the future is to build it. We're here to help you do exactly that."
          </blockquote>
          <p className="text-blue-100 text-lg">— RGES Innovation Hub Team</p>
        </div>
      </div>
    </section>
  );
};