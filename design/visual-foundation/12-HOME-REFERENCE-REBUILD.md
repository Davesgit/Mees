# Home Reference-Driven Rebuild Plan

Status: ACTIVE
Date: 2026-10-01

## Problem statement

The approved mockups are visually much richer than the current deployed Home. The gap is not one CSS bug. It comes from three mismatches:

1. The mockups are raster concept compositions, while production uses simplified SVG approximations.
2. Production layout was implemented from interpreted proportions rather than measured reference geometry.
3. Several visual slots still use temporary or legacy assets.

Therefore the next phase is a reference-driven rebuild, not another incremental polish pass.

## Core rule

The approved group 5-6 Home mockup is the visual contract. Production should be rebuilt against it at one fixed viewport before responsive and age variants are tuned.

## Architecture decision

Keep the existing learning engine and routes. Rebuild only the Home presentation layer.

Do not use a screenshot as a flat page background. Every major region remains real HTML/CSS:
- header/navigation;
- hero copy and CTA;
- subject cards;
- continue area;
- today area;
- Ontdekboek;
- footer/support message.

Artwork is provided as separate image assets.

## Reference implementation workflow

### Phase A — isolate a review route
Create a dedicated Home V2 review implementation so production can be compared without repeatedly breaking the current Home.

Reference viewport: 1440 x 1024.

### Phase B — measure the reference
For every block record:
- x/y position;
- width/height;
- internal padding;
- radius;
- typography;
- image bounding box;
- card gap;
- color/surface treatment.

Tolerance target for the first comparison:
- major geometry: within 8 px;
- component spacing: within 6 px;
- font sizing: within 2 px;
- illustration bounding boxes: visually equivalent.

### Phase C — produce real Home artwork
The current hand-built SVG subject assets are not visually rich enough. Replace them with individually generated V2 artwork matching the reference.

Blocking assets:
1. V2 compact brand mark
2. V2 hero Mees with backpack
3. V2 Rekenen card illustration
4. V2 Taal & lezen card illustration
5. V2 Wereld & natuur card illustration
6. V2 Creatief card illustration

Scene:
- first test the existing mountain-lake scene;
- replace only if its crop/palette cannot match the reference.

Every illustration must be exported individually with transparency where appropriate.

### Phase D — rebuild group 5-6 only
Implement the exact middle Home first.
No junior/senior rules during this pass except dormant class hooks.

### Phase E — screenshot diff loop
At 1440 x 1024:
1. deploy;
2. capture Home;
3. compare against approved reference;
4. record differences;
5. correct;
6. repeat until the page reads as the same design family and composition.

### Phase F — functional wiring
After visual lock:
- Rekenen starts real session;
- Leren scrolls/navigates correctly;
- Ontdekboek opens its real screen when implemented;
- non-built subjects clearly remain unavailable;
- group selector stays dev-only until user/profile data drives it.

### Phase G — age variants
Derive group 3-4 and 7-8 from the approved middle Home. Do not redesign independently.

### Phase H — responsive
Tablet and mobile only after desktop middle Home is approved.

## What changes immediately

Stop:
- generating large concept boards as production references;
- drawing simplified placeholder SVGs and calling them final;
- adding CSS polish around known-wrong artwork;
- tuning three age bands simultaneously.

Start:
- one exact reference viewport;
- one asset at a time;
- one screenshot-diff loop;
- one middle Home until approved.

## Definition of success

The deployed group 5-6 Home should be recognizable as the same page as the approved mockup even when the mockup and screenshot are viewed side-by-side, while keeping the no-gamification product rules.
