import { useTranslation } from 'react-i18next'
import React, { useState, useRef, useEffect } from 'react'
import DropDownForPages from '../DropDownForPages/DropDownForPages'

const HeaderNavi = () => {
    const { t, i18n } = useTranslation()
    const [activeIndex, setActiveIndex] = useState(0)
    const [showDropdown, setShowDropdown] = useState(false)

    const dropdownRef = useRef<HTMLDivElement | null>(null)

    const navItems = [
        { name: t('nav.home'), path: '#home', dropdown: true },
        { name: t('nav.about_us'), path: '#about-us', dropdown: false },
        { name: t('nav.sales'), path: '#sales', dropdown: false },
        { name: t('nav.roadmap'), path: '#roadmap', dropdown: true },
        { name: t('nav.blog'), path: '#blog', dropdown: false },
        { name: t('nav.contact_us'), path: '#contact-us', dropdown: false },
    ]

    const handleClick = (index: number, path: string, dropdown: boolean) => {
        setActiveIndex(index)
        setShowDropdown(dropdown)

        const element = document.querySelector(path)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
    }

    const contentList = [t('dropdown.page1'), t('dropdown.page2')]

    // 点击外部关闭下拉菜单的逻辑
    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setShowDropdown(false)
            }
        }

        // 添加点击事件监听器
        document.addEventListener('mousedown', handleOutsideClick)

        // 清理事件监听器
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [])

    const isZHHK = i18n.language === 'zhhant'

    return (
        <div className={`h-[86px] lg:h-[90px] hidden xl:w-[${isZHHK ? '812.18px' : '831.18px'}] lg:w-[711.09px] lg:block`}>
            <div className="flex h-full lg:ml-[60px] xl:ml-[90px]">
                {navItems.map((item, index) => (
                    <div key={index} className="h-full">
                        <a
                            href={item.path}
                            onClick={(e) => {
                                e.preventDefault()
                                handleClick(index, item.path, item.dropdown)
                            }}
                            className={`relative flex items-center h-full text-white text-[14px] font-[600] leading-[1] tracking-[1px] inline-block group 
                ${index !== navItems.length - 1 ? 'mr-[40px]' : ''} 
                tracking-1px`}
                        >
                            {item.name}
                            <span
                                className={`absolute left-0 bottom-0 h-[3px] bg-[#00c4f4] transition-all duration-300 ${
                                    activeIndex === index ? 'w-full' : 'w-0'
                                }`}
                            ></span>
                            <span className="absolute left-0 bottom-0 h-[3px] bg-[#00c4f4] w-0 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    </div>
                ))}
            </div>

            {showDropdown && (
                <div ref={dropdownRef} className="relative">
                    <DropDownForPages contentList={contentList} />
                </div>
            )}
        </div>
    )
}

export default HeaderNavi
