export default function ProcessCard({ step, title, desc }) {
    return (
        <div className="bg-[#0A0A0A] p-5 sm:p-7 md:p-10 mb-4 sm:mb-6 md:mb-8 rounded-2xl sm:rounded-3xl border border-white/5">
            {/* Title row with number */}
            <div className="flex items-start sm:items-center gap-2 mb-3 sm:mb-4 md:mb-6">
                <span className="text-[#82ff1d] text-base sm:text-[18px] font-medium shrink-0">{step}.</span>
                <span className="font-medium text-white text-base sm:text-[18px]">{title}</span>
            </div>

            {/* Description */}
            <p className="text-[#878686] text-sm sm:text-[15px] leading-[1.6] max-w-[600px]">
                {desc}
            </p>
        </div>
    );
}
