import React from 'react'
import LongScrollChartBlock from './Component/LongScrollChartBlock'

const LongScrollChart = () => {
    const dataList = [
        {
            date: 'mid of q4 2021',
            color: '#0dcaf0',
            title: 'Concept',
            content: ['EVM support for Parthians', 'SubQuery Academy', 'Proof of Indexing'],
        },
        {
            date: 'Mid of Q4 2021',
            color: '#d63384',
            title: 'Research',
            content: [
                'SubQuery Builders/Grants Program',
                'SQT Network contract internal MVP',
                'Coordinator and client SDK',
            ],
        },
        {
            date: 'Mid of Q4 2021',
            color: '#FF9700',
            title: 'App beta test',
            content: [
                'Public testnet launch',
                'SubQuery Network Explorer and dApp',
                'Point-in-time indexing',
            ],
        },
        {
            date: 'Mid of Q4 2021',
            color: '#5DD400',
            title: 'Token Test',
            content: [
                'SQT token generation event',
                'Public incentivize testnet launch',
                'Data traffic insights and reporting',
            ],
        },
        {
            date: 'Mid of Q4 2021',
            color: '#007FF4',
            title: 'Alpha Test',
            content: [
                'Launch of the SubQuery Foundation',
                'Finalise research for other Layer-1 chains',
                'Liquidity mining program',
            ],
        },
        {
            date: 'Mid of Q4 2021',
            color: '#FF9700',
            title: 'Benefits',
            content: [
                'Mainnet launch',
                'Centralized exchange launch',
                'Public incentivize testnet',
            ],
        },
        {
            date: 'Mid of Q4 2021',
            color: '#FF4581',
            title: 'Operational',
            content: ['SubQuery launches its own parthian', 'SubQuery Foundation'],
        },
    ]

    return (
        <div className="relative flex h-[490px] overflow-x-auto px-[15px] w-[390px] md:w-[720px] lg:w-[960px] xl:w-[1250px]">
            <div className="absolute inset-0 bg-[url('/img/banner_bg.jpg')] bg-cover bg-no-repeat bg-center opacity-10"></div>
            <div className="grid grid-cols-[215px_220px_215px_220px_215px_220px_215px_220px] z-10 overflow-x-auto overflow-y-hidden">
                {dataList.map((item, index) => (
                    <LongScrollChartBlock
                        key={index}
                        date={item.date}
                        textColor={item.color}
                        title={item.title}
                        content={item.content}
                        isOdd={index % 2 === 0}
                    />
                ))}
            </div>
            <div
                className="absolute h-[8px] w-[1670px] top-[46%] opacity-10 left-[15px] bg-gray-500 z-1"
                style={{
                    maxWidth: 'calc(100% - 30px)',
                }}
            />
        </div>
    )
}

export default LongScrollChart
