import { integrationRegistry } from '@/services/integration_registry';

describe('Integration Registry', () => {
  it('registers all ten providers', () => {
    expect(integrationRegistry.getAllStates()).toHaveLength(10);
  });

  it('reports every provider status', () => {
    const states = integrationRegistry.getAllStates();
    expect(states.every((s) => ['mock', 'configured', 'connected', 'disabled', 'error'].includes(s.status))).toBe(true);
  });

  it('returns a summary', () => {
    const summary = integrationRegistry.getSummary();
    expect(summary.total).toBe(10);
    expect(summary.connected).toBe(0); // كل شيء Mock
  });
});
