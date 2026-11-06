import type { DatabaseProvider } from '@/types/providers';

const store = new Map<string, Map<string, unknown>>();

function coll(name: string) {
  if (!store.has(name)) store.set(name, new Map());
  return store.get(name)!;
}

export const mockDatabaseProvider: DatabaseProvider = {
  id: 'mock.db',
  async create(collection, data) {
    const id = `mock-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const record = { ...data, id };
    coll(collection).set(id, record);
    return record as never;
  },
  async read(collection, id) { return (coll(collection).get(id) as never) ?? null; },
  async query(collection) { return Array.from(coll(collection).values()) as never; },
  async update(collection, id, patch) {
    const current = coll(collection).get(id) as Record<string, unknown> | undefined;
    if (!current) throw new Error('DB_NOT_FOUND');
    const next = { ...current, ...patch, id };
    coll(collection).set(id, next);
    return next as never;
  },
  async delete(collection, id) { coll(collection).delete(id); },
};
