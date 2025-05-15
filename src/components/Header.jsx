import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container flex justify-between items-center">
        <a href="/" className="flex items-center">
          <span className="text-xl font-bold text-primary">Business Development Experts</span>
        </a>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-dark focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-dark hover:text-primary font-medium">Services</a>
          <a href="#video" className="text-dark hover:text-primary font-medium">How It Works</a>
          <a href="#testimonials" className="text-dark hover:text-primary font-medium">Testimonials</a>
          <a href="https://app.apollo.io/#/meet/bizdevxperts/30-min" className="btn btn-primary">Book a Consultation</a>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <a href="#services" className="text-dark hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#video" className="text-dark hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>How It Works</a>
              <a href="#testimonials" className="text-dark hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <a href="https://app.apollo.io/#/meet/bizdevxperts/30-min" className="btn btn-primary text-center" onClick={() => setIsMenuOpen(false)}>Book a Consultation</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
