import { Link } from "react-router-dom";
import image from "../../assets/images/profile/image1.jpeg";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function FinalCTA() {
    const profileRef = useScrollAnimation();
    const ctaRef = useScrollAnimation();
    const contactRef = useScrollAnimation();
    const footerRef = useScrollAnimation();

    return (
        <section className="mt-32 pb-8">
            {/* Profile Section */}
            <div ref={profileRef} className="mb-24 animate-from-left">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border border-white/5">
                    <img src={image} alt="image" className="w-full h-full object-cover scale-110" />
                </div>

                {/* Bio Text */}
                <p className="text-[20px] leading-relaxed max-w-[500px]">
                    <span className="text-white font-medium">I'm Nikhil Garkoti,</span>
                    <span className="text-[#878686]"> a Full Stack Developer with 1 year of experience crafting modern, high-performing websites that help businesses stand out.</span>
                </p>
            </div>

            {/* CTA Row */}
            <div ref={ctaRef} className="flex items-center gap-10 mb-20 animate-on-scroll">
                <h2 className="text-[72px] font-medium tracking-[-1px] whitespace-nowrap">Let's Work Together!</h2>
                <div className="flex-1 h-px bg-[#262626]" />
                <Link
                    to="/contact"
                    className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#82ff1d] text-black font-semibold hover:bg-white transition duration-300 hover:cursor-pointer whitespace-nowrap"
                >
                    Let's Talk
                    <span>→</span>
                </Link>
            </div>

            {/* Contact Row */}
            <div ref={contactRef} className="flex items-center gap-8 py-8 animate-on-scroll">
                {/* Social Icons */}
                <div className="flex items-center gap-4 text-[#878686]">
                    <a href="https://x.com/nicksbosonn" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <span className="text-[6px] text-[#82ff1d]">•</span>
                    <a href="https://www.instagram.com/nikhil_garkoti/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <span className="text-[6px] text-[#82ff1d]">•</span>
                    <a href="https://www.linkedin.com/in/nikhil-garkoti/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </div>

                <div className="flex-1 h-px bg-[#262626]" />

                {/* Email */}
                <a href="mailto:garkotinikhil247@gmail.com" className="flex items-center gap-2 text-white font-medium hover:opacity-80 transition duration-300">
                    <i className="fa-solid fa-square text-[#82ff1d] text-[8px] transform rotate-45"></i>
                    <span>garkotinikhil247@gmail.com</span>
                </a>

                <div className="flex-1 h-px bg-[#262626]" />

                {/* Phone */}
                <a href="tel:+917895148375" className="flex items-center gap-2 text-white font-medium hover:opacity-80 transition duration-300">
                    <i className="fa-solid fa-phone text-[#82ff1d] text-xs"></i>
                    <span>(+91) 7895148375</span>
                </a>
            </div>

            {/* Footer Navigation */}
            <div ref={footerRef} className="mt-16 flex justify-center animate-scale">
                <div className="px-10 py-4 bg-[#0A0A0A] border border-white/5 rounded-full flex items-center gap-8 text-sm text-[#878686] font-medium">
                    <a href="/" className="hover:text-white transition duration-300">Home</a>
                    <a href="/about" className="hover:text-white transition duration-300">About</a>
                    <a href="/work" className="hover:text-white transition duration-300">Work</a>
                    <a href="/contact" className="hover:text-white transition duration-300">Contact</a>
                </div>
            </div>
        </section>
    );
}
