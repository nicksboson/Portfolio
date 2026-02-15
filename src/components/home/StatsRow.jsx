import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function StatsRow() {
    const sectionRef = useScrollAnimation();

    return (
        <div ref={sectionRef} className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 md:gap-12 pt-8 sm:pt-10 md:pt-12 animate-on-scroll">
            {/* Stats Row */}
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-1 w-full sm:w-auto">
                <Stat value="1+" label="Years of Experience" />
                <div className="h-px bg-[#262626] flex-1" />
                <Stat value="10+" label="Projects Completed" />
                <div className="hidden sm:block h-px bg-[#262626] flex-1" />
            </div>

            {/* Button */}
            <Link to="/about" className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#262626] border border-white/5 hover:bg-[#82ff1c] hover:text-black transition duration-300 text-xs sm:text-sm text-white/80 cursor-pointer whitespace-nowrap">
                More about me
                <span className="text-xs">↗</span>
            </Link>
        </div>
    );
}

function Stat({ value, label }) {
    return (
        <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
            <span className="text-[#7CFF00] font-medium text-xs sm:text-sm">{value}</span>
            <span className="text-[#666] text-xs sm:text-sm">{label}</span>
        </div>
    );
}
