import { Link } from "react-router-dom";
import ProcessCard from "./ProcessCard";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function ProcessSection() {
    const headerRef = useScrollAnimation();
    const cardsRef = useScrollAnimation();

    return (
        <section className="mt-32">
            {/* Header */}
            <div ref={headerRef} className="flex items-center gap-10 mb-16 animate-on-scroll">
                <h3 className="text-[52px] font-medium whitespace-nowrap">My Process</h3>
                <div className="flex-1 h-px bg-[#262626]" />
                <Link to="/contact" className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#262626] border border-white/5 hover:bg-[#82ff1c] hover:text-black transition duration-300 text-sm text-white/80 cursor-pointer">
                    Let's get started
                    <span>→</span>
                </Link>
            </div>

            {/* Process Cards */}
            <div ref={cardsRef} className="animate-stagger">
                <ProcessCard
                    step="1"
                    title="Understanding the Problem"
                    desc="I begin by understanding the business goal, target users, and technical constraints. I break the problem into clear modules, define the tech stack, and plan a scalable architecture that supports future growth."
                />

                <ProcessCard
                    step="2"
                    title="Building a Clean & Scalable Frontend"
                    desc="I transform UI designs into responsive, production-ready interfaces using modern frameworks. My focus is clean component structure, performance optimization, and intuitive user experience."
                />

                <ProcessCard
                    step="3"
                    title="Engineering a Reliable Backend"
                    desc="I develop secure APIs, implement efficient database schemas, and ensure smooth frontend–backend communication. I prioritize performance, validation, and scalable data handling."
                />

                <ProcessCard
                    step="4"
                    title="Testing, Deployment & Iteration"
                    desc="Before shipping, I test for edge cases, optimize performance, and ensure stability. I handle deployment and continuously improve the product based on feedback and real-world usage."
                />
            </div>
        </section>
    );
}
