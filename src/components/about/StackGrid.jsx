import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

import logo1 from "../../assets/images/stack/logo1.png";
import logo2 from "../../assets/images/stack/logo2.png";
import logo3 from "../../assets/images/stack/logo3.png";
import logo4 from "../../assets/images/stack/logo4.png";
import logo5 from "../../assets/images/stack/logo5.png";
import logo6 from "../../assets/images/stack/logo6.png";
import logo7 from "../../assets/images/stack/logo7.png";

const stack = [
    {
        name: "Languages",
        category: "C++, TypeScript, JavaScript, Python, SQL, Java",
        skills: ["C++", "TypeScript", "JavaScript (ES6+)", "Python", "SQL", "Java"],
        logo: logo1,
        description: "Proficient in C++ with practical experience solving algorithmic problems and implementing core data structures. Comfortable using TypeScript and JavaScript (ES6+) for building scalable full-stack applications. Use Python for scripting, backend utilities, and AI experimentation. Solid understanding of SQL including joins, indexing, and relational schema design. Familiar with Java fundamentals and object-oriented programming concepts."
    },
    {
        name: "Core CS",
        category: "DSA, OOPS, DBMS, OS, CN, System Design",
        skills: ["Data Structures", "Algorithms", "OOPS", "DBMS", "Operating Systems", "Computer Networks", "System Design"],
        logo: logo2,
        description: "Good understanding of fundamental Data Structures such as arrays, linked lists, stacks, queues, trees, and basic graph concepts. Actively improving problem-solving skills and algorithmic thinking. Clear understanding of OOPS principles including encapsulation, abstraction, inheritance, and polymorphism. Familiar with DBMS concepts like normalization, indexing, and transactions. Understand core Operating System concepts such as processes, threads, and memory basics. Working knowledge of Computer Networks including HTTP, TCP/IP, and client-server architecture. Basic exposure to system design principles like scalability, caching, and database trade-offs."
    },
    {
        name: "Frontend",
        category: "React.js, Next.js, Tailwind CSS",
        skills: ["React.js", "Next.js", "Tailwind CSS", "Redux/Toolkit", "Responsive Design", "Web Performance"],
        logo: logo3,
        description: "Build modern, responsive, and production-ready user interfaces using React.js and Next.js. Understand component architecture, hooks, routing, API integration, and rendering patterns (CSR/SSR). Use Tailwind CSS to create clean and scalable UI systems. Focus on maintainable component structures, reusability, and performance-conscious frontend development."
    },
    {
        name: "Backend",
        category: "Node.js, Express.js, REST APIs, WebSockets",
        skills: ["Node.js", "Express.js", "REST APIs", "WebSockets", "JWT/Auth", "Middleware Architecture"],
        logo: logo4,
        description: "Develop structured backend systems using Node.js and Express.js with modular architecture and clean routing patterns. Build RESTful APIs with proper validation, middleware handling, and authentication (JWT/session-based). Implement real-time features using WebSockets. Focus on writing maintainable backend code with clear separation of concerns."
    },
    {
        name: "Databases",
        category: "MongoDB, MySQL",
        skills: ["MongoDB", "MySQL", "PostgreSQL", "Mongoose", "Indexing", "Query Optimization"],
        logo: logo5,
        description: "Design and manage MongoDB collections with schema modeling and indexing strategies. Work with MySQL for relational data storage including joins, foreign keys, and transactional consistency. Understand when to use SQL vs NoSQL based on application requirements and scalability needs."
    },
    {
        name: "DevOps & Tools",
        category: "Git, Docker, CI/CD, Vercel",
        skills: ["Git/GitHub", "Docker", "CI/CD Pipelines", "Vercel", "Linux Basics", "Nginx"],
        logo: logo6,
        description: "Use Git for version control with collaborative workflows and structured branching. Containerize applications using Docker for consistent development environments. Deploy applications on platforms like Vercel with proper environment configuration. Familiar with CI/CD concepts and production deployment basics."
    },
    {
        name: "AI Exposure",
        category: "LLM Integration, OpenAI APIs",
        skills: ["LLM Integration", "OpenAI APIs", "Prompt Engineering", "Vector Databases", "LangChain Basics"],
        logo: logo7,
        description: "Integrate LLM APIs into applications to build intelligent features and automation workflows. Experience with OpenAI APIs including prompt structuring, response handling, and workflow integration. Apply AI for practical use cases such as summarization, structured data extraction, and conversational systems."
    },
];

const marqueeStyle = `
@keyframes stack-marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

@keyframes modal-fade-in {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
}

@keyframes overlay-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
}
`;



export default function StackGrid() {
    const headerRef = useScrollAnimation();
    const listRef = useScrollAnimation();
    const [selectedTech, setSelectedTech] = useState(null);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") setSelectedTech(null);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    useEffect(() => {
        if (selectedTech) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedTech]);

    return (
        <section className="mt-16 sm:mt-24 md:mt-32 relative">
            <style>{marqueeStyle}</style>
            <div ref={headerRef} className="flex flex-col sm:flex-row items-start sm:items-baseline gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 animate-on-scroll">
                <h2 className="text-3xl sm:text-4xl md:text-[48px] font-medium tracking-[-1px]">My Stack</h2>
                <div className="hidden sm:block flex-1 h-px bg-[#262626] mx-4 self-center" />
                <div
                    className="hidden sm:block overflow-hidden relative"
                    style={{
                        width: "280px",
                        maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                    }}
                >
                    <div
                        className="flex items-center gap-3"
                        style={{
                            animation: "stack-marquee 8s linear infinite",
                            width: "max-content",
                        }}
                    >
                        {[...stack, ...stack].map((item, i) => (
                            <React.Fragment key={i}>
                                <div className="w-8 h-8 rounded-full bg-[#111] flex-shrink-0 items-center justify-center p-1.5 overflow-hidden">
                                    <img src={item.logo} alt={item.name} loading="lazy" className="w-full h-full object-contain rounded-full" />
                                </div>
                                <span className="text-[#82ff1d] text-[8px] flex-shrink-0">•</span>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            <div ref={listRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 animate-stagger">
                {stack.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedTech(item)}
                        className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-[32px] bg-[#0A0A0A] border border-white/5 flex items-center justify-between group hover:bg-[#0E0E0E] hover:border-white/10 transition-all duration-300 cursor-pointer"
                    >
                        <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl md:rounded-[22px] flex items-center justify-center overflow-hidden p-2 sm:p-3 bg-white/5 group-hover:bg-white/10 transition duration-300 shrink-0">
                                <img src={item.logo} alt={item.name} loading="lazy" className="w-full h-full object-contain rounded-full" />
                            </div>
                            <div className="min-w-0">
                                <h3 className="text-lg sm:text-xl font-medium text-white">{item.name}</h3>
                                <p className="text-[#878686] text-xs sm:text-sm mt-0.5 sm:mt-1 truncate">{item.category}</p>
                            </div>
                        </div>
                        <span className="text-[#878686] group-hover:text-[#82ff1d] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 ml-2">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5">
                                <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                            </svg>
                        </span>
                    </div>
                ))}
            </div>

            {/* Modal Portal */}
            {selectedTech && createPortal(
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
                    style={{ animation: "overlay-fade-in 0.3s ease-out forwards" }}
                    onClick={() => setSelectedTech(null)}
                >
                    <div
                        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#111] border border-white/10 rounded-2xl sm:rounded-[40px] p-6 sm:p-8 md:p-10 lg:p-14"
                        style={{ animation: "modal-fade-in 0.4s cubic-bezier(0.2, 1, 0.3, 1) forwards" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedTech(null)}
                            className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#82ff1d] hover:text-black hover:border-[#82ff1d] transition-all duration-300 group z-10"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
                                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>

                        <div className="flex flex-col gap-6 sm:gap-8 relative z-0">
                            {/* Header */}
                            <div className="flex items-center gap-4 sm:gap-6 pr-12">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl md:rounded-3xl bg-white/5 flex items-center justify-center p-3 sm:p-4 border border-white/5 shrink-0">
                                    <img src={selectedTech.logo} alt={selectedTech.name} loading="lazy" className="w-full h-full object-contain rounded-xl" />
                                </div>
                                <div className="min-w-0">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-1 sm:mb-2">{selectedTech.name}</h2>
                                    <p className="text-[#82ff1d] font-medium tracking-wide text-xs sm:text-sm uppercase truncate">{selectedTech.category}</p>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-px w-full bg-gradient-to-r from-[#262626] to-transparent" />

                            {/* Description Content */}
                            <div className="space-y-6 sm:space-y-8">
                                <div>
                                    <p className="text-[#a0a0a0] text-base sm:text-lg leading-[1.7] sm:leading-[1.8] font-light">
                                        {selectedTech.description}
                                    </p>
                                </div>

                                {/* Skills Tags */}
                                <div>
                                    <h4 className="text-white text-xs sm:text-sm font-semibold uppercase tracking-[1px] mb-3 sm:mb-4">In-Depth Skills</h4>
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                        {selectedTech.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-[11px] sm:text-xs font-medium hover:border-[#82ff1d]/30 hover:text-white transition-all duration-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Footer Accent */}
                            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold text-[#878686] uppercase tracking-[2px] mt-1 sm:mt-2">
                                <span className="w-2 h-2 rounded-full bg-[#82ff1d]"></span>
                                Proficiency & Expertise
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
}
