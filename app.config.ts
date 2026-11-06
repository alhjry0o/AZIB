import type { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'عازب | AZIB',
  slug: 'azib-mobile',
  scheme: 'azib',
  version: '0.1.0',
  orientation: 'portrait',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'org.azib.mobile',
    infoPlist: {
      CFBundleAllowMixedLocalizations: true,
    },
  },
  android: {
    package: 'org.azib.mobile',
    adaptiveIcon: {
      backgroundColor: '#0F5132',
    },
  },
  web: {
    bundler: 'metro',
    output: 'static',
  },
  plugins: [
    'expo-router',
    'expo-localization',
    'expo-secure-store',
    'expo-font',
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    demoMode: process.env.EXPO_PUBLIC_DEMO_MODE ?? 'true',
    eas: {
      projectId: 'REPLACE_WITH_YOUR_EAS_PROJECT_ID',
    },
  },
});
