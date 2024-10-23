import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import enJSON from './locales/en.json'
import ptJSON from './locales/pt.json'
i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
    pt: { ...ptJSON }, 
  },
  lng: "pt",
});