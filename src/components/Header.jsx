import { Facebook, Linkedin, Twitter, Menu, X, Search, User, ChevronDown, Settings, LogOut, Briefcase, Bell } from 'lucide-react'
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const profileRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm text-white flex items-center gap-2">
            <span className="hidden sm:inline">✨</span>
            <span className="font-semibold">Find the right job for you</span>
          </div>
          <div className="flex space-x-4 items-center">
            <a href="#" className="text-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className={`bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center cursor-pointer group">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                <span className="text-white font-bold text-xl">CP</span>
              </div>
              <h2 className="ml-3 text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Career Portal
              </h2>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex space-x-8 items-center">
              {[
                { label: 'Home', to: '/' },
                { label: 'Build Profile', to: '/build-profile' },
                { label: 'Incoming Requests', to: '/incoming-requests' },
                { label: 'Notifications', to: '/notifications' },
                { label: 'Contact Us', to: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="relative text-sm font-medium text-gray-200 hover:text-cyan-400 transition-colors duration-300 group"
                  >
                    {item.label}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
              
              {/* Expandable Search Bar */}
              <li>
                <div className="relative">
                  <div 
                    className={`flex items-center transition-all duration-300 ease-in-out ${
                      isSearchOpen ? 'w-64' : 'w-10'
                    }`}
                    onMouseEnter={() => setIsSearchOpen(true)}
                    onMouseLeave={() => {
                      if (!searchQuery) setIsSearchOpen(false)
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`w-full bg-gray-600 text-white placeholder-gray-400 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 ${
                        isSearchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                    />
                    <button 
                      onClick={() => setIsSearchOpen(!isSearchOpen)}
                      className={`absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-all duration-300 ${
                        isSearchOpen ? 'bg-transparent' : 'bg-gray-600 rounded-full hover:bg-gray-500'
                      }`}
                    >
                      <Search size={20} />
                    </button>
                  </div>
                </div>
              </li>

              {/* Profile Icon with Dropdown */}
              <li className="relative" ref={profileRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-600 hover:bg-gray-500 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center">
                    <User size={18} className="text-white" />
                  </div>
                  <ChevronDown 
                    size={16} 
                    className={`text-gray-300 group-hover:text-cyan-400 transition-all duration-300 ${
                      isProfileOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 animate-fadeIn">
                    <div className="p-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                          <User size={24} />
                        </div>
                        <div>
                          <p className="font-bold">John Doe</p>
                          <p className="text-sm text-cyan-100">john@example.com</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="py-2">
                      <Link
                        to="/build-profile"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <User size={18} className="text-gray-600" />
                        <span className="text-gray-700 font-medium">My Profile</span>
                      </Link>
                      
                      <Link
                        to="/incoming-requests"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <Briefcase size={18} className="text-gray-600" />
                        <span className="text-gray-700 font-medium">Applications</span>
                      </Link>
                      
                      <Link
                        to="/notifications"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <Bell size={18} className="text-gray-600" />
                        <div className="flex items-center justify-between flex-1">
                          <span className="text-gray-700 font-medium">Notifications</span>
                          <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full">3</span>
                        </div>
                      </Link>
                      
                      <Link
                        to="/settings"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <Settings size={18} className="text-gray-600" />
                        <span className="text-gray-700 font-medium">Settings</span>
                      </Link>
                    </div>

                    <div className="border-t border-gray-200">
                      <button
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors text-red-600"
                        onClick={() => {
                          setIsProfileOpen(false)
                          // Add logout logic here
                        }}
                      >
                        <LogOut size={18} />
                        <span className="font-medium">Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:text-cyan-400 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen ? 'max-h-[500px] mt-4' : 'max-h-0'
            }`}
          >
            {/* Mobile Profile Section */}
            <div className="mb-4 p-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl">
              <div className="flex items-center gap-3 text-white">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <User size={24} />
                </div>
                <div>
                  <p className="font-bold">John Doe</p>
                  <p className="text-sm text-cyan-100">john@example.com</p>
                </div>
              </div>
            </div>

            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search jobs, skills, companies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-600 text-white placeholder-gray-400 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors">
                  <Search size={20} />
                </button>
              </div>
            </div>

            <ul className="flex flex-col space-y-3 pb-4">
              {[
                { label: 'Home', to: '/' },
                { label: 'Build Profile', to: '/build-profile' },
                { label: 'Incoming Requests', to: '/incoming-requests' },
                { label: 'Notifications', to: '/notifications' },
                { label: 'Contact Us', to: '/contact' },
                { label: 'Settings', to: '/settings' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="block text-sm font-medium text-gray-200 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <button className="w-full text-left text-sm font-medium text-red-400 hover:text-red-300 hover:translate-x-2 transition-all duration-300">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </header>
  )
}

export default Header
