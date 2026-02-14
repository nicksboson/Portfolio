import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function InfoBar() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const sectionRef = useScrollAnimation();

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div ref={sectionRef} className="mt-20 py-8 flex flex-col md:flex-row items-center gap-6 animate-on-scroll">
            <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-[#82ff1d]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                </span>
                <span className="text-sm font-medium text-white/50">Based in INDIA</span>
            </div>

            <div className="hidden md:block flex-1 h-px bg-[#262626]" />

            <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-[#82ff1d]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                </span>
                <span className="text-sm font-medium text-white">{time}</span>
            </div>

            <div className="hidden md:block flex-1 h-px bg-[#262626]" />

            <Link to="/contact" className="px-8 py-3 rounded-full bg-[#82ff1d] text-black font-semibold hover:bg-white transition duration-300 cursor-pointer flex items-center gap-2 whitespace-nowrap">
                Let's Talk <span>→</span>
            </Link>
        </div>
    );
}
