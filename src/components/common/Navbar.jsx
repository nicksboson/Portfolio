import { Link } from "react-router-dom";
import image from "../../assets/images/logo.png";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between py-6 animate-entry-fade">
            {/* Logo */}
            <Link to="/">
                <img src={image} alt="" className="w-[30px] h-[40px] rounded-full mt-[5px]" />
            </Link>

            {/* Links */}
            <div className="flex items-center gap-8 text-sm font-medium">
                <Link to="/about" className="text-white/70 hover:text-white transition duration-300 cursor-pointer">About</Link>
                <Link to="/work" className="text-white/70 hover:text-white transition duration-300 cursor-pointer">Work</Link>

                <Link to="/contact" className="px-6 py-2.5 rounded-full bg-[#262626] border border-white/5 text-white/80 hover:bg-[#82ff1d] hover:text-black transition duration-300 cursor-pointer">
                    Contact me
                </Link>
            </div>
        </nav>
    );
}
