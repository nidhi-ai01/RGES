import React from 'react';
import { Button } from './ui/button';
import { Sparkles, TrendingUp } from 'lucide-react';

export const HeroSection = ({ onValidateIdea, onJoinHub }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={
          {
            backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }
        }
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-blue-700/90"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-white text-sm font-medium">Building the Future of Innovation</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Zero to One
            <br />
            <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
              Starts Here
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your idea into a fundable startup with hands-on mentorship,
            validation programs, and a founder-led community
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              onClick={onValidateIdea}
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Validate Your Idea
            </Button>
            <Button
              onClick={onJoinHub}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg backdrop-blur-sm transition-all transform hover:-translate-y-1"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Join the Innovation Hub
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100 text-sm">Startups Supported</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-blue-100 text-sm">Founders Mentored</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="text-4xl font-bold text-white mb-2">₹10Cr+</div>
              <div className="text-blue-100 text-sm">Funding Raised</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-blue-100 text-sm">Expert Mentors</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};