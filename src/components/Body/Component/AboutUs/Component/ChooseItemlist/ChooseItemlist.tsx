"use client"
import React from 'react';
import ChooseItem from './component'; // 引入单个项组件
import ComponentCarousel from '@/components/Utils/Component/ComponentCarousel';

const ChooseItemlist = () => {
  const list = [
    {
      url: '',
      name: 'Mobile payment make easy',
      content: 'Add new, trending and rare artwork to your collection.',
    },
    {
      url: '',
      name: 'Lifetime free transaction',
      content: 'Add new, trending and rare artwork to your collection.',
    },
    {
      url: '',
      name: 'Security & control over money',
      content: 'Add new, trending and rare artwork to your collection.',
    },{
      url: '',
      name: 'Mobile payment make easy',
      content: 'Add new, trending and rare artwork to your collection.',
    },
    {
      url: '',
      name: 'Lifetime free transaction',
      content: 'Add new, trending and rare artwork to your collection.',
    },
    {
      url: '',
      name: 'Security & control over money',
      content: 'Add new, trending and rare artwork to your collection.',
    },
  ];

  // 将 ChooseItem 组件列表传给 ComponentCarousel
  const items = list.map((item, index) => (
    <ChooseItem
      key={index}
      url={item.url}
      name={item.name}
      content={item.content}
    />
  ));

  return (
    <div className="bg-[#030b15] text-white">
      <ComponentCarousel
        components={items}
        autoPlay={true}
        interval={3000}
        visibleCount={3}        // 每次显示 3 个组件
        gap={12}                 // 每项间隔 8px
        containerWidth={330*3+12*2}    // 可视区域宽度 800px
        containerHeight={400}   // 可视区域高度 400px   
      />
    </div>
  );
};

export default ChooseItemlist;
