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
                    className="rounded-3xl p-[40px] overflow-hidden"
                    style={{ backgroundColor: bgColor }}
                    data-framer-name="Image"
                >
                    <div
                        className="overflow-hidden rounded-xl hover:scale-103 hover:shadow-[0_2px_20px_rgba(0,0,0,0.7)] transition duration-400"
                        data-framer-name="Container"
                    >
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-[450px] object-cover transition duration-500"
                        />
                    </div>
                </div>

                {/* Details */}
                <div
                    className="mt-6 flex items-center gap-2 text-sm font-medium"
                    data-framer-name="Details"
                >
                    <span className="text-white text-base">{title}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#82ff1d]"></span>
                    <span className="text-[#878686] font-normal">{category}</span>
                </div>
            </Link>
        </div>
    );
}
