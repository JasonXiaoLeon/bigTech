import React from 'react'
import { useTranslation } from 'react-i18next'
import LongScrollChartBlock from './Component/LongScrollChartBlock'

const LongScrollChart = () => {
    const { t } = useTranslation()

    const dataList = [
        {
            date: t('longScrollChart.dates.midOfQ4_2021'),
            color: '#0dcaf0',
            title: t('longScrollChart.concept.title'),
            content: [
                t('longScrollChart.concept.content.0'),
                t('longScrollChart.concept.content.1'),
                t('longScrollChart.concept.content.2'),
            ],
        },
        {
            date: t('longScrollChart.dates.midOfQ4_2021'),
            color: '#d63384',
            title: t('longScrollChart.research.title'),
            content: [
                t('longScrollChart.research.content.0'),
                t('longScrollChart.research.content.1'),
                t('longScrollChart.research.content.2'),
            ],
        },
        {
            date: t('longScrollChart.dates.midOfQ4_2021'),
            color: '#FF9700',
            title: t('longScrollChart.appBetaTest.title'),
            content: [
                t('longScrollChart.appBetaTest.content.0'),
                t('longScrollChart.appBetaTest.content.1'),
                t('longScrollChart.appBetaTest.content.2'),
            ],
        },
        {
            date: t('longScrollChart.dates.midOfQ4_2021'),
            color: '#5DD400',
            title: t('longScrollChart.tokenTest.title'),
            content: [
                t('longScrollChart.tokenTest.content.0'),
                t('longScrollChart.tokenTest.content.1'),
                t('longScrollChart.tokenTest.content.2'),
            ],
        },
        {
            date: t('longScrollChart.dates.midOfQ4_2021'),
            color: '#007FF4',
            title: t('longScrollChart.alphaTest.title'),
            content: [
                t('longScrollChart.alphaTest.content.0'),
                t('longScrollChart.alphaTest.content.1'),
                t('longScrollChart.alphaTest.content.2'),
            ],
        },
        {
            date: t('longScrollChart.dates.midOfQ4_2021'),
            color: '#FF9700',
            title: t('longScrollChart.benefits.title'),
            content: [
                t('longScrollChart.benefits.content.0'),
                t('longScrollChart.benefits.content.1'),
                t('longScrollChart.benefits.content.2'),
            ],
        },
        {
            date: t('longScrollChart.dates.midOfQ4_2021'),
            color: '#FF4581',
            title: t('longScrollChart.operational.title'),
            content: [
                t('longScrollChart.operational.content.0'),
                t('longScrollChart.operational.content.1'),
            ],
        },
    ]

    return (
        <div className="relative flex h-[490px] overflow-x-auto px-[15px] w-[390px] md:w-[720px] lg:w-[960px] xl:w-[1250px]">
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
