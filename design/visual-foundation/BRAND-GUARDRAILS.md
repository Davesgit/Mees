# Mees Brand Guardrails

Status: HARD CONSTRAINT / source-of-truth companion to 00-VISUAL-MASTER-DECISIONS.md and ASSET-LIBRARY.md.

## Canonical brand
- Logo structure: approved compact Mees bird head + approved custom Mees wordmark.
- Canonical compact mark currently available in production: `MEES-BRAND-HEAD-001.png`.
- The heart motif is rejected.
- A letter badge, generic icon, substitute bird, emoji or newly generated logo may never replace the approved mark.
- The custom Mees wordmark must not be recreated as if typed Nunito Sans were the final brand asset.
- Until an approved wordmark file exists, typed “Mees” may only be used as an explicitly temporary fallback beside the canonical bird head.

## Mascot constraints
- Preserve approved crest, eyes, blue/cream coloring, beak and proportions.
- No permanent yellow/beige/brown object on back, neck or behind head.
- Contextual props are optional and must have meaning.
- Do not alter mascot anatomy to fit a screen.

## Change control
Branding is a locked dependency, not a creative implementation area.

Before changing any logo, wordmark, mascot base, brand color role or typography:
1. Read `00-VISUAL-MASTER-DECISIONS.md`.
2. Read `ASSET-LIBRARY.md`.
3. Reuse an approved asset if it exists.
4. If the required approved asset does not exist, do not invent a replacement.
5. Use a clearly marked temporary fallback only when necessary for function.
6. Record the missing asset in the asset registry.
7. A new brand direction requires explicit human approval before production use.

## AI implementation rule
An AI coding/design agent must treat these files as constraints:
- `design/visual-foundation/00-VISUAL-MASTER-DECISIONS.md`
- `design/visual-foundation/ASSET-LIBRARY.md`
- `design/visual-foundation/BRAND-GUARDRAILS.md`

For brand-affecting code, the agent should prefer “missing approved asset” over improvisation.

## Current known gap
`MEES-BRAND-WORDMARK-001` and `MEES-BRAND-LOGO-HORIZONTAL-001` are planned but are not currently present as production files. The UI therefore uses the approved bird-head asset plus a temporary typed label. This fallback must be replaced when the approved custom wordmark is exported.
