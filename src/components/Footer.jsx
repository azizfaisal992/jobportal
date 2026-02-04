import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import React from 'react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CP</span>
              </div>
              <h3 className="ml-3 text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Career Portal
              </h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Connecting talented professionals with their dream careers. Find your perfect job match today.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-500 transition-all duration-300 transform hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-500 transition-all duration-300 transform hover:scale-110">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-500 transition-all duration-300 transform hover:scale-110">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400"></span>
            </h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Job Search', 'Companies', 'Blog', 'Career Advice'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 relative inline-block">
              For Employers
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400"></span>
            </h4>
            <ul className="space-y-2">
              {['Post a Job', 'Browse Candidates', 'Pricing Plans', 'Employer Resources', 'Success Stories'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400"></span>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-sm">Level-4, 34, Awal Centre, Banani, Dhaka</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-cyan-400 flex-shrink-0" />
                <span className="text-sm">+8 (801) 723-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-cyan-400 flex-shrink-0" />
                <span className="text-sm">info@careerportal.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2026 Career Portal. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Cookie Policy</a>
            </div>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-500 transition-all duration-300 transform hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer