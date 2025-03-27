import React from 'react'
import RoadMapUpperPart from './component/RoadMapUpperPart'
import RoadMapLowerPart from './component/RoadMapLowerPart'

const RoadMap = () => {
  return (
    <div className='bg-black flex flex-col pt-[130px] pb-[50px]'>
      <RoadMapUpperPart 
        title={'Our Roadmap'} 
        content1='Bigtech Strategy and ' 
        content2='Project' 
        blueContent='&nbsp;Plan'/>
      <RoadMapLowerPart/>
    </div>
  )
}

export default RoadMap
