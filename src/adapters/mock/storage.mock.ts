import type { StorageProvider } from '@/types/providers';

const files = new Map<string, Blob | Uint8Array>();

export const mockStorageProvider: StorageProvider = {
  id: 'mock.storage',
  async put(path, blob) { files.set(path, blob); return { path }; },
  async get(path) { return files.get(path) ?? null; },
  async delete(path) { files.delete(path); },
};
