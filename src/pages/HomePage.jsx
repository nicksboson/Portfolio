import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import ShowcaseSection from "../components/Showcase/ShowcaseSection";
import AboutIntro from "../components/home/AboutIntro";
import StatsRow from "../components/home/StatsRow";
import ProcessSection from "../components/home/ProcessSection";
import FinalCTA from "../components/common/FinalCTA";

export default function HomePage() {
    return (
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 animate-entry-fade">
            <Navbar />
            <Hero />
            <ShowcaseSection />
            <AboutIntro />
            <StatsRow />
            <ProcessSection />
            <FinalCTA />
        </div>
    );
}
