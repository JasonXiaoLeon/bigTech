import Link from 'next/link'
import React from 'react'

const HeaderIcon = () => {
  return (
    <div className='flex w-[109px] items-center h-[auto] widthSmall:w-[auto] max-h-[65px]'>
        <Link href={"/"}>
            <img src='/img/header.png' alt='BigTechLogo' />
        </Link>
    </div>
  )
}

export default HeaderIcon
