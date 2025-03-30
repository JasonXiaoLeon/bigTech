import React from 'react'
import BigTechContact from './Component/BigTechContact/BigTechContact'
import FooterListBlock from './Component/FooterListBlock'
import Subscribe from './Component/Subscribe'

const FooterContent = () => {

  const listUsefulLinks = [
    "Contact us",
    "How it works",
    "Create",
    "Explore",
    "Terms & Services",
  ]

  const listCommunity = [
    "Help Center",
    "Partners",
    "Suggestions",
    "Blog",
    "Newsletter",
  ]

  return (
    <div className='mt-[55px] mb-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:flex'>
      <BigTechContact/>
      
      <div className='lg:ml-[80px]'>
      <FooterListBlock title="Useful Links" value={listUsefulLinks} />
      </div>   
      <FooterListBlock title="Community" value={listCommunity} />
      <Subscribe/>
    </div>
  )
}

export default FooterContent
