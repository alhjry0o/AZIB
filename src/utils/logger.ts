// logger.ts — لا يطبع أي بيانات هوية
type Level = 'debug' | 'info' | 'warn' | 'error';

const SENSITIVE_KEYS = ['email', 'phone', 'name', 'document', 'nationalId', 'address'];

function redact(obj: unknown): unknown {
  if (typeof obj !== 'object' || obj === null) return obj;
  const clone: Record<string, unknown> = Array.isArray(obj) ? [] : {};
  for (const [k, v] of Object.entries(obj)) {
    clone[k] = SENSITIVE_KEYS.includes(k.toLowerCase()) ? '[REDACTED]' : redact(v);
  }
  return clone;
}

export const logger = {
  debug: (msg: string, meta?: unknown) => __DEV__ && console.debug(`[DEBUG] ${msg}`, redact(meta)),
  info: (msg: string, meta?: unknown) => __DEV__ && console.info(`[INFO] ${msg}`, redact(meta)),
  warn: (msg: string, meta?: unknown) => __DEV__ && console.warn(`[WARN] ${msg}`, redact(meta)),
  error: (msg: string, meta?: unknown) => console.error(`[ERROR] ${msg}`, redact(meta)),
};
