import React from "react";
import logo from "../assets/logoFm 1.svg"

function Navbar() {
    return (
        <nav className="bg-[#0f172a] text-white px-6 py-6 flex justify-between items-center shadow-md">
            {/* Left: Logo */}
            <div className="flex items-center gap-2">
                {/* Logo Icon */}
                {/* <div className="relative w-10 h-10 flex items-center justify-center">
                    <img src={logo}
                        alt="FleetMind Logo"
                        className="w-full h-full object-contain "
                    />
                </div> */}

                {/* Logo Text */}
                <div className="flex flex-col ml-16 justify-center leading-none">
                    <div className="text-2xl font-bold tracking-wide">
                        <span className="text-[#0ea5e9]">Fleet</span>
                        <span className="text-[#84cc16]">Mind</span>
                    </div>
                    <span className="text-[12px] text-gray-400 tracking-[0.2em] uppercase font-medium">
                        Fleet Management & Tracking Solutions
                    </span>
                </div>
            </div>

            {/* Right: Actions */}
            <div className=" mr-16 flex items-center gap-8">
                <a
                    href="/login"
                    className="text-white hover:text-gray-300 font-medium transition-colors text-lg"
                >
                    Login
                </a>
                <a
                    href="/fleetmind-release-1.21.0.apk"
                    download
                    className="bg-[#84cc16] hover:bg-[#65a30d] text-white font-bold py-2 px-8 rounded-full shadow-[0_0_15px_rgba(132,204,22,0.3)] transition-all cursor-pointer"
                >
                    App
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
