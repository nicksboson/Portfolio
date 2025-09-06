import { useEffect, useRef, useState } from 'react';
import { FaCalendarAlt, FaStar, FaGraduationCap } from 'react-icons/fa';
import './Education.css'
const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const educationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  const educationData = [
    {
      id: 1,
      institution: "St. Francis Senior Secondary School, Tanakpur",
      period: "2020 (Class 10 - CBSE)",
      degree: "Secondary Education",
      achievement: "Percentage: 96%",
      icon: <FaStar className="text-yellow-400" />
    },
    {
      id: 2,
      institution: "St. Francis Senior Secondary School, Tanakpur",
      period: "2022 (Class 12 - CBSE)",
      degree: "Senior Secondary Education",
      achievement: "Percentage: 96%",
      icon: <FaStar className="text-yellow-400" />
    },
    {
      id: 3,
      institution: "Indian Institute of Information Technology, Sonepat",
      period: "2024 - 2028 (Expected)",
      degree: "B.Tech in Computer Science & Engineering",
      achievement: "CGPA: 9.4583 (1st Year)",
      icon: <FaGraduationCap className="text-blue-400" />
    }
  ];

   

  return (
    <section id="education" ref={educationRef} className="py-20 px-4 bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            Education
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500"></span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            My academic journey and achievements throughout the years
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div 
                key={edu.id}
                className={`flex flex-col md:flex-row items-start transition-all duration-1000 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-gray-900 transform -translate-x-1/2 z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left md:ml-auto'}`}>
                  <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:bg-gray-800/80 transition-all duration-500 group">
                    {/* Institution and Icon */}
                    <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className="text-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                        {edu.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                    </div>
                    
                    {/* Date */}
                    <div className={`flex items-center text-gray-400 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <FaCalendarAlt className="mr-2" />
                      <span>{edu.period}</span>
                    </div>
                    
                    {/* Degree */}
                    <p className="text-gray-300 mb-4">{edu.degree}</p>
                    
                    {/* Achievement */}
                    <div className={`flex items-center text-blue-300 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <FaStar className="mr-2" />
                      <span className="font-medium">{edu.achievement}</span>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-all duration-500"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 bg-purple-500/10 rounded-full group-hover:bg-purple-500/20 transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center bg-gray-800/60 px-6 py-3 rounded-full">
            <span className="text-blue-400 mr-2">🎓</span>
            <span className="text-gray-300">Continuing to learn and grow every day</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;