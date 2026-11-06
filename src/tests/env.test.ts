import { env, isDemoMode } from '@/config/env';

describe('Environment', () => {
  it('defaults Demo Mode to true', () => {
    expect(isDemoMode).toBe(true);
  });

  it('parses safely without throwing', () => {
    expect(env.EXPO_PUBLIC_DEMO_MODE).toBeDefined();
  });
});
