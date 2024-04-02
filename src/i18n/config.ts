import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from './en/translation.json'
import uaTranslation from './ua/translation.json'
import plTranslation from './pl/translation.json'

i18next.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: {
      translation: enTranslation,
    },
    ua: {
      translation: uaTranslation,
    },
    pl: {
      translation: plTranslation,
    },
  },
})
