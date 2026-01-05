import React from 'react';
import { Button } from './ui/button';
import { Sparkles, Send } from 'lucide-react';

export const CTASection = ({ onApply, onPartner }) => {
  return (
    <section id="apply" className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-white text-sm font-medium">Ready to Build Something Amazing?</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Have an idea?
            <br />
            <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
              Let's validate it.
            </span>
          </h2>

          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Join the next generation of successful founders. Apply to RGES Innovation Hub
            and turn your idea into a fundable startup.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button
              onClick={onApply}
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-10 py-7 text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 group"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Apply as Founder
            </Button>
            <Button
              onClick={onPartner}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-10 py-7 text-lg backdrop-blur-sm transition-all transform hover:-translate-y-1 group"
            >
              <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              Partner with Us
            </Button>
          </div>

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <p className="text-blue-100 mb-4">Have questions? We're here to help!</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
              <a
                href="mailto:hello@rgesinnovationhub.com"
                className="hover:text-blue-200 transition-colors"
              >
                hello@rgesinnovationhub.com
              </a>
              <span className="hidden sm:block text-blue-300">|</span>
              <a
                href="tel:+919876543210"
                className="hover:text-blue-200 transition-colors"
              >
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};