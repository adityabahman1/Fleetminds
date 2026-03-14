import React from "react";

const FleetAnimation = () => (
    <>
        <style>{`
      /* ── Truck motion ── */
      @keyframes truck1 {
        0%   { transform: translateX(0px) translateY(0px); }
        100% { transform: translateX(62px) translateY(-22px); }
      }
      @keyframes truck2 {
        0%   { transform: translateX(0px); }
        100% { transform: translateX(-48px); }
      }
      /* ── GPS rings ── */
      @keyframes gps-ring {
        0%   { r: 5; stroke-opacity: 0.9; }
        100% { r: 32; stroke-opacity: 0; }
      }
      @keyframes gps-ring2 {
        0%   { r: 5; stroke-opacity: 0.9; }
        100% { r: 20; stroke-opacity: 0; }
      }
      /* ── Route dash ── */
      @keyframes dash-flow {
        to { stroke-dashoffset: -40; }
      }
      /* ── Radar sweep ── */
      @keyframes radar-sweep {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }
      @keyframes radar-fade {
        0%   { opacity: 0.7; }
        100% { opacity: 0; }
      }
      /* ── Pulse / float ── */
      @keyframes pulse-dot {
        0%, 100% { opacity: 1;   transform: scale(1); }
        50%       { opacity: 0.3; transform: scale(1.6); }
      }
      @keyframes float-card {
        0%, 100% { transform: translateY(0px); }
        50%       { transform: translateY(-4px); }
      }
      @keyframes blink-dot {
        0%, 100% { opacity: 1; }
        50%       { opacity: 0; }
      }
      @keyframes glow-pulse {
        0%, 100% { filter: drop-shadow(0 0 5px #0ea5e9); }
        50%       { filter: drop-shadow(0 0 16px #0ea5e9); }
      }
      @keyframes sat-orbit {
        from { transform: rotate(0deg) translateX(34px) rotate(0deg); }
        to   { transform: rotate(360deg) translateX(34px) rotate(-360deg); }
      }
      /* ── Classes ── */
      .truck1-anim  { animation: truck1 3.5s ease-in-out infinite alternate; }
      .truck2-anim  { animation: truck2 4s ease-in-out 0.8s infinite alternate; }
      .gps-ring-a   { animation: gps-ring  1.8s ease-out infinite; fill:none; }
      .gps-ring-b   { animation: gps-ring2 1.8s ease-out 0.5s infinite; fill:none; }
      .route-dash-a { stroke-dasharray:7 4; animation: dash-flow 1s linear infinite; }
      .route-dash-b { stroke-dasharray:5 5; animation: dash-flow 1.4s linear infinite; }
      .radar-sweep  { animation: radar-sweep 3s linear infinite; transform-origin: 195px 158px; }
      .radar-trail  { animation: radar-fade 3s linear infinite; }
      .pulse-dot    { animation: pulse-dot 1.6s ease-in-out infinite; }
      .float-card   { animation: float-card 3s ease-in-out infinite; }
      .float-card2  { animation: float-card 3s ease-in-out 1s infinite; }
      .float-card3  { animation: float-card 3s ease-in-out 2s infinite; }
      .blink        { animation: blink-dot 1s step-end infinite; }
      .glow-truck   { animation: glow-pulse 2s ease-in-out infinite; }
      .sat-orbit    { animation: sat-orbit 6s linear infinite; transform-origin: 195px 158px; }
    `}</style>

        <svg
            width="440"
            height="380"
            viewBox="0 0 440 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                {/* Transparent card — blends into page bg */}
                <linearGradient id="bg" x1="0" y1="0" x2="440" y2="380" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#050d1a" stopOpacity="0" />
                    <stop offset="100%" stopColor="#071428" stopOpacity="0" />
                </linearGradient>
                {/* Radar cone */}
                <linearGradient id="radarCone" x1="195" y1="158" x2="250" y2="100" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                </linearGradient>
                {/* Glow filters */}
                <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="softglow" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
            </defs>

            {/* ── Subtle grid (no card border, blends with page) ── */}
            <g opacity="0.12">
                {[40, 80, 120, 160, 200, 240, 280, 320, 360].map(y => (
                    <line key={`h${y}`} x1="0" y1={y} x2="440" y2={y} stroke="#1e6fa5" strokeWidth="0.6" />
                ))}
                {[40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440].map(x => (
                    <line key={`v${x}`} x1={x} y1="0" x2={x} y2="380" stroke="#1e6fa5" strokeWidth="0.6" />
                ))}
            </g>

            {/* ── Road network ── */}
            <g opacity="0.22">
                <path d="M0 240 Q90 230 165 215 Q240 200 300 178 Q370 158 440 150" stroke="#2563eb" strokeWidth="6" />
                <path d="M70 380 Q105 320 130 260 Q150 210 165 215" stroke="#2563eb" strokeWidth="5" />
                <path d="M300 178 Q315 250 318 310 Q320 345 322 380" stroke="#2563eb" strokeWidth="5" />
                <path d="M0 130 Q80 140 140 155 Q185 165 195 158" stroke="#1d4ed8" strokeWidth="3" strokeOpacity="0.6" />
            </g>

            {/* ── Radar (centered) ── */}
            <circle cx="195" cy="158" r="70" fill="none" stroke="#0ea5e9" strokeWidth="0.6" strokeOpacity="0.14" />
            <circle cx="195" cy="158" r="48" fill="none" stroke="#0ea5e9" strokeWidth="0.6" strokeOpacity="0.2" />
            <circle cx="195" cy="158" r="26" fill="none" stroke="#0ea5e9" strokeWidth="0.6" strokeOpacity="0.3" />
            <line x1="125" y1="158" x2="265" y2="158" stroke="#0ea5e9" strokeWidth="0.5" strokeOpacity="0.18" />
            <line x1="195" y1="88" x2="195" y2="228" stroke="#0ea5e9" strokeWidth="0.5" strokeOpacity="0.18" />
            {/* Sweep */}
            <g className="radar-sweep">
                <path
                    d="M195 158 L265 95 A70 70 0 0 1 265 158 Z"
                    fill="url(#radarCone)"
                    className="radar-trail"
                />
                <line x1="195" y1="158" x2="268" y2="105" stroke="#0ea5e9" strokeWidth="1.8" strokeOpacity="0.9" />
            </g>
            <circle cx="195" cy="158" r="4" fill="#0ea5e9" filter="url(#glow)" />

            {/* ── Route A: bottom-left → top-right ── */}
            <path
                d="M65 270 Q110 240 165 215 Q220 192 280 170 Q335 155 390 138"
                stroke="#0ea5e9" strokeWidth="5" strokeOpacity="0.12" strokeLinecap="round"
            />
            <path
                d="M65 270 Q110 240 165 215 Q220 192 280 170 Q335 155 390 138"
                stroke="#0ea5e9" strokeWidth="2" strokeOpacity="0.85" strokeLinecap="round"
                className="route-dash-a" filter="url(#glow)"
            />

            {/* ── Route B: top-right → bottom ── */}
            <path
                d="M390 138 Q390 200 382 250 Q372 295 368 340"
                stroke="#84cc16" strokeWidth="5" strokeOpacity="0.1" strokeLinecap="round"
            />
            <path
                d="M390 138 Q390 200 382 250 Q372 295 368 340"
                stroke="#84cc16" strokeWidth="1.8" strokeOpacity="0.7" strokeLinecap="round"
                className="route-dash-b"
            />

            {/* ── Waypoints ── */}
            <circle cx="165" cy="215" r="5" fill="#a78bfa" className="pulse-dot" />
            <circle cx="280" cy="170" r="5" fill="#f59e0b" className="pulse-dot" style={{ animationDelay: "0.7s" }} />
            <circle cx="382" cy="250" r="5" fill="#84cc16" className="pulse-dot" style={{ animationDelay: "1.2s" }} />

            {/* ── GPS Origin pin (green) ── */}
            <circle cx="65" cy="270" stroke="#84cc16" strokeWidth="2" className="gps-ring-a" />
            <circle cx="65" cy="270" stroke="#84cc16" strokeWidth="1.2" className="gps-ring-b" />
            <circle cx="65" cy="270" r="6" fill="#84cc16" />
            <circle cx="65" cy="270" r="2.5" fill="white" />

            {/* ── GPS Destination pin (red) ── */}
            <circle cx="390" cy="138" stroke="#ef4444" strokeWidth="2" className="gps-ring-a" />
            <circle cx="390" cy="138" stroke="#ef4444" strokeWidth="1.5" className="gps-ring-b" />
            <path d="M390 126 C384 126 378 131 378 137 C378 145 390 160 390 160 C390 160 402 145 402 137 C402 131 396 126 390 126Z"
                fill="#ef4444" />
            <circle cx="390" cy="137" r="4.5" fill="white" />

            {/* ── Truck 1 (blue, articulated) ── */}
            <g className="truck1-anim glow-truck" style={{ transformOrigin: "65px 255px" }}>
                <rect x="30" y="247" width="36" height="17" rx="3" fill="#1e40af" stroke="#3b82f6" strokeWidth="1" />
                <rect x="63" y="243" width="18" height="21" rx="3.5" fill="#2563eb" stroke="#60a5fa" strokeWidth="1" />
                <rect x="64" y="245" width="14" height="8" rx="2" fill="#bae6fd" fillOpacity="0.85" />
                <rect x="80" y="249" width="3" height="4" rx="1" fill="#fde68a" />
                <circle cx="40" cy="265" r="5.5" fill="#0f172a" stroke="#94a3b8" strokeWidth="1.3" />
                <circle cx="54" cy="265" r="5.5" fill="#0f172a" stroke="#94a3b8" strokeWidth="1.3" />
                <circle cx="69" cy="265" r="5.5" fill="#0f172a" stroke="#94a3b8" strokeWidth="1.3" />
                <circle cx="46" cy="246" r="3" fill="#84cc16" className="blink" />
            </g>

            {/* ── Truck 2 (purple) ── */}
            <g className="truck2-anim" style={{ transformOrigin: "390px 130px" }}>
                <rect x="374" y="118" width="22" height="12" rx="2.5" fill="#7c3aed" stroke="#a78bfa" strokeWidth="1" />
                <rect x="393" y="115" width="11" height="15" rx="2.5" fill="#6d28d9" stroke="#c4b5fd" strokeWidth="1" />
                <rect x="394" y="117" width="9" height="6" rx="1.5" fill="#ddd6fe" fillOpacity="0.8" />
                <circle cx="380" cy="131" r="4" fill="#0f172a" stroke="#94a3b8" strokeWidth="1.2" />
                <circle cx="390" cy="131" r="4" fill="#0f172a" stroke="#94a3b8" strokeWidth="1.2" />
                <circle cx="399" cy="131" r="4" fill="#0f172a" stroke="#94a3b8" strokeWidth="1.2" />
                <circle cx="384" cy="117" r="2.5" fill="#f59e0b" className="blink" style={{ animationDelay: "0.5s" }} />
            </g>

            {/* ── Orbiting satellite ── */}
            <g className="sat-orbit">
                <rect x="-10" y="-2" width="20" height="4" rx="1" fill="#a78bfa" />
                <rect x="-2" y="-10" width="4" height="20" rx="1" fill="#a78bfa" />
                <circle cx="0" cy="0" r="4" fill="#c4b5fd" />
            </g>

            {/* ── Signal lines: trucks → radar ── */}
            <line x1="65" y1="270" x2="195" y2="158" stroke="#0ea5e9" strokeWidth="0.8" strokeDasharray="4 5" strokeOpacity="0.25" className="route-dash-a" />
            <line x1="390" y1="138" x2="195" y2="158" stroke="#a78bfa" strokeWidth="0.8" strokeDasharray="4 5" strokeOpacity="0.25" className="route-dash-b" />

            {/* ── Speed Card ── */}
            <g className="float-card">
                <rect x="12" y="12" width="116" height="62" rx="12" fill="#0a1929" fillOpacity="0.9" stroke="#0ea5e9" strokeWidth="0" />
                <rect x="12" y="12" width="116" height="62" rx="12" fill="#0ea5e9" fillOpacity="0.06" />
                <text x="24" y="33" fill="#64748b" fontSize="9" fontFamily="monospace" letterSpacing="1.5">SPEED</text>
                <text x="24" y="56" fill="#0ea5e9" fontSize="20" fontWeight="bold" fontFamily="monospace">62 km/h</text>
                <rect x="24" y="64" width="90" height="3.5" rx="2" fill="#1e3a5f" />
                <rect x="24" y="64" width="58" height="3.5" rx="2" fill="#0ea5e9" />
            </g>

            {/* ── ETA Card ── */}
            <g className="float-card2">
                <rect x="290" y="318" width="138" height="48" rx="12" fill="#0a1929" fillOpacity="0.9" stroke="#84cc16" strokeWidth="0" />
                <rect x="290" y="318" width="138" height="48" rx="12" fill="#84cc16" fillOpacity="0.06" />
                <text x="304" y="337" fill="#64748b" fontSize="9" fontFamily="monospace" letterSpacing="1">ETA · TRUCK 1</text>
                <text x="304" y="356" fill="#84cc16" fontSize="14" fontWeight="bold" fontFamily="monospace">12 min · 8.4 km</text>
            </g>

            {/* ── Live GPS Badge ── */}
            <g className="float-card3">
                <rect x="298" y="12" width="130" height="48" rx="12" fill="#0a1929" fillOpacity="0.9" stroke="#ef4444" strokeWidth="0" />
                <rect x="298" y="12" width="130" height="48" rx="12" fill="#ef4444" fillOpacity="0.05" />
                <circle cx="314" cy="36" r="5" fill="#ef4444" className="pulse-dot" />
                <text x="326" y="30" fill="#64748b" fontSize="9" fontFamily="monospace" letterSpacing="1">LIVE GPS</text>
                <text x="326" y="48" fill="#f1f5f9" fontSize="11" fontFamily="monospace">2 Active Vehicles</text>
            </g>

            {/* ── Fuel Card ── */}
            <g className="float-card">
                <rect x="12" y="310" width="104" height="52" rx="12" fill="#0a1929" fillOpacity="0.9" stroke="#f59e0b" strokeWidth="0" />
                <rect x="12" y="310" width="104" height="52" rx="12" fill="#f59e0b" fillOpacity="0.05" />
                <text x="24" y="330" fill="#64748b" fontSize="9" fontFamily="monospace" letterSpacing="1.5">FUEL</text>
                <text x="24" y="350" fill="#f59e0b" fontSize="16" fontWeight="bold" fontFamily="monospace">78%</text>
                <rect x="62" y="338" width="46" height="7" rx="3.5" fill="#1e3a5f" />
                <rect x="62" y="338" width="36" height="7" rx="3.5" fill="#f59e0b" />
            </g>
        </svg>
    </>
);

function Component1() {
    return (
        <div className="flex flex-col justify-start  py-8 sm:py-12 px-4 sm:px-6 md:px-8">
            {/* Badge/Tag */}
            <div className="mb-6 text-center md:text-left">
                <span className="inline-block px-5 py-2 rounded-full border border-[#3f6212] bg-[#3f6212]/10 text-[#84cc16] text-xs font-bold tracking-widest uppercase">
                    IoT-Powered Fleet Intelligence
                </span>
            </div>

            {/* Main Heading + Animation */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12 mb-4">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-[1.1] shrink-0 text-center md:text-left">
                    Smart Fleet <br />
                    Tracking &amp; <span className="text-[#84cc16]">IoT</span> <br />
                    <span className="text-[#0ea5e9]">Monitoring</span> on the <br />
                    Cloud
                </h1>
                <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-none mx-auto md:mx-0 overflow-hidden">
                    <FleetAnimation />
                </div>
            </div>

            {/* Subtitle/Description */}
            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed text-center md:text-left">
                Optimize efficiency, reduce costs, and ensure safety with our high-fidelity real-time tracking platform. Built for modern logistics.
            </p>
        </div>
    );
}

export default Component1;