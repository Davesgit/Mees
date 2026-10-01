# Mees Asset Library

Status: production registry. This file records assets that exist, are planned, or are approved for use in Mees.

## Principles
- Concept boards are references, never production assets.
- Every production asset is an individual file with a stable asset ID.
- Only assets with status **approved** may be used as canonical visual references.
- Do not generate a substitute when an approved asset already exists.
- The base Mees has no permanent accessory or yellow/beige/brown object on his back/neck.
- Contextual props are encouraged when meaningful.
- UI controls/text are components, not raster illustrations.

## Statuses
- planned
- draft
- review
- approved
- deprecated

## Formats
- Brand marks/simple icons: SVG where practical.
- Mascot/complex illustration with transparency: lossless master PNG plus optimized WebP for web.
- Full scenes/backgrounds: master PNG plus optimized WebP/AVIF where useful.
- Never rely on a collage crop as a production asset.

## Naming
`MEES-{CATEGORY}-{SUBJECT}-{VARIANT}-{NNN}`

Examples:
- MEES-BRAND-LOGO-HORIZONTAL-001
- MEES-MASCOT-BASE-HEAD-001
- MEES-MASCOT-EXPLORE-BACKPACK-001
- MEES-SCENE-FOREST-001

## Repository layout
```
public/assets/mees/
  brand/
  mascot/
    base/
    expressions/
    poses/
    context/
  illustrations/
    scenes/
    subjects/
    decorative/
  icons/
```

## Registry
| Asset ID | File | Purpose | Status |
|---|---|---|---|
| MEES-BRAND-LOGO-HORIZONTAL-001 | brand/logo-horizontal | Primary logo | planned |
| MEES-BRAND-WORDMARK-001 | brand/wordmark | Text-only brand mark | planned |
| MEES-BRAND-HEAD-001 | MEES-BRAND-HEAD-001.png | Standalone compact brand/hero mark | approved |
| MEES-BRAND-APPICON-LIGHT-001 | brand/app-icon-light | App icon light | planned |
| MEES-BRAND-APPICON-DARK-001 | brand/app-icon-dark | App icon dark | planned |
| MEES-BRAND-FAVICON-001 | brand/favicon | Browser favicon | planned |
| MEES-MASCOT-BASE-001 | mascot/base/base | Canonical full-body Mees | planned |
| MEES-MASCOT-CURIOUS-001 | mascot/expressions/curious | Curious state | planned |
| MEES-MASCOT-THINKING-001 | mascot/expressions/thinking | Thinking/support | planned |
| MEES-MASCOT-CALM-001 | mascot/expressions/calm | Calm/rest state | planned |
| MEES-MASCOT-EXPLAIN-POINTER-001 | mascot/context/explain-pointer | Explaining with pointer | planned |
| MEES-MASCOT-EXPLORE-BACKPACK-001 | mascot/context/explore-backpack | Exploring with backpack | planned |
| MEES-MASCOT-LEARN-BOOK-001 | mascot/context/learn-book | Reading/learning | planned |
| MEES-MASCOT-EXPLORE-MAP-001 | mascot/context/explore-map | Exploration/project | planned |
| MEES-MASCOT-RESEARCH-MAGNIFIER-001 | mascot/context/research-magnifier | Investigating | planned |
| MEES-MASCOT-OUTDOOR-CAP-001 | mascot/context/outdoor-cap | Outdoor context | planned |

## Metadata required per approved asset
- asset ID
- human-readable name
- purpose/context
- intended age range or `all`
- expression
- props
- source/master file
- web delivery file
- dimensions/aspect ratio
- transparent/background
- approval status
- visual QA notes

## Usage rule for AI tools
Before adding or generating an asset, check this registry. Reuse approved assets where possible. If a missing asset is needed, add it to the inventory first, create it according to the Visual Master Plan, review it, then mark it approved.


## Official Mees Outline
Approved mascot assets may have two delivery variants:
- `clean`: transparent mascot without contour, retained as flexible master/reference.
- `outline`: transparent mascot with the consistent soft white Mees contour, preferred on colored/illustrated UI backgrounds.

Both variants represent the same approved character. The outline is a presentation treatment, not a change to Mees anatomy.


## Compact Mees master — APPROVED ROLE
Mees has two canonical base forms:
- `MEES-MASCOT-BASE-001`: full-body character for learning scenes, poses, explanations and contextual illustrations.
- `MEES-BRAND-HEAD-001`: compact head/body mark without legs or feet for logo lockups, app icon, favicon, small avatar and compact UI use.

The compact form is not a different character. It must preserve the same crest, eyes, blue/cream coloring, beak and facial proportions as the canonical Mees.


## Visual System v1 production queue — APPROVED DIRECTION

The following individual assets are required to implement the approved group 5–6 Home reference. Concept-board crops are not canonical production files.

| Asset ID | Intended file | Purpose | Status |
|---|---|---|---|
| MEES-MASCOT-HERO-BACKPACK-001 | mascot/context/MEES-MASCOT-HERO-BACKPACK-001.png | Home discovery hero | review |
| MEES-SUBJECT-MATH-001 | illustrations/subjects/MEES-SUBJECT-MATH-001.webp | Rekenen subject card | review |
| MEES-SUBJECT-READING-001 | illustrations/subjects/MEES-SUBJECT-READING-001.webp | Taal & lezen subject card | review |
| MEES-SUBJECT-NATURE-001 | illustrations/subjects/MEES-SUBJECT-NATURE-001.webp | Wereld & natuur subject card | review |
| MEES-SUBJECT-CREATIVE-001 | illustrations/subjects/MEES-SUBJECT-CREATIVE-001.webp | Creatief subject card | review |

The approved scene family already present in the repository remains reusable supporting scenery. Subject-card art must be exported as individual production assets before it is wired into UI.


## Calm mascot refinement candidates — REVIEW ONLY

| Asset ID | Intended file | Purpose | Status |
|---|---|---|---|
| MEES-MASCOT-CALM-SEATED-001 | mascot/review/MEES-MASCOT-CALM-SEATED-001.png | Calm seated/learning mascot candidate; simpler graphic treatment while preserving canonical Mees anatomy | review |
| MEES-MASCOT-CALM-BASE-001 | mascot/review/MEES-MASCOT-CALM-BASE-001.png | Simplified calm base-render candidate for comparison with current canonical character | review |

These candidates may not replace `MEES-BRAND-HEAD-001` or any approved canonical brand asset until explicit approval. The user-supplied reference image is inspiration for calmness only and is not itself a Mees asset.


## V2 production queue

The approved V2 character uses one consistent eye construction in every pose.

| Asset ID | Purpose | Status |
|---|---|---|
| MEES-V2-BRAND-HEAD-001 | Compact V2 brand mark | planned |
| MEES-V2-MASCOT-NEUTRAL-001 | Canonical neutral full-body pose | planned |
| MEES-V2-MASCOT-BOOKS-001 | Calm learning pose on books | planned |
| MEES-V2-MASCOT-CURIOUS-001 | Curious pose | planned |
| MEES-V2-MASCOT-HAPPY-001 | Positive pose | planned |
| MEES-V2-MASCOT-THINKING-001 | Thinking pose | planned |
| MEES-V2-MASCOT-SATISFIED-001 | Calm completion pose | planned |

V1 glossy assets are legacy references during migration and are not a source for new artwork.


# MASTER ASSET CHECKLIST — V2

This section is the practical checklist for all visual assets needed by the Mees website/app. An item is only complete when the individual production file exists in the repository, has the correct background/transparency, and has passed visual QA.

Legend:
- [x] production-ready
- [ ] still required
- visually approved does not count as done until the production file exists

## Brand
- [ ] MEES-V2-BRAND-HEAD-001 — compact V2 Mees head, transparent
- [ ] MEES-V2-BRAND-WORDMARK-001 — custom Mees wordmark, transparent
- [ ] MEES-V2-BRAND-LOGO-HORIZONTAL-001 — head + wordmark
- [ ] MEES-V2-BRAND-APPICON-001 — app/PWA icon
- [ ] MEES-V2-BRAND-FAVICON-001 — browser favicon

Current MEES-BRAND-HEAD-001.png remains a temporary V1 bridge.

## Canonical mascot masters
- [ ] MEES-V2-MASCOT-NEUTRAL-001 — neutral full-body master, transparent. Visual direction approved, production export still required.
- [ ] MEES-V2-MASCOT-FRONT-001 — front reference
- [ ] MEES-V2-MASCOT-BACK-001 — back reference
- [ ] MEES-V2-MASCOT-LEFT-001 — opposite-side reference

Every later pose must preserve the same canonical open-eye construction, beak, crest, body proportions, feet and blue palette.

## Product mascot poses
- [ ] MEES-V2-MASCOT-BOOKS-001 — calm pose on books, Home/learning context
- [ ] MEES-V2-MASCOT-CURIOUS-001 — curious/supportive context
- [ ] MEES-V2-MASCOT-THINKING-001 — hint/explanation support
- [ ] MEES-V2-MASCOT-HAPPY-001 — warm positive acknowledgement, used sparingly
- [ ] MEES-V2-MASCOT-SATISFIED-001 — calm session closure
- [ ] MEES-V2-MASCOT-READING-001 — taal/lezen context
- [ ] MEES-V2-MASCOT-POINTING-001 — future explanation context

Flying, running, sleeping, peeking, celebration, trophy, heart and star poses are not required for the current MVP. Sprite sheets are pose research only.

## Subject illustrations
- [ ] MEES-V2-SUBJECT-MATH-001 — Rekenen, transparent
- [ ] MEES-V2-SUBJECT-READING-001 — Taal & lezen, transparent
- [ ] MEES-V2-SUBJECT-NATURE-001 — Wereld & natuur, transparent
- [ ] MEES-V2-SUBJECT-CREATIVE-001 — Creatief, transparent

Current MEES-SUBJECT-*-001.png files are V1 placeholders and must be replaced.

## Optional Home decoration
- [ ] MEES-V2-DECOR-CLOUD-001 — small cloud
- [ ] MEES-V2-DECOR-LEAVES-001 — leaf cluster
- [ ] MEES-V2-DECOR-BOOKS-001 — small book stack

These are optional. Home must still work without them. Large scenic backgrounds are not required in V2.

## Learning representation system
These should normally be reusable SVG/React components, not AI-generated raster images.

- [x] Number line — existing UI component
- [ ] Ten-frame — number sense
- [ ] Base-10 blocks — place value
- [ ] Fraction bar — fractions
- [ ] Fraction circle — fractions
- [ ] Clock face — time
- [ ] Money set — money calculations
- [ ] Measurement ruler — length
- [ ] Geometry shapes — geometry
- [ ] Grid / coordinate plane — later mathematics

## Feedback/UI graphics
- [x] Hint mark — UI/CSS
- [x] Correct state mark — UI/CSS
- [x] Retry state mark — UI/CSS
- [x] Prerequisite/route mark — UI/CSS
- [ ] Standard vector icon family — only when settings/profile/navigation screens actually exist

No trophies, stars, badges, XP, streak flames or reward graphics.

## Future-screen asset groups
Not required until the corresponding product screen exists.

- [ ] Onboarding illustration(s)
- [ ] Parent-area illustrations
- [ ] Teacher-area illustrations
- [ ] Empty-state illustrations
- [ ] Error/offline illustration
- [ ] Discover/topic illustrations

## Legacy files currently in repository
- MEES-BRAND-HEAD-001.png — temporary bridge
- MEES-MASCOT-HERO-BACKPACK-001.png — deprecate
- MEES-SUBJECT-MATH-001.png — replace
- MEES-SUBJECT-READING-001.png — replace
- MEES-SUBJECT-NATURE-001.png — replace
- MEES-SUBJECT-CREATIVE-001.png — replace
- MEES-SCENE-COAST-LIGHTHOUSE-001.jpg — legacy, not required
- MEES-SCENE-DISCOVERY-STUDY-001.jpg — legacy, not required
- MEES-SCENE-FOREST-DISCOVERY-001.jpg — legacy, not required
- MEES-SCENE-MOUNTAIN-LAKE-001.jpg — legacy, not required

## MVP visual completion target
For Home → Rekenen → Focus Mode → feedback → session end, the minimum visual set is:
1. V2 brand head
2. V2 wordmark/horizontal logo
3. V2 neutral mascot master
4. V2 books or other approved Home-support pose
5. V2 satisfied/calm completion pose
6. four V2 subject illustrations
7. favicon/app icon
8. reusable math representations required by implemented question types

## Definition of done
An image can only be checked when:
1. it exists as an individual file, not a collage crop;
2. style/anatomy matches V2;
3. transparency/background is correct;
4. no unwanted glow, halo, checkerboard, text or scenery is baked in;
5. it works at the intended UI size;
6. it has a stable asset ID and repository path;
7. it passed visual QA in the real screen;
8. this registry points to the production file.


## V2 checklist expansion — attributes, scenes and richer math visuals

### Mascot attributes / contextual props
These are reusable transparent props or prop-specific mascot variants. They are allowed when they communicate context, not as permanent anatomy.

- [ ] MEES-V2-PROP-BACKPACK-001 — rugtas for discovery/outdoor context
- [ ] MEES-V2-PROP-CAP-001 — pet for outdoor/project context
- [ ] MEES-V2-PROP-POINTER-001 — leerstok/pointer for explanation context
- [ ] MEES-V2-PROP-BOOK-001 — single book
- [ ] MEES-V2-PROP-BOOKSTACK-001 — stack of books
- [ ] MEES-V2-PROP-MAGNIFIER-001 — onderzoek/ontdekken
- [ ] MEES-V2-PROP-MAP-001 — route/discovery
- [ ] MEES-V2-PROP-PENCIL-001 — writing/creative context
- [ ] MEES-V2-PROP-PALETTE-001 — creative context
- [ ] MEES-V2-PROP-RULER-001 — measurement/math context
- [ ] MEES-V2-PROP-BACKPACK-CAP-001 — optional combined outdoor set if composition benefits

Props should be drawable as independent transparent assets where practical so the same approved object can be reused consistently.

### Supporting scene library
The existing V1 scenes are not automatically rejected. Their visual quality is useful, but they should be reframed as optional supporting scene assets rather than default page backgrounds.

Current scene decisions:
- MEES-SCENE-COAST-LIGHTHOUSE-001.jpg — REVIEW FOR V2 REUSE
- MEES-SCENE-DISCOVERY-STUDY-001.jpg — REVIEW FOR V2 REUSE
- MEES-SCENE-FOREST-DISCOVERY-001.jpg — REVIEW FOR V2 REUSE
- MEES-SCENE-MOUNTAIN-LAKE-001.jpg — REVIEW FOR V2 REUSE

Potential V2 scene set:
- [ ] MEES-V2-SCENE-CLASSROOM-001 — calm learning/classroom corner
- [ ] MEES-V2-SCENE-LIBRARY-001 — reading/library
- [ ] MEES-V2-SCENE-FOREST-001 — nature/discovery
- [ ] MEES-V2-SCENE-MOUNTAIN-LAKE-001 — exploration
- [ ] MEES-V2-SCENE-COAST-001 — coast/lighthouse
- [ ] MEES-V2-SCENE-WORKTABLE-001 — creative/project table
- [ ] MEES-V2-SCENE-MATH-DESK-001 — restrained maths workspace
- [ ] MEES-V2-SCENE-GARDEN-001 — nature/measurement context

Scene rule: never behind an active Focus Mode task. Use only for Home/Discover/onboarding/topic introductions or wide editorial moments. Prefer low-detail, low-contrast edges and generous negative space for UI overlays.

### Mathematics representation system v2
The math layer should be richer than bare primitives, but still instructional rather than decorative.

- [x] Number line — current interactive component; refine visual hierarchy and marker/tick family
- [ ] Ten-frame — 5+5 structure with calm filled/unfilled counters
- [ ] Rekenrek — Dutch primary-school bead rack, interactive-ready
- [ ] Base-10 blocks — units, rods, flats, thousand cube where needed
- [ ] Number bond / part-whole model — split/merge relationships
- [ ] Bar model — comparison and word problems
- [ ] Array / groups model — multiplication and division
- [ ] Fraction bar — equivalent fractions and part-whole
- [ ] Fraction circle — optional secondary representation
- [ ] Clock face — analog time with draggable hands
- [ ] Money set — euro notes/coins as simplified educational vectors
- [ ] Measurement ruler — length and scale
- [ ] Measuring jug / volume scale — capacity
- [ ] Thermometer — temperature
- [ ] Balance scale — equality/weight
- [ ] Geometry toolkit — 2D shapes, 3D solids, angle arc, symmetry line
- [ ] Grid / coordinate plane — later mathematics
- [ ] Place-value chart — units/tens/hundreds/thousands
- [ ] Number cards / digit tiles — composing/decomposing numbers

Visual rule for math assets:
- recognizable and tactile enough for children;
- restrained soft shading is allowed;
- exact quantity/scale must remain mathematically legible;
- no mascot decoration inside the mathematical object;
- build interactive representations as SVG/React whenever possible;
- AI illustration may help explore look-and-feel but does not become the source of truth for exact math geometry or values.
