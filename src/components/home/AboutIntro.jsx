import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function AboutIntro() {
    const sectionRef = useScrollAnimation();

    return (
        <section ref={sectionRef} className="mt-32 animate-on-scroll">
            <h2 className="text-[42px] leading-[1.15] tracking-[-0.5px] max-w-[950px]">
                I stay ahead of trends, integrating the latest
                <br />
                design principles and technologies{" "}
                <span className="text-[#666]">
                    to help
                    <br />
                    businesses establish a strong online presence.
                </span>
            </h2>
        </section>
    );
}
