import React from 'react'
import ContactUsLower from './Component/ContactUsLower'
import ContactForm from './Component/ContactForm'
import RoadMapUpperPart from '../Component/RoadMap/component/RoadMapUpperPart'

const ContactUs = () => {
    return (
        <div className="flex flex-col pt-[70px] pb-[110px]">
            <RoadMapUpperPart
                title={'contact'}
                blueContent={'Contact'}
                afterBlueContent="&nbsp;ICO Crypto"
                marginBottom={'70px'}
            />
            <ContactUsLower />
            <ContactForm />
        </div>
    )
}

export default ContactUs
