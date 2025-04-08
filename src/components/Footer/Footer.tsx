"use client"
import React from 'react'
import GoTopBtn from './Component/GoTopBtn'
import FooterContent from './Component/FooterContent'
import Copyright from './Component/Copyright'

const Footer = () => {
    return (
        <div className="flex justify-center bg-[#030b15]">
            <div className="w-[360px] md:w-[720px] lg:w-[930px] xl:w-[1220px]">
                <GoTopBtn />
                <FooterContent />
                <Copyright />
            </div>
        </div>
    )
}

export default Footer
