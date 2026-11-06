import type { IntegrationState, IntegrationStatus } from '@/types/domain';
import type {
  AuthProvider, DatabaseProvider, StorageProvider, NotificationProvider,
  PaymentProvider, EmailProvider, SMSProvider, AnalyticsProvider,
  SearchProvider, MapsProvider,
} from '@/types/providers';

import { mockAuthProvider } from '@/adapters/mock/auth.mock';
import { mockDatabaseProvider } from '@/adapters/mock/database.mock';
import { mockStorageProvider } from '@/adapters/mock/storage.mock';
import { mockNotificationProvider } from '@/adapters/mock/notification.mock';
import { mockPaymentProvider } from '@/adapters/mock/payment.mock';
import { mockEmailProvider } from '@/adapters/mock/email.mock';
import { mockSmsProvider } from '@/adapters/mock/sms.mock';
import { mockAnalyticsProvider } from '@/adapters/mock/analytics.mock';
import { mockSearchProvider } from '@/adapters/mock/search.mock';
import { mockMapsProvider } from '@/adapters/mock/maps.mock';

interface RegistryEntry<T> {
  provider: T;
  state: IntegrationState;
}

class IntegrationRegistry {
  private entries = new Map<string, RegistryEntry<unknown>>();

  register<T>(id: string, provider: T, status: IntegrationStatus = 'mock') {
    this.entries.set(id, {
      provider,
      state: { id, status, lastCheckedAt: new Date().toISOString() },
    });
  }

  get<T>(id: string): T {
    const entry = this.entries.get(id);
    if (!entry) throw new Error(`INTEGRATION_NOT_REGISTERED: ${id}`);
    return entry.provider as T;
  }

  getState(id: string): IntegrationState {
    const entry = this.entries.get(id);
    if (!entry) throw new Error(`INTEGRATION_NOT_REGISTERED: ${id}`);
    return { ...entry.state };
  }

  getAllStates(): IntegrationState[] {
    return Array.from(this.entries.values()).map((e) => ({ ...e.state }));
  }

  getSummary(): { connected: number; total: number } {
    const all = this.getAllStates();
    return {
      connected: all.filter((s) => s.status === 'connected').length,
      total: all.length,
    };
  }
}

export const integrationRegistry = new IntegrationRegistry();

// تسجيل افتراضي — كل شيء Mock في Demo
integrationRegistry.register<AuthProvider>('auth', mockAuthProvider, 'mock');
integrationRegistry.register<DatabaseProvider>('database', mockDatabaseProvider, 'mock');
integrationRegistry.register<StorageProvider>('storage', mockStorageProvider, 'mock');
integrationRegistry.register<NotificationProvider>('notification', mockNotificationProvider, 'mock');
integrationRegistry.register<PaymentProvider>('payment', mockPaymentProvider, 'mock');
integrationRegistry.register<EmailProvider>('email', mockEmailProvider, 'mock');
integrationRegistry.register<SMSProvider>('sms', mockSmsProvider, 'mock');
integrationRegistry.register<AnalyticsProvider>('analytics', mockAnalyticsProvider, 'mock');
integrationRegistry.register<SearchProvider>('search', mockSearchProvider, 'mock');
integrationRegistry.register<MapsProvider>('maps', mockMapsProvider, 'mock');

// Convenience getters
export const providers = {
  auth: () => integrationRegistry.get<AuthProvider>('auth'),
  database: () => integrationRegistry.get<DatabaseProvider>('database'),
  storage: () => integrationRegistry.get<StorageProvider>('storage'),
  notification: () => integrationRegistry.get<NotificationProvider>('notification'),
  payment: () => integrationRegistry.get<PaymentProvider>('payment'),
  email: () => integrationRegistry.get<EmailProvider>('email'),
  sms: () => integrationRegistry.get<SMSProvider>('sms'),
  analytics: () => integrationRegistry.get<AnalyticsProvider>('analytics'),
  search: () => integrationRegistry.get<SearchProvider>('search'),
  maps: () => integrationRegistry.get<MapsProvider>('maps'),
} as const;
