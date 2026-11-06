import i18n from '@/i18n';

describe('i18n', () => {
  it('loads translations without throwing', () => {
    expect(i18n.isInitialized).toBe(true);
  });

  it('includes Arabic locale', () => {
    const hasAr = Object.keys(i18n.options.resources ?? {}).includes('ar');
    expect(hasAr).toBe(true);
  });

  it('resolves a known Arabic key', () => {
    expect(i18n.t('app.name', { lng: 'ar' })).toBe('عازب');
  });
});
