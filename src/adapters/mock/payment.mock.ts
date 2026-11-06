import type { PaymentProvider } from '@/types/providers';

export const mockPaymentProvider: PaymentProvider = {
  id: 'mock.payment',
  mode: 'mock',
  async createIntent({ reference }) {
    return { intentId: `DEMO-INTENT-${reference}-${Date.now()}`, status: 'demo_created' };
  },
  async confirm(intentId) {
    return { status: 'demo_success', receiptId: `DEMO-RECEIPT-${intentId}` };
  },
};
