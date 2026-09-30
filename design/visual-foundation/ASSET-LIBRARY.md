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
