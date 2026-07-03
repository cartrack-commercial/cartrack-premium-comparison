# Cartrack Insurance — Compliance Design System

A brand and interface system for the **Cartrack Insurance Commercial Compliance**
toolset: a dedicated compliance instrument for **CARTRACK INSURANCE AGENCY (PTY) LTD —
FSP 17266**. It governs how compliance monitoring reports, regulatory responses and
statutory policies (FAIS Risk Management Plan, Business Continuity Plan, Conflict of
Interest Policy, etc.) are presented, drafted and prepared for sign-off by the
**Key Individual (Brendan)**.

The system is deliberately sober and document-grade: authoritative, legally precise,
highly structured, and uncompromising on scannability and audit-readiness. The brand
mark (Cartrack's navigation arrow) and brand orange are used sparingly against a near-
black ink and cool-graphite neutral palette.

---

## Scope & focus

This system is tailored **strictly to high-value commercial advisory operations**.
It intentionally **excludes** consumer/retail call-centre patterns, tracking-unit sales
terminology, and high-volume consumer flows. Anything generated with it should read as a
statutory instrument prepared for senior management and a Key Individual, not a
consumer product.

---

## Sources provided

- **Brand logos** (vector PDFs, supplied by the user, in `uploads/`):
  horizontal & vertical lockups, in Main, Black, negative (on black / on orange) and
  secondary variants. These were rasterised to PNG and trimmed to transparent assets in
  `assets/logos/` (see Iconography).
- No codebase, Figma file, or existing product UI was provided. The UI kit
  (`ui_kits/compliance-console/`) is therefore an **original, on-brand recreation** of a
  plausible compliance console built from the brand foundations — not a copy of an
  existing Cartrack product. If a real product UI or Figma exists, share it and the kit
  should be re-derived from that source of truth.

---

## CONTENT FUNDAMENTALS

How copy is written across this system:

- **Voice:** Authoritative, impersonal, regulator-facing. Write in the **third person /
  imperative** ("The Key Individual must review…", "Identify what needs to be signed").
  Avoid "we"/"you" except in direct instructions to senior management on a checklist
  ("Confirm the COI register is current").
- **Casing:** Sentence case for body and most headings. **UPPERCASE** is reserved for
  eyebrows, micro-labels, status words and statutory shorthand (FSP, FAIS, COI, BCP).
  The CARTRACK wordmark is always uppercase.
- **Tone:** Legally precise and uncompromising. No marketing fluff, no exclamation, no
  hedging. Prefer clauses, references and dates over adjectives.
- **Structure first:** Lead with the decision or status. Documents are scannable —
  gap analysis → adaptation → actionable output. Use numbered controls, clause refs and
  explicit owners/dates.
- **Numbers & references** are first-class: render FSP numbers, document IDs, clause refs
  (e.g. `FAIS GCoC §3.1(a)`), versions and dates in the **mono** face with tabular
  figures so they align and read as evidence.
- **No emoji. No decorative icons.** Iconography is functional only (status, actions).
- **Status vocabulary is fixed:** *Compliant · Review Due · Non-Compliant · In Progress ·
  Draft*. Breaches are named plainly ("Reportable breach"), never softened.

Example phrasing:
> "Gap identified: the Conflict of Interest Policy (COI-2024-02) predates the current
> commercial advisory mandate. Adapt §4 to reflect high-value commercial risk and
> route to the Key Individual for signature by 2026-07-15."

---

## VISUAL FOUNDATIONS

- **Colour:** Near-black **ink** (`--ink-950 #0B0C0F`) for mastheads, signatures and
  primary text; a cool **graphite neutral scale** for surfaces and lines; **brand orange
  `#F47735`** as the single accent, reserved for the primary action, the left accent rule
  and key emphasis. Status colours (green/amber/red/blue) are **muted and desaturated**
  so they never compete with brand orange, and amber is kept yellow-leaning to stay
  distinct from the orange.
- **Type:** **Saira** (squared, technical) for display/headings — it echoes the geometric
  CARTRACK wordmark; **IBM Plex Sans** for body and UI (legible, structured); **IBM Plex
  Mono** for references, codes, IDs and tabular data. Headings use slightly negative
  tracking; eyebrows/labels use wide positive tracking and uppercase.
- **Backgrounds:** Flat and quiet — `--ink-50` app canvas, white cards. **No gradients,
  no photographic backgrounds, no textures or patterns.** The only "imagery" is the logo.
  Dark sections use solid `--ink-950`.
- **Cards/surfaces:** White, 1px `--ink-200` border, small radius (`6px`), restrained
  cool shadow (`--shadow-sm`). Priority items carry a **3px orange left rule**
  (`--border-accent-width`). Corners are small and squared throughout (2–8px); nothing is
  pill-shaped except status/tag chips.
- **Borders & dividers** carry a lot of the structure — hairline `--color-border-subtle`
  between rows and header/body. This is a ledger aesthetic.
- **Spacing:** 4px base scale. Dense but not cramped; tables and registers use a 44px row
  height. Document/memo column caps at `--content-max 760px` for legibility.
- **Shadows:** subtle, cool (`rgba(11,12,15,…)`), four steps. Never coloured glows.
- **Animation:** minimal and functional. Fast (120–180ms) `--ease-standard` transitions
  on hover/focus/press only. No bounces, no decorative looping motion, respect
  `prefers-reduced-motion`.
- **Hover states:** buttons darken one step (orange-500→600, ink-950→800); ghost/tag
  surfaces pick up a faint `--ink` tint; links use orange-600 + underline.
- **Press states:** 1px downward translate on buttons; no scale.
- **Focus:** 3px soft orange ring (`--shadow-focus`) — always visible, never removed.
- **Transparency / blur:** essentially unused. This is an opaque, paper-like system.
- **Radii:** none/2/4/6/8/12 + pill (chips only).

---

## ICONOGRAPHY

- **Brand mark:** the Cartrack navigation arrow inside a ring with an orange dot
  (`assets/logos/cartrack-insurance-mark.png` / `-mark-white.png`). Use it for
  favicons, avatars and compact lockups.
- **Logos:** full lockups live in `assets/logos/` — see the manifest below. Prefer the
  transparent, trimmed `cartrack-insurance-*` files in product UI; the originals
  (`logo_horizontal_*`, `logo_vertical_*`) are kept for reference.
- **UI icons:** no proprietary icon set was provided. The system uses **functional
  glyphs only** — status dots, a check glyph in the Checkbox, and simple textual marks
  (`›`, `!`, `✕`, `i`) in Callouts. For richer product UI, use **Lucide**
  (https://lucide.dev) at a 1.75px stroke to match the squared, technical tone — it is
  CDN-available and a clean match. **No emoji, no coloured/3D icons.** This is a
  substitution and should be confirmed; if Cartrack has an official icon set, supply it
  and it will replace Lucide.

---

## Foundations: substitutions & flags

- **Fonts:** No brand font files were provided. The CARTRACK wordmark is a custom
  squared geometric face; **Saira** (Google Fonts) is the closest freely-available match
  and is used for display. **IBM Plex Sans/Mono** were chosen for body and data. All three
  are self-hosted (latin subset) in `assets/fonts/`. ⚠️ **If you have the official brand
  typeface, share it** and `tokens/fonts.css` should be updated to use it.
- **Brand orange** was sampled from the supplied logo as **`#F47735`**.

---

## Index / manifest

**Global entry**
- `styles.css` — the one file consumers link. Imports all tokens + fonts + base.

**Tokens** (`tokens/`)
- `fonts.css` — `@font-face` for Saira, IBM Plex Sans, IBM Plex Mono.
- `colors.css` — orange + ink scales, status colours, semantic aliases.
- `typography.css` — families, weights, type scale, tracking, roles.
- `layout.css` — spacing, radii, borders, shadows, layout, motion, z-index.
- `base.css` — element resets and helper classes (`.cti-eyebrow`, `.cti-mono`, `.cti-display`).

**Components** (`components/`) — namespace `window.CartrackInsuranceComplianceDesignSystem_6fdc1b`
- `actions/Button` — primary/accent/secondary/ghost/danger, sm/md/lg.
- `data-display/StatusPill` — fixed compliance-status vocabulary.
- `data-display/Card` — structured surface panel, optional accent rule.
- `data-display/DataField` — label/value (mono) statutory metadata.
- `data-display/Tag` — category / clause-reference chip.
- `feedback/Callout` — authoritative notice (note/action/caution/breach).
- `forms/Input` — labelled text field (mono / multiline / error).
- `forms/Checkbox` — attestation checkbox for handover checklists.

**Foundation cards** (`guidelines/`) — specimen cards shown in the Design System tab
(Colors, Type, Spacing, Brand).

**UI kit** (`ui_kits/compliance-console/`) — interactive recreation of the compliance
console: overview dashboard, statutory document register, document/memo detail, and a
handover checklist.

**Templates** (`templates/`) — copy-ready, print-ready documents built as Design
Components, derived directly from the user's supplied source files. All use the shared
A4 layout system (letterhead cover, running header/footer, document control, numbered
sections, callouts, tables, sign-off):
- `compliance-document/` — **Complaints Management Framework** (A4 portrait, 4 pages):
  definitions, objectives, complaints process flow, categories, resolution time frames,
  escalation path, Key Individual sign-off.
- `compliance-monitoring-report/` — **FAIS Compliance Monitoring Report** (A4 portrait,
  3 pages): requirement/confirmation checklist grouped by statutory area (FAIS RMP,
  DR & BCP, COI, Binders, FICA, 2025 tests), Compliance Officer attestation.
- `gifts-register/` — **Gifts, Gratuities & Incentives Register** (A4 **landscape**):
  14-column register tracking value, R1,000 annual-limit breaches, COI flags and
  decisions, with Key Individual review block.

These three correspond one-to-one with the source documents provided. (Earlier drafts of
additional statutory documents — COI Policy, COI Declaration, FAIS RMP, BCP/DR, FICA RMCP,
statutory memo — were removed at the user's request because they were AI-drafted rather
than supplied.)

Real entity data used across these: Cartrack Insurance Agency (Pty) Ltd, Grosvenor
Corner, 13 Keyes Avenue, Rosebank, Johannesburg; Reg. 2001/008050/07; FSP 17266;
Directors J Marais & JD Allen; Compliance Officer Pamela Govender; Key Individual
Brendan. Sample register rows and report answers are illustrative — swap in live data.

**Assets** (`assets/`) — `logos/`, `fonts/`.

**Editable Office documents** (`exports/`) — branded, ready-to-issue Word & Excel
versions of the three supplied documents, on the real letterhead with the entity data:
- Word (`.docx`): Complaints Management Framework, Compliance Monitoring (March 2026).
- Excel (`.xlsx`): Gifts Register.
Sample register rows / monitoring answers are illustrative — confirm live figures before
signing. Fonts are specified as Saira / IBM Plex; Office substitutes a default if they are
not installed locally.

**`SKILL.md`** — Agent-Skill wrapper so this system can be used from Claude Code.
