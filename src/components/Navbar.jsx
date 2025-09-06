import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        isScrolled 
          ? 'bg-gray-950/95 backdrop-blur-md border-b border-gray-800/50 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo/Brand */}
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => scrollToSection('home')}
            >
              <div className="relative">
                {/* Blue accent line */}
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span className="text-xl font-semibold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                  Nikhil Garkoti
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 group ${
                    activeSection === item.id 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full"></div>
                  )}
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden relative w-8 h-8 flex items-center justify-center group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative flex flex-col justify-center items-center w-5 h-5">
                <span className={`absolute w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}></span>
                <span className={`absolute w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`absolute w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300 z-40 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-gray-950/98 backdrop-blur-xl border-l border-gray-800/50 transition-transform duration-300 z-50 md:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800/50">
          <span className="text-lg font-semibold text-white">Menu</span>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="px-6 py-8">
          <div className="space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 text-lg font-medium transition-all duration-300 rounded-lg group relative ${
                  activeSection === item.id 
                    ? 'text-blue-400 bg-blue-500/10' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Blue accent line for active item */}
                {activeSection === item.id && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r-full"></div>
                )}
                
                <span className="relative z-10">{item.name}</span>
              </button>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 pt-8 border-t border-gray-800/50">
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm tracking-wide transition-all duration-300 rounded-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;