import React from 'react'
import { FaCalendarAlt, FaEnvelope, FaDatabase, FaChartLine, FaUserClock, FaLaptopCode } from 'react-icons/fa'

const serviceItems = [
  {
    icon: <FaCalendarAlt className="text-4xl text-primary mb-4" />,
    title: "Calendar Management",
    description: "We handle your scheduling, appointments, and meeting coordination so you never miss an important event."
  },
  {
    icon: <FaEnvelope className="text-4xl text-primary mb-4" />,
    title: "Email Management",
    description: "Our assistants organize your inbox, respond to routine emails, and flag important messages requiring your attention."
  },
  {
    icon: <FaDatabase className="text-4xl text-primary mb-4" />,
    title: "Data Entry & Management",
    description: "We handle repetitive data entry tasks with precision, keeping your systems updated and organized."
  },
  {
    icon: <FaChartLine className="text-4xl text-primary mb-4" />,
    title: "Research & Reporting",
    description: "Get comprehensive research and well-organized reports to support your business decisions."
  },
  {
    icon: <FaUserClock className="text-4xl text-primary mb-4" />,
    title: "Flexible Support",
    description: "Whether you need part-time assistance or a dedicated full-time virtual assistant, we customize our services to your workflow."
  },
  {
    icon: <FaLaptopCode className="text-4xl text-primary mb-4" />,
    title: "Technical Support",
    description: "Our virtual assistants can help with basic technical tasks, software management, and digital organization."
  }
]

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Our Virtual Assistant Services</h2>
        <p className="section-subtitle">
          We customize our virtual assistant services to match your specific business needs, allowing you to focus on strategic growth.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div key={index} className="card hover:border-primary hover:border-2">
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="https://bizdevxperts.com/services" className="btn btn-primary">
            View All Services
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
