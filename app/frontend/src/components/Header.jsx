import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img
              src="https://customer-assets.emergentagent.com/job_325e1cc3-3ef8-4c7b-b9ae-17669d75fe68/artifacts/7b4uzede_rgeslogo.svg"
              alt="rges-logo.jpg"
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">RGES Innovation Hub</h1>
              <p className="text-xs text-gray-600">Zero to One Starts Here</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('journey')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Journey
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection('partners')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Partners
            </button>
            <Button
              onClick={() => scrollToSection('apply')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Apply Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-gray-200">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('journey')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Journey
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection('partners')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Partners
            </button>
            <Button
              onClick={() => scrollToSection('apply')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Apply Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
