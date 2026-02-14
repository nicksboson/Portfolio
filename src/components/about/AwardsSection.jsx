import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const awards = [
    { name: "TIC Hackathon", honor: "Winner", year: "2025", certificateLink: "https://drive.google.com/file/d/1EFZSRca-R2nB-Emk0lY1P86gtSm9oIqz/view?usp=sharing" },
];

export default function AwardsSection() {
    const headerRef = useScrollAnimation();
    const listRef = useScrollAnimation();

    return (
        <section className="mt-32">
            <div ref={headerRef} className="flex items-baseline gap-4 mb-2 animate-on-scroll">
                <h2 className="text-[48px] font-medium tracking-[-1px]">My Recognitions</h2>
                <div className="flex-1 h-px bg-[#262626] mx-4 self-center" />
                <div className="flex items-center gap-2 translate-y-[-15px]">
                    <span className="text-sm text-[#82ff1d] font-bold">o</span>
                    <span className="text-sm text-[#666] font-medium">Awards & Recognitions</span>
                </div>
            </div>

            <div ref={listRef} className="mt-12 animate-stagger">
                {awards.map((award, index) => (
                    <a
                        key={index}
                        href={award.certificateLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-8 flex items-center justify-between group cursor-pointer transition-all duration-300"
                    >
                        <h3 className="text-xl font-medium flex items-center gap-3">
                            {award.name}
                            <span className="text-[#878686] text-lg">• {award.honor}</span>
                        </h3>
                        <div className="flex items-center gap-4">
                            <span className="text-[#878686] font-medium group-hover:text-white transition-colors duration-300">{award.year}</span>
                            <span className="text-[#82ff1d] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
