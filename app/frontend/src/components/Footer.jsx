import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://customer-assets.emergentagent.com/job_325e1cc3-3ef8-4c7b-b9ae-17669d75fe68/artifacts/7b4uzede_rgeslogo.svg"
                alt="RGES Logo"
                className="h-10 w-auto brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-bold text-white">RGES Innovation Hub</h3>
                <p className="text-sm text-gray-400">Zero to One Starts Here</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              A founder-led innovation ecosystem supporting first-time entrepreneurs,
              student founders, and early-stage teams in their journey from idea to funding.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('journey')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Journey Model
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('programs')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('partners')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Partners
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <a
                  href="mailto:hello@rgesinnovationhub.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  hello@rgesinnovationhub.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-blue-400 transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>RGES Campus, Innovation District, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} RGES Innovation Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};