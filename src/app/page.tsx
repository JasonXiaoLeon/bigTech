'use client'
import Loading from '@/components/Loading/Loading'
import React, { useState, useEffect } from 'react'

import Body from '@/components/Body'
import AboutUs from '@/components/Body/Component/AboutUs'
import Sales from '@/components/Body/Component/Sales'
import ContactUs from '@/components/Body/Component/ContactUs/ContactUs'
import RoadMap from '@/components/Body/Component/RoadMap'

export default function Home() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div id="home" className="bg-[#030b15]">
            {isLoading ? (
                <div className="absolute top-0 left-0 w-full h-full bg-[#030b15] z-50">
                    <Loading />
                </div>
            ) : (
                <>
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
                </>
            )}
        </div>
    )
}
