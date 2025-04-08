import React from 'react'
import { useTranslation } from 'react-i18next'
import DescripHeader from '../DescripHeader/DescripHeader'
import NormalBtn from '@/components/Button/NormalBtn/NormalBtn'

const DescriptionOfAbout = () => {
    const { t } = useTranslation()

    return (
        <div className="md:px-[15px]">
            <div className="md:ml-[30px] xl:ml-[55px] mb-[30px]">
                <div className="relative left-[-15px]">
                    <DescripHeader content={t('aboutus_description.whoWeAre')} />
                </div>
                <div className="text-white text-[28px] md:text-[40px] lg:text-[34px] xl:text-[42px] font-bold leading-[1.2] tracking-[-.01em] lg:w-[321.91px] xl:w-[397.66px]">
                    <span>{t('aboutus_description.platformInfo')}</span>
                </div>
            </div>

            <div className="md:ml-[30px] xl:ml-[55px] text-[#a4b4c3] font-normal mb-[40px] w-[360px] md:w-[660px] lg:w-[357px] xl:w-[394.2px] leading-[1.75]">
                {t('aboutus_description.platformDesc')}
            </div>
            <div className="md:ml-[30px] xl:ml-[55px] h-[55px] w-[204.7px]">
                <NormalBtn
                    value={t('aboutus_description.purchaseTokens')}
                    widthType={2}
                    textHoverColor="#00c4f4"
                />
            </div>
        </div>
    )
}

export default DescriptionOfAbout
