import React from 'react'

import Body from '@/components/Body'
import AboutUs from '@/components/Body/Component/AboutUs'
import Sales from '@/components/Body/Component/Sales'
import ContactUs from '@/components/Body/Component/ContactUs/ContactUs'
import RoadMap from '@/components/Body/Component/RoadMap'

const Home = () => {
    return (
        <div id="home" className="bg-[#030b15]">
            <Body />
            <div id="about-us">
                <AboutUs />
            </div>
            <div id="sales">
                <Sales />
            </div>
            <div id="roadmap">
                <RoadMap />
            </div>
            <div id="contact-us">
                <ContactUs />
            </div>
        </div>
    )
}

export default Home
