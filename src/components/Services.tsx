
import { useState } from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  brochureImage: string;
  features: string[];
}

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: 'google-business',
      title: 'Google Business Updation',
      description: 'Maximize your digital impact with our comprehensive Google Business packages.',
      brochureImage: '/lovable-uploads/b0b82da1-f0d6-4472-87e7-da4ca63b05ce.png',
      features: [
        'Google My Business Setup',
        'HD Photos & Virtual Tours',
        'Product Listing & Categorization',
        'Review Management',
        'Performance Reports'
      ]
    },
    {
      id: 'social-media',
      title: 'Social Media Marketing',
      description: 'Build your brand\'s social story with our comprehensive marketing solutions.',
      brochureImage: '/lovable-uploads/eb1fd1d8-e727-4910-b7b3-e2a5757893df.png',
      features: [
        'Multi-Platform Management',
        'Content Creation & Curation',
        'Hashtag Research & Optimization',
        'Profile Engagement Strategies',
        'Monthly Performance Reports'
      ]
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Boost your digital presence with expert marketing strategies.',
      brochureImage: '/lovable-uploads/edfc0171-cbca-4166-bc4b-28baab52435b.png',
      features: [
        'SEO Audit & Optimization',
        'Email Campaign Management',
        'Google Ads & PPC Management',
        'Growth Hacking Strategies',
        'Analytics & Reporting'
      ]
    },
    {
      id: 'website-creation',
      title: 'Website Creation',
      description: 'Create a stunning online presence with our website packages.',
      brochureImage: '/lovable-uploads/2dbe2e81-283f-4e49-bfd8-b52a08804157.png',
      features: [
        'Responsive Design',
        'SEO Optimization',
        'CMS Integration',
        'E-commerce Solutions',
        'Ongoing Support & Maintenance'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to boost your online visibility, 
            credibility, and customer engagement.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-100"
              onClick={() => setSelectedService(service)}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Service Details Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src={selectedService.brochureImage} 
                      alt={selectedService.title}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <div>
                    <p className="text-gray-600 mb-6">{selectedService.description}</p>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <ul className="space-y-3 mb-8">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex gap-4">
                      <button 
                        onClick={() => {
                          setSelectedService(null);
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        Get Quote
                      </button>
                      <button 
                        onClick={() => setSelectedService(null)}
                        className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-purple-600 hover:text-purple-600 transition-all duration-300"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
