import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { appConfig } from '@/config/app.config';

const KEY = `${appConfig.storage.demoPrefix}demo_mode`;

interface DemoState {
  enabled: boolean;
  hydrated: boolean;
  hydrate: () => Promise<void>;
  setEnabled: (v: boolean) => Promise<void>;
  reset: () => Promise<void>;
}

export const useDemoStore = create<DemoState>((set) => ({
  enabled: appConfig.demo.defaultEnabled,
  hydrated: false,
  async hydrate() {
    const raw = await AsyncStorage.getItem(KEY);
    set({ enabled: raw === null ? appConfig.demo.defaultEnabled : raw === 'true', hydrated: true });
  },
  async setEnabled(v) {
    await AsyncStorage.setItem(KEY, String(v));
    set({ enabled: v });
  },
  async reset() {
    await AsyncStorage.removeItem(KEY);
    set({ enabled: appConfig.demo.defaultEnabled });
  },
}));
