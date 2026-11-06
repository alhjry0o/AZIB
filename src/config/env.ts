import { z } from 'zod';

const EnvSchema = z.object({
  EXPO_PUBLIC_DEMO_MODE: z.enum(['true', 'false']).default('true'),
  EXPO_PUBLIC_SUPABASE_URL: z.string().url().optional(),
  EXPO_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1).optional(),
  EXPO_PUBLIC_API_BASE_URL: z.string().url().optional(),
});

type Env = z.infer<typeof EnvSchema>;

function readEnv(): Env {
  const raw = {
    EXPO_PUBLIC_DEMO_MODE: process.env.EXPO_PUBLIC_DEMO_MODE ?? 'true',
    EXPO_PUBLIC_SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL,
    EXPO_PUBLIC_SUPABASE_ANON_KEY: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
    EXPO_PUBLIC_API_BASE_URL: process.env.EXPO_PUBLIC_API_BASE_URL,
  };
  const parsed = EnvSchema.safeParse(raw);
  if (!parsed.success) {
    // لا نطبع القيم الحساسة — نطبع المسارات فقط
    throw new Error(`ENV_INVALID: ${parsed.error.issues.map((i) => i.path.join('.')).join(', ')}`);
  }
  return parsed.data;
}

export const env: Env = readEnv();
export const isDemoMode: boolean = env.EXPO_PUBLIC_DEMO_MODE === 'true';
