import { useEffect } from 'react';
import { I18nManager } from 'react-native';
import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '@/i18n';
import { useDemoStore } from '@/stores/demo.store';
import { useAppStore } from '@/stores/app.store';

// تفعيل RTL مبكراً — يتطلب إعادة تشغيل عند التغيير
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

const queryClient = new QueryClient();

export default function RootLayout() {
  const hydrateDemo = useDemoStore((s) => s.hydrate);
  const hydrateApp = useAppStore((s) => s.hydrate);

  useEffect(() => {
    hydrateDemo();
    hydrateApp();
  }, [hydrateDemo, hydrateApp]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <Stack screenOptions={{ headerShown: false }} />
        </QueryClientProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
