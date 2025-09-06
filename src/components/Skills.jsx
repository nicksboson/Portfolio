import React, { useState, useEffect, useRef } from "react";

const skillsData = [
  {
    category: "Programming Languages",
    icon: "💻",
    skills: [
      "C (Intermediate)",
      "C++",
      "Python"
    ]
  },
  {
    category: "Frontend Development",
    icon: "🎨",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap"
    ]
  },
  {
    category: "Backend & Database",
    icon: "🗄️",
    skills: [
      "Node.js",
      "Express.js",
      "SQL",
      "MongoDB"
    ]
  },
  {
    category: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      "Git",
      "GitHub"
    ]
  }
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCards, setAnimatedCards] = useState(new Set());
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate cards with staggered delay
          skillsData.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedCards(prev => new Set([...prev, index]));
            }, index * 200);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 px-4 relative overflow-hidden bg-gray-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-ping"></div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        ></div>
      ))}

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 relative">
              Skills & Expertise
              {/* Animated underline */}
              <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-blue-500 transition-all duration-1000 ${
                isVisible ? 'w-32' : 'w-0'
              }`}></span>
            </h2>
          </div>
          <p className={`text-gray-300 mt-8 max-w-2xl mx-auto text-lg leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillsData.map((cat, idx) => (
            <div
              key={cat.category}
              className={`group relative transition-all duration-700 ${
                animatedCards.has(idx) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Card Background with Plain Border */}
              <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-sm group-hover:blur-none transition-all duration-500"></div>
              
              <div className={`relative bg-gray-800/40 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group-hover:shadow-blue-500/20 group-hover:shadow-2xl transform group-hover:-translate-y-2 ${
                idx % 2 === 0 
                  ? 'border-l-4 border-l-blue-500 hover:border-l-blue-400' 
                  : 'border-l-4 border-l-blue-500 hover:border-l-blue-400'
              }`}>
                
                {/* Header */}
                <div className="flex items-center mb-8 relative">
                  <div className={`text-4xl mr-4 transition-all duration-500 group-hover:scale-110 ${
                    idx % 2 === 0 ? 'group-hover:rotate-12' : 'group-hover:-rotate-12'
                  }`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-all duration-300">
                      {cat.category}
                    </h3>
                    {/* Animated underline */}
                    <div className={`h-0.5 bg-blue-500 transition-all duration-500 group-hover:w-full w-0 mt-1`}></div>
                  </div>
                </div>

                {/* Skills List */}
                <ul className="space-y-4">
                  {cat.skills.map((skill, i) => (
                    <li
                      key={skill}
                      className={`flex items-center text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-2 opacity-0 animate-fade-in`}
                      style={{ 
                        animationDelay: `${(idx * 200) + (i * 100)}ms`,
                        animationFillMode: 'forwards'
                      }}
                    >
                      {/* Animated Bullet */}
                      <div className={`mr-4 w-3 h-3 rounded-full bg-blue-400 shadow-lg relative overflow-hidden group-hover:scale-125 transition-transform duration-300`}>
                        <div className={`absolute inset-0 rounded-full bg-blue-300 animate-ping opacity-30`}></div>
                      </div>
                      
                      <span className="font-medium text-lg tracking-wide group-hover:font-semibold transition-all duration-300 relative">
                        {skill}
                        {/* Hover highlight */}
                        <span className={`absolute inset-0 bg-blue-400/10 rounded px-2 py-1 scale-0 group-hover:scale-100 transition-transform duration-300 -mx-2 -my-1`}></span>
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Floating Orb */}
                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <div className="flex justify-center space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full bg-blue-400 animate-bounce`}
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          opacity: 0;
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Skills;