import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

import arCommon from '@/locales/ar/common.json';
import arAuth from '@/locales/ar/auth.json';
import arHome from '@/locales/ar/home.json';
import arAssistance from '@/locales/ar/assistance.json';
import arWeddings from '@/locales/ar/weddings.json';
import arMarketplace from '@/locales/ar/marketplace.json';
import arProfile from '@/locales/ar/profile.json';

import enCommon from '@/locales/en/common.json';
import enAuth from '@/locales/en/auth.json';
import enHome from '@/locales/en/home.json';
import enAssistance from '@/locales/en/assistance.json';
import enWeddings from '@/locales/en/weddings.json';
import enMarketplace from '@/locales/en/marketplace.json';
import enProfile from '@/locales/en/profile.json';

const resources = {
  ar: {
    common: arCommon, auth: arAuth, home: arHome,
    assistance: arAssistance, weddings: arWeddings,
    marketplace: arMarketplace, profile: arProfile,
  },
  en: {
    common: enCommon, auth: enAuth, home: enHome,
    assistance: enAssistance, weddings: enWeddings,
    marketplace: enMarketplace, profile: enProfile,
  },
} as const;

const deviceLang = Localization.getLocales()[0]?.languageCode;
const initialLng = deviceLang === 'en' ? 'en' : 'ar'; // العربية افتراضية

i18n.use(initReactI18next).init({
  resources,
  lng: initialLng,
  fallbackLng: 'ar',
  ns: ['common', 'auth', 'home', 'assistance', 'weddings', 'marketplace', 'profile'],
  defaultNS: 'common',
  interpolation: { escapeValue: false },
  compatibilityJSON: 'v4',
});

export default i18n;
