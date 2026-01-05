import React from 'react';
import { Building2, Handshake, TrendingUp } from 'lucide-react';

export const PartnersSection = () => {
  const partners = [
    {
      name: 'Leading Investment Firms',
      description: 'Angel investors and early-stage VCs',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400',
    },
    {
      name: 'Corporate Partners',
      description: 'Industry leaders supporting innovation',
      image: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=400',
    },
    {
      name: 'Strategic Advisors',
      description: 'Experienced mentors and consultants',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?w=400',
    },
  ];

  const stats = [
    { icon: Building2, value: '20+', label: 'Partner Organizations' },
    { icon: Handshake, value: '50+', label: 'Active Mentors' },
    { icon: TrendingUp, value: '₹50Cr+', label: 'Network Funding Pool' },
  ];

  return (
    <section id="partners" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Partners & Funding Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Backed by leading investors, corporate partners, and industry experts
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="inline-flex w-16 h-16 bg-blue-50 rounded-xl items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                  <p className="text-blue-100 text-sm">{partner.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Logos Placeholder */}
        <div className="mt-16 bg-white border border-gray-200 rounded-2xl p-12">
          <p className="text-center text-gray-500 mb-8 text-sm uppercase tracking-wider font-semibold">
            Trusted by Leading Organizations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-400 text-sm font-medium">Partner {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};