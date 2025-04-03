import CubeBtn from '@/components/Button/CubeBtn'
import SocialMeidaIcon from '@/components/RoadMap/component/OurTeam/Component/SocialMediaIcon'
import React, { useState, useEffect, useRef } from 'react'

const SmallNavBtn = () => {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement | null>(null)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const menuItems = [
        { name: 'Home', link: '#', btn: true },
        { name: 'About us', link: '#' },
        { name: 'Sales', link: '#' },
        { name: 'Roadmap', link: '#' },
        { name: 'Blog', link: '#', btn: true },
        { name: 'Contact us', link: '#' },
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

        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.body.style.overflow = 'auto'
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    return (
        <div className="flex block lg:hidden items-center w-[26.25px] h-[30px]">
            <button onClick={toggleMenu}>
                <img
                    src="/img/icon/menu.png"
                    alt="Menu Image"
                    className="w-[26.25px] h-[26.25px]"
                />
            </button>

            {isOpen && (
                <>
                    <div
                        className="absolute top-0 left-0 w-screen h-screen bg-[#0b1d33] bg-opacity-80 z-40"
                        onClick={() => setIsOpen(false)}
                    ></div>

                    <div
                        ref={menuRef}
                        className="fixed top-0 right-0 w-[300px] h-screen bg-[#0b1d33] text-white z-50"
                    >
                        <div className="py-[30px] px-[25px]">
                            <img src="/img/header.png" className="w-[109.63px] h-[65px]" />
                        </div>
                        <ul className="uppercase">
                            {menuItems.map((item, index) => (
                                <a key={index} href={item.link} className="relative">
                                    <li
                                        className={`flex items-center text-[14px] font-[600] tracking-[0.08em] leading-[24px] w-[300px] pl-[25px] pr-[60px] py-[10px] border-t border-[hsla(0,0%,100%,0.06)] ${index === menuItems.length - 1 ? 'border-b border-[hsla(0,0%,100%,0.06)]' : ''}`}
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
                </>
            )}
        </div>
    )
}

export default SmallNavBtn
