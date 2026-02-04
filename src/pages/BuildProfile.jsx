import React, { useState } from 'react'
import { Upload, Calendar, MapPin, Plus, Trash2, Save, FileText, User, Mail, Phone, GraduationCap, Briefcase, Award } from 'lucide-react'

const BuildProfile = () => {
  const [profileImage, setProfileImage] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    city: '',
    address: '',
    dateOfBirth: '',
    gender: 'Male',
    educations: [
      { certification: '', board: '', passingYear: '', gpa: '' }
    ],
    skills: ['', '', ''],
    preferredLocations: {
      dhaka: false,
      homeTown: false,
      anyWhere: false
    },
    reference1: { name: '', details: '' },
    reference2: { name: '', details: '' },
    password: ''
  })

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const addEducation = () => {
    setFormData({
      ...formData,
      educations: [...formData.educations, { certification: '', board: '', passingYear: '', gpa: '' }]
    })
  }

  const removeEducation = (index) => {
    const newEducations = formData.educations.filter((_, i) => i !== index)
    setFormData({ ...formData, educations: newEducations })
  }

  const updateEducation = (index, field, value) => {
    const newEducations = [...formData.educations]
    newEducations[index][field] = value
    setFormData({ ...formData, educations: newEducations })
  }

  const updateSkill = (index, value) => {
    const newSkills = [...formData.skills]
    newSkills[index] = value
    setFormData({ ...formData, skills: newSkills })
  }

  const handleSubmit = (e, saveType) => {
    e.preventDefault()
    console.log('Form submitted as:', saveType, formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 mt-26 to-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent mb-2">
            Build Your Profile
          </h1>
          <p className="text-gray-600">Complete your profile to stand out to employers</p>
        </div>

        <form className="space-y-6">
          
          {/* Personal Information Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-gradient-to-r from-cyan-400 to-teal-400">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center">
                <User className="text-white" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Profile Image Upload */}
              <div className="md:col-span-3 flex justify-center mb-4">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center overflow-hidden border-4 border-white shadow-xl">
                    {profileImage ? (
                      <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <User size={48} className="text-white" />
                    )}
                  </div>
                  <label className="absolute bottom-0 right-0 w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-cyan-600 transition-all shadow-lg">
                    <Upload size={20} className="text-white" />
                    <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                  </label>
                </div>
              </div>

              {/* Name */}
              <div className="md:col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div className="md:col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Contact No */}
              <div className="md:col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Contact No *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="tel"
                    value={formData.contactNo}
                    onChange={(e) => setFormData({ ...formData, contactNo: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                    placeholder="+880 1234567890"
                  />
                </div>
              </div>

              {/* City */}
              <div className="md:col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                >
                  <option value="">Select City</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Rajshahi">Rajshahi</option>
                </select>
              </div>

              {/* Date of Birth */}
              <div className="md:col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth *</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  />
                </div>
              </div>

              {/* Gender */}
              <div className="md:col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Gender *</label>
                <div className="flex gap-6 pt-3">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === 'Male'}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-5 h-5 text-cyan-500 focus:ring-cyan-400"
                    />
                    <span className="ml-2 text-gray-700">Male</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === 'Female'}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-5 h-5 text-cyan-500 focus:ring-cyan-400"
                    />
                    <span className="ml-2 text-gray-700">Female</span>
                  </label>
                </div>
              </div>

              {/* Address */}
              <div className="md:col-span-3">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Address *</label>
                <textarea
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  rows="3"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  placeholder="Enter your address here"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Educational Qualification Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Educational Qualification</h2>
              </div>
              <button
                type="button"
                onClick={addEducation}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg hover:shadow-lg transition-all"
              >
                <Plus size={20} /> Add More
              </button>
            </div>

            <div className="space-y-6">
              {formData.educations.map((edu, index) => (
                <div key={index} className="relative p-6 bg-gray-50 rounded-xl border-2 border-gray-200">
                  {formData.educations.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeEducation(index)}
                      className="absolute top-4 right-4 text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  )}
                  
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Certification</label>
                      <input
                        type="text"
                        value={edu.certification}
                        onChange={(e) => updateEducation(index, 'certification', e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        placeholder="B.Sc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Board/Institution</label>
                      <input
                        type="text"
                        value={edu.board}
                        onChange={(e) => updateEducation(index, 'board', e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        placeholder="UIU"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Passing Year</label>
                      <input
                        type="text"
                        value={edu.passingYear}
                        onChange={(e) => updateEducation(index, 'passingYear', e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        placeholder="2018"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">GPA</label>
                      <input
                        type="text"
                        value={edu.gpa}
                        onChange={(e) => updateEducation(index, 'gpa', e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        placeholder="4.00"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center">
                <Award className="text-white" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
            </div>

            <div className="space-y-3">
              {formData.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-gray-600 font-semibold w-6">{index + 1}.</span>
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => updateSkill(index, e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                    placeholder={`Skill ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Preferred Job Location Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center">
                <MapPin className="text-white" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Preferred Job Location</h2>
            </div>

            <div className="flex flex-wrap gap-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.preferredLocations.dhaka}
                  onChange={(e) => setFormData({
                    ...formData,
                    preferredLocations: { ...formData.preferredLocations, dhaka: e.target.checked }
                  })}
                  className="w-5 h-5 text-cyan-500 rounded focus:ring-cyan-400"
                />
                <span className="ml-2 text-gray-700 font-medium">Dhaka</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.preferredLocations.homeTown}
                  onChange={(e) => setFormData({
                    ...formData,
                    preferredLocations: { ...formData.preferredLocations, homeTown: e.target.checked }
                  })}
                  className="w-5 h-5 text-cyan-500 rounded focus:ring-cyan-400"
                />
                <span className="ml-2 text-gray-700 font-medium">Home Town</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.preferredLocations.anyWhere}
                  onChange={(e) => setFormData({
                    ...formData,
                    preferredLocations: { ...formData.preferredLocations, anyWhere: e.target.checked }
                  })}
                  className="w-5 h-5 text-cyan-500 rounded focus:ring-cyan-400"
                />
                <span className="ml-2 text-gray-700 font-medium">AnyWhere</span>
              </label>
            </div>
          </div>

          {/* References Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center">
                <Briefcase className="text-white" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">References</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Reference 1 */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-700 text-lg">Reference 1</h3>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.reference1.name}
                    onChange={(e) => setFormData({
                      ...formData,
                      reference1: { ...formData.reference1, name: e.target.value }
                    })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Reference name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Details</label>
                  <textarea
                    value={formData.reference1.details}
                    onChange={(e) => setFormData({
                      ...formData,
                      reference1: { ...formData.reference1, details: e.target.value }
                    })}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Contact details, relationship, etc."
                  ></textarea>
                </div>
              </div>

              {/* Reference 2 */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-700 text-lg">Reference 2</h3>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.reference2.name}
                    onChange={(e) => setFormData({
                      ...formData,
                      reference2: { ...formData.reference2, name: e.target.value }
                    })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Reference name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Details</label>
                  <textarea
                    value={formData.reference2.details}
                    onChange={(e) => setFormData({
                      ...formData,
                      reference2: { ...formData.reference2, details: e.target.value }
                    })}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Contact details, relationship, etc."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Password Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center">
                <FileText className="text-white" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Security</h2>
            </div>

            <div className="max-w-md">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password *</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Enter password"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pb-8">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={(e) => handleSubmit(e, 'submit')}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={(e) => handleSubmit(e, 'draft')}
              className="px-8 py-3 border-2 border-cyan-500 text-cyan-500 rounded-lg font-semibold hover:bg-cyan-50 transition-all"
            >
              Save as Draft
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BuildProfile
