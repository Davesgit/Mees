# Home V2 Production Plan

Status: active execution plan
Date: 2026-10-01

## Objective
Rebuild Home to closely match the approved age-progression mockup while preserving Mees product rules: no gamification, calm age progression, real reusable assets, and responsive implementation.

## Why the current Home diverges
1. The mockup was treated as visual inspiration instead of a measured layout specification.
2. Hero still uses legacy mascot/brand assets.
3. Subject artwork is too icon-like compared with the approved mockup.
4. Hero proportions and subject-card proportions differ materially from the mockup.
5. Layout was coded before the final production asset set was complete.

## Execution gates

### Gate 1 — Freeze Home layout spec
Before generating more artwork:
- define desktop reference viewport;
- define shell width;
- define header height;
- define hero height and grid split;
- define subject-card dimensions;
- define vertical rhythm;
- define junior/middle/senior deltas;
- identify every image slot and intended crop.

Deliverable: one written Home spec and a wireframe-level implementation using placeholders only.

### Gate 2 — Home asset batch
Create only assets needed by Home:
- V2 brand head;
- V2 hero Mees with backpack;
- V2 subject Rekenen;
- V2 subject Taal & lezen;
- V2 subject Wereld & natuur;
- V2 subject Creatief;
- optional decorative elements only if the layout still needs them after real assets are placed.

Each asset must:
- be an individual production file;
- have correct transparency;
- preserve canonical Mees anatomy/eyes;
- be reviewed at actual UI size;
- be registered in ASSET-LIBRARY.md.

Existing mountain/forest scene assets may be reused if visual QA confirms they fit after crop/color treatment.

### Gate 3 — Build exact desktop Home
Implement the approved group 5–6 Home first.
Do not simultaneously tune all three age bands.
Match:
- structure;
- relative proportions;
- spacing;
- typography scale;
- image placement;
- card density;
- color balance.

### Gate 4 — Visual QA against mockup
At the same viewport:
- compare screenshot against reference;
- list visible mismatches;
- correct until composition is stable.

No asset or section is marked approved before this pass.

### Gate 5 — Age variants
Once middle Home is stable:
- derive junior changes;
- derive senior changes;
- verify group 3/4 and group 7/8 separately;
- keep structure consistent and vary density, mascot presence and illustration scale gradually.

### Gate 6 — Responsive pass
Only after desktop is approved:
- tablet;
- mobile;
- keyboard/focus/accessibility;
- reduced motion;
- content overflow.

### Gate 7 — Freeze Home
After approval:
- mark final Home assets approved;
- remove or deprecate temporary legacy placeholders;
- document final Home anatomy;
- move to Focus Mode.

## Home asset status at start

### Reusable candidates
- MEES-SCENE-MOUNTAIN-LAKE-001.jpg — candidate, needs crop/color QA
- MEES-SCENE-FOREST-DISCOVERY-001.jpg — candidate, needs crop/color QA

### Temporary/replace
- MEES-BRAND-HEAD-001.png — temporary legacy bridge
- MEES-MASCOT-HERO-BACKPACK-001.png — replace with V2
- current V2 subject SVGs — review; likely redraw because they are too icon-like

## Rule
No more broad asset generation before the Home layout spec is frozen. No more layout polishing around known-wrong hero/brand assets after the asset slots are fixed. Work in this order:

spec → asset batch → exact middle Home → visual QA → age variants → responsive → freeze.
