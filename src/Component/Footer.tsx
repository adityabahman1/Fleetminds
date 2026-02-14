import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react'

function Footer() {
    return (
        <footer className="bg-[#0f172a] text-white py-16 px-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                    {/* Logo & Description */}
                    <div className="max-w-sm ml-20">
                        <div className="flex flex-col justify-center leading-none mb-6">
                            <div className="text-2xl font-bold tracking-wide">
                                <span className="text-[#0ea5e9]">Fleet</span>
                                <span className="text-[#84cc16]">Mind</span>
                            </div>
                            <div className="text-[10px] mt-2 text-gray-400 tracking-[0.2em] uppercase font-medium mt-1">
                                Fleet Management & Tracking Solutions
                            </div>
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Empowering logistics with real-time intelligence and seamless connectivity.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#84cc16] hover:text-white transition-all text-slate-400">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0ea5e9] hover:text-white transition-all text-slate-400">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all text-slate-400">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div className='mr-50'>
                        <h4 className="text-lg font-bold mb-6 text-white">Product</h4>

                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 text-slate-400">
                            <li>
                                <a href="#" className="hover:text-[#84cc16] transition-colors">
                                    Live GPS Tracking
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-[#84cc16] transition-colors">
                                    IoT Connectivity
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-[#84cc16] transition-colors">
                                    Fuel Insights
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-[#84cc16] transition-colors">
                                    Driver Monitoring
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-[#84cc16] transition-colors">
                                    Trip History
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 ml-20 mr-20 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} FleetMind Solutions. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer