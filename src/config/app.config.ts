export const appConfig = {
  name: 'AZIB',
  nameAr: 'عازب',
  scheme: 'azib',
  defaultLocale: 'ar' as const,
  supportedLocales: ['ar', 'en'] as const,
  rtlLocales: ['ar'] as const,
  demo: {
    defaultEnabled: true,
    badgeLabelKey: 'demo.badge',
  },
  storage: {
    demoPrefix: '@demo/',
    prodPrefix: '@azib/',
    secureKeyPrefix: 'azib.secure.',
  },
} as const;
