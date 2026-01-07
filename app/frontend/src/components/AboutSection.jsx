import React from 'react';
import { Target, Users, Rocket, Award } from 'lucide-react';

export const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: 'Idea to Impact',
      description: 'We help you validate and execute your ideas with practical, execution-driven support',
    },
    {
      icon: Users,
      title: 'Founder-Led Philosophy',
      description: 'Built by founders, run for founders. We understand the zero-to-one journey',
    },
    {
      icon: Rocket,
      title: 'Zero-to-One Mindset',
      description: 'Focus on early ideation and execution, not late-stage scaling',
    },
    {
      icon: Award,
      title: 'Funding Ready',
      description: 'Become investment-ready through mentorship, validation, and strategic guidance',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About RGES Innovation Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            RGES embodies four pillars vital to startup success:

Risk: Identifies vulnerabilities in cloud, AI, and digital infrastructure before breaches occur.

Guard: Deploys proactive defenses through VAPT, OSINT, and compliance audits.
​

Enterprise: Delivers scalable solutions from seed stage to unicorn, bridging MSMEs to global standards.

Solutions: Provides end-to-end services—assessments, training, forensics, and incubation support.

          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We exist to help founders move from idea to impact. Through practical mentorship,
            market validation, and a community-first approach, we empower first-time entrepreneurs
            to build fundable startups and become the next generation of successful founders.
          </p>
        </div>
      </div>
    </section>
  );
};
