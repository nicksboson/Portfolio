import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import image from "../../assets/images/profile/me3.jpeg";

export default function AboutHero() {
    const textRef = useScrollAnimation();
    const imageRef = useScrollAnimation();

    return (
        <section className="mt-[10px] flex flex-col lg:flex-row gap-12 items-center">
            <div ref={textRef} className="flex-1 animate-from-left">
                <h1 className="text-[40px] font-medium leading-[1.1] tracking-[-1px] mt-[100px]">
                    Hi, I'm <span className="text-white">Nikhil Garkoti</span>, a Full Stack Developer passionate about building <span className="text-white">robust, scalable applications</span> that solve <br />real-world problems.
                    <span className="text-[#878686] block mt-6 text-xl leading-relaxed">
                        I bridge the gap between design and engineering, crafting seamless digital experiences from server-side logic to intuitive user interfaces. Ready to contribute, learn, and build the future of the web.
                    </span>
                </h1>
            </div>
            <div ref={imageRef} className="flex-1 animate-from-right">
                <div className="rounded-[30px] overflow-hidden bg-[#FFB800] relative h-[450px] mt-[50px] ml-[144.5px]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <img
                        src={image}
                        alt="Nikhil Garkoti"
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
