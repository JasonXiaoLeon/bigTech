import React from 'react'
import Image from 'next/image'
import BodyText from './Component/BodyText/BodyText'
import Goal from './Component/Goal'
import GoalBar from './Component/Goal/Component/GoalLabel/GoalBar'
import Timer from './Component/Timer'

const Body = () => {
    return (
        <div
            id="home"
            className="bg-cover bg-center pt-[75px] md:pt-[120px]"
            style={{
                backgroundImage: "url('/img/banner_bg.jpg')",
            }}
        >
            <div
                className="absolute inset-0 z-10 w-screen h-[702.195px] md:h-[644.38px] lg:h-[688.2px] xl:h-[821.195px]"
                style={{
                    backgroundImage:
                        'linear-gradient(0.23deg, rgb(3, 11, 21) 5.68%, rgba(3, 11, 21, 0.42) 81.9%)',
                    opacity: 0.9,
                }}
            />
            <div className="absolute w-screen">
                <Image
                    className="absolute top-[-45px] md:top-[-95px] lg:top-[75px] xl:top-[85px] w-[100px] md:w-[120px] lg:w-[169px] h-[100px] md:h-[120px] lg:h-[169px] animate-left-right z-10"
                    src="/img/banner1.png"
                    alt="sphere"
                    width={169}
                    height={169}
                />
                <Image
                    className="absolute lg:right-[-15px] lg:top-[75px] w-[100px] md:w-[120px] lg:w-[146px] h-[100px] md:h-[120px] lg:h-[146px] animate-top-down z-10"
                    src="/img/banner1.png"
                    alt="sphere"
                    width={146}
                    height={146}
                />
                <Image
                    className="absolute right-[8%] top-[20%] left-auto w-[66px] h-[66px] z-10"
                    src="/img/banner2.png"
                    alt="sphere"
                    width={66}
                    height={66}
                />
            </div>
            <div className="relative z-20 w-[360px] md:w-[690px] lg:w-[770px] xl:w-[1011.66px] mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <Image
                        src="/img/download.png"
                        className="w-[52px] h-[52px] mb-[25px]"
                        alt="Download"
                        width={52}
                        height={52}
                    />
                    <BodyText />
                </div>
                <div className="flex flex-col items-center mb-[40px] lg:mx-[30px] lg:mb-[60px] xl:mx-[150px] xl:mb-[70px]">
                    <Goal />
                    <GoalBar />
                </div>
                <div className="">
                    <Timer />
                </div>
            </div>
        </div>
    )
}

export default Body
