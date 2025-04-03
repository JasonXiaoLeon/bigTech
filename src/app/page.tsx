import LoadingSpinner from '@/components/LoadingSpinner'
import React, { Suspense } from 'react'

const Body = React.lazy(() => import('@/components/Body'))
const AboutUs = React.lazy(() => import('@/components/Body/Component/AboutUs'))
const Sales = React.lazy(() => import('@/components/Body/Component/Sales'))
const ContactUs = React.lazy(() => import('@/components/Body/ContactUs/ContactUs'))
const RoadMap = React.lazy(() => import('@/components/Body/Component/RoadMap'))

export default function Home() {
    return (
        <div id="home" className="bg-[#030b15]">
            <Suspense fallback={<LoadingSpinner />}>
                <Body />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
                <div id="about-us">
                    <AboutUs />
                </div>
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
                <div id="sales">
                    <Sales />
                </div>
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
                <div id="roadmap">
                    <RoadMap />
                </div>
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
                <div id="contact-us">
                    <ContactUs />
                </div>
            </Suspense>
        </div>
    )
}
