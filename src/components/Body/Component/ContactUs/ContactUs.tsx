import React from 'react'
import ContactUsLower from './Component/ContactUsLower'
import ContactForm from './Component/ContactForm'
import RoadMapUpperPart from '../RoadMap/component/RoadMapUpperPart'

const ContactUs = () => {
    return (
        <div className="flex flex-col pt-[70px] pb-[110px]">
            <RoadMapUpperPart
                title={'contact'}
                blueContent={'Contact'}
                afterBlueContent="&nbsp;ICO Crypto"
                marginBottom={'60px'}
            />
            <div className="mt-[10px]">
                <ContactUsLower />
            </div>
            <ContactForm />
        </div>
    )
}

export default ContactUs
