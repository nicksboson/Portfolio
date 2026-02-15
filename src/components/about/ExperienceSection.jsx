import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const experiences = [
    {
        role: "Full Stack Developer Intern",
        company: "Dualite",
        certificateLink: "https://drive.google.com/file/d/1F485rUyNOIDRSvf7YVXhjyxR2SK8pRWX/view?usp=sharing",
        period: "Oct 2025 — Jan 2026",
        points: [
            "Led end-to-end development of production features across the MERN stack, from architecture to deployment",
            "Architected clean, reusable frontend components delivering responsive and high-performance user experiences",
            "Designed and optimized REST APIs and database schemas for scalable data handling",
            "Reduced performance bottlenecks by refactoring inefficient queries and resolving system-level issues",
            "Worked in a startup setting with rapid release cycles, taking full ownership of feature quality and delivery"
        ]
    },
];

export default function ExperienceSection() {
    const headerRef = useScrollAnimation();
    const listRef = useScrollAnimation();

    return (
        <section className="mt-16 sm:mt-24 md:mt-32">
            <div ref={headerRef} className="flex flex-col sm:flex-row items-start sm:items-baseline gap-3 sm:gap-4 mb-2 animate-on-scroll">
                <h2 className="text-3xl sm:text-4xl md:text-[48px] font-medium tracking-[-1px]">
                    My Experience
                </h2>
                <div className="hidden sm:block flex-1 h-px bg-[#262626] mx-4 self-center" />
                <div className="flex items-center gap-2">
                    <span className="text-sm text-[#82ff1d] font-bold">1+</span>
                    <span className="text-sm text-[#666] font-medium">
                        Years of Experience
                    </span>
                </div>
            </div>

            <div ref={listRef} className="mt-8 sm:mt-10 md:mt-12 animate-stagger">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="py-8 sm:py-10 md:py-12 flex flex-col md:flex-row md:items-start group transition-all duration-300"
                    >
                        {/* Left Section */}
                        <div className="md:w-1/2">
                            <h3 className="text-lg sm:text-xl font-medium mb-1 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                                <span>{exp.role}</span>
                                <span className="text-[#878686] text-base sm:text-lg">
                                    • {exp.company}
                                </span>
                            </h3>

                            {/* View Certificate Button */}
                            <a
                                href={exp.certificateLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-3 sm:mt-4 px-4 py-2 text-sm font-medium hover:bg-[#82ff1d] hover:text-black transition-all duration-300 rounded-[100px]"
                            >
                                View Certificate
                            </a>

                            <ul className="text-[#878686] text-sm sm:text-[15px] leading-relaxed mt-4 sm:mt-6 max-w-[500px] space-y-2 sm:space-y-3">
                                {exp.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-2 sm:gap-3">
                                        <span className="w-2 h-2 bg-[#82ff1d] rounded-full mt-1.5 sm:mt-2 shrink-0"></span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-1/2 flex md:justify-end mt-4 sm:mt-6 md:mt-0">
                            <span className="text-[#878686] font-medium tracking-tight text-sm sm:text-base">
                                {exp.period}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
