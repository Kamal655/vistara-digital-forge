
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/33de7279-2ae0-4638-9144-26e6ff92ccec.png" 
                alt="Vistara Tech Solutions" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">VISTARA TECH</h3>
                <p className="text-gray-400">SOLUTIONS</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering businesses with digital excellence since 2025. From local shops to enterprises, 
              we provide tailored digital services ensuring visibility, credibility, and customer engagement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300">
                📘
              </a>
              <a href="https://instagram.com/vistaratechsolutions" className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300">
                📷
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300">
                💼
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-400">Google Business Updation</span></li>
              <li><span className="text-gray-400">Social Media Marketing</span></li>
              <li><span className="text-gray-400">Digital Marketing</span></li>
              <li><span className="text-gray-400">Website Creation</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Vistara Tech Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
