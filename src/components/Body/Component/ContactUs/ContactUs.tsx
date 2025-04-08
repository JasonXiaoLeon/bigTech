import React from 'react'
import { useTranslation } from 'react-i18next'
import ContactUsLower from './Component/ContactUsLower'
import ContactForm from './Component/ContactForm'
import RoadMapUpperPart from '../RoadMap/component/RoadMapUpperPart'

const ContactUs = () => {
    const { t } = useTranslation()

    return (
        <div className="flex flex-col pt-[70px] pb-[110px]">
            <RoadMapUpperPart
                title={t('contact.title')}
                blueContent={t('contact.blueContent')}
                afterBlueContent={t('contact.afterBlueContent')}
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
