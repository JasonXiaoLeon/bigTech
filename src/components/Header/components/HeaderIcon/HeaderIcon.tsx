import Link from 'next/link'
import React from 'react'

const HeaderIcon = () => {
    return (
        <div className="flex w-[109.63px] items-center">
            <Link href={'/'}>
                <img src="/img/header.png" alt="BigTechLogo" className="h-[64.99px]" />
            </Link>
        </div>
    )
}

export default HeaderIcon
