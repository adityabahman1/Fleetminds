import React from 'react'
import Navbar from '../Component/Navbar'
import Component1 from '../Component/Component1'
import Component2 from '../Component/Component2'
import Component3 from '../Component/Component3'
import Footer from '../Component/Footer'

function Index() {
    return (
        <div className="min-h-screen bg-gray-900">
            <Navbar />
            <div className="container mx-auto p-4">
                <Component1 />
                <Component2 />
                <Component3 />
            </div>
            <Footer />
        </div>
    )
}

export default Index