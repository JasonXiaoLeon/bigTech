import React from 'react'

interface Props {
  value: string;
  url: string;
}

const TermBtn: React.FC<Props> = ({ value, url }) => {
  return (
    <div className='px-[20px] text-[15px] text-[#a4b4c3]'>
      <a href={url} className=''>
        <button>{value}</button>
      </a>
    </div>
  )
}

export default TermBtn
