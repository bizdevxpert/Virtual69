import React from 'react'

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Streamline Your Business with Expert Virtual Assistants
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Focus on growing your business while our professional virtual assistants handle scheduling, email management, data entry, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://app.apollo.io/#/meet/bizdevxperts/30-min" className="btn btn-primary text-center">
                Book a Free Consultation
              </a>
              <a href="https://bizdevxperts.com/services" className="btn btn-secondary text-center">
                Explore Our Services
              </a>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Virtual Assistant Services" 
              className="rounded-xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
