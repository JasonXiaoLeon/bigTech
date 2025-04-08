import React, { useState, useRef, useEffect } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import DropDownForPages from '../DropDownForPages/DropDownForPages'
import HeaderNaviItem from './components/HeaderNaviItem'

const HeaderNavi = () => {
    const t = useTranslations()
    const locale = useLocale()
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
    const isZHHK = locale === 'zhhant'

    // 点击外部关闭下拉菜单
    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setShowDropdown(false)
            }
        }
        document.addEventListener('mousedown', handleOutsideClick)
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [])

    return (
        <div
            className={`h-[86px] lg:h-[90px] hidden xl:w-[${isZHHK ? '812.18px' : '831.18px'}] lg:w-[711.09px] lg:block`}
        >
            <div className="flex h-full lg:ml-[60px] xl:ml-[90px]">
                {navItems.map((item, index) => (
                    <HeaderNaviItem
                        key={index}
                        name={item.name}
                        index={index}
                        path={item.path}
                        dropdown={item.dropdown}
                        isActive={activeIndex === index}
                        onClick={handleClick}
                    />
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
