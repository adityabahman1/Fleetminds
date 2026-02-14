import React from 'react'
import { MapPin, Cpu, Grid, History, User, Fuel } from 'lucide-react'

const features = [
    {
        icon: MapPin,
        title: 'Live GPS',
        description: 'Real-time precision tracking.',
        color: 'text-blue-500',
        bgColor: 'bg-blue-500/10',
    },
    {
        icon: Cpu,
        title: 'IoT SIM',
        description: 'Global roaming connectivity.',
        color: 'text-green-500',
        bgColor: 'bg-green-500/10',
    },
    {
        icon: Grid, // Using Grid as a proxy for Geofencing fence/grid icon
        title: 'Geofencing',
        description: 'Virtual zone alerts & rules.',
        color: 'text-blue-500',
        bgColor: 'bg-blue-500/10',
    },
    {
        icon: History,
        title: 'Trip History',
        description: '6-month route playback.',
        color: 'text-green-500',
        bgColor: 'bg-green-500/10',
    },
    {
        icon: User,
        title: 'Driver Monitoring',
        description: 'Behavior & safety analysis.',
        color: 'text-green-500',
        bgColor: 'bg-green-500/10',
    },
    {
        icon: Fuel,
        title: 'Fuel Insights',
        description: 'Consumption & theft detection.',
        color: 'text-blue-500',
        bgColor: 'bg-blue-500/10',
    },
]

function Component2() {
    return (
        <div className="py-20 px-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Core Capabilities
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Everything you need to manage your fleet from anywhere in the world.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#0f172a] border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-colors group"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.bgColor}`}>
                                <feature.icon className={`w-7 h-7 ${feature.color}`} strokeWidth={2} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Component2