import React from 'react'
import SalesChartData from './Component/SalesChartData'
import SalesAllocation from './Component/SalesAllocation'

const Sales = () => {
    return (
        <div className="flex justify-center">
            <div
                className="flex flex-col lg:flex-row-reverse md:items-center lg:justify-center py-[130px] xl:w-[1220px] xl:px-[110px] relative"
                style={{
                    backgroundImage: 'url(/img/sales.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="px-[15px]">
                    <div className="flex flex-col bg-[#0b1d33] rounded-[20px] px-[30px] md:px-[45px] lg:px-[30px] xl:px-[35px] py-[40px] md:py-[60px] xl:py-[50px] lg:w-[450px] md:w-[570px] xl:w-[485px]">
                        <img
                            src="/img/chart1.png"
                            alt=""
                            className="w-[238px] h-[238px] mx-auto mb-[75px]"
                        />
                        <SalesChartData />
                    </div>
                </div>
                <div className="lg:flex lg:items-center px-[15px] lg:w-[480px] xl:w-[515px]">
                    <div className="mt-[50px] lg:mt-[0px]">
                        <SalesAllocation />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sales
