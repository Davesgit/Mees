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
| MEES-BRAND-HEAD-001 | brand/mascot-head | Standalone brand mark | planned |
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
