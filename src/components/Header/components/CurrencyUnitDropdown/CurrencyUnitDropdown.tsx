import React, { useState, useEffect, useRef } from 'react';
import CurrDropdown from './component/CurrDropdown';

const CurrencyUnitDropdown = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMenuVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className='flex hidden widthMid:block widthSmall:hidden'>
      <div onMouseEnter={() => setIsMenuVisible(true)} className='w-[55.91px] h-[28px] flex items-center'>
        <span className='text-white text-base text-[16px] tracking-1px font-bold'>ENG</span>
        <button className=''>
        <img 
          src='/img/icon/arrow-down.png' 
          className='w-[9.75px] w-auto object-contain ml-[10px]' 
          alt='▼'
        />
        </button>
      </div>
      {isMenuVisible && <CurrDropdown />}
    </div>
  );
};

export default CurrencyUnitDropdown;
