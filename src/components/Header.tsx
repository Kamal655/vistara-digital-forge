
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/33de7279-2ae0-4638-9144-26e6ff92ccec.png" 
              alt="Vistara Tech Solutions" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">VISTARA TECH</h1>
              <p className="text-sm text-gray-600">SOLUTIONS</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-left"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-left w-fit"
              >
                Get Started
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
