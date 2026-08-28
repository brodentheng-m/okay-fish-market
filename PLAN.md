# Website Plan — Okay Fish Market

Status: DRAFT v2 (awaiting phone/hours from dad, then owner approval)
Built on: ~/modern-site base (plain HTML + Tailwind v4, design guardrails enforced)

---

## 1. Overview

A SIMPLE, clean website for a family-owned fish market:

**Okay Fish Market**
235 Buffalo Ave, Paterson, NJ 07503 (dad wrote "NY" — zip 07503 is NJ; confirm)
Phone: TBD (dad: "to be decided" — placeholder until he picks)
Hours: TBD

Goal: neighbors can find the shop, see what it sells, and call. Nothing fancy.
No e-commerce, no booking, no payments. Just information and trust.

## 2. Design direction — SIMPLE (deliberate)

The base scaffold (modern-site) is a "modern startup" landing page — for this
market we deliberately go plainer:

- Plain white background, simple left-aligned layout, no big gradient hero.
- Simple header: market name + phone (once TBD is resolved). No mega-menus.
- Straightforward copy in plain language: "We sell fresh fish. Come by."
- No startup-speak ("built clean, designed calm", feature cards, CTA panels, forms).
- Keep: emerald accent for phone button + accents only; slate for text.
- Photos the stars when dad provides them; until then, clean placeholder blocks.
- Design guardrails still enforced: NO purple/violet/indigo anywhere.

## 3. Content outline (simple, one page)

### 1. Header
Name: OKAY FISH MARKET (plain text, bold). Phone link prominent when known.

### 2. Intro
One or two plain sentences: what the market is + freshness. No tagline theater.

### 3. Our Fish
Plain list/rows (not hype cards): fish fillets & whole fish · shellfish
(shrimp, lobster, clams) · sushi-grade · smoked & cured · prepared items
(chowder, ceviche, specials). Note: prices change daily — "ask us about
today's selection." Photos when dad has them.

### 4. About
2-3 plain sentences, family owned, how long, what we stand for.

### 5. Hours & Location
- Address: 235 Buffalo Ave, Paterson, NJ 07503
- Hours table: TBD (typical fish market: closed Mondays — confirm with dad)
- Phone: TBD
- Map embed slot + simple directions line.

### 6. Contact
Phone, address, hours again. Simple "call us" line. No form.

### 7. Footer
Name, address, phone, copyright.

## 4. Tech decisions (unchanged)

- Static: plain HTML + Tailwind v4, zero frameworks/deps, mobile-first.
- One page only (v1). tel: links once phone exists.
- Bilingual EN/中文 and Instagram embed: only if dad wants, later.

## 5. Build phases (for opencode)

- PHASE A: build the simple one-pager per this plan. Phone/hours show
  "TBD" placeholders; emerald accent on phone button; plain layout.
- PHASE B: dad's phone, hours, real photos, real copy swapped in.
- PHASE C (optional): bilingual, Instagram, more pages.

## 6. Open items (dad)

1. Phone number (required — he wrote "to be decided")
2. Hours (open Sundays? closed Mondays?)
3. Confirm state: Paterson, NJ (not NY)
4. Photos of the market/case if he has any
5. One-line story ("family owned since …")
6. Best-sellers / what's usually in the case

---

APPROVAL:  [ ] dad fills phone + hours   [ ] owner approves plan   [ ] opencode PHASE A