import React from 'react'
import ChooseItem from './component'

const ChooseItemlist = () => {
  const list = [
    {
      url: '',
      name: 'Mobile payment make easy',
      content: 'Add new, trending and rare artwork to your collection.',
    },
    // {
    //   url: '',
    //   name: 'Lifetime free transaction',
    //   content: 'Add new, trending and rare artwork to your collection.',
    // },
    // {
    //   url: '',
    //   name: 'Security & control over money',
    //   content: 'Add new, trending and rare artwork to your collection.',
    // }
  ]

  return (
    <div className="bg-[#030b15] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
        {list.map((item, index) => (
          <ChooseItem
            key={index}
            url={item.url}
            name={item.name}
            content={item.content}
          />
        ))}
      </div>
    </div>
  )
}

export default ChooseItemlist
