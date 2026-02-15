import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import FinalCTA from "../components/common/FinalCTA";
import { getProjectBySlug, getOtherProjects } from "../data/projects";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function ProjectPage() {
    const { slug } = useParams();
    const project = getProjectBySlug(slug);
    const otherProjects = getOtherProjects(slug, 3);

    const heroRef = useScrollAnimation();
    const imgRef = useScrollAnimation();
    const overviewRef = useScrollAnimation();
    const challengesRef = useScrollAnimation();
    const featuresRef = useScrollAnimation();
    const functionalityRef = useScrollAnimation();
    const moreRef = useScrollAnimation();

    if (!project) {
        return (
            <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 animate-entry-fade">
                <Navbar />
                <div className="mt-20 md:mt-32 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-[72px] font-semibold">404</h1>
                    <p className="text-[#878686] mt-4">Project not found.</p>
                    <Link
                        to="/work"
                        className="inline-block mt-8 px-8 py-4 rounded-full bg-[#82ff1d] text-black font-semibold hover:bg-white transition duration-300"
                    >
                        Back to Work
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 animate-entry-fade">
            <Navbar />

            {/* ───── Hero Section ───── */}
            <section ref={heroRef} className="mt-12 sm:mt-16 md:mt-20 mb-8 sm:mb-12 md:mb-16 animate-on-scroll">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-semibold tracking-[-1px] md:tracking-[-3px] leading-[1.1] md:leading-[1] mb-4 sm:mb-6 md:mb-8">
                    {project.title}
                </h1>

                <p className="text-[#878686] text-base sm:text-lg max-w-[500px] leading-[1.6] mb-6 sm:mb-8 md:mb-12">
                    {project.description}
                </p>

                {/* Tags Row */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {project.tags.map((tag, i) => (
                        <React.Fragment key={i}>
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#878686] whitespace-nowrap">
                                <i className={`${tag.icon} text-[#82ff1d] text-xs`}></i>
                                <span>{tag.label}</span>
                            </div>
                            <div className="hidden sm:block flex-1 h-px bg-[#262626] min-w-[20px]" />
                        </React.Fragment>
                    ))}

                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#82ff1d] text-black font-semibold text-xs sm:text-sm hover:bg-white transition duration-300 whitespace-nowrap"
                    >
                        <i className="fa-solid fa-eye text-xs"></i>
                        View Website
                    </a>
                </div>
            </section>

            {/* ───── Main Showcase (Video or Image) ───── */}
            <section ref={imgRef} className="mb-10 sm:mb-14 md:mb-20 animate-on-scroll">
                <div
                    className="rounded-2xl sm:rounded-3xl p-3 sm:p-6 md:p-10 overflow-hidden"
                    style={{ backgroundColor: project.bgColor }}
                >
                    <div className="overflow-hidden rounded-lg sm:rounded-xl aspect-video bg-white/5 relative">
                        {project.video ? (
                            <video
                                src={project.video}
                                poster={project.image}
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="metadata"
                                disablePictureInPicture
                                controlsList="nodownload nofullscreen noremoteplayback"
                                onContextMenu={(e) => e.preventDefault()}
                                onPause={(e) => e.target.play()}
                                className="w-full h-full object-cover pointer-events-none select-none absolute inset-0"
                            />
                        ) : (
                            <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                className="w-full h-full object-cover shadow-2xl absolute inset-0"
                            />
                        )}
                    </div>
                </div>
            </section>

            {/* ───── Project Overview ───── */}
            {project.overview && (
                <section ref={overviewRef} className="mb-12 sm:mb-16 md:mb-24 animate-on-scroll">
                    <span className="text-xs font-semibold tracking-[3px] text-[#878686] uppercase mb-3 sm:mb-4 block">
                        Background
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-[42px] lg:text-[52px] font-semibold tracking-[-1px] md:tracking-[-2px] leading-[1.1] mb-4 sm:mb-6 md:mb-8">
                        Project Overview.
                    </h2>
                    <p className="text-[#a0a0a0] text-base sm:text-lg md:text-xl leading-[1.7] md:leading-[1.8] max-w-full">
                        {project.overview}
                    </p>
                </section>
            )}

            {/* ───── Challenges & Problems ───── */}
            {project.challenges && (
                <section ref={challengesRef} className="mb-12 sm:mb-16 md:mb-24 animate-on-scroll">
                    <h2 className="text-2xl sm:text-3xl md:text-[42px] lg:text-[52px] font-semibold tracking-[-1px] md:tracking-[-2px] leading-[1.1] mb-6 sm:mb-8 md:mb-12">
                        Challenges and Problems.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                        {project.challenges.map((item, i) => (
                            <div key={i} className="flex flex-col gap-3 sm:gap-4">
                                <div className="flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-[#111] border border-white/5">
                                    <i className={`${item.icon} text-white text-lg sm:text-xl`}></i>
                                </div>
                                <p className="text-[#a0a0a0] text-sm sm:text-[15px] leading-[1.7] max-w-[440px]">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* ───── Features ───── */}
            {project.features && (
                <section ref={featuresRef} className="mb-12 sm:mb-16 md:mb-24 animate-on-scroll">
                    <div className="flex items-center gap-4 mb-2">
                        {project.tags?.find(t => t.label.includes("202")) && (
                            <span className="text-xs font-semibold tracking-[3px] text-[#878686] uppercase">
                                {project.tags.find(t => t.label.includes("202")).label}
                            </span>
                        )}
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-[42px] lg:text-[52px] font-semibold tracking-[-1px] md:tracking-[-2px] leading-[1.1] mb-6 sm:mb-8 md:mb-10">
                        Features.
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                        {project.features.map((feat, i) => (
                            <div
                                key={i}
                                className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#111] border border-white/5 hover:border-[#82ff1d]/20 transition duration-300"
                            >
                                <h3 className="text-white text-base sm:text-lg font-semibold mb-2 sm:mb-3 leading-[1.3]">
                                    {feat.title}
                                </h3>
                                <p className="text-[#878686] text-xs sm:text-[14px] leading-[1.7]">
                                    {feat.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* ───── Details & Functionality ───── */}
            {project.functionality && (
                <section ref={functionalityRef} className="mb-16 sm:mb-24 md:mb-32 animate-on-scroll">
                    <h2 className="text-2xl sm:text-3xl md:text-[42px] lg:text-[52px] font-semibold tracking-[-1px] md:tracking-[-2px] leading-[1.1] mb-6 sm:mb-8 md:mb-10">
                        Details and Functionality.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-3 sm:gap-y-4">
                        {project.functionality.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 py-2">
                                <span className="w-2 h-2 rounded-full bg-[#82ff1d] mt-2 shrink-0"></span>
                                <span className="text-[#a0a0a0] text-sm sm:text-[15px] leading-[1.7]">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* ───── View More Work ───── */}
            <section ref={moreRef} className="mb-16 sm:mb-24 md:mb-32 animate-on-scroll">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-[42px] font-semibold tracking-[-1px] whitespace-nowrap">
                        View More Work
                    </h2>
                    <div className="hidden sm:block flex-1 h-px bg-[#262626]" />
                    <Link
                        to="/work"
                        className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#262626] border border-white/5 text-white text-xs sm:text-sm font-medium hover:bg-[#82ff1d] hover:text-black transition duration-300 whitespace-nowrap"
                    >
                        View All
                        <span className="text-xs">↗</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {otherProjects.map((p) => (
                        <Link
                            key={p.slug}
                            to={`/work/${p.slug}`}
                            className="group block"
                        >
                            <div
                                className="rounded-xl sm:rounded-2xl p-3 sm:p-4 overflow-hidden transition duration-300"
                                style={{ backgroundColor: p.bgColor }}
                            >
                                <div className="overflow-hidden rounded-lg sm:rounded-xl group-hover:scale-[1.02] transition duration-400">
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        loading="lazy"
                                        className="w-full h-[180px] sm:h-[200px] md:h-[240px] object-cover"
                                    />
                                </div>
                            </div>
                            <div className="mt-3 sm:mt-4 flex items-center gap-2 text-xs sm:text-sm font-medium">
                                <span className="text-white">{p.title}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-[#82ff1d]"></span>
                                <span className="text-[#878686] font-normal">
                                    {p.category}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ───── Footer CTA ───── */}
            <FinalCTA />
        </div>
    );
}
