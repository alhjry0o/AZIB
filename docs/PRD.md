# Product Requirements Document (PRD) — AZIB

## 1. Product vision
AZIB is a non-profit social impact platform that makes marriage easier and more affordable for eligible youth in Yemen, starting in Sana'a. It does so by coordinating community support: assistance programs, financial help, group weddings, vendor partners, donated goods, jobs, volunteer effort, education, and transparent social impact reporting — all while **protecting beneficiary privacy absolutely**.

## 2. Goals
1. Reduce the cost of marriage for eligible youth.
2. Channel community giving (money, goods, services, time) in a trustworthy, auditable way.
3. Provide tools (budget calculator, preparation guide, education) that help youth prepare responsibly.
4. Build a transparent, credible, non-profit brand based in Sana'a.
5. Never expose a beneficiary publicly.

## 3. Non-goals
- No dating / matchmaking of individuals.
- No public profiles of beneficiaries.
- No paid subscriptions, ads, or monetization of user data.
- No real financial transaction in Demo Mode.
- No feature outside the documented module list.

## 4. Users (high level — see `ROLES_PERMISSIONS.md`)
- Beneficiary (عروس/عريس) — recipient of assistance.
- Partner — vendor/company offering discounts, goods, or contributions.
- Donor — individual/entity giving goods or money (in future, not in Demo).
- Volunteer — community member contributing time.
- Moderator — verifies content, applications, partners.
- Admin — platform management.
- Public Visitor — can read awareness content and aggregated reports; **cannot see beneficiaries**.

## 5. Product principles
1. **Dignity first**: no beneficiary personal data is public.
2. **Arabic-first, RTL native**.
3. **Premium and trustworthy UI** — the app must feel safe, calm, and community-centered.
4. **Demo Mode is first-class** — every flow must be exercisable without live services.
5. **Provider-agnostic** — no hard binding to a specific vendor.
6. **Least privilege** on all sensitive operations.
7. **Auditability** — sensitive actions leave an audit trail.
8. **Non-profit integrity** — no dark patterns, no upsells.

## 6. Functional requirements (by module)
The full module list and boundaries are in `docs/MODULE_INVENTORY.md`. Summary of required capabilities:

| # | Module | Requirement summary |
|---|--------|---------------------|
| 1 | Splash & Onboarding | Arabic RTL intro to AZIB's non-profit mission; language & city selection. |
| 2 | Authentication | Sign up / sign in / sign out; role selection; Demo accounts. |
| 3 | User Profile | Personal profile of the logged-in user (never public if beneficiary). |
| 4 | Home Dashboard | Role-aware dashboard surfacing relevant modules & announcements. |
| 5 | Marriage Assistance | Apply for marriage assistance; track status privately. |
| 6 | Financial Assistance | Apply for financial help; private; audited approvals. |
| 7 | Group Weddings | Register interest in group weddings; browse upcoming programs. |
| 8 | Partner Marketplace | Browse partner offers/discounts for marriage needs. |
| 9 | Partner Contribution System | Partners pledge/contribute goods, services, or funds (no real payments in Demo). |
| 10 | Community Marketplace / Souq Al-Khair | Donated goods for newly married couples; request & allocation. |
| 11 | Job Opportunities | Job listings for youth; application tracking. |
| 12 | Wedding Budget Calculator | Estimate marriage costs in YER; save scenarios. |
| 13 | Wedding Preparation Guide | Curated, culturally appropriate guidance (Arabic). |
| 14 | Community Volunteers | Volunteer registration, opportunities, and contributions. |
| 15 | Education & Awareness | Articles, videos, workshops on marriage readiness and finances. |
| 16 | Community Initiatives | Local Sana'a initiatives and campaigns. |
| 17 | Notifications | In-app notifications; push and SMS via adapters later. |
| 18 | Search & Discovery | Search across public content and partner offers. Beneficiaries excluded. |
| 19 | Reports & Social Impact | Aggregated, non-personal impact statistics. |
| 20 | Profile & Settings | Account, preferences, language, privacy controls. |

## 7. Non-functional requirements
### 7.1 RTL & Arabic
- Default locale `ar`, direction `rtl`, mirrored icons and layouts.
- All text is translatable; no hardcoded Arabic strings in code (future).
- YER formatting is locale-aware (`ar-YE`, Latin numerals for amounts allowed for legibility).

### 7.2 Accessibility
- Minimum touch target 48dp.
- Contrast ratio at least WCAG AA.
- Screen reader labels for all interactive elements.
- Scalable text without layout breakage.

### 7.3 Performance
- Cold start under 3s on mid-range Android.
- Offline-first read of cached public content.
- Images are compressed and loaded lazily.

### 7.4 Privacy
- Beneficiary profiles are visible only to the beneficiary and authorized staff.
- Public screens show only aggregated data.
- No document (IDs, contracts, bank info) exposed via public API or search.

### 7.5 Security
- Least privilege on all roles.
- Sensitive actions logged (audit trail).
- Encrypted transport; secrets never in client.
- Beneficiary document access restricted and audited.

### 7.6 Offline readiness
- Cached read of public content.
- Queued writes where safe (e.g., volunteer interest) once online.
- Demo Mode is fully offline.

## 8. Constraints
- **No paid services** required for the initial build.
- **Non-profit** branding and governance.
- **Currency YER**.
- **Starting city Sana'a**.
- **No real financial transactions** in Demo Mode.
- **SMS and payment providers may be unavailable** — defined as interfaces with Mock Adapters.

## 9. Success metrics (initial)
- Number of applications processed (aggregate).
- Number of marriages facilitated (aggregate).
- Value of partner contributions (aggregate, YER).
- Volunteer hours logged (aggregate).
- User trust survey score.
- Zero reported privacy incidents.

## 10. Risks & open questions
- **R1**: Sensitive-data leakage through search or partner modules — mitigated by domain separation and audit.
- **R2**: Cultural misinterpretation — mitigated by Arabic-native review.
- **R3**: Provider availability in Yemen (SMS, payment) — mitigated by Mock Adapters.
- **R4**: Non-profit governance of contributions — out of scope for demo; flagged for Phase 06+.
- **Q1**: Which backend (e.g., Supabase free tier) to adopt in Phase 06? — deferred.
- **Q2**: Legal entity hosting AZIB in Yemen — deferred to operations.
- **Q3**: Whether donations will ever run in-app — deferred; NOT in Demo.

## 11. Acceptance checklist
- All 20 modules documented.
- Non-profit constraints explicit.
- Demo Mode requirements explicit.
- RTL / Arabic-first explicit.
- Provider abstraction explicit.
- Privacy & security explicit.
- No paid-service dependency introduced.
