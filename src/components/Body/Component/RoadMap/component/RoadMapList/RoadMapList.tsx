import React from 'react'
import { useTranslations } from 'next-intl'

const RoadMapList = () => {
    const t = useTranslations()

    const list = [
        t('roadMapList.whitePaper'),
        t('roadMapList.privacyPolicy'),
        t('roadMapList.termsOfCoinSale'),
        t('roadMapList.onePager'),
    ]

    return (
        <div className="flex md:w-[390px] md:mx-auto lg:mx-[0px] xl:w-[490px]">
            <ul className="flex flex-col justify-center w-[360px] h-[171px] item-center mb-[40px]">
                {list.map((item, index) => (
                    <li
                        key={index}
                        className={`text-[18px] ${index !== list.length - 1 ? 'mb-[15px]' : 'mb-0'} relative leading-[1.75] text-white pl-[15px] before:content-['•'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2`}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RoadMapList
