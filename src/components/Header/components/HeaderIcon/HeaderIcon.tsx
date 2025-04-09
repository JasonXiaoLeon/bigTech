import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const HeaderIcon = () => {
    return (
        <div className="flex w-[109.63px] items-center">
            <Link href={'/'}>
                <Image
                    src="/img/header.png"
                    alt="BigTechLogo"
                    width={110}
                    height={65}
                    className="w-[109.63px] h-[64.992px]"
                    priority
                />
            </Link>
        </div>
    )
}

export default HeaderIcon
