# MODULES — الوحدات العشرون الأساسية

| # | الوحدة | الغرض | البيانات الحساسة | الحالة في Demo |
|---|---|---|---|---|
| M01 | Identity & Auth | تسجيل الدخول، الجلسات | بريد/رقم (محمي) | Mock Auth |
| M02 | Onboarding | تعريف المستخدم ودوره | دولة، احتياج عام | Mock |
| M03 | Beneficiary Profile | ملف مستفيد بأقل بيانات | محجوب عن العامة | Mock |
| M04 | Help Requests | طلب مساعدة وحالاته | هوية الطالب | Mock |
| M05 | Eligibility Engine | تقييم أولي استشاري | مؤشرات أهلية | Mock Rules v1 |
| M06 | Human Review | قرار بشري موثَّق | تعليقات المراجع | Mock |
| M07 | Donations | تبرع تجريبي كامل | مبلغ تجريبي فقط | Mock Only |
| M08 | Mass Wedding | تسجيل ودعم عرس جماعي | هوية المتقدم | Mock |
| M09 | Charity Market | سلع/خدمات غير نقدية | تواصل عبر وسيط | Mock |
| M10 | Jobs | فرص وتقديم عبر وسيط | سيرة مجهولة الهوية | Mock |
| M11 | Volunteers | تطوع ميداني/افتراضي | بلا وصول للمستندات | Mock |
| M12 | Notifications | إشعارات آمنة غير كاشفة | محتوى مُحيَّد | Mock |
| M13 | Content & Knowledge | محتوى توعوي/إرشادي | — | Curated |
| M14 | Secure Vault | مستندات مشفّرة | حساس جداً | Local Mock |
| M15 | Moderated Messaging | رسائل وسيطة فقط | محتوى مراقب | Mock |
| M16 | Governance & Audit | قرارات، سجلات، إصدارات | سجلات تدقيق | In-memory |
| M17 | Admin Console | إدارة المستخدمين/الحالات | متنوع | Mock |
| M18 | Reporting & Analytics | تقارير مجهولة الهوية | تجميعية فقط | Mock |
| M19 | Provider Abstraction | عقود + محوّلات | لا بيانات | نشط |
| M20 | Demo Mode | تبديل/تصفير/تسمية | لا شيء | أساسي |

## خصائص كل وحدة (عينة موجزة)
- **M04 Help Requests:** حالات: `draft → submitted → auto_screened → under_review → approved/rejected/needs_info → fulfilled`. الانتقالات موثقة في `USER_FLOWS`.
- **M05 Eligibility:** محرك قواعد بإصدارات (`vX.Y.Z`) مع تاريخ سريان. الناتج: `recommendation: {approve|review|reject, reasons[], ruleVersion}` — **استشاري**.
- **M06 Human Review:** كل قرار يتطلب `reviewerId`, `rationale`, `ruleVersion`, `timestamp`، ويُخزَّن في Audit.
- **M07 Donations:** لا مفاتيح دفع، إيصال يحمل وسم `DEMO`، الأثر يُحاكى.
- **M08 Wedding:** بيانات المتقدمين محجوبة، لا قوائم عامة، التواصل عبر مراجعين.
- **M09 Market:** لا أسعار نقدية مباشرة للمستفيد، الوسيط ينسّق، لا دفع حقيقي.
- **M10 Jobs:** السيرة تُعرَض للشركة مجهولة الهوية، التواصل عبر المنصة.
- **M11 Volunteers:** الوصول للمستندات ممنوع بنيوياً في طبقة الـ repository.
- **M14 Vault:** تشفير محلي في Demo، وصول حسب الدور، وكل قراءة تُسجَّل في Audit.
- **M16 Governance:** Append-only، ثلاث مسؤوليات: Human Review، Audit، Eligibility Versioning، Conflict of Interest.
