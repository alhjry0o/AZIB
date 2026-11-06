# PROJECT_CONTEXT — عازب | AZIB

## 1. هوية المشروع
- **الاسم:** عازب | AZIB
- **النوع:** تطبيق خيري/اجتماعي غير ربحي (Non-Profit).
- **المستخدمون:** مستفيدون، متبرعون، متطوعون، مراجعون بشريون، إداريون، مدققون.
- **الطبيعة:** غير حكومي، غير تجاري، غير تعارفي، لا نشر لبيانات المستفيدين، لا مدفوعات حقيقية في وضع العرض التجريبي.
- **اللغة الافتراضية:** العربية (ar)، اتجاه RTL إلزامي.
- **المنصات المستهدفة:** iOS, Android (عبر Expo).

## 2. الالتزامات المعمارية غير القابلة للتفاوض
1. **Demo-First:** يجب أن يعمل التطبيق بالكامل في `Demo Mode` قبل أي ربط خارجي.
2. **Provider Abstraction:** كل خدمة خارجية تُعرَّف كواجهة (Interface) مع `Mock Adapter` افتراضي.
3. **مسار الترحيل:** Mock → Supabase → خادم مستقل، دون تغيير في طبقة العرض.
4. **RTL & Arabic-First:** كل تصميم يبدأ RTL، وكل نص يبدأ عربياً.
5. **حماية المستفيد:** لا قوائم عامة، لا كشف هوية، لا وصول للمتطوعين إلى المستندات.
6. **قرار بشري فوق الآلي:** التقييم الآلي استشاري فقط، والقرار النهائي بشري موثَّق.
7. **لا مدفوعات حقيقية:** كل تدفقات التبرع في هذه المرحلة `DEMO` صريحة.
8. **فاخر لكن وظيفي:** الجمال يخدم الوضوح ولا يعيقه.

## 3. الجمهور والأدوار
- زائر (Guest)
- مستفيد (Beneficiary)
- متبرع (Donor)
- متطوع (Volunteer)
- مراجع بشري (Reviewer)
- مدير (Admin)
- مدير أعلى (Super Admin)
- مدقق (Auditor)
- وكيل ميداني (Field Agent)

## 4. خارج النطاق صراحةً (Out of Scope – Phase 01)
- مدفوعات حقيقية أو بوابات دفع فعلية.
- تعارف/زواج فردي/محادثات خاصة بين الجنسين.
- نشر بيانات مستفيدين بأي شكل عام (قوائم، معرض، منشور).
- تكاملات شبكية إلزامية (كل التكامل اختياري ويُحاكى عبر Mock).
- تحليلات تتبّع شخصية أو SDKات إعلانية.

## 5. مرجع الحالة
- هذه الوثيقة تُقرأ مع: `docs/PRODUCT_REQUIREMENTS.md`, `docs/ARCHITECTURE.md`,
  `docs/MODULES.md`, `docs/ROLES_AND_PERMISSIONS.md`, `docs/USER_FLOWS.md`,
  `docs/DEMO_MODE.md`, `docs/PRIVACY_AND_SECURITY.md`,
  `docs/INTEGRATION_ABSTRACTION.md`, `docs/RISKS_AND_ASSUMPTIONS.md`.
- أي تعديل على قرار معماري هنا يجب تسجيله في `DEVELOPMENT_PROGRESS.md`
  مع سبب التغيير وتاريخه.

## 6. القرارات التقنية والإصدارات (Phase 02)

### 6.1 الحزم الأساسية
- **Expo SDK 52** مع **React Native 0.76** (New Architecture مفعّلة).
- **مدير الحزم:** pnpm (إلزامي).
- **TypeScript:** `strict: true` + `noUnusedLocals` + `noImplicitReturns`.
- **التوجيه:** `expo-router ~4.0` بنمط ملفات داخل `app/`.
- **الحالة:** Zustand (Demo/App stores) + TanStack Query (لاحقاً).
- **النماذج:** React Hook Form + Zod.
- **الترجمة:** i18next + react-i18next + expo-localization.
- **RTL:** `I18nManager.forceRTL(true)` + `expo-localization`، العربية افتراضية.

### 6.2 إصدارات مثبتة (مرجعية)
| الحزمة | الإصدار |
|---|---|
| expo | ~52.0.0 |
| expo-router | ~4.0.0 |
| react-native | 0.76.5 |
| react-native-reanimated | ~3.16.1 |
| react-native-gesture-handler | ~2.20.0 |
| react-native-screens | ~4.4.0 |
| react-native-safe-area-context | ~4.12.0 |
| expo-secure-store | ~14.0.0 |
| expo-localization | ~16.0.0 |
| expo-image | ~2.0.0 |
| @react-native-async-storage/async-storage | 2.1.0 |

### 6.3 قرارات إضافية
- **Demo Mode:** مفعّل افتراضياً (`EXPO_PUBLIC_DEMO_MODE=true`)، ويُخزَّن في `@demo/demo_mode`.
- **Provider Abstraction:** 10 واجهات، كلها لها Mock Adapter، ولا اتصال خارجي في Demo.
- **Integration Registry:** 10 مزودات مسجلة بحالة `mock`، وقابلة للترقية إلى `configured/connected` لاحقاً.
- **الأمان:** لا أسرار في الكود، `service_role` ممنوع، `SUPABASE_ANON_KEY` مسموح فقط مع RLS.
- **عدم وجود نصوص عربية في المكونات:** كل النصوص عبر i18n.

### 6.4 قيود مثبتة
- لا مدفوعات حقيقية: `PaymentProvider.mode` ثابت على `'mock'`.
- لا شبكة إلزامية: كل شيء يعمل offline في Demo.
