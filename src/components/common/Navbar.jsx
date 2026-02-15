import { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/logo.png";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between py-6 animate-entry-fade relative">
            {/* Logo */}
            <Link to="/">
                <img src={image} alt="" className="w-[30px] h-[40px] rounded-full mt-[5px]" />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                <Link to="/about" className="text-white/70 hover:text-white transition duration-300 cursor-pointer">About</Link>
                <Link to="/work" className="text-white/70 hover:text-white transition duration-300 cursor-pointer">Work</Link>

                <Link to="/contact" className="px-6 py-2.5 rounded-full bg-[#262626] border border-white/5 text-white/80 hover:bg-[#82ff1d] hover:text-black transition duration-300 cursor-pointer">
                    Contact me
                </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-full bg-[#262626] border border-white/5 gap-1.5 transition-all duration-300 cursor-pointer"
                aria-label="Toggle menu"
            >
                <span className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
                <span className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
            </button>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="absolute top-full left-0 right-0 z-50 bg-[#0d0d0d]/98 backdrop-blur-xl border border-white/5 rounded-2xl mt-2 p-6 flex flex-col gap-4 text-sm font-medium md:hidden animate-entry-slide">
                    <Link to="/about" onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-white transition duration-300 py-3 border-b border-white/5">About</Link>
                    <Link to="/work" onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-white transition duration-300 py-3 border-b border-white/5">Work</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)} className="px-6 py-3 rounded-full bg-[#82ff1d] text-black font-semibold text-center hover:bg-white transition duration-300 mt-2">
                        Contact me
                    </Link>
                </div>
            )}
        </nav>
    );
}
