import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDemoStore } from '@/stores/demo.store';
import { integrationRegistry } from '@/services/integration_registry';
import { tokens } from '@/theme/tokens';

export default function HealthScreen() {
  const { t } = useTranslation('common');
  const demoMode = useDemoStore((s) => s.enabled);
  const summary = integrationRegistry.getSummary();

  return (
    <View style={styles.container} testID="health-screen">
      <Text style={styles.title}>{t('app.name')}</Text>
      <Text style={styles.subtitle}>{t('health.subtitle')}</Text>
      <Text style={styles.badge}>
        {demoMode ? t('demo.badge') : t('demo.disabled')}
      </Text>
      <Text style={styles.meta}>
        {t('health.providers', { connected: summary.connected, total: summary.total })}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: tokens.colors.background, padding: 24 },
  title: { fontSize: 28, fontWeight: '700', color: tokens.colors.primary, textAlign: 'center' },
  subtitle: { fontSize: 16, color: tokens.colors.textMuted, marginTop: 12, textAlign: 'center' },
  badge: { marginTop: 24, paddingHorizontal: 12, paddingVertical: 6, backgroundColor: tokens.colors.demoBadge, borderRadius: 8, color: tokens.colors.demoBadgeText, fontWeight: '600' },
  meta: { marginTop: 24, fontSize: 14, color: tokens.colors.textMuted },
});
