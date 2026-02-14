import React from "react";

function Component1() {
    return (
        <div className="flex ml-16 flex-col justify-start py-12 px-2 md:px-0">
            {/* Badge/Tag */}
            <div className="mb-6">
                <span className="inline-block px-5 py-2 rounded-full border border-[#3f6212] bg-[#3f6212]/10 text-[#84cc16] text-xs font-bold tracking-widest uppercase">
                    IoT-Powered Fleet Intelligence
                </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8">
                Smart Fleet <br />
                Tracking & <span className="text-[#84cc16]">IoT</span> <br />
                <span className="text-[#0ea5e9]">Monitoring</span> on the <br />
                Cloud
            </h1>

            {/* Subtitle/Description */}
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                Optimize efficiency, reduce costs, and ensure safety with our high-fidelity real-time tracking platform. Built for modern logistics.
            </p>
        </div>
    )
}

export default Component1