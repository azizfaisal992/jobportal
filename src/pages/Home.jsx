import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Briefcase, TrendingUp, Users, MapPin, Clock, ArrowRight, Star, CheckCircle, Building2, Code, Palette, BarChart3, Stethoscope, Wrench, CheckCircle2 } from 'lucide-react'


const Home = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const categories = [
    { icon: <Code size={24} />, name: 'Technology', jobs: '2,340', color: 'from-blue-500 to-cyan-500' },
    { icon: <Palette size={24} />, name: 'Design', jobs: '856', color: 'from-purple-500 to-pink-500' },
    { icon: <BarChart3 size={24} />, name: 'Marketing', jobs: '1,234', color: 'from-orange-500 to-red-500' },
    { icon: <Stethoscope size={24} />, name: 'Healthcare', jobs: '987', color: 'from-green-500 to-emerald-500' },
    { icon: <Building2 size={24} />, name: 'Business', jobs: '1,567', color: 'from-indigo-500 to-blue-500' },
    { icon: <Wrench size={24} />, name: 'Engineering', jobs: '1,098', color: 'from-yellow-500 to-orange-500' },
  ]

  const featuredJobs = [
    { 
      title: 'Senior React Developer', 
      company: 'TechCorp Inc.', 
      location: 'San Francisco, CA', 
      type: 'Full-time',
      salary: '$120k - $180k',
      posted: '2 days ago',
      logo: '🚀'
    },
    { 
      title: 'UX/UI Designer', 
      company: 'DesignHub', 
      location: 'Remote', 
      type: 'Contract',
      salary: '$90k - $130k',
      posted: '1 week ago',
      logo: '🎨'
    },
    { 
      title: 'Product Manager', 
      company: 'StartupXYZ', 
      location: 'New York, NY', 
      type: 'Full-time',
      salary: '$140k - $200k',
      posted: '3 days ago',
      logo: '💼'
    },
    { 
      title: 'Data Scientist', 
      company: 'AI Innovations', 
      location: 'Boston, MA', 
      type: 'Full-time',
      salary: '$130k - $190k',
      posted: '5 days ago',
      logo: '📊'
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      company: 'Google',
      text: 'Career Portal helped me land my dream job in just 3 weeks! The platform is intuitive and the job matches were spot on.',
      avatar: '👩‍💻'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'Nike',
      text: 'The best job platform I\'ve used. The personalized recommendations saved me hours of searching.',
      avatar: '👨‍💼'
    },
    {
      name: 'Emma Davis',
      role: 'Product Designer',
      company: 'Airbnb',
      text: 'Finally, a job portal that understands what I\'m looking for. The interface is beautiful and easy to use.',
      avatar: '👩‍🎨'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-16">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          ></div>
          <div 
            className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          ></div>
          <div 
            className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"
            style={{ transform: `translateY(${scrollY * 0.4}px)` }}
          ></div>
        </div>

        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full text-sm font-semibold">
                🎯 Over 10,000+ Jobs Available
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Find Your <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Dream Career</span> Today
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Connect with top companies and discover opportunities that match your skills, passion, and ambitions.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-3xl mx-auto">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative md:col-span-2">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="Job title, keywords, or company"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-800"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="Location"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-800"
                  />
                </div>
              </div>
              <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Search Jobs
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">10K+</div>
                <div className="text-gray-400 text-sm mt-1">Active Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">5K+</div>
                <div className="text-gray-400 text-sm mt-1">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">50K+</div>
                <div className="text-gray-400 text-sm mt-1">Happy Users</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Browse by Category</h2>
            <p className="text-gray-600">Explore opportunities in your field of expertise</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div 
                key={index}
                onMouseEnter={() => setActiveCategory(index)}
                className={`group cursor-pointer bg-gradient-to-br ${category.color} p-6 rounded-2xl shadow-lg transform transition-all duration-300 ${
                  activeCategory === index 
                    ? 'hover:shadow-2xl -translate-y-3 ring-2 ring-white' 
                    : 'hover:shadow-2xl hover:-translate-y-2'
                }`}
              >
                <div className="text-white mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{category.name}</h3>
                <p className="text-white text-sm opacity-90">{category.jobs} jobs</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-2">Featured Jobs</h2>
              <p className="text-gray-600">Hand-picked opportunities from top companies</p>
            </div>
            <button className="hidden md:flex items-center gap-2 px-6 py-3 border-2 border-cyan-500 text-cyan-500 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
              View All Jobs <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredJobs.map((job, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-xl flex items-center justify-center text-2xl">
                      {job.logo}
                    </div>
                    <span className="px-3 py-1 bg-cyan-50 text-cyan-600 text-xs font-semibold rounded-full">
                      {job.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-cyan-500 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 font-semibold mb-4">{job.company}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin size={16} className="mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Briefcase size={16} className="mr-2" />
                      {job.salary}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock size={16} className="mr-2" />
                      {job.posted}
                    </div>
                  </div>

                  <button className="w-full py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-cyan-500 to-teal-500 text-white">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Why Choose Career Portal?</h2>
                  <p className="text-cyan-100 text-lg">Join thousands of professionals who found their perfect job</p>
                </div>
      
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  <div className="text-center p-8 bg-white rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Verified Companies</h3>
                    <p className="text-gray-600">All employers are verified to ensure legitimate opportunities</p>
                  </div>
      
                  <div className="text-center p-8 bg-white rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Career Growth</h3>
                    <p className="text-gray-600">Tools and resources to accelerate your career development</p>
                  </div>
      
                  <div className="text-center p-8 bg-white rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Community Support</h3>
                    <p className="text-gray-600">Join a thriving community of professionals and mentors</p>
                  </div>
                </div>
              </div>
            </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <p className="text-gray-600">See what our users have to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join Career Portal today and take the first step towards your dream career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/build-profile" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center">
              Get Started Free
            </Link>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-800 transition-all duration-300">
              For Employers
            </button>
          </div>
        </div>
      </section>



    </div>
  )
}

export default Home
