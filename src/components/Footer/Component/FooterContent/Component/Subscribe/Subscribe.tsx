import React from 'react'

const Subscribe = () => {
    return (
        <div className="md:w-[360px] md:px-[15px] lg:px-[0px] lg:w-[320px] xl:w-[311.66px]">
            <div className="uppercase mt-[25px] mb-[27px] text-white text-[18px] font-bold xl:w-[311.66px] leading-[1.2]">
                Subscribe newsletter
            </div>
            <div className="mb-[30px] xl:w-[311.66px]">
                <p className="text-[15px] text-[#a4b4c3] mb-[40px] md:mb-[60px] lg:w-[290px] xl:w-[311.66px] leading-[1.7335]">
                    Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo
                </p>
                <div className="flex w-[360px] md:w-[330px] lg:w-[320px] xl:w-[311.66px]">
                    <input
                        placeholder="info@gmail.com"
                        className="w-[295px] md:w-[265px] lg:w-[225px] xl:w-[254.62px] h-[72px] text-white bg-[hsla(240,5%,49%,0.1)] rounded-[10px] py-[23px] px-[25px] p-[80px] focus:outline-none"
                    />
                    <button className="flex justify-center items-center rounded-[10px] bg-[#00c4f4] w-[65px] h-[72px] px-[6px] py-[1px]">
                        <img src="/img/icon/send-fill.png" alt="" className="w-[25px] h-[25px]" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
