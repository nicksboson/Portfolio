import Navbar from "../components/common/Navbar";
import FinalCTA from "../components/common/FinalCTA";
import AboutHero from "../components/about/AboutHero";
import InfoBar from "../components/about/InfoBar";
import ExperienceSection from "../components/about/ExperienceSection";
import AwardsSection from "../components/about/AwardsSection";
import StackGrid from "../components/about/StackGrid";

export default function AboutPage() {
    return (
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 animate-entry-fade pb-20">
            <Navbar />
            <div className="animate-entry-slide">
                <AboutHero />
                <InfoBar />
                <ExperienceSection />
                <AwardsSection />
                <StackGrid />
            </div>
            <FinalCTA />
        </div>
    );
}
