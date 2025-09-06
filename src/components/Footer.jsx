import React, { useRef, useEffect, useState } from "react";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    icon: <Github className="w-6 h-6" />,
    url: "https://github.com/nicksboson",
    color: "hover:text-gray-100"
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-6 h-6" />,
    url: "https://www.linkedin.com/in/nikhil-garkoti-027274328/",
    color: "hover:text-blue-500"
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-6 h-6" />,
    url: "https://www.instagram.com/nikhil_garkoti/",
    color: "hover:text-pink-500"
  },

];

const Footer = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={sectionRef}
      className={`w-full bg-gray-950 py-10 px-4 border-t border-gray-800 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto max-w-3xl text-center">
        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
          Nikhil Garkoti
        </h3>
        <p className="text-gray-400 mb-6 text-sm">
          Computer Science Student &nbsp;|&nbsp; Problem Solver &nbsp;|&nbsp; Continuous Learner
        </p>
        <div className="flex justify-center gap-6 mb-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${social.color} text-gray-400`}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Nikhil Garkoti. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;