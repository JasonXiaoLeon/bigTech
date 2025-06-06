import React from 'react'
import Button from '@/components/Button/Button'
import { useTranslations } from 'next-intl'
import CurrencyUnitDropdown from '../CurrencyUnitDropdown'

const BuyButton = () => {
    const t = useTranslations()

    return (
        <div className="flex items-center h-[86px] lg:h-[90px] ml-[10px] mr-[50px] lg:mr-[0px] hidden md:flex">
            <div className="flex items-center">
                <CurrencyUnitDropdown />
            </div>
            <div className="h-[20px] w-[1px] xl:ml-[35px] lg:border-l lg:border-l-[rgb(164,180,195)]" />
            <div className="flex pl-[20px] xl:pl-[35px] items-center">
                <Button value={t('header_button.buy_now')} width="143.28px" height="50px" />
            </div>
        </div>
    )
}

export default BuyButton
