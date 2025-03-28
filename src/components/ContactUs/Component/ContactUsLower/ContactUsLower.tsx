import React from 'react'
import ContactCard from '../ContactUsUpper/Component/ContactCard'

const ContactUsLower = () => {
  const contactData = [
    { url: '/img/icon/email.png', firstLine: 'company@gmail.com', secondLine: 'infoweb@gmail.com', borderColor:'#ff9700' },
    { url: '/img/icon/phone-fill.png', firstLine: '+84 0977425031', secondLine: '+998 765 775 34', borderColor:'#ff4581'  },
    { url: '/img/icon/location-fill.png', firstLine: 'State/province/area:', secondLine: 'Georgia 198', borderColor:'#00c4f4'  },
  ]

  return (
    <div className='flex flex-wrap justify-center mx-auto mb-[50px] w-[390px] md:w-[750px] lg:w-[960px] xl:w-[1250px] relative'>
      {contactData.map((item, index) => (
        <div 
          key={index} 
          className={`flex justify-center ${
            index === 2 ? 'md:w-full' : ''
          } lg:h-[207px] lg:w-[320px]`}
        >
          <ContactCard
            url={item.url}
            firstLine={item.firstLine}
            secondLine={item.secondLine}
            borderColor={item.borderColor}
          />
        </div>
      ))}
      <div className='hidden lg:block absolute top-1/4 lg:left-[calc(27%-16px)] xl:left-[calc(33%-16px)] transform -translate-y-1/2'>
        <img src='/img/icon/arrow.png' />
      </div>
      <div className='hidden lg:block absolute top-1/4 lg:left-[calc(60%-16px)] transform -translate-y-1/2'>
        <img src='/img/icon/arrow.png' />
      </div>
    </div>
  )
}

export default ContactUsLower
