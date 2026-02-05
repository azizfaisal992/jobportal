import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import BuildProfile from './pages/BuildProfile'
import ContactUs from './pages/Contactus'
import IncomingRequests from './pages/IncomingRequests'
import Notification from './pages/Notification'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/build-profile" element={<BuildProfile />} />
        <Route path="/incoming-requests" element={<IncomingRequests />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
