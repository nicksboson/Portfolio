import { useEffect, useRef, useState } from 'react';
import { FaCalendarAlt, FaCode, FaRobot, FaCertificate } from 'react-icons/fa';
import './Experience.css';
const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  const experienceData = [
    {
      id: 1,
      title: "Blockchain Developer Workshop",
      institution: "IIT Delhi Technopark (ICP Hub India)",
      icon: <FaCode className="text-blue-400 text-xl" />,
      bullets: [
        "Completed Level 1 Blockchain Developer certification",
        "Gained hands-on experience with blockchain fundamentals",
        "Worked on smart contracts and decentralized applications",
        "Collaborated with industry professionals"
      ],
      tags: ["Blockchain", "Smart Contracts", "Web3", "ICP"],
      date: "2024"
    },
    {
      id: 2,
      title: "Machine Learning Workshop",
      institution: "IIT Roorkee",
      icon: <FaRobot className="text-purple-400 text-xl" />,
      bullets: [
        "Learned fundamentals of machine learning algorithms",
        "Worked on practical ML applications and projects",
        "Explored neural networks and deep learning concepts",
        "Implemented real-world ML solutions"
      ],
      tags: ["Machine Learning", "AI", "Python", "TensorFlow"],
      date: "2025"
    }
  ];

  return (
    <section id="experience" ref={experienceRef} className="py-20 px-4 bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            Experience
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500"></span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Hands-on learning experiences that have shaped my technical skills
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experienceData.map((exp, index) => (
            <div 
              key={exp.id}
              className={`bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-xl border-l-4 border-blue-500 hover:border-purple-500 transition-all duration-500 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-purple-500/20 transition-all duration-500">
                    {exp.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <div className="flex items-center text-gray-400 mt-1">
                      <FaCalendarAlt className="mr-2" />
                      <span className="text-sm">{exp.institution}</span>
                    </div>
                  </div>
                </div>
                <span className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full">
                  {exp.date}
                </span>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 mb-6">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    <span className="text-gray-300">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs hover:bg-blue-500/30 hover:text-blue-300 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500/10 rounded-full group-hover:bg-purple-500/10 transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-purple-500/10 rounded-full group-hover:bg-blue-500/10 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center bg-gray-800/60 px-6 py-3 rounded-full">
            <FaCertificate className="text-blue-400 mr-2" />
            <span className="text-gray-300">Continuously expanding my skill set through hands-on learning</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;