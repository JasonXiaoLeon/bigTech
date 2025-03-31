import React from 'react'
import RoadMapUpperPart from './component/RoadMapUpperPart'
import RoadMapLowerPart from './component/RoadMapLowerPart'
import RoadMapUpperStart from './component/RoadMapUpperStart'
import RoadMapList from './component/RoadMapList/RoadMapList'
import NormalBtn from '../Button/NormalBtn/NormalBtn'
import OurTeam from './component/OurTeam'

const RoadMap = () => {
  return (
    <div className='bg-black flex flex-col'>
      <div className='pt-[130px] pb-[50px]'>
        <RoadMapUpperPart 
          title={'Our Roadmap'} 
          content1='Bigtech Strategy and ' 
          content2='Project' 
          blueContent='&nbsp;Plan'/>
      </div>
      <div className='flex flex-col lg:flex-row-reverse lg:justify-center'>
        <div className='lg:w-[400px] lg:h-[562px] lg:mt-[50px] mb-[50px] lg:mb-[0px]'>
          <RoadMapUpperStart 
            title={'WhitePaper'}
            content1='Read BigTech '
            blueContent='Documents'/>
          <RoadMapList/>
          <div className='flex w-[360px] md:w-[390px] xl:w-[490px] mx-auto px-[15px]'>
            <NormalBtn value='Download DOc'/>
          </div>
        </div>
        <div>
          <RoadMapLowerPart/>
        </div>
      </div>
      <div>
          <OurTeam/>
      </div>
    </div>
  )
}

export default RoadMap
