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

export default Component3

function Component3() {
    return (
        <div className="py-20 px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
                    Seamless Implementation
                </h2>

                <div className="flex flex-col gap-16">
                    {/* Timeline Container */}
                    <div className="relative max-w-4xl mx-auto w-full">
                        {/* Vertical Connecting Line */}
                        <div className="absolute left-[2.25rem] top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-blue-500 rounded-full" />

                        {/* Steps */}
                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-8 relative items-start">
                                    {/* Icon Container */}
                                    <div className={`relative z-10 w-20 h-20 rounded-full bg-gray-900 border-2 ${step.borderColor} flex items-center justify-center shrink-0`}>
                                        <div className={`w-3 h-3 rounded-full absolute -top-1.5 bg-gray-900 ${step.borderColor} border-2 hidden`} />
                                        <step.icon className={`w-8 h-8 ${step.color}`} strokeWidth={2} />
                                    </div>

                                    {/* Content */}
                                    <div className="pt-2">
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Card */}
                    <div className="bg-[#005691] mt-20 rounded-3xl p-10 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
                        {/* Background enhancement */}
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-30 h-30 bg-white/5 rounded-full blur-3xl" />

                        <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                            Ready to transform your fleet?
                        </h3>

                        <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                            Join 100+ forward-thinking companies already optimizing their operations with FleetMind.
                        </p>

                        {/* Divider */}
                        <div className="w-16 h-1.5 bg-[#84cc16] rounded-full mx-auto mb-8 opacity-80" />

                        {/* Avatars */}
                        <div className="flex justify-center items-center -space-x-4">
                            <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-[#005691] flex items-center justify-center text-[#005691] font-bold text-sm">
                                JD
                            </div>
                            <div className="w-12 h-12 rounded-full bg-blue-200 border-2 border-[#005691] flex items-center justify-center text-[#005691] font-bold text-sm">
                                AM
                            </div>
                            <div className="w-12 h-12 rounded-full bg-slate-400 border-2 border-[#005691] flex items-center justify-center text-white font-bold text-sm">
                                RK
                            </div>
                            <div className="w-12 h-12 rounded-full bg-[#84cc16] border-2 border-[#005691] flex items-center justify-center text-white font-bold text-sm">
                                +100
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}