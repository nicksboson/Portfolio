import React, { useState, useEffect, useRef } from "react";
import { Calendar, ExternalLink, Plane, PenTool, Trophy, Music, Gamepad2 } from "lucide-react";

const projects = [
  {
    title: "WanderLust - Travel Website",
    icon: <Plane className="text-blue-500 text-3xl" />,
    date: "Jan 2025 - Present",
    description: [
      "Developed a comprehensive vacation rental platform inspired by Airbnb with full-stack implementation",
      "Implemented user authentication, property management with CRUD operations, and interactive review system",
      "Integrated geolocation services, cloud-based media handling, and responsive design",
      "Technologies: Node.js, Express.js, MongoDB, EJS, Bootstrap 5, Passport.js, Cloudinary"
    ],
    link: "https://wanderlust-8bks.onrender.com/listings",
    color: "blue"
  },
  {
    title: "PostingShala - CRUD Web App",
    icon: <PenTool className="text-purple-500 text-3xl" />,
    date: "Dec 2024 - Jan 2025",
    description: [
      "Developed a full-stack CRUD application for posting and managing content",
      "Implemented user authentication, post creation, editing, and deletion functionality",
      "Built with Node.js and Express for the backend, EJS for templating",
      "Technologies: Node.js, Express.js, MongoDB, EJS, Bootstrap"
    ],
    link: "https://postingshala.onrender.com/",
    color: "purple"
  },
  {
    title: "Scoreasy - Landing Page",
    icon: <Trophy className="text-yellow-400 text-3xl" />,
    date: "Nov 2024",
    description: [
      "Designed and developed a responsive landing page for a sports scoring application",
      "Implemented smooth animations and interactive elements",
      "Technologies: HTML, CSS, JavaScript"
    ],
    link: "https://nicksboson.github.io/Scoreasy/",
    color: "yellow"
  },
  {
    title: "SportsNation",
    icon: <Trophy className="text-red-500 text-3xl" />,
    date: "Jan - Feb 2025",
    description: [
      "Built a comprehensive web platform providing structured knowledge about different sports including rules, regulations, history, and scoring systems",
      "Implemented interactive features like news ticker and chatbot for enhanced user experience",
      "Created responsive design with sport categories, field dimensions, and equipment details",
      "Technologies: HTML, CSS, JavaScript"
    ],
    link: "https://nicksboson.github.io/Project/index.html",
    color: "red"
  },{
    title: "Simon Says Game",
    icon: <Gamepad2 className="text-pink-500 text-3xl" />,
    date: "Mar 2025 - Present",
    description: [
      "Created an interactive memory game",
      "Implemented DOM manipulation and audio effects",
      "Technologies: HTML, CSS, JavaScript"
    ],
    link: "https://nicksboson.github.io/SIMON-SAYS/",
    color: "pink"
  },
  {
    title: "Spotify Clone",
    icon: <Music className="text-green-500 text-3xl" />,
    date: "Feb 2025 - Present",
    description: [
      "Developed a responsive clone of Spotify's main page Using only HTML AND CSS",
      "Implemented modern UI/UX components",
      "Technologies: HTML, CSS"
    ],
    link: "https://nicksboson.github.io/Spotify-Clone_/",
    color: "green"
  },
  
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCards, setAnimatedCards] = useState(new Set());
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'));
            setTimeout(() => {
              setAnimatedCards(prev => new Set([...prev, index]));
            }, index * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) cardObserver.observe(ref);
    });

    return () => cardObserver.disconnect();
  }, []);

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        border: 'group-hover:border-blue-500/50',
        shadow: 'group-hover:shadow-blue-500/20',
        button: 'bg-blue-600 hover:bg-blue-700',
        accent: 'bg-blue-500/10'
      },
      purple: {
        border: 'group-hover:border-purple-500/50',
        shadow: 'group-hover:shadow-purple-500/20',
        button: 'bg-purple-600 hover:bg-purple-700',
        accent: 'bg-purple-500/10'
      },
      yellow: {
        border: 'group-hover:border-yellow-500/50',
        shadow: 'group-hover:shadow-yellow-500/20',
        button: 'bg-yellow-600 hover:bg-yellow-700',
        accent: 'bg-yellow-500/10'
      },
      green: {
        border: 'group-hover:border-green-500/50',
        shadow: 'group-hover:shadow-green-500/20',
        button: 'bg-green-600 hover:bg-green-700',
        accent: 'bg-green-500/10'
      },
      pink: {
        border: 'group-hover:border-pink-500/50',
        shadow: 'group-hover:shadow-pink-500/20',
        button: 'bg-pink-600 hover:bg-pink-700',
        accent: 'bg-pink-500/10'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 px-4 bg-gray-950 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Dots */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/10 rounded-full animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
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
              Projects
              {/* Animated underline */}
              <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-blue-500 transition-all duration-1000 ${
                isVisible ? 'w-24' : 'w-0'
              }`}></span>
            </h2>
          </div>
          <p className={`text-gray-400 mt-8 max-w-2xl mx-auto text-lg leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const colorClasses = getColorClasses(project.color);
            return (
              <div
                key={project.title}
                ref={(el) => (cardRefs.current[idx] = el)}
                data-index={idx}
                className={`group relative transition-all duration-700 ${
                  animatedCards.has(idx) 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-10 scale-95'
                }`}
              >
                {/* Card Background Glow */}
                <div className={`absolute inset-0 ${colorClasses.accent} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                
                <div className={`relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 ${colorClasses.border} ${colorClasses.shadow} rounded-2xl shadow-2xl p-8 flex flex-col h-full transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl`}>
                  
                  {/* Icon Container */}
                  <div className="mb-6 flex items-center justify-center relative">
                    <div className={`p-4 ${colorClasses.accent} rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                      {project.icon}
                    </div>
                    {/* Pulsing ring */}
                    <div className={`absolute inset-0 rounded-2xl border-2 border-current opacity-0 group-hover:opacity-20 animate-ping`} style={{ color: project.icon.props.className.split(' ')[1] }}></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 text-center group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Date */}
                  <div className="flex items-center justify-center text-gray-400 text-sm mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.date}
                  </div>

                  {/* Description */}
                  <ul className="mb-8 space-y-3 text-gray-300 text-sm flex-grow">
                    {project.description.map((desc, i) => (
                      <li 
                        key={i} 
                        className={`flex items-start opacity-0 animate-fade-up transition-all duration-300 group-hover:text-gray-200`}
                        style={{ 
                          animationDelay: `${(idx * 100) + (i * 50)}ms`,
                          animationFillMode: 'forwards'
                        }}
                      >
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* View Project Button */}
                  <div className="flex justify-center mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-6 py-3 ${colorClasses.button} text-white rounded-full font-medium transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden`}
                    >
                      {/* Button shine effect */}
                      <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                      <ExternalLink className="w-4 h-4 mr-2 relative z-10" />
                      <span className="relative z-10">View Project</span>
                    </a>
                  </div>

                  {/* Corner decoration */}
                  <div className={`absolute top-4 right-4 w-3 h-3 ${colorClasses.accent} rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <div className="flex justify-center items-center space-x-8 text-gray-400">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">{projects.length}</div>
              <div className="text-sm">Projects</div>
            </div>
            <div className="w-1 h-8 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">5+</div>
              <div className="text-sm">Technologies</div>
            </div>
            <div className="w-1 h-8 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-sm">Passion</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-up {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-fade-up {
          opacity: 0;
          transform: translateY(10px);
          animation: fade-up 0.6s ease-out forwards;
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;