import React, { useState } from 'react'
import { 
  Briefcase, 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle, 
  XCircle, 
  Mail, 
  Phone,
  Video,
  FileText,
  AlertCircle,
  Filter,
  Search,
  Download,
  Eye,
  MessageSquare
} from 'lucide-react'

const IncomingRequests = () => {
  const [filterStatus, setFilterStatus] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Sample data for incoming requests
  const requests = [
    {
      id: 1,
      company: 'TechCorp Inc.',
      companyLogo: '🚀',
      position: 'Senior React Developer',
      type: 'Interview Invitation',
      status: 'pending',
      date: '2024-02-10',
      time: '10:00 AM',
      mode: 'Video Call',
      location: 'Online - Zoom',
      message: 'We were impressed with your application and would like to invite you for a technical interview. Please confirm your availability.',
      salary: '$120k - $180k',
      interviewRound: '1st Round - Technical',
      contact: {
        name: 'Sarah Johnson',
        email: 'sarah@techcorp.com',
        phone: '+1 (555) 123-4567'
      }
    },
    {
      id: 2,
      company: 'DesignHub',
      companyLogo: '🎨',
      position: 'UX/UI Designer',
      type: 'Offer Letter',
      status: 'accepted',
      date: '2024-02-08',
      message: 'Congratulations! We are pleased to offer you the position of UX/UI Designer. Please review the attached offer letter.',
      salary: '$90k - $130k',
      joiningDate: '2024-03-01',
      contact: {
        name: 'Michael Chen',
        email: 'michael@designhub.com',
        phone: '+1 (555) 234-5678'
      }
    },
    {
      id: 3,
      company: 'StartupXYZ',
      companyLogo: '💼',
      position: 'Product Manager',
      type: 'Application Shortlisted',
      status: 'pending',
      date: '2024-02-09',
      message: 'Your application has been shortlisted. Our HR team will contact you within 2-3 business days to schedule an interview.',
      salary: '$140k - $200k',
      contact: {
        name: 'Emily Davis',
        email: 'emily@startupxyz.com',
        phone: '+1 (555) 345-6789'
      }
    },
    {
      id: 4,
      company: 'AI Innovations',
      companyLogo: '📊',
      position: 'Data Scientist',
      type: 'Interview Invitation',
      status: 'rejected',
      date: '2024-02-07',
      time: '2:00 PM',
      mode: 'In-Person',
      location: 'Boston Office, MA',
      message: 'Thank you for your interest. Unfortunately, we have decided to move forward with other candidates at this time.',
      salary: '$130k - $190k',
      contact: {
        name: 'Robert Wilson',
        email: 'robert@aiinnovations.com',
        phone: '+1 (555) 456-7890'
      }
    },
    {
      id: 5,
      company: 'CloudTech Solutions',
      companyLogo: '☁️',
      position: 'DevOps Engineer',
      type: 'Follow-up Required',
      status: 'pending',
      date: '2024-02-11',
      message: 'We need additional information regarding your previous work experience. Please submit references and project portfolio.',
      salary: '$110k - $160k',
      contact: {
        name: 'Jennifer Lee',
        email: 'jennifer@cloudtech.com',
        phone: '+1 (555) 567-8901'
      }
    },
    {
      id: 6,
      company: 'FinanceHub',
      companyLogo: '💰',
      position: 'Full Stack Developer',
      type: 'Interview Invitation',
      status: 'pending',
      date: '2024-02-12',
      time: '11:30 AM',
      mode: 'Phone Call',
      location: 'Phone Interview',
      message: 'We would like to conduct an initial phone screening to discuss your background and the role in more detail.',
      salary: '$100k - $150k',
      interviewRound: 'Initial Screening',
      contact: {
        name: 'David Brown',
        email: 'david@financehub.com',
        phone: '+1 (555) 678-9012'
      }
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-300'
      case 'accepted': return 'bg-green-100 text-green-700 border-green-300'
      case 'rejected': return 'bg-red-100 text-red-700 border-red-300'
      default: return 'bg-gray-100 text-gray-700 border-gray-300'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <AlertCircle size={18} />
      case 'accepted': return <CheckCircle size={18} />
      case 'rejected': return <XCircle size={18} />
      default: return <AlertCircle size={18} />
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case 'Interview Invitation': return 'from-blue-500 to-cyan-500'
      case 'Offer Letter': return 'from-green-500 to-emerald-500'
      case 'Application Shortlisted': return 'from-purple-500 to-pink-500'
      case 'Follow-up Required': return 'from-orange-500 to-red-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const filteredRequests = requests.filter(request => {
    const matchesStatus = filterStatus === 'all' || request.status === filterStatus
    const matchesSearch = request.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         request.position.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesStatus && matchesSearch
  })

  const stats = {
    total: requests.length,
    pending: requests.filter(r => r.status === 'pending').length,
    accepted: requests.filter(r => r.status === 'accepted').length,
    rejected: requests.filter(r => r.status === 'rejected').length
  }

  return (
    <div className="min-h-screen bg-gradient-to-br mt-26 from-gray-50 to-gray-100 py-8">
      
      {/* Header */}
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent pb-2">
            Incoming Requests
          </h1>
          <p className="text-gray-600 ">Track all your job application responses and interview invitations</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all">
            <div className="text-3xl font-bold text-gray-800">{stats.total}</div>
            <div className="text-sm text-gray-600 mt-1">Total Requests</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all">
            <div className="text-3xl font-bold text-yellow-600">{stats.pending}</div>
            <div className="text-sm text-gray-600 mt-1">Pending</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all">
            <div className="text-3xl font-bold text-green-600">{stats.accepted}</div>
            <div className="text-sm text-gray-600 mt-1">Accepted</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all">
            <div className="text-3xl font-bold text-red-600">{stats.rejected}</div>
            <div className="text-sm text-gray-600 mt-1">Rejected</div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by company or position..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* Filter */}
            <div className="flex gap-2">
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                  filterStatus === 'all' 
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterStatus('pending')}
                className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                  filterStatus === 'pending' 
                    ? 'bg-yellow-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setFilterStatus('accepted')}
                className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                  filterStatus === 'accepted' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Accepted
              </button>
              <button
                onClick={() => setFilterStatus('rejected')}
                className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                  filterStatus === 'rejected' 
                    ? 'bg-red-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Rejected
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Requests List */}
      <div className="container mx-auto px-4">
        <div className="space-y-6">
          {filteredRequests.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <div className="text-6xl mb-4">📭</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No Requests Found</h3>
              <p className="text-gray-600">Try adjusting your filters or search query</p>
            </div>
          ) : (
            filteredRequests.map((request) => (
              <div key={request.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${getTypeColor(request.type)} p-4`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl">
                        {request.companyLogo}
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">{request.company}</h3>
                        <p className="text-white text-sm opacity-90">{request.type}</p>
                      </div>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold border-2 flex items-center gap-2 ${getStatusColor(request.status)}`}>
                      {getStatusIcon(request.status)}
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Left Column */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-800 mb-2">{request.position}</h4>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Briefcase size={18} className="mr-2" />
                          <span>{request.salary}</span>
                        </div>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Calendar size={18} className="mr-2" />
                          <span>Received: {new Date(request.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        {request.time && (
                          <div className="flex items-center text-gray-600 mb-2">
                            <Clock size={18} className="mr-2" />
                            <span>{request.time}</span>
                          </div>
                        )}
                        {request.mode && (
                          <div className="flex items-center text-gray-600 mb-2">
                            {request.mode === 'Video Call' ? <Video size={18} className="mr-2" /> : 
                             request.mode === 'Phone Call' ? <Phone size={18} className="mr-2" /> : 
                             <MapPin size={18} className="mr-2" />}
                            <span>{request.location}</span>
                          </div>
                        )}
                        {request.interviewRound && (
                          <div className="mt-2">
                            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded-full">
                              {request.interviewRound}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <MessageSquare size={18} />
                          Message
                        </h5>
                        <p className="text-gray-600 text-sm leading-relaxed">{request.message}</p>
                      </div>
                    </div>

                    {/* Right Column - Contact Info */}
                    <div className="space-y-4">
                      <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-xl border-2 border-cyan-200">
                        <h5 className="font-semibold text-gray-800 mb-4">Contact Person</h5>
                        <div className="space-y-3">
                          <div className="flex items-center text-gray-700">
                            <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white text-sm">👤</span>
                            </div>
                            <span className="font-medium">{request.contact.name}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Mail size={16} className="mr-3 ml-1" />
                            <a href={`mailto:${request.contact.email}`} className="hover:text-cyan-500">
                              {request.contact.email}
                            </a>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Phone size={16} className="mr-3 ml-1" />
                            <a href={`tel:${request.contact.phone}`} className="hover:text-cyan-500">
                              {request.contact.phone}
                            </a>
                          </div>
                        </div>
                      </div>

                      {request.joiningDate && (
                        <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
                          <h5 className="font-semibold text-gray-800 mb-2">Joining Date</h5>
                          <p className="text-green-700 font-medium">
                            {new Date(request.joiningDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                    {request.status === 'pending' && request.type === 'Interview Invitation' && (
                      <>
                        <button className="flex-1 md:flex-none px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2">
                          <CheckCircle size={18} />
                          Accept Interview
                        </button>
                        <button className="flex-1 md:flex-none px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2">
                          <XCircle size={18} />
                          Decline
                        </button>
                      </>
                    )}
                    {request.type === 'Offer Letter' && (
                      <button className="flex-1 md:flex-none px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2">
                        <Download size={18} />
                        Download Offer Letter
                      </button>
                    )}
                    <button className="flex-1 md:flex-none px-6 py-3 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-50 transition-all flex items-center justify-center gap-2">
                      <Eye size={18} />
                      View Details
                    </button>
                    <button className="flex-1 md:flex-none px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                      <Mail size={18} />
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default IncomingRequests
