'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import CubeBtn from '@/components/Button/CubeBtn'
import SocialMeidaIcon from '@/components/Body/Component/RoadMap/Component/OurTeam/Component/SocialMediaIcon'
import Image from 'next/image'

const SmallNavBtn = () => {
    const t = useTranslations()
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement | null>(null)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const menuItems = [
        { name: t('side_bar.home'), link: '#home', btn: true },
        { name: t('side_bar.aboutUs'), link: '#about-us' },
        { name: t('side_bar.sales'), link: '#sales' },
        { name: t('side_bar.roadmap'), link: '#roadmap' },
        { name: t('side_bar.blog'), link: '#', btn: true },
        { name: t('side_bar.contactUs'), link: '#contact-us' },
    ]

    const socialMediaIcons: { type: 'facebook' | 'twitter' | 'ins' | 'linkedin' | 'youtube' }[] = [
        { type: 'facebook' },
        { type: 'twitter' },
        { type: 'ins' },
        { type: 'linkedin' },
        { type: 'youtube' },
    ]

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    const handleScrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
    }

    return (
        <div className="flex block lg:hidden items-center w-[26.25px] h-[30px]">
            <button onClick={toggleMenu}>
                <Image src="/img/icon/menu.png" alt="Menu" width={26.25} height={26.25} />
            </button>

            <div
                className={`fixed top-0 left-0 w-screen h-screen bg-[#0b1d33] z-40 transition-opacity duration-300 ${
                    isOpen ? 'opacity-80' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsOpen(false)}
            ></div>
            <div
                ref={menuRef}
                className={`fixed top-0 right-0 w-[300px] h-screen bg-[#0b1d33] text-white z-50 
                    transform transition-all duration-700 ease-in-out
                    ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
                `}
            >
                <div className="flex justify-between py-[30px] px-[25px]">
                    <Image src="/img/header.png" alt="Logo" width={109.63} height={65} />
                </div>
                <ul className="uppercase">
                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            onClick={(e) => {
                                e.preventDefault()
                                handleScrollToSection(item.link.replace('#', ''))
                            }}
                            className="relative"
                        >
                            <li
                                className={`flex items-center text-[14px] font-[600] tracking-[0.08em] leading-[24px] w-[300px] pl-[25px] pr-[60px] py-[10px] border-t border-[hsla(0,0%,100%,0.06)] ${
                                    index === menuItems.length - 1
                                        ? 'border-b border-[hsla(0,0%,100%,0.06)]'
                                        : ''
                                }`}
                            >
                                {item.name}
                            </li>
                            {item.btn && (
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                                    <CubeBtn size="32px" bgColor="#00c4f4" />
                                </div>
                            )}
                        </a>
                    ))}
                </ul>
                <div className="flex justify-center items-center w-[300px] px-[20px] pt-[30px] pb-[20px]">
                    {socialMediaIcons.map((icon, index) => (
                        <div key={index} className="flex justify-center w-[60px] h-[50px]">
                            <div className="flex justify-center items-center w-[40px] h-[40px] border border-[hsla(0,0%,100%,0.06)] hover:bg-[#00c4f4] rounded-[3px]">
                                <SocialMeidaIcon type={icon.type} size="16" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SmallNavBtn
