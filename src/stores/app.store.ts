import { create } from 'zustand';
import { appConfig } from '@/config/app.config';

interface AppState {
  locale: 'ar' | 'en';
  hydrated: boolean;
  hydrate: () => void;
  setLocale: (l: 'ar' | 'en') => void;
}

export const useAppStore = create<AppState>((set) => ({
  locale: appConfig.defaultLocale,
  hydrated: false,
  hydrate() { set({ hydrated: true }); },
  setLocale(locale) { set({ locale }); },
}));
