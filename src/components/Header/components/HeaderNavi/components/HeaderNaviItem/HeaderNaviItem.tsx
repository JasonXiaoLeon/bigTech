import React, { useState } from 'react'

interface Props {
    name: string
    index: number
    path: string
    isActive: boolean
    dropdown: boolean
    onClick: (index: number, path: string, dropdown: boolean) => void
}

const HeaderNaviItem: React.FC<Props> = ({ name, index, path, isActive, dropdown, onClick }) => {
    const [isHoveredEnter, setIsHoveredEnter] = useState(false)
    const [isHoveredLeave, setIsHoveredLeave] = useState(false)

    const handleMouseEnter = () => {
        setIsHoveredLeave(false)
        setTimeout(() => {
            setIsHoveredEnter(true)
        }, 100)
    }

    const handleMouseLeave = () => {
        setIsHoveredLeave(true)
        setTimeout(() => {
            setIsHoveredEnter(false)
        }, 500)
    }

    return (
        <div className="h-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a
                href={path}
                onClick={(e) => {
                    e.preventDefault()
                    onClick(index, path, dropdown)
                }}
                className={`relative flex items-center h-full text-white text-[14px] font-[600] leading-[1] tracking-[1px] inline-block group 
                ${index !== 5 ? 'mr-[40px]' : ''}`}
            >
                {name}
                {isHoveredEnter && (
                    <span className="absolute bottom-0 left-0 block h-[3px] bg-[#00c4f4] w-0 transition-all duration-300 animate-growWidth"></span>
                )}
                {isHoveredLeave && (
                    <span className="absolute bottom-0 left-0 block h-[3px] bg-[#030B15] w-0 transition-all duration-300 animate-growWidth"></span>
                )}
                <span
                    className={`absolute left-0 bottom-0 h-[3px] bg-[#00c4f4] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0'
                    }`}
                ></span>
            </a>
        </div>
    )
}

export default HeaderNaviItem
