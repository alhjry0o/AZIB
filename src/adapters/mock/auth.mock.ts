import type { AuthProvider } from '@/types/providers';
import type { Session } from '@/types/domain';

const DEMO_SESSION: Session = {
  userId: 'demo-user-0001',
  role: 'beneficiary',
  expiresAt: new Date(Date.now() + 86_400_000).toISOString(),
};

export const mockAuthProvider: AuthProvider = {
  id: 'mock.auth',
  async signIn({ otp }) {
    if (otp !== '123456') throw new Error('AUTH_INVALID_OTP');
    return { ...DEMO_SESSION };
  },
  async signOut() {},
  async getSession() { return { ...DEMO_SESSION }; },
  onAuthStateChanged() { return () => {}; },
};
