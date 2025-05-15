import React from 'react'
import { 
  FaLinkedin, 
  FaFacebookSquare, 
  FaInstagram, 
  FaPinterest, 
  FaTwitter, 
  FaYoutube, 
  FaGlobe,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Business Development Experts</h3>
            <p className="mb-4 text-gray-300">
              Streamline your operations with expert virtual assistants who handle scheduling, email management, data entry, and more.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:info@bizdevxperts.com" className="text-gray-300 hover:text-white">
                <FaEnvelope size={20} />
              </a>
              <a href="tel:+1234567890" className="text-gray-300 hover:text-white">
                <FaPhone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#video" className="text-gray-300 hover:text-white">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white">Testimonials</a></li>
              <li><a href="https://bizdevxperts.com/services" className="text-gray-300 hover:text-white">All Services</a></li>
              <li><a href="https://app.apollo.io/#/meet/bizdevxperts/30-min" className="text-gray-300 hover:text-white">Book a Consultation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Calendar Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Email Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Data Entry</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Research & Reporting</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Technical Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="grid grid-cols-3 gap-4">
              <a href="https://www.linkedin.com/company/businessdevelopment-experts" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.facebook.com/480956031758876" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaFacebookSquare size={24} />
              </a>
              <a href="https://www.instagram.com/bizdevxperts/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.pinterest.com/bizdevxperts/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaPinterest size={24} />
              </a>
              <a href="https://www.x.com/bizdevxperts" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.youtube.com/@bizdevxpert" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaYoutube size={24} />
              </a>
              <a href="https://bizdevxperts.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaGlobe size={24} />
              </a>
            </div>
            
            <div className="mt-6">
              <a 
                href="https://app.apollo.io/#/meet/bizdevxperts/30-min" 
                className="btn btn-primary w-full text-center"
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Business Development Experts. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
