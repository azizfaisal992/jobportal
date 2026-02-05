import React, { useState } from 'react'
import { 
  Bell, 
  Send,
  Paperclip,
  Search,
  Filter,
  Star,
  Archive,
  Trash2,
  ChevronLeft,
  MoreVertical,
  Phone,
  Video,
  Calendar,
  Briefcase,
  Building2,
  Clock,
  CheckCheck,
  Check,
  X,
  Download,
  Eye,
  Reply,
  Forward
} from 'lucide-react'

const NotificationCenter = () => {
  const [selectedConversation, setSelectedConversation] = useState(null)
  const [messageText, setMessageText] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  // Conversations/Threads data
  const [conversations, setConversations] = useState([
    {
      id: 1,
      company: 'TechCorp Inc.',
      companyLogo: '🚀',
      position: 'Senior React Developer',
      lastMessage: 'We would like to schedule your technical interview for next week.',
      timestamp: '2 hours ago',
      unread: true,
      starred: false,
      priority: 'high',
      messages: [
        {
          id: 1,
          sender: 'company',
          senderName: 'Sarah Johnson',
          senderRole: 'HR Manager',
          text: 'Thank you for applying to TechCorp Inc. We have reviewed your application and are impressed with your qualifications.',
          timestamp: '2 days ago',
          read: true
        },
        {
          id: 2,
          sender: 'company',
          senderName: 'Sarah Johnson',
          senderRole: 'HR Manager',
          text: 'We would like to schedule your technical interview for next week. Please let us know your availability for the following slots:\n\n- Monday, Feb 12 at 10:00 AM\n- Tuesday, Feb 13 at 2:00 PM\n- Wednesday, Feb 14 at 11:00 AM',
          timestamp: '2 hours ago',
          read: false,
          attachments: [
            { name: 'Interview_Guidelines.pdf', size: '245 KB', type: 'pdf' }
          ]
        }
      ]
    },
    {
      id: 2,
      company: 'DesignHub',
      companyLogo: '🎨',
      position: 'UX/UI Designer',
      lastMessage: 'Congratulations! We are pleased to offer you the position.',
      timestamp: '5 hours ago',
      unread: true,
      starred: true,
      priority: 'high',
      messages: [
        {
          id: 1,
          sender: 'company',
          senderName: 'Michael Chen',
          senderRole: 'Design Director',
          text: 'Your portfolio impressed our team! We would like to move forward with the next steps.',
          timestamp: '1 day ago',
          read: true
        },
        {
          id: 2,
          sender: 'user',
          text: 'Thank you so much! I am very excited about this opportunity. I look forward to the next steps.',
          timestamp: '1 day ago',
          read: true
        },
        {
          id: 3,
          sender: 'company',
          senderName: 'Michael Chen',
          senderRole: 'Design Director',
          text: 'Congratulations! We are pleased to offer you the position of UX/UI Designer. Please find the attached offer letter with all the details. We would appreciate your response within 7 days.',
          timestamp: '5 hours ago',
          read: false,
          attachments: [
            { name: 'Offer_Letter_UX_Designer.pdf', size: '1.2 MB', type: 'pdf' },
            { name: 'Benefits_Package.pdf', size: '856 KB', type: 'pdf' }
          ]
        }
      ]
    },
    {
      id: 3,
      company: 'StartupXYZ',
      companyLogo: '💼',
      position: 'Product Manager',
      lastMessage: 'Your application has been shortlisted.',
      timestamp: '1 day ago',
      unread: false,
      starred: false,
      priority: 'medium',
      messages: [
        {
          id: 1,
          sender: 'company',
          senderName: 'Emily Davis',
          senderRole: 'Talent Acquisition',
          text: 'Thank you for your interest in the Product Manager position at StartupXYZ. Your application has been shortlisted and is currently under review by our hiring team.',
          timestamp: '1 day ago',
          read: true
        }
      ]
    },
    {
      id: 4,
      company: 'AI Innovations',
      companyLogo: '📊',
      position: 'Data Scientist',
      lastMessage: 'Thank you for interviewing with us.',
      timestamp: '2 days ago',
      unread: false,
      starred: false,
      priority: 'low',
      messages: [
        {
          id: 1,
          sender: 'company',
          senderName: 'Robert Wilson',
          senderRole: 'Data Science Lead',
          text: 'We have an opening for a Data Scientist position and your profile matches our requirements. Would you be interested in discussing this opportunity?',
          timestamp: '1 week ago',
          read: true
        },
        {
          id: 2,
          sender: 'user',
          text: 'Yes, I would be very interested! Please let me know the next steps.',
          timestamp: '6 days ago',
          read: true
        },
        {
          id: 3,
          sender: 'company',
          senderName: 'Robert Wilson',
          senderRole: 'Data Science Lead',
          text: 'Thank you for interviewing with us. We appreciate the time you took to meet with our team. We will be making our final decision within the next week and will keep you updated.',
          timestamp: '2 days ago',
          read: true
        }
      ]
    },
    {
      id: 5,
      company: 'CloudTech Solutions',
      companyLogo: '☁️',
      position: 'DevOps Engineer',
      lastMessage: 'We need additional documents for your application.',
      timestamp: '3 days ago',
      unread: true,
      starred: false,
      priority: 'high',
      messages: [
        {
          id: 1,
          sender: 'company',
          senderName: 'Jennifer Lee',
          senderRole: 'HR Coordinator',
          text: 'We are reviewing your application for the DevOps Engineer position. To proceed further, we need the following documents:\n\n1. Updated resume\n2. Two professional references\n3. Portfolio of recent projects\n\nPlease upload these within 48 hours.',
          timestamp: '3 days ago',
          read: false
        }
      ]
    }
  ])

  const handleSendMessage = () => {
    if (!messageText.trim() || !selectedConversation) return

    const newMessage = {
      id: Date.now(),
      sender: 'user',
      text: messageText,
      timestamp: 'Just now',
      read: true
    }

    setConversations(conversations.map(conv => {
      if (conv.id === selectedConversation.id) {
        return {
          ...conv,
          messages: [...conv.messages, newMessage],
          lastMessage: messageText,
          timestamp: 'Just now'
        }
      }
      return conv
    }))

    setMessageText('')
    
    // Update selected conversation
    setSelectedConversation({
      ...selectedConversation,
      messages: [...selectedConversation.messages, newMessage]
    })
  }

  const markAsRead = (conversationId) => {
    setConversations(conversations.map(conv => {
      if (conv.id === conversationId) {
        return {
          ...conv,
          unread: false,
          messages: conv.messages.map(msg => ({ ...msg, read: true }))
        }
      }
      return conv
    }))
  }

  const toggleStar = (conversationId) => {
    setConversations(conversations.map(conv => {
      if (conv.id === conversationId) {
        return { ...conv, starred: !conv.starred }
      }
      return conv
    }))
  }

  const deleteConversation = (conversationId) => {
    setConversations(conversations.filter(conv => conv.id !== conversationId))
    if (selectedConversation?.id === conversationId) {
      setSelectedConversation(null)
    }
  }

  const filteredConversations = conversations.filter(conv => {
    const matchesSearch = conv.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         conv.position.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterStatus === 'all' ||
                         (filterStatus === 'unread' && conv.unread) ||
                         (filterStatus === 'starred' && conv.starred)
    return matchesSearch && matchesFilter
  })

  const stats = {
    total: conversations.length,
    unread: conversations.filter(c => c.unread).length,
    starred: conversations.filter(c => c.starred).length
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                <Bell size={24} />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Notification Center</h1>
                <p className="text-cyan-100">Messages from companies</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">{stats.unread}</div>
                <div className="text-sm text-cyan-100">Unread</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{stats.starred}</div>
                <div className="text-sm text-cyan-100">Starred</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          
          {/* Left Sidebar - Conversations List */}
          <div className="lg:col-span-1 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
            
            {/* Search and Filters */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setFilterStatus('all')}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    filterStatus === 'all' ? 'bg-cyan-500 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilterStatus('unread')}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    filterStatus === 'unread' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  Unread
                </button>
                <button
                  onClick={() => setFilterStatus('starred')}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    filterStatus === 'starred' ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  Starred
                </button>
              </div>
            </div>

            {/* Conversations List */}
            <div className="flex-1 overflow-y-auto">
              {filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => {
                    setSelectedConversation(conversation)
                    markAsRead(conversation.id)
                  }}
                  className={`p-4 border-b border-gray-200 cursor-pointer transition-all hover:bg-gray-50 ${
                    selectedConversation?.id === conversation.id ? 'bg-cyan-50 border-l-4 border-cyan-500' : ''
                  } ${conversation.unread ? 'bg-blue-50' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center text-2xl flex-shrink-0">
                      {conversation.companyLogo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`font-bold text-gray-800 truncate ${conversation.unread ? 'font-extrabold' : ''}`}>
                          {conversation.company}
                        </h3>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          {conversation.unread && (
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleStar(conversation.id)
                            }}
                            className="p-1 hover:bg-gray-200 rounded"
                          >
                            <Star 
                              size={16} 
                              className={conversation.starred ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}
                            />
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-1 truncate">{conversation.position}</p>
                      <p className={`text-sm text-gray-500 truncate ${conversation.unread ? 'font-semibold text-gray-700' : ''}`}>
                        {conversation.lastMessage}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{conversation.timestamp}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Conversation View */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
            
            {selectedConversation ? (
              <>
                {/* Conversation Header */}
                <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSelectedConversation(null)}
                        className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center text-2xl">
                        {selectedConversation.companyLogo}
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-800">{selectedConversation.company}</h2>
                        <p className="text-sm text-gray-600">{selectedConversation.position}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-all" title="Schedule Call">
                        <Phone size={20} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-all" title="Video Call">
                        <Video size={20} className="text-gray-600" />
                      </button>
                      <button
                        onClick={() => deleteConversation(selectedConversation.id)}
                        className="p-2 hover:bg-red-100 rounded-lg transition-all"
                        title="Delete Conversation"
                      >
                        <Trash2 size={20} className="text-red-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-all" title="More Options">
                        <MoreVertical size={20} className="text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                  {selectedConversation.messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[70%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                        {message.sender === 'company' && (
                          <div className="mb-1">
                            <span className="text-sm font-semibold text-gray-700">{message.senderName}</span>
                            <span className="text-xs text-gray-500 ml-2">{message.senderRole}</span>
                          </div>
                        )}
                        <div
                          className={`rounded-2xl p-4 ${
                            message.sender === 'user'
                              ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white'
                              : 'bg-white shadow-md'
                          }`}
                        >
                          <p className="whitespace-pre-wrap text-sm leading-relaxed">{message.text}</p>
                          
                          {message.attachments && (
                            <div className="mt-3 space-y-2">
                              {message.attachments.map((attachment, idx) => (
                                <div
                                  key={idx}
                                  className={`flex items-center gap-2 p-2 rounded-lg ${
                                    message.sender === 'user' ? 'bg-white bg-opacity-20' : 'bg-gray-50'
                                  }`}
                                >
                                  <Paperclip size={16} />
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium truncate">{attachment.name}</p>
                                    <p className="text-xs opacity-75">{attachment.size}</p>
                                  </div>
                                  <button className="p-1 hover:bg-gray-200 rounded">
                                    <Download size={16} />
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                          <span>{message.timestamp}</span>
                          {message.sender === 'user' && (
                            <span className="flex items-center">
                              {message.read ? <CheckCheck size={14} className="text-cyan-500" /> : <Check size={14} />}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input Area */}
                <div className="p-4 border-t border-gray-200 bg-white">
                  <div className="flex items-end gap-3">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
                      <Paperclip size={20} className="text-gray-600" />
                    </button>
                    <div className="flex-1 relative">
                      <textarea
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault()
                            handleSendMessage()
                          }
                        }}
                        placeholder="Type your message..."
                        rows="3"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                      />
                    </div>
                    <button
                      onClick={handleSendMessage}
                      disabled={!messageText.trim()}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                        messageText.trim()
                          ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:shadow-lg'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <Send size={20} />
                      Send
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Press Enter to send, Shift + Enter for new line</p>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
                    <Bell size={48} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Select a Conversation</h3>
                  <p className="text-gray-600">Choose a company from the list to view messages and reply</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationCenter
