import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function NotFound() {
    const t = useTranslations()

    return (
        <div className="flex flex-col justify-center items-center h-[400px] w-full bg-[#030b15] text-white">
            <h1 className="text-[45px]">{t('404.title')}</h1>
            <p className="text-[28px]">{t('404.message')}</p>
            <Link href="/" className="text-[24px] text-[#00c4f4] font-[600]">
                {t('404.returnHome')}
            </Link>
        </div>
    )
}
