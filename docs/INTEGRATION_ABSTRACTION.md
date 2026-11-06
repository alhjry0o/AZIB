# INTEGRATION_ABSTRACTION — عقود التكامل

> القاعدة: **لا يستدعي أي كود تطبيق مزوّداً خارجياً مباشرة.** يُستدعى دائماً عبر واجهة (Interface) في `domain/repositories`، ويُختار المحوّل عبر `FeatureFlag` أو `ProviderRegistry`.

## 1. الواجهات (Contracts)

### AuthProvider
```

signIn(credentials) : Session
signOut() : void
getSession() : Session | null
onAuthStateChanged(cb) : Unsubscribe

```

### DataProvider
```

create<T>(collection, data) : T
read<T>(collection, id) : T | null
query<T>(collection, filter) : T[]
update<T>(collection, id, patch) : T
delete(collection, id) : void

```

### StorageProvider (للمستندات)
```

put(path, blob, {encrypted:boolean}) : FileRef
get(path) : Stream | null
delete(path) : void

```

### NotificationProvider
```

send(targetId, payload) : DeliveryId
registerDevice(token) : void

```

### PaymentProvider (Mock فقط في هذه المرحلة)
```

createIntent({amount, currency, ref}) : Intent
confirm(intentId) : Result
refund(intentId) : Result

```
> **قيد:** المحوّل الوحيد المتاح الآن: `MockPaymentProvider`. أي محوّل آخر يُعتبر خارج النطاق حتى موافقة صريحة.

### DocumentReviewProvider
```

submitForReview(docId) : ReviewId
getReviewStatus(id) : Status

```

### Clock & IdProvider (للاختبارات الحتمية)
```

now() : number
newId() : string

```

## 2. المحوّلات (Adapters)
| المحوّل | الحالة | ملاحظات |
|---|---|---|
| MockAuthProvider | ✅ Phase 03 | OTP وهمي |
| MockDataProvider | ✅ Phase 03 | in-memory + AsyncStorage |
| MockStorageProvider | ✅ Phase 03 | تشفير محلي |
| MockPaymentProvider | ✅ Phase 03 | إيصالات DEMO |
| MockNotificationProvider | ✅ Phase 03 | in-app فقط |
| SupabaseAuthProvider | ⏳ Phase 08 | لاحق |
| SupabaseDataProvider | ⏳ Phase 08 | لاحق |
| SupabaseStorageProvider | ⏳ Phase 08 | لاحق |
| Custom*Providers | ⏳ مستقبلي | عقود متطابقة |

## 3. قواعد الترحيل
1. ترحيل المحوّل لا يغيّر أي واجهة أو شاشة.
2. يجب أن يحافظ المحوّل الجديد على السلوك التعاقدي.
3. أي سلوك خاص بمزوّد يُعزل داخل محوّله، لا يتسرب للـ domain.
4. كل محوّل جديد يحتاج اختبار تكامل مقابل نفس الـ contract.

## 4. Feature Flags
- `FF_PROVIDER_AUTH = mock | supabase | custom`
- `FF_PROVIDER_DATA = mock | supabase | custom`
- `FF_PROVIDER_STORAGE = mock | supabase | custom`
- `FF_PROVIDER_PAYMENT = mock` (**مغلق بقيمة ثابتة حتى إشعار آخر**)
- `FF_PROVIDER_NOTIFY = mock | supabase | custom`
