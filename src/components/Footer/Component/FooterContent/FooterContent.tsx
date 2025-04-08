import React from 'react'
import { useTranslation } from 'react-i18next'
import BigTechContact from './Component/BigTechContact/BigTechContact'
import FooterListBlock from './Component/FooterListBlock'
import Subscribe from './Component/Subscribe'

const FooterContent = () => {
    const { t } = useTranslation()

    const listUsefulLinks = [
        t('footerListBlock.listUsefulLinks.0'),
        t('footerListBlock.listUsefulLinks.1'),
        t('footerListBlock.listUsefulLinks.2'),
        t('footerListBlock.listUsefulLinks.3'),
        t('footerListBlock.listUsefulLinks.4'),
    ]

    const listCommunity = [
        t('footerListBlock.listCommunity.0'),
        t('footerListBlock.listCommunity.1'),
        t('footerListBlock.listCommunity.2'),
        t('footerListBlock.listCommunity.3'),
        t('footerListBlock.listCommunity.4'),
    ]

    return (
        <div className="mt-[55px] xl:mx-[-15px] mb-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[305px_400px_240px] xl:grid-cols-[312.5px_312.5px_208.33px_416.66px] xl:h-[287.594px]">
            <BigTechContact />

            <div className="md:ml-[80px] lg:w-[320px]">
                <FooterListBlock title={t('footer.usefulLinks')} value={listUsefulLinks} />
            </div>
            <div className="lg:w-[240px] xl:w-[208.33px]">
                <FooterListBlock title={t('footer.community')} value={listCommunity} />
            </div>
            <div className="xl:ml-[75px] xl:mb-[30px] xl:px-[15px]">
                <Subscribe />
            </div>
        </div>
    )
}

export default FooterContent
