import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const awards = [
    { name: "TIC Hackathon", honor: "Winner", year: "2025", certificateLink: "https://drive.google.com/file/d/1EFZSRca-R2nB-Emk0lY1P86gtSm9oIqz/view?usp=sharing" },
];

export default function AwardsSection() {
    const headerRef = useScrollAnimation();
    const listRef = useScrollAnimation();

    return (
        <section className="mt-16 sm:mt-24 md:mt-32">
            <div ref={headerRef} className="flex flex-col sm:flex-row items-start sm:items-baseline gap-3 sm:gap-4 mb-2 animate-on-scroll">
                <h2 className="text-3xl sm:text-4xl md:text-[48px] font-medium tracking-[-1px]">My Recognitions</h2>
                <div className="hidden sm:block flex-1 h-px bg-[#262626] mx-4 self-center" />
                <div className="flex items-center gap-2">
                    <span className="text-sm text-[#82ff1d] font-bold">o</span>
                    <span className="text-sm text-[#666] font-medium">Awards & Recognitions</span>
                </div>
            </div>

            <div ref={listRef} className="mt-8 sm:mt-10 md:mt-12 animate-stagger">
                {awards.map((award, index) => (
                    <a
                        key={index}
                        href={award.certificateLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center justify-between group cursor-pointer transition-all duration-300 gap-3 sm:gap-0"
                    >
                        <h3 className="text-lg sm:text-xl font-medium flex items-center gap-2 sm:gap-3">
                            {award.name}
                            <span className="text-[#878686] text-base sm:text-lg">• {award.honor}</span>
                        </h3>
                        <div className="flex items-center gap-3 sm:gap-4">
                            <span className="text-[#878686] font-medium text-sm sm:text-base group-hover:text-white transition-colors duration-300">{award.year}</span>
                            <span className="text-[#82ff1d] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                                </svg>
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
