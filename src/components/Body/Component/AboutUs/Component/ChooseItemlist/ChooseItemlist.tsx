'use client'
import React from 'react'
import ChooseItem from './component' // 引入单个项组件
import ComponentCarousel from '@/components/Utils/Component/ComponentCarousel'

const ChooseItemlist = () => {
    const list = [
        {
            url: '/img/choose_1.svg',
            name: 'Mobile payment make easy',
            content: 'Add new, trending and rare artwork to your collection.',
        },
        {
            url: '/img/choose_2.svg',
            name: 'Lifetime free transaction',
            content: 'Add new, trending and rare artwork to your collection.',
        },
        {
            url: '/img/choose_3.svg',
            name: 'Security & control over money',
            content: 'Add new, trending and rare artwork to your collection.',
        },
        {
            url: '/img/choose_4.svg',
            name: 'Mobile payment make easy',
            content: 'Add new, trending and rare artwork to your collection.',
        },
        {
            url: '/img/choose_1.svg',
            name: 'Mobile payment make easy',
            content: 'Add new, trending and rare artwork to your collection.',
        },
        {
            url: '/img/choose_2.svg',
            name: 'Lifetime free transaction',
            content: 'Add new, trending and rare artwork to your collection.',
        },
        {
            url: '/img/choose_3.svg',
            name: 'Security & control over money',
            content: 'Add new, trending and rare artwork to your collection.',
        },
        {
            url: '/img/choose_4.svg',
            name: 'Mobile payment make easy',
            content: 'Add new, trending and rare artwork to your collection.',
        },
        {
            url: '/img/choose_1.svg',
            name: 'Mobile payment make easy',
            content: 'Add new, trending and rare artwork to your collection.',
        },
        {
            url: '/img/choose_2.svg',
            name: 'Lifetime free transaction',
            content: 'Add new, trending and rare artwork to your collection.',
        },
        {
            url: '/img/choose_3.svg',
            name: 'Security & control over money',
            content: 'Add new, trending and rare artwork to your collection.',
        },
        {
            url: '/img/choose_4.svg',
            name: 'Mobile payment make easy',
            content: 'Add new, trending and rare artwork to your collection.',
        },
        {
            url: '/img/choose_1.svg',
            name: 'Mobile payment make easy',
            content: 'Add new, trending and rare artwork to your collection.',
        },
        {
            url: '/img/choose_2.svg',
            name: 'Lifetime free transaction',
            content: 'Add new, trending and rare artwork to your collection.',
        },
        {
            url: '/img/choose_3.svg',
            name: 'Security & control over money',
            content: 'Add new, trending and rare artwork to your collection.',
        },
        {
            url: '/img/choose_4.svg',
            name: 'Mobile payment make easy',
            content: 'Add new, trending and rare artwork to your collection.',
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
