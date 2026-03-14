import React from "react";

function Navbar() {
    return (
        <nav className="bg-[#0f172a] text-white px-4 md:px-6 py-4 md:py-6 flex justify-between items-center shadow-md relative z-50">
            {/* Left: Logo */}
            <div className="flex items-center gap-2">
                {/* Logo Text */}
                <div className="flex flex-col ml-2  md:ml-8 justify-center leading-none">
                    <div className="text-xl md:text-2xl font-bold tracking-wide">
                        <span className="text-[#0ea5e9]">Fleet</span>
                        <span className="text-[#84cc16]">Mind</span>
                    </div>
                    <span className="text-[10px] md:text-[12px] text-gray-400 tracking-[0.2em]  uppercase font-medium">
                        Fleet Management &amp; Tracking Solutions
                    </span>
                </div>
            </div>

            {/* Right: Actions — always visible, compact on mobile */}
            <div className="flex mr-2 md:mr-16 items-center gap-4 md:gap-8">
                <a
                    href="https://fleetmind.cloud/jsp/fleetmind_login.jsp"
                    className="text-white hover:text-gray-300 font-medium transition-colors text-sm md:text-lg"
                >
                    Login
                </a>
                <a
                    href="/fleetmind-release-1.21.0.apk"
                    download
                    className="bg-[#84cc16] hover:bg-[#65a30d] text-white font-bold py-1.5 px-4 md:py-2 md:px-8 text-sm md:text-base rounded-full shadow-[0_0_15px_rgba(132,204,22,0.3)] transition-all cursor-pointer"
                >
                    App
                </a>
            </div>
        </nav>
    );
}

export default Navbar;


