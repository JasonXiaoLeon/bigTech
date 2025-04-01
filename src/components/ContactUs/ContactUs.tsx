import React from 'react'
import ContactUsLower from './Component/ContactUsLower'
import ContactUsUpper from './Component/ContactUsUpper'
import ContactForm from './Component/ContactForm'

const ContactUs = () => {
  return (
    <div className='flex flex-col pt-[70px] pb-[110px]'>
        <ContactUsUpper title={'contact'} blueContent={'Contact'} afterBlueContent='&nbsp;ICO Crypto'/>
        <ContactUsLower/>
        <ContactForm/>
    </div>
  )
}

export default ContactUs
