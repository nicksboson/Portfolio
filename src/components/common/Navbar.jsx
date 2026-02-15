import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import image from "../../assets/images/logo.png";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [menuOpen]);

    return (
        <>
            <nav className="flex items-center justify-between py-6 animate-entry-fade relative z-[60]">
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

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-full bg-[#262626] border border-white/5 gap-[5px] transition-all duration-300 cursor-pointer hover:border-white/10"
                    aria-label="Toggle menu"
                >
                    <span className={`block w-[16px] h-[1.5px] bg-white/80 rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[3.25px]" : ""}`} />
                    <span className={`block w-[16px] h-[1.5px] bg-white/80 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
                    <span className={`block w-[16px] h-[1.5px] bg-white/80 rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[3.25px]" : ""}`} />
                </button>
            </nav>

            {/* ── Mobile Menu ── */}
            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setMenuOpen(false)}
            />

            {/* Menu Panel */}
            <div
                className={`fixed top-0 right-0 z-50 w-full h-full bg-[#0A0A0A] md:hidden transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Menu Header */}
                <div className="flex items-center justify-between py-6 px-4 sm:px-6">
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                        <img src={image} alt="" className="w-[30px] h-[40px] rounded-full mt-[5px]" />
                    </Link>
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#262626] border border-white/5 transition-all duration-300 cursor-pointer hover:border-white/10"
                        aria-label="Close menu"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/5 mx-4 sm:mx-6" />

                {/* Navigation Links */}
                <div className="flex flex-col px-4 sm:px-6 mt-6">
                    {[
                        { to: "/", label: "Home" },
                        { to: "/about", label: "About" },
                        { to: "/work", label: "Work" },
                       
                    ].map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-between py-5 border-b border-white/5 group"
                        >
                            <span className="text-white/70 text-[15px] font-medium group-hover:text-white transition-colors duration-300">
                                {item.label}
                            </span>
                            <span className="text-white/20 group-hover:text-[#82ff1d] transition-all duration-300">
                                ↗
                            </span>
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="px-4 sm:px-6 mt-8">
                    <Link
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#82ff1d] text-black font-semibold text-sm hover:bg-white transition duration-300"
                    >
                        Let's Talk
                        <span>→</span>
                    </Link>
                </div>

                {/* Footer — social + email */}
                <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 pb-10">
                    <div className="h-px bg-white/5 mb-6" />
                    <div className="flex items-center justify-between">
                        <span className="text-[#878686] text-xs font-medium">garkotinikhil247@gmail.com</span>
                        <div className="flex items-center gap-4 text-[#878686]">
                            <a href="https://x.com/nicksbosonn" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300 text-sm">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/nikhil_garkoti/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300 text-sm">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/nikhil-garkoti/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300 text-sm">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
