import React from 'react'
import BodyText from './Component/BodyText/BodyText'

const Body = () => {
  return (
    <div      
    id="home"
    className="h-screen bg-red-200 bg-cover bg-center"
    style={{ backgroundImage: "url('/img/banner_bg.jpg')" }}
    >
      <div className="flex flex-col h-screen items-center">
        <img src='/img/download.png' className="w-[54px] h-[54px] widthSmall:w-auto widthSmall:h-auto"/>
        <BodyText/>
      </div>
    </div>
  )
}

export default Body
