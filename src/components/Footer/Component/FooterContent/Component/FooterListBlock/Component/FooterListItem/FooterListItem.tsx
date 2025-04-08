import React, { useState } from 'react'

interface FooterListItemProps {
    item: string
}

const FooterListItem: React.FC<FooterListItemProps> = ({ item }) => {
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
        <div className="relative mb-[10px] last:mb-0">
            <a
                href="#"
                className="inline-block hover:text-white relative overflow-hidden cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span>{item}</span>
                {isHoveredEnter && (
                    <span className="absolute bottom-0 left-0 block h-[2px] bg-white w-0 transition-all duration-300 animate-growWidth"></span>
                )}
                {isHoveredLeave && (
                    <span className="absolute bottom-0 left-0 block h-[2px] bg-[#030B15] w-0 transition-all duration-300 animate-growWidth"></span>
                )}
            </a>
        </div>
    )
}
export default FooterListItem
