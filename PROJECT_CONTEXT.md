# PROJECT_CONTEXT.md — عازب | AZIB

> Living document. Read this before doing any work on AZIB.

## 1. What AZIB is
AZIB (عازب) is a **non-profit social impact platform** based in Sana'a, Yemen, whose mission is to **facilitate marriage for eligible youth** by:
- reducing the financial burden of marriage,
- connecting beneficiaries with trusted partners, donors, and volunteers,
- providing education, tools, and community initiatives,
- protecting the privacy and dignity of every beneficiary.

## 2. What AZIB is NOT
- It is **NOT a dating app**.
- It does **NOT** expose beneficiary personal data publicly.
- It does **NOT** run real financial transactions in Demo Mode.
- It does **NOT** depend on paid third-party services during initial development.
- It is **NOT** a matchmaking or romance product. There is no public browsing of individuals.

## 3. Primary constraints (non-negotiable)
1. **Non-profit first**: no monetization, no ads, no paid dependencies required for the initial release.
2. **Arabic-first, RTL by default**: every screen is designed in Arabic and mirrored correctly. LTR is a secondary locale.
3. **Currency**: Yemeni Rial (YER) everywhere amounts appear.
4. **Privacy-by-design**: beneficiaries (marriage assistance applicants, financial aid recipients, etc.) are never exposed publicly.
5. **Demo Mode first**: the app must fully function against deterministic mock data before any backend exists.
6. **Provider abstraction**: every external service must sit behind an interface with a Mock Adapter.
7. **Auditability**: sensitive operations (approvals, payouts in future, document verification) must be logged.

## 4. Geographic and cultural starting point
- Starting city: **Sana'a**.
- Language: **Arabic (ar-YE)**, RTL.
- Cultural sensitivity is a product requirement, not a nice-to-have.

## 5. Current phase
- **Phase 01 — Product Requirements & System Architecture** (this phase).
- No application code is written yet. Only documentation and architectural decisions.

## 6. Document map (source of truth)
| Concern | Document |
|---|---|
| Product requirements | `docs/PRD.md` |
| System architecture | `docs/ARCHITECTURE.md` |
| All modules & boundaries | `docs/MODULE_INVENTORY.md` |
| Roles & permissions | `docs/ROLES_PERMISSIONS.md` |
| Demo Mode rules | `docs/DEMO_MODE_STRATEGY.md` |
| Provider interfaces | `docs/PROVIDER_ABSTRACTIONS.md` |
| Data domains | `docs/DATA_DOMAIN_MAP.md` |
| Decisions | `docs/decisions/*.md` |
| Progress | `DEVELOPMENT_PROGRESS.md` |

## 7. How to use this document
Any engineer, designer, or reviewer must read `PROJECT_CONTEXT.md` and the relevant document from the map above **before** proposing changes. Any change to scope must be reflected in `docs/PRD.md` and logged in `DEVELOPMENT_PROGRESS.md`.
