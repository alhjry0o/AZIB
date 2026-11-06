# ARCHITECTURE — عازب | AZIB

## 1. النمط العام
- **Clean Architecture مبسّط:** Presentation ← Domain ← Data ← Providers.
- **Feature-First** داخل طبقة العرض (features/beneficiary, features/donations…).
- **Provider Abstraction Layer** يفصل كل خارجي عن بقية التطبيق.
- **TS Strict Mode** إلزامي.
- **State:** Zustand للـ global الحرج، React Query/State المحلي للأرشيف الطويل (يُقرَّر في Phase 02).

## 2. الطبقات
```

[ UI Screens & Components ]
│
[ Domain Use-Cases & Types ]   ← عقود الأعمال، بلا I/O
│
[ Repository Interfaces ]      ← في /src/domain/repositories
│
[ Data Adapters ]              ← Mock (Demo) / Supabase / Custom Server
│
[ External Providers ]         ← Auth, DB, Storage, Notify, Payment(MockOnly)

```

## 3. مسار الترحيل
1. **Mock (Phase 03+):** بيانات ثابتة في الذاكرة/AsyncStorage، لا شبكة.
2. **Supabase:** نفس الواجهات، محوّل جديد، Feature Flags للتبديل.
3. **Custom Server:** نفس العقود، استبدال المحوّل فقط.
> نقطة حرجة: طبقة العرض لا تعرف إلا الواجهات، لا محوّلات.

## 4. حدود الوحدات (Bounded Contexts)
- Identity · Beneficiary · Requests · Governance · Donations · Wedding · Market · Jobs · Volunteers · Content · Notifications · Admin · Analytics · Providers · Demo.

## 5. القرارات المعمارية (ADR مختصرة)
- **ADR-01:** Demo Mode كطبقة أولى، وليس لاحقاً. **السبب:** قابلية التقييم دون اعتماد شبكي.
- **ADR-02:** تقييم آلي استشاري فقط. **السبب:** حماية الكرامة وتفادي الظلم الآلي.
- **ADR-03:** كل التكاملات عبر واجهات + Mock Adapter افتراضي. **السبب:** قابلية الترحيل دون انحدار.
- **ADR-04:** لا مدفوعات حقيقية في Demo. **السبب:** التزام أخلاقي ومخاطر مالية.
- **ADR-05:** RTL أولاً في كل تخطيط. **السبب:** اللغة الافتراضية عربية.

## 6. الأمان المعماري
- فصل الأدوار على مستوى الـ repository، لا على مستوى الواجهة فقط.
- المستندات في `Secure Document Vault` مع تحكم وصول دقيق.
- Audit Trail كسجل **append-only** مفاهيمياً (حتى في Mock: immutable array).
- بيانات المستفيدين **لا تُسجَّل في الـ logs**، وتُخفى في الأخطاء.

## 7. هيكل مقترح (بدون كود الآن)
```

/src
/app
/features
/identity
/beneficiary
/requests
/donations
/wedding
/market
/jobs
/volunteers
/admin
/governance
/demo
/domain
/entities
/usecases
/repositories      ← Interfaces فقط
/rules             ← Eligibility rules
/data
/adapters
/mock
/supabase
/custom
/providers
/design
/i18n
/shared
```
