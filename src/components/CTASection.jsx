import React from 'react'
import { FaCalendarCheck, FaListUl } from 'react-icons/fa'

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Reclaim Your Time?</h2>
          <p className="text-xl mb-10 opacity-90">
            Our virtual assistants are ready to help you streamline your operations so you can focus on what matters most - growing your business.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20">
              <div className="p-8 text-center">
                <FaCalendarCheck className="text-5xl mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Book a Free Consultation</h3>
                <p className="mb-6 opacity-90">
                  Schedule a 30-minute call to discuss your needs and discover how our virtual assistants can help.
                </p>
                <a 
                  href="https://app.apollo.io/#/meet/bizdevxperts/30-min" 
                  className="btn bg-white text-primary hover:bg-gray-100 font-semibold"
                >
                  Book Now
                </a>
              </div>
            </div>
            
            <div className="card bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20">
              <div className="p-8 text-center">
                <FaListUl className="text-5xl mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Explore Our Services</h3>
                <p className="mb-6 opacity-90">
                  Browse our complete range of virtual assistant and business development services.
                </p>
                <a 
                  href="https://bizdevxperts.com/services" 
                  className="btn bg-white text-primary hover:bg-gray-100 font-semibold"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
