import { useState } from "react";
import Navbar from "../components/common/Navbar";
import image from "../assets/images/profile/image1.jpeg";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const heroRef = useScrollAnimation();
    const formRef = useScrollAnimation();
    const profileRef = useScrollAnimation();
    const contactRef = useScrollAnimation();
    const footerRef = useScrollAnimation();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 animate-entry-fade pb-20">
            <Navbar />

            {/* Hero Section */}
            <section ref={heroRef} className="mt-12 sm:mt-16 md:mt-[100px] animate-on-scroll">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-medium tracking-[-1px] md:tracking-[-2px] leading-[1]">
                    Let's Talk
                </h1>
                <p className="text-[#878686] text-sm sm:text-[16px] leading-[1.7] mt-4 sm:mt-6 md:mt-8 max-w-[600px]">
                    Let's bring your vision to life! Whether you need a brand-new website, a
                    redesign, or expert guidance on your digital presence, I'm here to help.
                </p>
            </section>

            {/* Contact Info Bar */}
            <div className="mt-10 sm:mt-14 md:mt-20 py-6 md:py-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 md:justify-between animate-entry-slide delay-200">
                {/* Book a Call Button */}
                <a
                    href="mailto:garkotinikhil247@gmail.com"
                    className="flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#82ff1d] text-black font-semibold text-sm hover:bg-white transition duration-300 cursor-pointer"
                >
                    <i className="fa-solid fa-video text-xs"></i>
                    Book a Call
                </a>

                <div className="hidden md:block flex-1 h-px bg-[#262626] mx-8" />

                {/* Email */}
                <a href="mailto:garkotinikhil247@gmail.com" className="flex items-center gap-2 text-white font-medium hover:opacity-80 transition duration-300 text-sm sm:text-base">
                    <i className="fa-solid fa-square text-[#82ff1d] text-[8px] transform rotate-45"></i>
                    <span className="break-all sm:break-normal">garkotinikhil247@gmail.com</span>
                </a>

                <div className="hidden md:block flex-1 h-px bg-[#262626] mx-8" />

                {/* Phone */}
                <a href="tel:+917895148375" className="flex items-center gap-2 text-white font-medium hover:opacity-80 transition duration-300 text-sm sm:text-base">
                    <i className="fa-solid fa-phone text-[#82ff1d] text-xs"></i>
                    <span>(+91) 7895148375</span>
                </a>

                <div className="hidden md:block flex-1 h-px bg-[#262626] mx-8" />

                {/* Social Icons */}
                <div className="flex items-center gap-3 text-[#878686]">
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
            </div>

            {/* Form Section */}
            <section ref={formRef} className="mt-12 sm:mt-16 md:mt-24 flex flex-col md:flex-row gap-10 md:gap-20 animate-on-scroll">
                {/* Left - Heading */}
                <div className="md:flex-1 pt-0 md:pt-4">
                    <h2 className="text-2xl sm:text-3xl md:text-[42px] font-medium leading-[1.2] tracking-[-0.5px] md:tracking-[-1px]">
                        <span className="text-white">Reach out,</span>
                        <span className="text-[#878686]"> and let's create something amazing together.</span>
                    </h2>
                </div>

                {/* Right - Form */}
                <div className="md:flex-1">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
                        {/* Name */}
                        <div>
                            <label className="text-sm text-[#878686] mb-2 block">Name*</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="John"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#141414] border border-white/5 rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 text-white text-sm placeholder-[#555] outline-none focus:border-white/20 transition duration-300"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-sm text-[#878686] mb-2 block">Email*</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="contact@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#141414] border border-white/5 rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 text-white text-sm placeholder-[#555] outline-none focus:border-white/20 transition duration-300"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="text-sm text-[#878686] mb-2 block">Message*</label>
                            <textarea
                                name="message"
                                placeholder="Project inquiry..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="w-full bg-[#141414] border border-white/5 rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 text-white text-sm placeholder-[#555] outline-none focus:border-white/20 transition duration-300 resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3.5 sm:py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#82ff1d] transition duration-300 cursor-pointer"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer Section */}
            <section className="mt-16 sm:mt-24 md:mt-32 pb-8">
                {/* Profile */}
                <div ref={profileRef} className="mb-12 sm:mb-16 md:mb-24 animate-from-left">
                    <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full overflow-hidden mb-4 sm:mb-6 border border-white/5">
                        <img src={image} alt="Nikhil Garkoti" loading="lazy" className="w-full h-full object-cover scale-110" />
                    </div>
                    <p className="text-base sm:text-lg md:text-[20px] leading-relaxed max-w-[500px]">
                        <span className="text-white font-medium">I'm Nikhil Garkoti,</span>
                        <span className="text-[#878686]"> a Full Stack Developer with 1 year of experience crafting modern, high-performing websites that help businesses stand out.</span>
                    </p>
                </div>

                {/* Contact Row */}
                <div ref={contactRef} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-6 sm:py-8 animate-on-scroll">
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

                    <div className="hidden sm:block flex-1 h-px bg-[#262626]" />

                    {/* Email */}
                    <a href="mailto:garkotinikhil247@gmail.com" className="flex items-center gap-2 text-white font-medium hover:opacity-80 transition duration-300 text-sm sm:text-base">
                        <i className="fa-solid fa-square text-[#82ff1d] text-[8px] transform rotate-45"></i>
                        <span className="break-all sm:break-normal">garkotinikhil247@gmail.com</span>
                    </a>

                    <div className="hidden sm:block flex-1 h-px bg-[#262626]" />

                    {/* Phone */}
                    <a href="tel:+917895148375" className="flex items-center gap-2 text-white font-medium hover:opacity-80 transition duration-300 text-sm sm:text-base">
                        <i className="fa-solid fa-phone text-[#82ff1d] text-xs"></i>
                        <span>(+91) 7895148375</span>
                    </a>
                </div>

                {/* Footer Navigation */}
                <div ref={footerRef} className="mt-10 sm:mt-16 flex justify-center animate-scale">
                    <div className="px-6 sm:px-10 py-3 sm:py-4 bg-[#0A0A0A] border border-white/5 rounded-full flex items-center gap-4 sm:gap-8 text-xs sm:text-sm text-[#878686] font-medium">
                        <a href="/" className="hover:text-white transition duration-300">Home</a>
                        <a href="/about" className="hover:text-white transition duration-300">About</a>
                        <a href="/#work" className="hover:text-white transition duration-300">Work</a>
                        <a href="/contact" className="hover:text-white transition duration-300">Contact</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
