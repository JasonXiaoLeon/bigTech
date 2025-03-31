import DescripHeader from '@/components/Body/Component/AboutUs/Component/DescripHeader/DescripHeader'
import React from 'react'

interface props {
  title: string,
  content1?: string,
  content2?: string,
  blueContent?: string,
  afterBlueContent?: string,
  enter?: boolean,  // 用于控制是否换行
}

const RoadMapUpperPart: React.FC<props> = ({ title, content1, content2, blueContent, afterBlueContent, enter }) => {
  return (
    <div className='flex justify-center w-screen'>
      <div className=' w-[390px] md:w-[750px] lg:w-[960px] xl:w-[1250px] h-[180px] md:h-[208px] lg:h-[194px] xl:h-[212.8px] px-[15px]'>
        <div className='mb-[60px]'>
          <div className='flex justify-center'>
            <DescripHeader content={title} />
          </div>
          <div className='text-[28px] md:text-[40px] lg:text-[34px] xl:text-[42px] leading-[1.2] md:h-[96px] lg:h-[81.6px] xl:h-[100.8px] flex justify-center text-white font-bold'>
            <h2>
              {content1}
              <span className='flex justify-center'>
                {content2 && (
                  <>
                    {content2}
                    {enter && <br />}
                  </>
                )}
                <span className='text-[#00c4f4]'>{blueContent}</span>
                <span>{afterBlueContent}</span>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadMapUpperPart
