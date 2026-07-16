# Insurance Quote-Comparison Pack Builder — Handoff

This folder holds the toolkit that turns a client's **current policy schedules** + the
**Cartrack (proposed) schedules** into a full, branded comparison pack. ALW Body
Corporates was the first live build (the pilot). Read this before continuing so nothing
gets re-derived incorrectly.

---

## 1. What the pack is (the deliverable set)

Two audiences, deliberately split:

**Client pack (clean, persuasive):**
- Cover Story — how the client is insured today, in plain English
- Line-for-line comparison — current vs proposed, winner + reason per line
- Price vs Protection — why any building that costs more is still a better position
- Client presentation (PowerPoint, 16:9)
- Client leave-behind (1 page)

**RM pack (internal, frank — never handed to the client):**
- everything above, plus
- Current + Proposed teardowns (full detail: sum insured + premium + excess + note)
- The Naked Truth — where the proposal is weaker/unproven (RM eyes only)
- RM Battlecard — 3 numbers, objection scripts, the close

**Front matter (reusable for every proposal):**
- Cartrack Business Overview (5 slides / PDF) — generic, no client name

---

## 2. Decisions that are LOCKED (do not re-litigate)

- **Font = Libre Franklin throughout** (Option B). Figures use tabular lining
  numerals (`font-variant-numeric:tabular-nums`) — **no monospace / Source Code Pro**.
  The client rejected the old Work Sans + Source Code Pro "code" look for documents.
- **Portrait for all documents; 16:9 only for the PowerPoint decks.**
- **Brand:** ink `#141922`, paper `#fcfbf9`, orange `#f4772e` (deep `#ce5c16`,
  hi `#ff9a5a`), green `#12805f`, current=blue `#2f6db0`, proposed=orange.
  Logo: `cartrack-insurance-horizontal-white.png` (white, for dark hero bands).
- **Recommendation logic (IMPORTANT):** never tell a client to STAY on an old insurer
  just to save a few rand. If a building costs more but gives better cover, it's an
  **UPGRADE — still move it.** The only valid reason to hold a building is a genuine
  **cover gap** to close first (e.g. a sum insured not yet scheduled), not price.
  ALW recommendation = **move all five.** Two buildings badged UPGRADE, not "review".
- **Tone (RM material):** peer briefing, not schooling. Avoid "the 3 numbers to know
  cold" / "read this before the meeting". Prefer "your headline numbers" / "worth
  knowing before you walk in".
- **Price vs Protection device:** when a premium is higher, split the bill — separate
  the uncontrollable pass-through (Sasria, statutory, fees) from what the insurer
  actually underwrites. Usually the underwriting is cheaper AND broader.
- **Fees slide:** Cartrack is paid by insurer commission; most commercial proposals
  carry R0 broker fee. Frame as a PPR 12.4 compliance credential.

---

## 3. How to regenerate (needs Node + Playwright + python-pptx, pyftsubset optional)

Generators are plain Python that emit `*.src.html`; `lib.py` injects the fonts + logo
(base64) into `*.html`; a small Playwright `.mjs` script renders to PDF/PNG.

```
cd pack-builder
python3 gen_cmp_p.py         # -> cmp_p.html   (portrait line-for-line comparison)
python3 gen_teardown_p.py    # -> teardown_p.html (portrait current+proposed teardowns)
node render_all.mjs          # -> ALW_Comparison_portrait.pdf, ALW_Teardowns_portrait.pdf
# decks:
python3 -c "from lib import build; build('deckalw.src.html','deckalw.html')"
node render_deck.mjs         # -> sl1..sl9.png  (then assemble pptx, see render_all/pptx snippet)
python3 -c "from lib import build; build('bizoverview.src.html','bizoverview.html')"
node render_biz.mjs && node pdf_biz.mjs
```

Playwright Chromium in the sandbox: launch with
`executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'`.
LibreOffice can NOT convert office files here (Java broken) — build PPTX image-based
via python-pptx `add_picture` from rendered PNGs.

Fonts were fetched from Google Fonts (Libre Franklin 400/600/700). `ws-*`/`scp-*` are
the retired Work Sans/Source Code Pro (kept only so the old `betteroff.src.html`
still renders; migrate it to Libre Franklin before reuse).

---

## 4. Verified ALW numbers (do NOT re-derive — these reconcile to the schedules)

All monthly, VAT incl.

| Building | Current | Insurer | Proposed (Western) | Δ / mo | Verdict |
|---|--:|---|--:|--:|---|
| Strategic Park N12 | 24,348.99 | Bryte | 22,470.97 | −1,878.02 | SWITCH |
| 39 Empire Road | 12,424.13 | OUTsurance | 13,717.76 | +1,293.63 | UPGRADE* |
| 43 Empire Road | 8,328.11 | Bryte | 7,693.38 | −634.73 | SWITCH |
| Brett Park | 7,632.22 | Bryte | 7,271.39 | −360.83 | SWITCH |
| Winston Lane | 1,770.47 | Bryte | 1,996.58 | +226.11 | UPGRADE |
| **Portfolio** | **54,503.92** | | **53,150.08** | **−1,353.84** | move all five |

Key facts:
- 39 Empire: the +R1,294 is entirely Sasria (+R2,657.83). Ex-Sasria Western is
  **R1,364.20/mo cheaper** and adds a R25m umbrella (liability R20m → R35m tower).
  *Condition: confirm the ~R4.86m solar is scheduled on Western before moving.
- Winston: +R226/mo but the excess on the likely claim (burst pipes) drops R10,000 → R500.
- Proposals are the **10 July 2026** Western quotes (48517097 / 48517405 / 48517726 /
  48517811 / 48559776). An earlier 29 June set exists and differs slightly — use 10 July.
- Brendan's `Final_updated_comparison.xlsx` had two real errors (43 Empire saving used
  the wrong base cell; 39 Empire OUTsurance total understated, missing Sasria). His
  quote capture was otherwise correct.

---

## 5. Still TODO (where to pick up)

1. Rebuild the remaining pack pieces in Libre Franklin / portrait / peer tone:
   Pack cover-contents, Cover Story, Naked Truth, Battlecard, leave-behind, and migrate
   Price-vs-Protection (`betteroff.src.html`) off Work Sans.
2. Assemble final `ALW_RM_Pack.pdf` (portrait) and `ALW_Client_Pack.pdf` (portrait).
3. **The real product:** wire this into the portal (`tool.html`) so an RM uploads the
   two schedules and the whole pack generates from ONE verified data sheet (single
   source of truth — also kills Brendan-style divergence). Add an inputs checklist
   (valuations current? claims history? solar values?) before generation.

Open naming question: keep "Naked Truth" or soften to "Straight Talk" / "Before You Walk In".
