"use client"
import React, { useState, useEffect } from 'react'
import HeaderIcon from './components/HeaderIcon'
import HeaderNavi from './components/HeaderNavi'
import BuyButton from './components/BuyButton'

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
      } flex space-between items-center h-[90px] widthSmall:h-auto`}
    >
        <div className='mx-auto px-[15px] flex'>
            <div className='flex w-[940px] items-center'>
                <HeaderIcon />
                <HeaderNavi />
            </div>
            <BuyButton />
        </div>
    </div>
  );
}

export default Header;
