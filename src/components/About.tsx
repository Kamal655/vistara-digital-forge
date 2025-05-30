
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Vistara Tech</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2025 and based in Hyderabad, India, Vistara Tech Solutions specializes in 
              helping businesses establish and grow their digital presence. From local shops to 
              enterprises, we provide tailored digital services ensuring visibility, credibility, 
              and customer engagement.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-4 mt-1 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Personalized Service</h4>
                  <p className="text-gray-600">Professional execution with measurable results</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-4 mt-1 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Cost-Effective Solutions</h4>
                  <p className="text-gray-600">Maximum ROI with budget-friendly packages</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-4 mt-1 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Long-term Support</h4>
                  <p className="text-gray-600">Ongoing guidance and digital strategy development</p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Start Your Journey
            </button>
          </div>
          
          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8">
              <img 
                src="/lovable-uploads/d8363137-83ce-447b-b430-a13c5517ba27.png" 
                alt="About Vistara Tech Solutions" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">2025</div>
                <div className="text-sm text-gray-600">Founded</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto italic">
              "To empower businesses with digital excellence by providing innovative, reliable, 
              and cost-effective solutions that drive growth, enhance visibility, and create 
              lasting customer relationships in the digital landscape."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
