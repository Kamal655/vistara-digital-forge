
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.3),transparent_70%)]"></div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 animate-bounce" style={{animationDuration: '3s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/33de7279-2ae0-4638-9144-26e6ff92ccec.png" 
              alt="Vistara Tech Solutions" 
              className="h-20 w-auto mx-auto mb-4"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            VISTARA TECH
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              SOLUTIONS
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
            Empowering Businesses with Digital Excellence
          </p>

          {/* Description */}
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
            From local shops to enterprises, we provide tailored digital services ensuring visibility, 
            credibility, and customer engagement in the digital landscape.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.8s'}}>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Explore Our Services
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{animationDelay: '1s'}}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">4</div>
              <div className="text-gray-300">Core Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">2025</div>
              <div className="text-gray-300">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
