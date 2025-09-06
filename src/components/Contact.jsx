import React, { useRef, useEffect, useState } from "react";
import { Mail, Linkedin, Instagram } from "lucide-react";

const contacts = [
  {
    label: "Email",
    icon: <Mail className="text-blue-500 w-7 h-7" />,
    value: "nikhil.garkoti0001@gmail.com",
    link: "mailto:nikhil.garkoti0001@gmail.com",
    btn: "Send Email",
    delay: 1,
  },
  {
    label: "LinkedIn",
    icon: <Linkedin className="text-blue-700 w-7 h-7" />,
    value: "Connect with me",
    link: "https://www.linkedin.com/in/nikhil-garkoti-027274328/",
    btn: "View Profile",
    delay: 2,
  },
  {
    label: "Instagram",
    icon: <Instagram className="text-pink-500 w-7 h-7" />,
    value: "@nikhil_garkoti",
    link: "https://www.instagram.com/nikhil_garkoti/",
    btn: "Follow",
    delay: 3,
  },
];

const Contact = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);

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

  useEffect(() => {
    if (isVisible) {
      contacts.forEach((_, idx) => {
        setTimeout(() => {
          setVisibleItems((prev) => [...prev, idx]);
        }, (idx + 1) * 200);
      });
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="contact py-20 px-4 bg-gray-950 relative"
    >
      <div className="container mx-auto max-w-3xl">
        {/* Section Title */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Get In Touch
          </h2>
          <p className="text-gray-400 mt-3 max-w-lg mx-auto">
            I'm always open to discussing new opportunities, projects, or just chatting about tech
          </p>
        </div>

        {/* Contact Content */}
        <div
          className={`mb-10 text-center transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gray-300 text-base">
            Feel free to reach out through any of the channels below. I'll do my best to respond.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="contact-info grid grid-cols-1 md:grid-cols-3 gap-8">
          {contacts.map((item, idx) => (
            <div
              key={item.label}
              className={`contact-item flex flex-col items-center bg-gray-900 border border-gray-800 rounded-xl p-7 shadow-lg transition-all duration-700 ${
                visibleItems.includes(idx)
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: `${item.delay * 150}ms` }}
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-2">{item.label}</h4>
              {item.label === "Email" ? (
                <a
                  href={item.link}
                  className="text-blue-400 hover:underline text-sm mb-4"
                >
                  {item.value}
                </a>
              ) : (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 text-sm mb-4"
                >
                  {item.value}
                </a>
              )}
              <a
                href={item.link}
                target={item.label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors text-xs"
              >
                {item.btn}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;