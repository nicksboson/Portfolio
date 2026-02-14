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
        <section className="mt-32">
            <div ref={headerRef} className="flex items-baseline gap-4 mb-2 animate-on-scroll">
                <h2 className="text-[48px] font-medium tracking-[-1px]">
                    My Experience
                </h2>
                <div className="flex-1 h-px bg-[#262626] mx-4 self-center" />
                <div className="flex items-center gap-2 translate-y-[-10px]">
                    <span className="text-sm text-[#82ff1d] font-bold">1+</span>
                    <span className="text-sm text-[#666] font-medium">
                        Years of Experience
                    </span>
                </div>
            </div>

            <div ref={listRef} className="mt-12 animate-stagger">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="py-12 flex flex-col md:flex-row md:items-start group transition-all duration-300"
                    >
                        {/* Left Section */}
                        <div className="md:w-1/2">
                            <h3 className="text-xl font-medium mb-1 flex items-center gap-3">
                                {exp.role}
                                <span className="text-[#878686] text-lg">
                                    • {exp.company}
                                </span>
                            </h3>

                            {/* View Certificate Button */}
                            <a
                                href={exp.certificateLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 px-4 py-2 text-sm font-medium hover:bg-[#82ff1d] hover:text-black transition-all duration-300 rounded-[100px]"
                            >
                                View Certificate
                            </a>

                            <ul className="text-[#878686] text-[15px] leading-relaxed mt-6 max-w-[500px] space-y-3">
                                {exp.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-[#82ff1d] rounded-full mt-2 shrink-0"></span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-1/2 flex md:justify-end mt-6 md:mt-0">
                            <span className="text-[#878686] font-medium tracking-tight">
                                {exp.period}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
