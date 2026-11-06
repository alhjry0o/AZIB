import type { Session } from './domain';

export interface AuthProvider {
  readonly id: string;
  signIn(credentials: { email?: string; phone?: string; otp?: string }): Promise<Session>;
  signOut(): Promise<void>;
  getSession(): Promise<Session | null>;
  onAuthStateChanged(cb: (s: Session | null) => void): () => void;
}

export interface DatabaseProvider {
  readonly id: string;
  create<T extends { id: string }>(collection: string, data: Omit<T, 'id'>): Promise<T>;
  read<T>(collection: string, id: string): Promise<T | null>;
  query<T>(collection: string, filter?: Record<string, unknown>): Promise<T[]>;
  update<T>(collection: string, id: string, patch: Partial<T>): Promise<T>;
  delete(collection: string, id: string): Promise<void>;
}

export interface StorageProvider {
  readonly id: string;
  put(path: string, blob: Blob | Uint8Array, opts?: { encrypted?: boolean }): Promise<{ path: string }>;
  get(path: string): Promise<Blob | Uint8Array | null>;
  delete(path: string): Promise<void>;
}

export interface NotificationProvider {
  readonly id: string;
  send(targetId: string, payload: { titleKey: string; bodyKey: string; data?: Record<string, string> }): Promise<string>;
  registerDevice(token: string): Promise<void>;
}

export interface PaymentProvider {
  readonly id: string;
  readonly mode: 'mock'; // مغلق في هذه المرحلة
  createIntent(input: { amount: number; currency: string; reference: string }): Promise<{ intentId: string; status: 'demo_created' }>;
  confirm(intentId: string): Promise<{ status: 'demo_success'; receiptId: string }>;
}

export interface EmailProvider {
  readonly id: string;
  send(input: { to: string; templateKey: string; variables?: Record<string, string> }): Promise<{ messageId: string }>;
}

export interface SMSProvider {
  readonly id: string;
  send(input: { to: string; templateKey: string; variables?: Record<string, string> }): Promise<{ messageId: string }>;
}

export interface AnalyticsProvider {
  readonly id: string;
  track(event: string, properties?: Record<string, string | number | boolean>): void;
  identify(userId: string): void;
}

export interface SearchProvider {
  readonly id: string;
  search<T>(collection: string, queryText: string): Promise<T[]>;
}

export interface MapsProvider {
  readonly id: string;
  geocode(address: string): Promise<{ lat: number; lng: number } | null>;
  reverseGeocode(lat: number, lng: number): Promise<string | null>;
}
