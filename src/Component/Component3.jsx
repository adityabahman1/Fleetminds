import React from 'react'
import { Radio, CloudUpload, Settings } from 'lucide-react'

const steps = [
    {
        icon: Radio,
        title: '1. Install Devices',
        description: 'Plug-and-play OBD trackers or wired IoT sensors for your vehicles.',
        color: 'text-blue-500',
        borderColor: 'border-blue-500',
        bgColor: 'bg-blue-500/10',
    },
    {
        icon: CloudUpload,
        title: '2. Cloud Sync',
        description: 'Data is instantly encrypted and beamed to our global cloud network.',
        color: 'text-green-500',
        borderColor: 'border-green-500',
        bgColor: 'bg-green-500/10',
    },
    {
        icon: Settings,
        title: '3. Configure Fleet',
        description: 'Set up geofences, maintenance alerts, and driver profiles easily.',
        color: 'text-blue-500',
        borderColor: 'border-blue-500',
        bgColor: 'bg-blue-500/10',
    },
]

function Component3() {
    return (
        <div className="py-12 sm:py-20 px-4 sm:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-10 sm:mb-16">
                    Seamless Implementation
                </h2>

                <div className="flex flex-col gap-12 sm:gap-16">
                    {/* Timeline Container */}
                    <div className="relative max-w-4xl mx-auto w-full">
                        {/* Vertical Connecting Line */}
                        <div className="absolute left-[2rem] sm:left-[2.25rem] top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-blue-500 rounded-full" />

                        {/* Steps */}
                        <div className="space-y-10 sm:space-y-12">
                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-5 sm:gap-8 relative items-start">
                                    {/* Icon */}
                                    <div className={`relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-900 border-2 ${step.borderColor} flex items-center justify-center shrink-0`}>
                                        <step.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${step.color}`} strokeWidth={2} />
                                    </div>

                                    {/* Content */}
                                    <div className="pt-2">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Card */}
                    <div className="bg-[#005691] mt-8 sm:mt-20 rounded-3xl p-8 sm:p-10 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-30 h-30 bg-white/5 rounded-full blur-3xl" />

                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                            Ready to transform your fleet?
                        </h3>

                        <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
                            Join 100+ forward-thinking companies already optimizing their operations with FleetMind.
                        </p>

                        <div className="w-16 h-1.5 bg-[#84cc16] rounded-full mx-auto mb-6 sm:mb-8 opacity-80" />

                        {/* Avatars */}
                        <div className="flex justify-center items-center -space-x-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 border-2 border-[#005691] flex items-center justify-center text-[#005691] font-bold text-xs sm:text-sm">JD</div>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-200 border-2 border-[#005691] flex items-center justify-center text-[#005691] font-bold text-xs sm:text-sm">AM</div>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-400 border-2 border-[#005691] flex items-center justify-center text-white font-bold text-xs sm:text-sm">RK</div>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#84cc16] border-2 border-[#005691] flex items-center justify-center text-white font-bold text-xs sm:text-sm">+100</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component3