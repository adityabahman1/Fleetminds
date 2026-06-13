import React from 'react';
import { Helmet } from 'react-helmet-async';

import Navbar from '../Component/Navbar';
import Component1 from '../Component/Component1';
import Component2 from '../Component/Component2';
import Component3 from '../Component/Component3';
import Footer from '../Component/Footer';

function Index() {
    return (
        <>
            <Helmet>
                <title>FleetMind | Smart Fleet Management Platform</title>

                <meta
                    name="description"
                    content="FleetMind provides intelligent fleet management, vehicle tracking, driver monitoring, and operational analytics for businesses."
                />

                <meta
                    name="keywords"
                    content="fleet management, gps tracking, vehicle tracking, driver management, logistics software"
                />

                <meta property="og:title" content="FleetMind" />
                <meta
                    property="og:description"
                    content="Smart Fleet Management Platform"
                />
                <meta
                    property="og:url"
                    content="https://app.fleetmind.cloud"
                />
                <meta property="og:type" content="website" />

                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />
            </Helmet>

            <div className="min-h-screen bg-gray-900">
                <Navbar />
                <div className="container mx-auto p-4">
                    <Component1 />
                    <Component2 />
                    <Component3 />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Index;