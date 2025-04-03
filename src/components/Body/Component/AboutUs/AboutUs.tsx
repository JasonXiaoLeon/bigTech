import React from 'react'
import DescriptionOfAbout from './Component/DescriptionOfAbout'
import DescripHeader from './Component/DescripHeader/DescripHeader'
import PartnerGrid from './Component/PartnerGrid'
import ChooseItemlist from './Component/ChooseItemlist'
import RoadMapUpperPart from '../RoadMap/component/RoadMapUpperPart'

const AboutUs = () => {
    return (
        <div className="w-screen">
            <div className="flex flex-col items-center lg:flex-row lg:justify-center py-[120px] md:py-[130px] px-[15px]">
                <div className="px-[15px]">
                    <div className="flex justify-center mb-[50px] lg:mb-[0px] lg:pl-[20px] xl:pl-[120px] w-[360px] md:w-[690px] lg:w-[450px] xl:w-[595px]">
                        <img
                            src="/img/banner2.png"
                            alt="i"
                            className="absolute w-[72px] h-[72px] md:left-[90px] lg:left-[40px] xl:left-[168px] md:top-[800px] lg:top-[820px] xl:top-[890px] rotate-90 hidden md:block z-10"
                        />
                        <img
                            src="/img/about_img.png"
                            alt="img"
                            className="w-[360px] h-[360px] md:w-[486px] md:h-[486px] lg:w-[430px] lg:h-[430px] xl:w-[475px] xl:h-[475px]"
                        />
                    </div>
                </div>
                <div className="md:mx-[24px] lg:mx-0 w-[360px] md:w-[720px] lg:w-[480px] xl:w-[625px]">
                    <DescriptionOfAbout />
                </div>
            </div>
            <div>
                <div className="flex flex-col">
                    <div className="flex items-center justify-center w-full h-[52px]">
                        <div className="flex justify-center mb-[10px] w-[360px] h-full md:w-[720px] lg:w-[480px]">
                            <DescripHeader content="Our top partner" />
                        </div>
                    </div>
                    <div className="px-[15px] pb-[130px]">
                        <PartnerGrid />
                    </div>
                </div>
            </div>
            <div className="mx-auto px-[15px] bg-[##030b15] pb-[130px]">
                <div className="flex flex-col items-center">
                    <RoadMapUpperPart
                        title={'why Choose us'}
                        content2="Why choose our Bigtech "
                        blueContent={
                            <>
                                <h2 className="text-center">&nbsp;Token</h2>
                            </>
                        }
                        marginBottom={'50px'}
                    />
                    <div>
                        <ChooseItemlist />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
