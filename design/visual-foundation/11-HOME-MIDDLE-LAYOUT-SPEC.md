# Home V2 — Group 5–6 Layout Specification

Status: frozen for implementation
Date: 2026-10-01
Reference: approved middle-age Home mockup (group 5–6)

## 1. Reference viewport

Primary desktop QA viewport:
- viewport width: 1440px
- viewport height: 1024px
- app shell max width: 1180px
- outer page padding: 24px
- content centered

Secondary QA viewport after desktop freeze:
- 1280px wide
- then tablet/mobile only after desktop approval

The 1440px desktop view is the visual source of truth for the first implementation pass.

## 2. Home anatomy

Exact vertical order:
1. Header
2. Hero
3. Subjects heading
4. Four subject cards
5. “Vandaag voor jou” learning panel + “Ga verder” panel
6. Ontdekboek
7. page bottom spacing

Do not insert progress rings, badges, trophy areas, scores, weekly goals or other gamification blocks from exploratory mockups.

## 3. Header

Desktop:
- width: 100% of shell
- height: 64px
- horizontal padding: 18px
- radius: 16px
- subtle 1px border
- no heavy shadow

Grid:
- brand left: intrinsic width, target 145–165px including wordmark
- navigation center
- group selector right

Navigation:
- Home
- Leren
- Ontdekboek
- 40–44px target height
- active item uses light-blue filled state, not a pill-heavy tab

Brand:
- final slot requires V2 brand head + V2 wordmark
- temporary legacy brand must be visibly tagged in code/docs until replaced

## 4. Hero

Desktop middle profile:
- width: 100%
- target height: 285px
- radius: 22px
- overflow hidden
- background scene fills the full card
- crop favors landscape depth on right and open text space on left

Internal grid:
- text zone: about 58%
- mascot zone: about 42%
- content padding: 42px 48px

Text:
- eyebrow: 12px / 800 / uppercase, Mees blue
- h1: 46px, line-height 1.06–1.10, max width about 560px
- body: 17px, max width about 510px, muted blue-grey
- no primary CTA inside hero in current Home version

Image treatment:
- background wash only behind text zone
- wash must fade before mascot, not cover entire scene
- no white fog over the complete hero
- mascot stands visually inside the scene, not floating as an icon

Mascot slot:
- target visible height: 205–225px
- right aligned with roughly 34–44px right inset
- baseline close to hero bottom
- must use V2 backpack Mees once produced

Current reusable background candidate:
- MEES-SCENE-MOUNTAIN-LAKE-001.jpg
- retain only if crop/color QA matches the mockup after V2 mascot is inserted

## 5. Subjects section

Spacing from hero:
- 26px to eyebrow
- 5px between eyebrow and heading
- 14px between heading and card grid

Heading:
- eyebrow: “Jouw vakken”
- h2: 28px desktop middle profile

Grid:
- 4 equal columns
- 14px gap
- each card about 284px wide at 1180px shell

Subject card:
- target height: 168px
- radius: 16px
- 1px quiet border
- no heavy shadow
- padding: 15px
- illustration area: top/left visual area, about 82–92px tall
- copy aligned to lower portion
- title: 16–17px / 800
- descriptor: 13px
- “Binnenkort” is quiet metadata, not a badge/reward

Subject visual direction:
- richer mini-illustration than current icon-like SVGs
- transparent asset
- composition may include Mees + one meaningful subject prop
- no baked-in labels or numbers that imply task progress

Required replacements:
- MEES-V2-SUBJECT-MATH-001
- MEES-V2-SUBJECT-READING-001
- MEES-V2-SUBJECT-NATURE-001
- MEES-V2-SUBJECT-CREATIVE-001

Current SVGs are placeholders for layout only.

## 6. Today / continue area

Desktop:
- two-column grid
- left: 2fr
- right: 1fr
- gap: 16px

Left panel:
- target min height: 178px
- title “Vandaag voor jou”
- three compact recommendation cards on group 5–6 desktop
- recommendation cards: about 86–94px high
- one interactive real route (Rekenen)
- non-implemented subjects remain visibly non-interactive

Right panel:
- target min height: same as left panel
- soft blue/green surface
- heading: “Je leerroute staat voor je klaar.”
- one real primary action
- no score/progress meter

## 7. Ontdekboek

Purpose:
- knowledge discovery, not reward economy

Desktop:
- target min height: 170px
- two columns, copy left and fact card right
- left/right ratio about 1.35 / .65
- 22–24px padding
- restrained surface, no celebration visuals

Fact card:
- white/light surface
- “Wist je dat?” label
- one short age-appropriate fact
- optional short follow-up sentence
- no collected count, rarity, stars, unlock animation or completion percentage

## 8. Vertical rhythm

Desktop middle profile:
- header → hero: 18px
- hero → subjects heading: 26px
- heading → subject cards: 14px
- subject cards → today area: 20px
- today area → Ontdekboek: 18px
- Ontdekboek → page bottom: 40–56px

## 9. Age variants, deferred until middle approval

Do not tune these yet. Preserve hooks only.

Junior (group 3–4), later:
- hero +30–45px
- mascot +10–15%
- subject illustrations +10%
- slightly more pastel richness
- fewer recommendation cards visible at once

Senior (group 7–8), later:
- hero −25–35px
- mascot −25–35%
- subject card visual area smaller
- more text density
- lower scene saturation
- no childish props

## 10. Home asset dependency list

Blocking assets before final Home visual approval:
1. MEES-V2-BRAND-HEAD-001
2. MEES-V2-BRAND-WORDMARK-001
3. MEES-V2-MASCOT-BACKPACK-001
4. MEES-V2-SUBJECT-MATH-001
5. MEES-V2-SUBJECT-READING-001
6. MEES-V2-SUBJECT-NATURE-001
7. MEES-V2-SUBJECT-CREATIVE-001

Non-blocking:
- optional decor
- alternate backgrounds
- extra mascot poses

## 11. Current asset decisions

Keep for QA:
- MEES-SCENE-MOUNTAIN-LAKE-001.jpg
- MEES-SCENE-FOREST-DISCOVERY-001.jpg

Replace before Home freeze:
- MEES-BRAND-HEAD-001.png
- MEES-MASCOT-HERO-BACKPACK-001.png
- current four V2 subject SVG placeholders

## 12. Visual acceptance checklist

Home middle profile is not approved until:
- hero proportions match this spec;
- text no longer dominates the hero;
- V2 mascot is used;
- subject cards are 168px-range rather than tall empty tiles;
- subject art reads as illustration rather than generic iconography;
- lower panels fit above/near the first desktop fold in a balanced way;
- no gamification appears;
- screenshot at 1440px is compared directly with the approved middle mockup.

## 13. Build sequence from here

1. Produce V2 brand head.
2. Produce V2 backpack hero Mees.
3. Produce four subject illustrations.
4. Wire those seven assets into the fixed middle layout.
5. Adjust CSS to this frozen spec.
6. Deploy.
7. Screenshot at 1440px.
8. Compare to mockup and correct.
9. Only after approval derive junior/senior variants.
