import Navbar from "../components/common/Navbar";
import ShowcaseGrid from "../components/Showcase/ShowcaseGrid";
import FinalCTA from "../components/common/FinalCTA";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function WorkPage() {
    const headerRef = useScrollAnimation();

    return (
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 animate-entry-fade">
            <Navbar />

            <section className="mt-12 sm:mt-16 md:mt-20 mb-12 sm:mb-16 md:mb-20">
                <div ref={headerRef} className="animate-on-scroll">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-semibold tracking-[-1px] md:tracking-[-2px] mb-4 sm:mb-6 md:mb-8">Recent Projects</h1>
                    <p className="text-[#878686] max-w-[600px] text-sm sm:text-base leading-[1.3]">
                        Here's a glimpse of some of my latest work. Each project is designed with strategy, creativity, and user experience in mind.
                    </p>
                </div>
            </section>

            <section className="mb-16 md:mb-32">
                <ShowcaseGrid />
            </section>

            <FinalCTA />
        </div>
    );
}
