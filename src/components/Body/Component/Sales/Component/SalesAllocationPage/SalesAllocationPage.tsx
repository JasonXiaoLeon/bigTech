import React, { useEffect, useState } from 'react';

interface Props {
  title: string;
  content: string;
}

const SalesAllocationPage: React.FC<Props> = ({ title, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`flex flex-col w-full h-[289px] mt-[20px] lg:w-[480px] lg:mt-[0px] lg:px-[15px] transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="h-[96px] md:w-[570px] md:h-[54px] lg:w-[360px] lg:h-[108px] xl:w-[363.75px] xl:h-[132px] mb-[20px] xl:mb-[35px] text-[40px] tracking-[-0.01em] md:text-[45px] xl:text-[55px] text-white leading-[1.2] font-bold">
        {title}
      </div>
      <div className="h-[84px] md:w-[570px] md:h-[56px] lg:w-[360px] lg:h-[84px] xl:w-[363.75px] mb-[30px] text-[#a4b4c3] text-[16px] font-semibold">
        {content}
      </div>
    </div>
  );
};

export default SalesAllocationPage;
