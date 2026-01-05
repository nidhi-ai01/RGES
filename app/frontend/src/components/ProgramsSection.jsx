import React from 'react';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export const ProgramsSection = ({ onApply }) => {
  const programs = [
    {
      name: 'Spring Cohort 2025',
      type: 'Full-Time Accelerator',
      duration: '12 Weeks',
      startDate: 'April 2025',
      deadline: 'March 15, 2025',
      status: 'Open',
      participants: '15-20 Startups',
      description: 'Intensive 12-week program for early-stage startups ready to build and launch their MVP',
      highlights: ['Weekly mentorship', '₹5L funding opportunity', 'Demo day pitch', 'Office space access'],
    },
    {
      name: 'Idea Validation Workshop',
      type: 'Weekend Program',
      duration: '3 Days',
      startDate: 'February 2025',
      deadline: 'January 31, 2025',
      status: 'Open',
      participants: '30-40 Participants',
      description: 'Fast-paced workshop to validate your startup idea and learn customer discovery techniques',
      highlights: ['Customer interviews', 'Market sizing', 'Business model canvas', 'Pitch practice'],
    },
    {
      name: 'Summer Innovation Camp',
      type: 'Student Program',
      duration: '8 Weeks',
      startDate: 'June 2025',
      deadline: 'May 15, 2025',
      status: 'Upcoming',
      participants: '20-25 Students',
      description: 'Designed for student founders to build their startups during summer break',
      highlights: ['Stipend support', 'Peer learning', 'Founder sessions', 'Prototype development'],
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Upcoming':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Closed':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Programs & Cohorts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the program that fits your stage and commitment level
          </p>
        </div>

        <div className="space-y-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="lg:flex">
                {/* Left Side - Main Info */}
                <div className="lg:w-2/3 p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{program.name}</h3>
                    <span
                      className={`px-4 py-1 rounded-full text-sm font-semibold border ${
                        getStatusColor(program.status)
                      }`}
                    >
                      {program.status}
                    </span>
                  </div>
                  <p className="text-lg text-blue-600 font-semibold mb-4">{program.type}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    {program.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {program.status === 'Open' && (
                    <Button
                      onClick={onApply}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>

                {/* Right Side - Details */}
                <div className="lg:w-1/3 bg-gray-50 p-8 border-t lg:border-t-0 lg:border-l border-gray-200">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center space-x-2 text-gray-500 mb-2">
                        <Clock className="w-5 h-5" />
                        <span className="text-sm font-medium">Duration</span>
                      </div>
                      <p className="text-gray-900 font-semibold text-lg">{program.duration}</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 text-gray-500 mb-2">
                        <Calendar className="w-5 h-5" />
                        <span className="text-sm font-medium">Start Date</span>
                      </div>
                      <p className="text-gray-900 font-semibold text-lg">{program.startDate}</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 text-gray-500 mb-2">
                        <Calendar className="w-5 h-5" />
                        <span className="text-sm font-medium">Application Deadline</span>
                      </div>
                      <p className="text-gray-900 font-semibold text-lg">{program.deadline}</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 text-gray-500 mb-2">
                        <Users className="w-5 h-5" />
                        <span className="text-sm font-medium">Participants</span>
                      </div>
                      <p className="text-gray-900 font-semibold text-lg">{program.participants}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};