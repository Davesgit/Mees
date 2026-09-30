# Mees Visual System v2 — Approval Brief

Status: ACTIVE DESIGN EXPLORATION
Date: 2026-09-30

## Goal
Create a calmer, lighter and clearly child-oriented Mees without copying the supplied reference or discarding the product/learning foundation.

## Design sentence
**Friendly enough for group 3, calm enough for group 8, focused enough for learning.**

## 1. Brand and mascot
Keep the Mees identity recognizable. New mascot assets should reduce glossy 3D texture, micro-detail and cinematic rendering. Prefer clear silhouettes, soft/simple shading and expressive poses. The seated-on-books reference is useful for scale, calmness and child friendliness, not for anatomy to copy.

Candidate asset status remains review until explicit approval.

## 2. Canvas and composition
- Primary canvas: white to warm near-white.
- Use whitespace as the main separator.
- Avoid large decorative landscapes as the default.
- One illustration cluster may anchor an onboarding/home area.
- Focus Mode is almost entirely content-first.

## 3. Color
Keep a recognizable Mees blue/dark-blue core. Use light blue, mint, peach/yellow and restrained lavender as supporting subject/context colors.
Pastels are surfaces/accents, not a rainbow reward system.
Exact V2 hex values require accessibility QA before freeze.

## 4. Typography
Nunito Sans remains the current UI direction.
- strong dark-blue headings;
- simple body copy;
- short child-facing sentences;
- large numerals for mathematics;
- custom wordmark remains a separate brand asset.

## 5. Components
### Button
Simple rounded rectangle. Primary blue, secondary light/outlined, quiet text action. Avoid exaggerated pill shapes and heavy shadows.

### Card
White/light surface, subtle border, low/no shadow, moderate radius. Space creates hierarchy.

### Subject card
Small calm illustration/icon + title + short descriptor. Subject color is supportive, not dominant.

### Input
Large clear field with visible label/help. Focus state uses blue, incorrect state stays non-punitive, correct state stays calm.

### Feedback
Compact supportive panel. No trophy/star/reward visuals. Mees may appear only when the illustration adds reassurance or explanation.

## 6. Home reference target
Home should contain:
- compact official brand;
- personal/simple welcome;
- one clear “continue/today” action;
- calm subject choices;
- optional small Mees illustration;
- no progress ring, weekly goal, trophy, streak, score or reward meter.

## 7. Mathematics Focus Mode reference target
- minimal session header;
- factual progress only when useful;
- one problem as the visual focal point;
- one answer interaction;
- primary action + optional Hint;
- feedback below the action;
- little or no decorative illustration.

## 8. Age expression
Group 3–4: larger type/controls, mascot somewhat more present, slightly richer pastel use.
Group 5–6: balanced baseline.
Group 7–8: less mascot presence, tighter composition, fewer decorative accents.
Same components and identity throughout.

## 9. Hard exclusions
- copying the supplied reference artwork or layout;
- gamification;
- generic corporate dashboard styling;
- glossy/cinematic 3D as the default mascot style;
- decorative scene overload;
- new logo/wordmark inventions;
- screen-specific component styles that bypass shared tokens.

## 10. Approval gate before migration
Approve these together:
1. mascot rendering direction;
2. logo/wordmark lockup;
3. V2 palette;
4. typography treatment;
5. buttons/cards/inputs/feedback;
6. one Home reference;
7. one math Focus Mode reference.

Only after this gate may V2 replace production V1 styling.


## Review decision — 2026-09-30

The current V2 board is approved as the working visual direction with one explicit rejection:
- the current **happy / blije pose** is rejected and must not be used as a mascot reference or production asset.

Everything else on the board is accepted as the basis for the next refinement pass, subject to the existing rule that concept-board artwork is not automatically a production asset.

### Happy pose correction
A replacement happy pose must preserve normal Mees anatomy and proportions. Happiness should come primarily from expression and posture, not from distorting the body:
- keep the canonical head/body silhouette;
- keep normal wing placement and scale;
- use a warm open/bright expression;
- a subtle upward wing gesture is allowed;
- avoid oversized spread wings, strange limb placement, extreme deformation or a celebratory/reward pose;
- the result should read as friendly and pleased, not as a trophy/celebration character.


## Final V2 mascot expression rule

The latest V2 direction is approved for production migration. All mascot poses keep the same canonical open-eye design and proportions. Expression is communicated through posture, head angle, wing position, stance and subtle contextual accent marks. The rendering direction is calm, flat or softly shaded, with rounded silhouettes, generous whitespace, restrained pastel accents and simple educational UI. Concept boards remain references; individual production assets require their own registry entry and visual QA.


## Production migration checkpoint 1

Home has begun migration to V2. The scenic mountain hero has been removed from the default Home composition. Until the approved V2 mascot production asset exists, Home uses only the existing approved compact brand head in a restrained abstract shape. This is an intentional bridge, not a new mascot design.

The Home implementation now follows these V2 rules:
- whitespace and light surfaces over scenery;
- no reward-style reassurance badge;
- subject cards use restrained pastel surfaces;
- borders and spacing provide hierarchy instead of large shadows;
- mascot presence is small and supportive;
- old V1 subject illustrations may remain temporarily during staged migration and must be replaced by approved V2 assets later.


## Production migration checkpoint 2

Focus Mode and session closure now use the V2 visual language.

UX corrections made during this migration:
- session closure has explicit reasons: completed, child-stopped, or extra-human-help-needed;
- a no-question engine action is no longer automatically interpreted as the child having stopped;
- completed numeric inputs and number-line controls are locked against accidental edits;
- the mascot has been removed from the active exercise card so learning content stays dominant;
- completion no longer shows a pseudo-performance summary of task count/support use;
- Focus Mode uses light canvas, simple borders and low visual noise;
- the old V1 backpack hero component has been removed from application code.

Temporary bridge assets remain limited to the approved compact brand head and legacy subject illustrations. No unapproved V2 mascot has been introduced into production.


## Production migration checkpoint 3

The production stylesheet has been collapsed to one V2 system. The former layered V1 token/component rules and later override blocks are no longer the runtime styling model.

Additional UX cleanup:
- Home no longer exposes inert global navigation controls;
- Rekenen is a real entry point from both the Today card and subject card;
- planned subjects are presented as non-interactive “Binnenkort” content rather than fake buttons;
- Brand/Header styling now comes from the same V2 token layer;
- the V2 design-token document is the active production reference.

This checkpoint deliberately keeps legacy subject artwork as temporary content assets. Replacing illustration files remains a separate visual-QA step.
