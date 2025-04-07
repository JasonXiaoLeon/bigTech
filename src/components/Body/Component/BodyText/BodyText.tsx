import React from 'react';
import { useTranslation } from 'react-i18next';

const BodyText = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full max-w-[1011.66px] h-auto mb-[25px] md:mb-[30px] lg:mb-[40px] xl:mb-[45px] mx-auto capitalize">
            <div className="text-center">
                <h1 className="text-[clamp(30px,5vw,55px)] text-white tracking-[0.01em] leading-[1.4] font-[600]">
                    <div className="block md:hidden text-[30px]">
                        {t('body_Text.joinFutureOf')}
                        <br />
                        {t('body_Text.algorithmic')}<span className="text-[#00c4f4]">{t('body_Text.crypto')}</span>
                        <br />
                        {t('body_Text.tradingStrategies')}
                    </div>

                    <div className="hidden md:block lg:hidden md:text-[44px]">
                        {t('body_Text.joinFutureOf')}{t('body_Text.algorithmic')}
                        <br />
                        <span className="text-[#00c4f4]">{t('body_Text.crypto')}</span> {t('body_Text.tradingStrategies')}
                    </div>

                    <div className="hidden lg:block lg:text-[45px] xl:text-[55px]">
                        {t('body_Text.joinFutureOf')}{t('body_Text.algorithmic')}
                        <span className="text-[#00c4f4]">{t('body_Text.crypto')}</span>
                        <br />
                        {t('body_Text.tradingStrategies')}
                    </div>
                </h1>
            </div>
        </div>
    );
};

export default BodyText;
