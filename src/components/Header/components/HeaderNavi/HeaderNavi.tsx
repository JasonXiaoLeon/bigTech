import React, { useState } from 'react';

const HeaderNavi = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { name: 'HOME', path: '#home' },
    { name: 'ABOUT US', path: '#about-us' },
    { name: 'SALES', path: '#sales' },
    { name: 'ROADMAP', path: '#roadmap' },
    { name: 'BLOG', path: '#blog' },
    { name: 'CONTACT US', path: '#contact-us' }
  ];

  const handleClick = (index: number, path: string) => {
    setActiveIndex(index)
    const element = document.querySelector(path)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="h-[90px] hidden xl:w-[831.38px] lg:w-[711.09px] lg:block">
      <div className="flex h-full lg:ml-[60px] xl:ml-[90px]">
        {navItems.map((item, index) => (
          <div key={index} className="h-full">
            <a
              href={item.path}
              onClick={(e) => {
                e.preventDefault()
                handleClick(index, item.path)
              }}
              className={`relative flex items-center h-full text-white text-[14px] font-bold inline-block group 
                ${index !== navItems.length - 1 ? 'mr-[40px]' : ''} 
                tracking-1px`}
            >
              {item.name}
              <span
                className={`absolute left-0 bottom-0 h-[3px] bg-[#00c4f4] transition-all duration-300 ${
                  activeIndex === index ? 'w-full' : 'w-0'
                }`}
              ></span>
              <span className="absolute left-0 bottom-0 h-[3px] bg-[#00c4f4] w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderNavi;
