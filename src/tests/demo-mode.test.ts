import { useDemoStore } from '@/stores/demo.store';

describe('Demo Mode', () => {
  it('is enabled by default', () => {
    expect(useDemoStore.getState().enabled).toBe(true);
  });
});
