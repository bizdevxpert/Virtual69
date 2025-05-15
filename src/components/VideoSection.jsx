import React from 'react'

const VideoSection = () => {
  return (
    <section id="video" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">See How We Can Transform Your Business</h2>
        <p className="section-subtitle">
          Watch this video to learn how our virtual assistant services can help you reclaim your time and focus on growing your business.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 relative pb-[56.25%]">
            <iframe 
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/arwVmsA3wR4" 
              title="Business Development Experts - Virtual Assistant Services"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="https://app.apollo.io/#/meet/bizdevxperts/30-min" className="btn btn-primary">
            Book Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
