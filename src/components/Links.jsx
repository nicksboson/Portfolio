import React, { useState, useEffect, useRef } from "react";
import { Github, Code, Trophy, Utensils, FileText, ExternalLink, Download } from "lucide-react";

const links = [
  {
    name: "GitHub",
    icon: <Github className="text-3xl text-gray-100" />,
    description: "Explore my open-source contributions and personal projects on GitHub.",
    url: "https://github.com/nicksboson",
    btn: "View Profile",
    btnIcon: <ExternalLink className="ml-2 w-4 h-4" />,
    color: "gray",
  },
  {
    name: "LeetCode",
    icon: <Code className="text-3xl text-yellow-400" />,
    description: "Check out my problem-solving progress (51 problems solved).",
    url: "https://leetcode.com/u/nicks_boson/",
    btn: "View Profile",
    btnIcon: <ExternalLink className="ml-2 w-4 h-4" />,
    color: "yellow",
  },
  {
    name: "HackerRank",
    icon: <Trophy className="text-3xl text-green-500" />,
    description: "4-star coder with strong problem-solving skills.",
    url: "https://www.hackerrank.com/profile/nikhil_garkoti01",
    btn: "View Profile",
    btnIcon: <ExternalLink className="ml-2 w-4 h-4" />,
    color: "green",

  },
  {
    name: "CodeChef",
    icon: <Utensils className="text-3xl text-pink-400" />,
    description: "Solved 250 C programming problems on CodeChef.",
    url: "https://www.codechef.com/users/mob_band_91",
    btn: "View Profile",
    btnIcon: <ExternalLink className="ml-2 w-4 h-4" />,
    color: "pink",
  }
];

const Links = () => {
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
            }, index * 100);
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) cardObserver.observe(ref);
    });

    return () => cardObserver.disconnect();
  }, []);

  const getColorClasses = (color) => {
    const colors = {
      gray: {
        bg: 'bg-gray-900/50',
        border: 'border-gray-700 group-hover:border-gray-600',
        accent: 'bg-gray-600',
        shadow: 'group-hover:shadow-gray-500/10'
      },
      yellow: {
        bg: 'bg-yellow-900/20',
        border: 'border-yellow-700/30 group-hover:border-yellow-500/50',
        accent: 'bg-yellow-600',
        shadow: 'group-hover:shadow-yellow-500/10'
      },
      green: {
        bg: 'bg-green-900/20',
        border: 'border-green-700/30 group-hover:border-green-500/50',
        accent: 'bg-green-600',
        shadow: 'group-hover:shadow-green-500/10'
      },
      pink: {
        bg: 'bg-pink-900/20',
        border: 'border-pink-700/30 group-hover:border-pink-500/50',
        accent: 'bg-pink-600',
        shadow: 'group-hover:shadow-pink-500/10'
      },
      red: {
        bg: 'bg-red-900/20',
        border: 'border-red-700/30 group-hover:border-red-500/50',
        accent: 'bg-red-600',
        shadow: 'group-hover:shadow-red-500/10'
      }
    };
    return colors[color] || colors.gray;
  };

  return (
    <section
      ref={sectionRef}
      id="links"
      className="py-20 px-4 bg-gray-950 relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            Coding Profiles
            <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-blue-500 transition-all duration-1000 ${
              isVisible ? 'w-20' : 'w-0'
            }`}></span>
          </h2>
          <p className={`text-gray-400 mt-6 max-w-xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Connect with me on these platforms to see my work and contributions
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, idx) => {
            const colorClasses = getColorClasses(link.color);
            return (
              <div
                key={link.name}
                ref={(el) => (cardRefs.current[idx] = el)}
                data-index={idx}
                className={`group relative transition-all duration-700 ${
                  animatedCards.has(idx) 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
              >
                {/* Card Container */}
                <div className={`${colorClasses.bg} backdrop-blur-sm border ${colorClasses.border} ${colorClasses.shadow} rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-500 transform group-hover:-translate-y-1 group-hover:shadow-xl h-full relative overflow-hidden`}>
                  
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-white/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/20 backdrop-blur-sm rounded-full text-xs text-gray-300 border border-gray-700/50">
                    {link.stats}
                  </div>

                  {/* Icon Container */}
                  <div className="mb-6 p-4 rounded-2xl bg-black/20 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-black/30 relative">
                    {link.icon}
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-2xl border border-current opacity-0 group-hover:opacity-20 animate-pulse" style={{color: link.icon.props.className.includes('gray') ? '#9CA3AF' : link.icon.props.className.includes('yellow') ? '#FBBF24' : link.icon.props.className.includes('green') ? '#10B981' : link.icon.props.className.includes('pink') ? '#F472B6' : '#EF4444'}}></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {link.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-8 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 flex-grow">
                    {link.description}
                  </p>

                  {/* Button */}
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-6 py-3 ${colorClasses.accent} text-white rounded-full font-medium transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden`}
                    {...(link.download ? { download: "Nikhil_Garkoti_Resume.pdf" } : {})}
                  >
                    {/* Button shine effect */}
                    <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                    <span className="relative z-10 flex items-center">
                      {link.btn}
                      {link.btnIcon}
                    </span>
                  </a>

                  {/* Corner decoration */}
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400/50 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Summary */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex justify-center items-center space-x-6 text-gray-400 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
              <span>Always Learning</span>
            </div>
            <div className="w-px h-4 bg-gray-700"></div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse delay-500"></div>
              <span>Open to Collaborate</span>
            </div>
            <div className="w-px h-4 bg-gray-700"></div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse delay-1000"></div>
              <span>Problem Solver</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        .group:hover {
          animation: subtle-float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Links;