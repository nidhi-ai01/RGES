import React from 'react';
import { Lightbulb, Search, Users, Rocket, TrendingUp, ArrowRight } from 'lucide-react';

export const JourneySection = () => {
  const journeySteps = [
    {
      icon: Lightbulb,
      title: 'Idea Discovery',
      description: 'Identify problems worth solving and validate market opportunities',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Search,
      title: 'Market Validation',
      description: 'Test your assumptions, understand your customers, and refine your value proposition',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Users,
      title: 'Mentorship & Strategy',
      description: 'Get guidance from experienced founders and build your go-to-market strategy',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Rocket,
      title: 'MVP & Early Traction',
      description: 'Build your minimum viable product and acquire your first customers',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: TrendingUp,
      title: 'Funding & Growth',
      description: 'Become investment-ready and secure funding to scale your startup',
      color: 'from-pink-400 to-red-500',
    },
  ];

  return (
    <section id="journey" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Your Zero-to-One Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured path from idea to fundable startup, designed for first-time founders
          </p>
        </div>

        <div className="relative">
          {/* Journey Timeline */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-green-200"></div>

          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="relative mb-16 last:mb-0">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                  {/* Content */}
                  <div
                    className={`${
                      isEven ? 'lg:text-right lg:pr-16' : 'lg:col-start-2 lg:pl-16'
                    } mb-8 lg:mb-0`}
                  >
                    <div className="inline-block lg:inline">
                      <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div
                          className={`inline-flex w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl items-center justify-center mb-4`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {index + 1}. {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                    <div className="w-8 h-8 bg-white border-4 border-blue-500 rounded-full shadow-lg"></div>
                  </div>
                </div>

                {/* Arrow for mobile */}
                {index < journeySteps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-8">
                    <ArrowRight className="w-6 h-6 text-gray-400 transform rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};