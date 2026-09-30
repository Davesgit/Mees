# Mees Visual Master Plan — Decision Log

> Status: living source of truth for humans and AI tools.
> Last updated: 2026-09-30.
> Rule: do not invent a replacement visual direction when an approved rule or asset exists here.

## 1. Core visual direction — APPROVED

Mees combines three expressions inside one identity:
- **B — Natuurlijk & Gebalanceerd** is the permanent foundation: calm, natural, warm, clear.
- **C — Nieuwsgierig & Avontuurlijk** provides character: discovery, narrative scenes, landscapes, mascot energy and meaningful props.
- **D — Modern & Minimalistisch** provides maturity: calmer composition, lower decorative density and stronger focus.

These are not separate themes. They are expression layers of one Mees system.

### Age progression
Mees grows gradually from group 3 through group 8. There must never be an abrupt jump from a children's app to a business/dashboard aesthetic.
- Group 3–4: B + more C. Richer illustration, mascot more prominent, generous shapes.
- Group 5–6: B + balanced C/D. More structure, still clearly illustrated and warm.
- Group 7–8: B + more D, with selective C. Calmer and more focused, but never sterile or spreadsheet-like.

The logo, core palette, mascot identity and component family remain recognizable across all groups.

## 2. Logo direction — APPROVED

Structure: **Mees bird head + Mees wordmark**.

The approved concept is the rounded blue bird head next to a friendly dark-blue “Mees” wordmark. The heart motif is rejected.

Important mascot/logo constraint:
- The base bird has a clean silhouette.
- No permanent yellow/beige/brown object may appear on its back, neck or behind its head.
- Any such accidental generated element is a generation artifact and must be rejected.
- The logo/base character contains no contextual accessories.

Required production assets:
- horizontal logo;
- wordmark-only;
- mascot-head mark;
- app icon light;
- app icon dark;
- favicon;
- light/dark/monochrome usage variants.

## 3. Mascot — APPROVED DIRECTION

Mees is a rounded blue bird with:
- blue body;
- pale cream belly/face transition;
- orange/yellow beak and feet where full body is visible;
- large friendly expressive eyes;
- recognizable rounded head tuft;
- soft, polished illustration treatment.

Character traits: curious, adventurous, friendly, helpful, calm and capable.

### Props are encouraged
The base character has no permanent props, but contextual props are an important part of the visual language. Approved examples include:
- backpack;
- cap;
- book;
- teaching/pointer stick;
- magnifying glass;
- map;
- notebook;
- compass.

Props must have contextual meaning and remain optional. They do not alter Mees's core anatomy.

### Expressions / roles
The asset library should eventually include approved variants for:
standard, happy, curious, surprised, thinking, proud, calm, enthusiastic, concentrated, helping, explaining, success and session closing/resting.

## 4. Illustration direction — APPROVED DIRECTION

Use warm, inviting, story-rich scenes influenced by the B/C/D combination:
- natural landscapes;
- exploration and discovery;
- learning environments;
- subject-related scenes;
- soft shapes and friendly depth;
- visual richness decreases gradually for older groups.

Illustrations may be adventurous and atmospheric. “Calm” does not mean empty or boring.

## 5. Color direction — APPROVED DIRECTION

Use one shared Mees color family, not unrelated palettes per school group.

Current approved direction:
- Mees blue as the recognizable primary family;
- dark blue for strong text/brand contrast;
- cream/warm off-white backgrounds;
- light blue for calm surfaces;
- mint/green for natural/supportive accents;
- peach/orange/yellow for warm contextual accents;
- sand and warm grey for neutral surfaces;
- restrained lavender/purple may be used as a secondary accent.

Exact production hex values are **not yet frozen**. Values shown in generated concept boards are references only until accessibility/contrast and implementation QA are complete.

Age progression changes the *amount and intensity* of accents, not the identity of the palette.

## 6. Typography — APPROVED DIRECTION

Primary UI family: **Nunito Sans**.

Reasoning: friendly and rounded enough for younger children while remaining neutral/mature enough to scale through group 8.

Usage progression:
- Group 3–4: larger type, more generous line height, stronger headings, short text blocks.
- Group 5–6: slightly calmer scale and weights.
- Group 7–8: more restrained hierarchy and tighter information density while retaining readability.

Math/numeric UI uses the same family where practical, with suitable weight and tabular numerals where alignment matters.

The Mees wordmark is a custom brand asset and must not be recreated by simply typing “Mees” in Nunito Sans.

## 7. Navigation/layout — APPROVED PRINCIPLE

Navigation follows **Contextual Navigation + Focus Mode**:
- Home/overview: navigation is visible and compact.
- Active exercise, hint, explanation or focused task: global navigation disappears.
- Essential session controls, progress and a clear stop/leave action remain.
- Younger groups use fewer visible choices; older groups may carry slightly denser navigation.
- A persistent sidebar is not assumed.

Core rule: navigation appears when the child needs to choose where to go, and disappears when the child already knows what they are doing.

## 8. UI DNA — NEXT DECISION

Still to define/freeze:
- navigation;
- cards;
- buttons;
- fields;
- exercise surfaces;
- hint/feedback components;
- icon style;
- radii;
- shadows;
- spacing;
- responsive composition;
- age-expression rules per component.

## 9. Asset production rules

Concept boards are reference material, not production assets.

Every approved production illustration must be exported individually and receive a stable asset ID.

Suggested structure:
```
public/assets/mees/
  brand/
  mascot/base/
  mascot/expressions/
  mascot/poses/
  mascot/context/
  illustrations/
  icons/
```

Example IDs:
- MEES-BRAND-LOGO-HORIZONTAL-001
- MEES-MASCOT-BASE-HEAD-001
- MEES-MASCOT-CURIOUS-001
- MEES-MASCOT-EXPLORE-BACKPACK-001
- MEES-MASCOT-EXPLAIN-POINTER-001

Important: prefer complete approved mascot poses over programmatically assembling eyes, wings, beaks and limbs.

## 10. AI handoff rule

Any AI tool working on Mees visual design must:
1. read this decision log and the main design system first;
2. preserve approved choices;
3. distinguish APPROVED, DIRECTION and NOT YET APPROVED decisions;
4. never treat generated concept-board artifacts as intentional design details;
5. never add a permanent yellow/beige/brown back accessory to the base mascot;
6. never turn older-group Mees into a generic corporate dashboard;
7. propose new visual patterns before silently introducing them into production.

## 11. Visual QA principle

A production screen is not visually approved merely because it is functional.

For important screens:
1. create/approve a reference design;
2. implement it using approved assets and tokens;
3. render at the same viewport;
4. compare reference and implementation;
5. correct meaningful differences;
6. only then mark visual QA approved.

## 12. Next decision

Define the **Mees UI form language and navigation system**, including how the same components evolve gradually from group 3 to group 8.


## 13. Mees Outline — APPROVED

The soft white contour around Mees is an intentional part of the visual language.

Rules:
- Keep a clean master asset without outline where practical.
- Provide an official UI/display variant with a consistent soft white contour.
- Use the outline especially on illustrated, colored or visually busy backgrounds.
- On white/light cards the outline may be reduced or omitted when it creates a double-border effect.
- Do not improvise outline width/style per screen.
- Logo and app-icon variants are treated separately for contrast and do not automatically inherit the mascot outline.

Asset naming may use suffixes such as `-clean` and `-outline` when both production variants exist.


## 14. Mees Visual System v1 — SUPERSEDED / LEGACY 2026-09-30

Visual System v1 documents the previous production direction. It is retained for history and implementation reference, but it is no longer the target visual direction. Learning architecture, UX behavior and non-gamification decisions remain valid unless explicitly superseded.

### Composition
- Warm off-white app canvas with generous whitespace.
- Compact top navigation on overview screens.
- Hero combines a calm text field on the left with one controlled illustrated discovery world on the right.
- Mees belongs inside the illustrated world and must not overpower the headline.
- “Voor jou vandaag” is a clear, calm primary action card below the hero.
- Subject discovery uses four illustrated cards: Rekenen, Taal & lezen, Wereld & natuur, Creatief.
- Desktop and mobile are the same visual system, recomposed rather than redesigned.

### Subject illustration language
- Rekenen: Mees with number blocks / concrete number material.
- Taal & lezen: Mees reading a book.
- Wereld & natuur: Mees investigating with a magnifying glass in nature.
- Creatief: Mees painting / making with art materials.

### Hard exclusions
No stars, badges, XP, points, streaks, trophies, rankings, reward percentages, confetti or reward meters. Positive child feedback remains calm and contextual, with “Goed bezig!” as the default.

### Background restraint
Rich illustration is concentrated in Home/discovery and subject cards. Active learning tasks, hints and explanations use plain or subtly tinted surfaces without scenic clutter.


## Home v1 — LEGACY REFERENCE 2026-09-30

The production Home direction for the middle age band (groups 5–6) is approved as the baseline implementation.

Frozen principles:
- one restrained illustrated hero with Mees and landscape;
- a clear 'Voor jou vandaag' route before free subject choice;
- four pastel subject cards using the approved subject illustration family;
- subject artwork supports recognition but does not dominate card text;
- no stars, badges, percentages, streaks, points or reward meters;
- calm functional feedback such as 'Goed bezig!';
- compact, contextual navigation on Home;
- whitespace remains an active part of the visual system.

Future Home changes should be driven by usability, accessibility, age-band adaptation or validated learning needs, not decorative churn.

Next production focus: carry this visual language into Focus Mode and the first mathematics exercise flow.


## 15. Calm mascot refinement — REVIEW DIRECTION 2026-09-30

A user-supplied mobile-app reference established a useful refinement target for visual calm. It is **not** a new Mees style and must not be copied as branding.

### What may be learned from the reference
- simpler, more graphic mascot rendering;
- fewer glossy/3D effects and fewer micro-details;
- clear color fields and silhouette;
- generous whitespace around the character;
- a small seated/learning pose can feel calmer than a large expressive render.

### What must remain Mees
- canonical crest, eyes, blue/cream color relationship, orange/yellow beak and established proportions;
- approved logo structure and wordmark rules;
- the B/C/D visual system and age progression;
- contextual props only when meaningful.

### Explicit non-goals
- do not copy the reference bird;
- do not adopt its generic mobile UI as the Mees design system;
- do not introduce progress rings, trophies, stars, goals, reward meters or other gamification shown in the reference;
- do not replace approved production assets before a refined candidate is explicitly approved.

Working principle: **Mees may be rich in worlds, but calm in form.**

A calmer mascot candidate must enter the asset registry as `review`. It becomes canonical only after explicit human approval.


## 16. Visual System v2 — ACTIVE DESIGN DIRECTION 2026-09-30

Visual System v2 intentionally moves Mees toward a calmer, lighter and more child-oriented educational product. The user-supplied mobile reference is a mood/reference source for calmness and age-fit only, not a design to copy.

### V2 character
- recognizably for primary-school children, without becoming babyish;
- generous white/near-white space;
- simple, friendly shapes and clear hierarchy;
- illustrations use flatter/softer rendering and substantially less 3D texture;
- Mees remains expressive and warm, but visual noise is reduced;
- learning content is visually dominant during tasks.

### V2 interface
- white or very light warm canvas;
- cards rely more on spacing and subtle borders than heavy shadows;
- restrained pastel subject accents;
- fewer decorative scenic backgrounds;
- controls are simple, large and predictable;
- one primary action per state;
- illustration supports orientation and warmth rather than filling empty space.

### V2 mascot target
The mascot should move closer to the calm, child-friendly quality of the seated bird reference while remaining an original Mees character. Do not copy the reference anatomy or artwork. The previous glossy 3D rendering is no longer the target for new assets.

### What survives from v1
- Contextual Navigation + Focus Mode;
- UX State Contract;
- Nunito Sans as current UI typography direction;
- non-gamification constraints;
- semantic color roles;
- accessibility rules;
- age progression from groups 3 through 8;
- learning-engine and curriculum architecture.

### Migration rule
Do not bulk-redesign production screens until the V2 mini-system is approved. First approve: mascot direction, brand lockup, palette, typography treatment, button/card/input language, one Home reference and one mathematics Focus Mode reference. Then migrate components and screens systematically.
