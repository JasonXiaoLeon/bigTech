import React from 'react'
import RoadMapUpperPart from './component/RoadMapUpperPart'
import RoadMapLowerPart from './component/RoadMapLowerPart'
import RoadMapUpperStart from './component/RoadMapUpperStart'
import RoadMapList from './component/RoadMapList/RoadMapList'
import NormalBtn from '../../../Button/NormalBtn/NormalBtn'
import OurTeam from './component/OurTeam'
import LongScrollChart from './component/LongScrollChart'

const RoadMap = () => {
    return (
        <div className="flex flex-col">
            <div className="relative">
                <div className="absolute inset-0 bg-[url('/img/banner_bg.jpg')] bg-cover bg-no-repeat opacity-10 xl:scale-130 transform xl:translate-y-[100px] xl:translate-x-[-150px]"></div>
                <div className="pt-[130px]">
                    <RoadMapUpperPart
                        title={'Our Roadmap'}
                        content1="Bigtech Strategy and "
                        content2="Project"
                        blueContent={
                            <>
                                <span className="inline">&nbsp;Plan</span>
                            </>
                        }
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
                            title={'WhitePaper'}
                            content1="Read BigTech "
                            blueContent="Documents"
                            marginBottom={'35px'}
                        />
                    </div>
                    <div>
                    <RoadMapList />
                        <div className="flex w-[360px] md:w-[390px] xl:w-[490px] mx-auto">
                            <NormalBtn value="Download DOc" widthType={1} />
                        </div>
                    </div>
                </div>
                <div>
                    <RoadMapLowerPart />
                </div>
            </div>
            <div className='flex'>
                <OurTeam />
            </div>
        </div>
    )
}

export default RoadMap
