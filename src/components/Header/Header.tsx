"use client"
import React, { useState, useEffect } from 'react'
import HeaderIcon from './components/HeaderIcon'
import HeaderNavi from './components/HeaderNavi'
import BuyButton from './components/BuyButton'
import SmallNavBtn from './components/HeaderNavi/components/SmallNaviBtn'

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isFixed
          ? 'fixed top-0 left-0 right-0 z-50 bg-[#030b15] translate-y-0 transition-all duration-1000 ease-in-out'
          : 'relative bg-[#030b15] translate-y-0'
      } flex justify-center items-center w-screen h-[90px] px-[15px] md:px-[0px] sm:h-auto z-50 border-b border-[hsla(0,0%,100%,0.1)]`}
    >
        <div className='flex justify-between w-[345px] sm:w-[438px] md:w-[663.75px] lg:w-[994px] xl:w-[1220px]'>
            <HeaderIcon />
            <div className='flex items-center '>
                <HeaderNavi />
            </div>
            <BuyButton/>
        </div>
        <SmallNavBtn />
    </div>
  );
}

export default Header;
