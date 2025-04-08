import React from 'react'
import ChooseItem from './component'
import ComponentCarousel from '@/components/Utils/Component/ComponentCarousel'
import { useTranslation } from 'react-i18next'

const ChooseItemlist = () => {
    const { t } = useTranslation()

    const list = [
        {
            url: '/img/choose_1.svg',
            name: t('chooseItemlist.mobilePaymentMakeEasy'),
            content: t('chooseItemlist.mobilePaymentContent'),
        },
        {
            url: '/img/choose_2.svg',
            name: t('chooseItemlist.lifetimeFreeTransaction'),
            content: t('chooseItemlist.lifetimeFreeTransactionContent'),
        },
        {
            url: '/img/choose_3.svg',
            name: t('chooseItemlist.securityAndControlOverMoney'),
            content: t('chooseItemlist.securityAndControlOverMoneyContent'),
        },
        {
            url: '/img/choose_4.svg',
            name: t('chooseItemlist.mobilePaymentMakeEasy'),
            content: t('chooseItemlist.mobilePaymentContent'),
        },
        {
            url: '/img/choose_1.svg',
            name: t('chooseItemlist.mobilePaymentMakeEasy'),
            content: t('chooseItemlist.mobilePaymentContent'),
        },
        {
            url: '/img/choose_2.svg',
            name: t('chooseItemlist.lifetimeFreeTransaction'),
            content: t('chooseItemlist.lifetimeFreeTransactionContent'),
        },
        {
            url: '/img/choose_3.svg',
            name: t('chooseItemlist.securityAndControlOverMoney'),
            content: t('chooseItemlist.securityAndControlOverMoneyContent'),
        },
        {
            url: '/img/choose_4.svg',
            name: t('chooseItemlist.mobilePaymentMakeEasy'),
            content: t('chooseItemlist.mobilePaymentContent'),
        },
    ]

    const items = list.map((item, index) => (
        <ChooseItem key={index} url={item.url} name={item.name} content={item.content} />
    ))

    return (
        <div className="bg-[#030b15] text-white mx-auto">
            <ComponentCarousel components={items} autoPlay={true} interval={3000} />
        </div>
    )
}

export default ChooseItemlist
