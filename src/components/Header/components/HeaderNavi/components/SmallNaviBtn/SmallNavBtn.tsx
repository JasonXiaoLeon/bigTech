import SocialMeidaIcon from '@/components/RoadMap/component/OurTeam/Component/SocialMediaIcon';
import React, { useState, useEffect, useRef } from 'react';

const SmallNavBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Home', link: '#' },
    { name: 'About us', link: '#' },
    { name: 'Sales', link: '#' },
    { name: 'Roadmap', link: '#' },
    { name: 'Blog', link: '#' },
    { name: 'Contact us', link: '#' },
  ];

  const socialMediaIcons = [
    { url: '/img/icon/Facebook.png', alt: 'Facebook' },
    { url: '/img/icon/twiter.png', alt: 'Twitter' },
    { url: '/img/icon/instagram.png', alt: 'Instagram' },
    { url: '/img/icon/linkedin.png', alt: 'LinkedIn' },
    { url: '/img/icon/Youtube-fill.png', alt: 'YouTube' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex block lg:hidden items-center w-[26.25px] h-[30px]'>
      <button onClick={toggleMenu}>
        <img 
          src="/img/icon/menu.png" 
          alt="Menu Image" 
          className="w-[26.25px] h-[26.25px]"
        />
      </button>

      {isOpen && (
        <div 
          ref={menuRef}
          className="fixed top-0 right-0 w-[300px] h-screen bg-[#0b1d33] text-white pm-[30px]"
        >
          <div className='py-[30px] px-[25px]'>
            <img src='/img/header.png' className='w-[109.63px] h-[65px]' />
          </div>
          <ul className='uppercase'>
            {menuItems.map((item, index) => (
              <a key={index} href={item.link}>
                <li className='flex items-center text-[14px] w-[300px] h-[44px] pl-[25px] pr-[60px]'>
                  {item.name}
                </li>
              </a>
            ))}
          </ul>
          <div className="flex justify-center items-center w-[300px] px-[20px] pt-[30px] pb-[20px]">
            {socialMediaIcons.map((icon, index) => (
              <div key={index} className='flex justify-center w-[60px] h-[50px]'>
                <div className="flex justify-center items-center w-[40px] h-[40px] border border-gray-500 hover:bg-[#00c4f4] rounded-[3px]">
                  <SocialMeidaIcon url={icon.url} height="16px" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SmallNavBtn;
