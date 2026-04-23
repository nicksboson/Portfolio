import { Link } from "react-router-dom";
import AvailabilityStatus from "../common/AvailabilityStatus";
import image from "../../assets/images/profile/image1.jpeg";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function Hero() {
    const sectionRef = useScrollAnimation();

    return (
        <section ref={sectionRef} className="mt-10 sm:mt-12 md:mt-16">
            {/* Profile block */}
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 animate-entry-slide delay-100">
                {/* Avatar */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-[#262626] shrink-0">
                    <img src={image} alt="image" fetchpriority="high" className="w-full h-full object-cover scale-110" />
                </div>

                {/* Name + socials */}
                <div>
                    <p className="font-medium text-lg sm:text-xl">Nikhil Garkoti</p>
                    <div className="flex items-center gap-3 mt-0.5 text-[#666] text-sm">
                        <a href="https://x.com/nicksbosonn" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/nick_codedit/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/nikhil-garkoti/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] leading-[1.1] lg:leading-[1.05] font-medium tracking-[-1px] md:tracking-[-2px] mt-6 sm:mt-8 md:mt-10 animate-entry-slide delay-200">
                I Architect Scalable Web Solutions That
                <br className="hidden md:block" />
                {" "}Drive Growth & Innovation.
            </h1>

            {/* Description */}
            <p className="max-w-[600px] text-[#878686] leading-relaxed mt-6 sm:mt-8 md:mt-10 animate-entry-slide delay-300 text-base sm:text-lg">
                As a Full Stack Developer, I specialize in building robust, high-performance applications.
                Whether it's a complex backend architecture or a pixel-perfect frontend, I turn ideas into seamless digital experiences ready for scale.
            </p>

            {/* CTA + Availability Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-10 sm:mt-12 md:mt-16 animate-entry-slide delay-400">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#82ff1d] text-black font-semibold hover:bg-white transition duration-300 hover:cursor-pointer whitespace-nowrap text-sm sm:text-base">
                    <i className="fa-solid fa-bolt"></i> Start Your Project
                </Link>
                <div className="hidden sm:block flex-1 h-px bg-[#262626]" />
                <AvailabilityStatus />
            </div>
        </section>
    );
}
