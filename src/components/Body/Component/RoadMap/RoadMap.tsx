'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import RoadMapUpperPart from './Component/RoadMapUpperPart'
import RoadMapLowerPart from './Component/RoadMapLowerPart'
import RoadMapUpperStart from './Component/RoadMapUpperStart'
import RoadMapList from './Component/RoadMapList/RoadMapList'
import NormalBtn from '../../../Button/NormalBtn/NormalBtn'
import OurTeam from './Component/OurTeam'
import LongScrollChart from './Component/LongScrollChart'

const RoadMap = () => {
    const t = useTranslations()

    return (
        <div className="flex flex-col">
            <div className="relative">
                <div className="absolute inset-0 bg-[url('/img/banner_bg.jpg')] bg-cover bg-no-repeat opacity-10 xl:scale-130 transform xl:translate-y-[100px] xl:translate-x-[-150px]"></div>
                <div className="pt-[130px]">
                    <RoadMapUpperPart
                        title={t('roadMap.title')}
                        content1={t('roadMap.content1')}
                        content2={t('roadMap.content2')}
                        blueContent={t('roadMap.plan')}
                        marginBottom={'60px'}
                    />
                </div>
                <div className="flex justify-center mt-[10px]">
                    <LongScrollChart />
                </div>
            </div>
            <div
                className="flex flex-col lg:flex-row-reverse lg:justify-center bg-[850%] bg-bottom md:bg-cover md:bg-center pt-[60px]"
                style={{
                    backgroundImage: 'url(/img/sales.jpg)',
                }}
            >
                <div className="lg:w-[400px] lg:px-[15px] xl:w-[520.83px] lg:mt-[50px] mb-[50px] lg:mb-[0px] px-[15px] md:px-[0px]">
                    <div>
                        <RoadMapUpperStart
                            title={t('roadMap.whitePaper')}
                            content1={t('roadMap.content3')}
                            blueContent={t('roadMap.documents')}
                            marginBottom={'35px'}
                        />
                    </div>
                    <div>
                        <RoadMapList />
                        <div className="flex w-[360px] md:w-[390px] xl:w-[490px] mx-auto">
                            <NormalBtn value={t('roadMap.downloadDoc')} widthType={1} />
                        </div>
                    </div>
                </div>
                <div>
                    <RoadMapLowerPart />
                </div>
            </div>
            <div className="flex">
                <OurTeam />
            </div>
        </div>
    )
}

export default RoadMap
