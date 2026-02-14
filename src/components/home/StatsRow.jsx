import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function StatsRow() {
    const sectionRef = useScrollAnimation();

    return (
        <div ref={sectionRef} className="mt-12 flex items-center gap-12 pt-12 animate-on-scroll">
            {/* Stats Row */}
            <div className="flex items-center gap-8 flex-1">
                <Stat value="1+" label="Years of Experience" />
                <div className="h-px bg-[#262626] flex-1" />
                <Stat value="10+" label="Projects Completed" />
                <div className="h-px bg-[#262626] flex-1" />
            </div>

            {/* Button */}
            <Link to="/about" className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#262626] border border-white/5 hover:bg-[#82ff1c] hover:text-black transition duration-300 text-sm text-white/80 cursor-pointer">
                More about me
                <span className="text-xs">↗</span>
            </Link>
        </div>
    );
}

function Stat({ value, label }) {
    return (
        <div className="flex items-center gap-2">
            <span className="text-[#7CFF00] font-medium text-sm">{value}</span>
            <span className="text-[#666] text-sm">{label}</span>
        </div>
    );
}
