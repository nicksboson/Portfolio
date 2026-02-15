import { Link } from "react-router-dom";

export default function ShowcaseCard({
    title,
    category,
    image,
    bgColor,
    href = "#",
}) {
    return (
        <div className="framer-container">
            <Link
                to={href}
                className="block w-full opacity-100"
                data-framer-name="Desktop"
            >
                {/* Image Container */}
                <div
                    className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-[40px] overflow-hidden"
                    style={{ backgroundColor: bgColor }}
                    data-framer-name="Image"
                >
                    <div
                        className="overflow-hidden rounded-lg sm:rounded-xl hover:scale-103 hover:shadow-[0_2px_20px_rgba(0,0,0,0.7)] transition duration-400"
                        data-framer-name="Container"
                    >
                        <img
                            src={image}
                            alt={title}
                            loading="lazy"
                            className="w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[450px] object-cover transition duration-500"
                        />
                    </div>
                </div>

                {/* Details */}
                <div
                    className="mt-3 sm:mt-4 md:mt-6 flex items-center gap-2 text-xs sm:text-sm font-medium"
                    data-framer-name="Details"
                >
                    <span className="text-white text-sm sm:text-base">{title}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#82ff1d]"></span>
                    <span className="text-[#878686] font-normal">{category}</span>
                </div>
            </Link>
        </div>
    );
}
