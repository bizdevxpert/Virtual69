import React, { useState } from 'react'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, Marketing Agency",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote: "Business Development Experts' virtual assistants have been a game-changer for our agency. Their attention to detail and proactive approach has freed up hours of my time each week. I can now focus on strategy and growth while they handle the day-to-day operations."
  },
  {
    name: "Michael Chen",
    position: "Founder, Tech Startup",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote: "As a startup founder, I was wearing too many hats. The virtual assistant services from Business Development Experts helped me reclaim my schedule. Their team is responsive, professional, and quickly adapted to our company culture. Highly recommended!"
  },
  {
    name: "Jessica Williams",
    position: "Real Estate Investor",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    quote: "I was skeptical about hiring a virtual assistant, but Business Development Experts exceeded my expectations. Their team handles my email, scheduling, and research tasks flawlessly. It's like having an in-house assistant without the overhead costs."
  },
  {
    name: "Robert Taylor",
    position: "Financial Advisor",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    quote: "The virtual assistants at Business Development Experts are exceptional. They've streamlined my client onboarding process, manage my calendar efficiently, and prepare reports that used to take me hours. This service has been invaluable to growing my practice."
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it. Here's what business owners like you have to say about our virtual assistant services.
        </p>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="card p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-4">
                  <div className="flex justify-center text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <FaQuoteLeft className="text-3xl text-primary opacity-20 mb-4" />
                <p className="text-lg italic mb-6">{testimonials[currentIndex].quote}</p>
                <div>
                  <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-200 hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-200 hover:bg-primary hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
