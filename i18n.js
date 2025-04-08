// i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './public/locales/en/translation.json'
import zh from './public/locales/zh/translation.json'
import zhhant from './public/locales/zhhant/translation.json'
import th from './public/locales/th/translation.json'
i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        zh: {
            translation: zh,
        },
        zhhant: {
            translation: zhhant,
        },
        th: {
            translation: th,
        },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
})

export default i18n
