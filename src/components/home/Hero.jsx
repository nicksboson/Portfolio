import { Link } from "react-router-dom";
import AvailabilityStatus from "../common/AvailabilityStatus";
import image from "../../assets/images/profile/image1.jpeg";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function Hero() {
    const sectionRef = useScrollAnimation();

    return (
        <section ref={sectionRef} className="mt-16">
            {/* Profile block */}
            <div className="flex items-center gap-4 mb-8 animate-entry-slide delay-100">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img src={image} alt="image" className="w-full h-full object-cover scale-110" />
                </div>

                {/* Name + socials */}
                <div>
                    <p className="font-medium text-xl">Nikhil Garkoti</p>
                    <div className="flex items-center gap-3 mt-0.5 text-[#666] text-sm">
                        <a href="https://x.com/nicksbosonn" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/nikhil_garkoti/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/nikhil-garkoti/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Heading */}
            <h1 className="text-[70px] leading-[1.05] font-medium tracking-[-2px] mt-10 animate-entry-slide delay-200">
                I Architect Scalable Web Solutions That
                <br />
                Drive Growth & Innovation.
            </h1>

            {/* Description */}
            <p className="max-w-[600px] text-[#878686] leading-relaxed mt-10 animate-entry-slide delay-300 text-lg">
                As a Full Stack Developer, I specialize in building robust, <br />high-performance applications.
                Whether it's a complex backend architecture or a pixel-perfect frontend, I turn ideas into seamless digital experiences ready for scale.
            </p>

            {/* CTA + Availability Row */}
            <div className="flex items-center gap-6 mt-16 animate-entry-slide delay-400">
                <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#82ff1d] text-black font-semibold hover:bg-white transition duration-300 hover:cursor-pointer whitespace-nowrap">
                    <i className="fa-solid fa-bolt"></i> Start Your Project
                </Link>
                <div className="flex-1 h-px bg-[#262626]" />
                <AvailabilityStatus />
            </div>
        </section>
    );
}
