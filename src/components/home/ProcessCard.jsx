export default function ProcessCard({ step, title, desc }) {
    return (
        <div className="bg-[#0A0A0A] p-10 mb-8 rounded-3xl border border-white/5">
            {/* Title row with number */}
            <div className="flex items-center gap-2 mb-6">
                <span className="text-[#82ff1d] text-[18px] font-medium">{step}.</span>
                <span className="font-medium text-white text-[18px]">{title}</span>
            </div>

            {/* Description */}
            <p className="text-[#878686] text-[15px] leading-[1.6] max-w-[600px]">
                {desc}
            </p>
        </div>
    );
}
