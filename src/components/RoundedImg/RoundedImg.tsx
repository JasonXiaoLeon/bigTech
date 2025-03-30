import React from 'react'

interface props {
  imgUrl: string,
  borderColor?: string,
  imgWidth?: string,
  imgHeight?: string,
}

const RoundedImg: React.FC<props> = ({ imgUrl, borderColor, imgWidth, imgHeight }) => {
  return (
    <div className={`flex justify-center items-center rounded-full px-[7px] w-[44px] h-[44px] border hover:bg-[#00c4f4]`} style={{ borderColor }}>
      <img src={imgUrl} alt='' className={`w-[18px] h-[18px]`} />
    </div>
  )
}

export default RoundedImg
