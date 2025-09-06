import { useEffect, useRef, useState } from 'react';
import './About.css';
const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-20 px-4 bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500"></span>
          </h2>
        </div>

        {/* About Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className={`lg:w-1/3 transition-all duration-1000 delay-150 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-20 blur-xl group-hover:opacity-40 transition-all duration-700"></div>
              <div className="relative rounded-lg overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Nikhil Garkoti" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className={`lg:w-2/3 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Who I Am</h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a passionate Computer Science student at IIIT Sonepat with a strong foundation in programming and problem-solving. I'm dedicated to continuous learning and applying my skills to real-world challenges.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me solving problems on various coding platforms, contributing to open-source projects, or exploring new technologies.
              </p>
            </div>
            
            {/* Skills Section */}
            <div className="mt-10">
              <h4 className="text-xl font-bold text-white mb-6">Key Strengths</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'Data Structures',
                  'Web Development',

                  'Backend Development',
                  'MERN Stack',
                  'C/C++',
                  'JavaScript',
                  'Python','n8n'
                ].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-800/60 text-gray-200 rounded-full text-sm font-medium hover:bg-blue-600/30 hover:text-blue-300 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats or Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { value: '1+', label: 'Years Coding' },
                { value: '100+', label: 'Problems Solved' },
                { value: '5+', label: 'Projects' },
                { value: 'Continuous', label: 'Learner' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-5 bg-gray-800/40 rounded-lg hover:bg-gray-800/70 transition-all duration-300"
                >
                  <div className="text-2xl md:text-2xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;