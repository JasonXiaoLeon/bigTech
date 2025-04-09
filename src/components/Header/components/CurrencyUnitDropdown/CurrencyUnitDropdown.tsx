'use client'
import React, { useState, useRef, useEffect } from 'react'
import CurrDropdown from './component/CurrDropdown'
import { useLocale } from 'next-intl'

const CurrencyUnitDropdown = () => {
    const locale = useLocale()
    const currList = [
        { label: 'ENG', value: 'en' },
        { label: 'ZH', value: 'zh-Hans' },
        { label: 'ZH-HK', value: 'zh-Hant' },
        { label: 'TH', value: 'th' },
    ]

    const findLabelByLocale = (locale: string): string => {
        const match = currList.find((item) => item.value === locale)
        return match?.label || locale.toUpperCase()
    }

    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [currentLanguage, setCurrentLanguage] = useState(findLabelByLocale(locale))
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (!isHovered && isMenuVisible) {
            timerRef.current = setTimeout(() => {
                setIsMenuVisible(false)
            }, 300)
        }

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current)
            }
        }
    }, [isHovered, isMenuVisible])

    const handleLanguageChange = (lng: string, label: string) => {
        setCurrentLanguage(label)
        window.location.href = `/${lng}`
    }

    const languageWidth = currentLanguage === 'ZH-HK' ? 'w-[58.91px]' : 'w-[55.91px]'
    return (
        <div
            className="flex hidden xl:block relative"
            onMouseEnter={() => {
                setIsMenuVisible(true)
                setIsHovered(true)
            }}
            onMouseLeave={() => {
                setIsHovered(false)
            }}
        >
            <div className="flex items-center cursor-pointer h-[28px]">
                <span
                    className={`text-white text-base text-[16px] tracking-1px font-bold ${languageWidth}`}
                >
                    {currentLanguage}
                </span>
                <button>
                    <img
                        src="/img/icon/arrow-down.png"
                        className="w-[9.75px] h-[24.5px] object-contain ml-[10px]"
                        alt="▼"
                    />
                </button>
            </div>
            {isMenuVisible && (
                <div
                    className="absolute top-[25px] left-[-5px] transition-all duration-500 ease-in-out"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <CurrDropdown
                        currentLanguage={currentLanguage}
                        handleLanguageChange={handleLanguageChange}
                    />
                </div>
            )}
        </div>
    )
}

export default CurrencyUnitDropdown
