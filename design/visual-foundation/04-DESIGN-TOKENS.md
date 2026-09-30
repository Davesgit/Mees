# Mees Design Tokens v1

Status: production foundation
Date: 2026-09-30

## Purpose

Tokens translate the approved Mees visual world into stable UI rules. Illustration may be rich; the interface itself stays calm, readable and predictable.

## Color roles

Use semantic roles in components rather than hard-coded illustration colors.

- `--mees-bg`: warm near-white application background
- `--mees-surface`: primary card/surface
- `--mees-surface-soft`: subtle secondary surface
- `--mees-text`: primary high-contrast text
- `--mees-text-muted`: secondary text
- `--mees-primary`: Mees blue, primary actions and selected state
- `--mees-primary-hover`: darker primary interaction state
- `--mees-accent-warm`: warm orange accent, sparingly
- `--mees-success`: calm confirmation state, not reward/confetti
- `--mees-warning`: attention/help state
- `--mees-border`: quiet structural border
- `--mees-focus`: accessible keyboard focus ring

Do not use red as a child-facing “wrong answer” punishment signal. Incorrect attempts should lead to guidance.

## Typography

Primary UI family: Nunito Sans with robust system fallbacks.

Recommended scale:
- display: 40/48, 700
- h1: 32/40, 700
- h2: 26/34, 700
- h3: 21/28, 700
- body-lg: 18/28, 500
- body: 16/24, 500
- small: 14/20, 600
- numeric/task: 28–40 depending on exercise

Use tabular numerals where alignment or changing numeric values matter.

Age adaptation changes size/spacing/density, not font family.

## Spacing

Base grid: 4px.

Preferred tokens:
4, 8, 12, 16, 20, 24, 32, 40, 48, 64.

Group 3–4 defaults toward more breathing room and larger controls.
Group 7–8 may be denser, but never cramped.

## Radius

- small controls: 10px
- buttons/inputs: 14px
- cards: 18px
- feature/hero cards: 24px
- pill: 999px

Avoid making every element a pill.

## Elevation

Use shadows for hierarchy, not decoration:
- level 0: none
- level 1: subtle card separation
- level 2: floating contextual panel
- level 3: modal/dialog only

Illustrations can have dimensional shading; UI chrome should remain restrained.

## Interaction sizing

- minimum interactive target: 44x44px
- primary child-facing controls: preferably 48–56px high
- clear visible focus state
- hover must never be the only affordance

## Motion

Motion should explain change, not manufacture excitement.
- fast: 120ms
- normal: 180ms
- slow: 260ms
- reduced-motion: remove nonessential transform/movement

No reward bursts, confetti, attention loops or streak animation.

## Layout

Core content width:
- reading/task focus: approximately 720px
- general content: approximately 1120px
- environment/hero art may bleed wider

Focus Mode removes global navigation and decorative competition around the active task.

## Illustration integration

- Home/Discover may use rich environment art.
- Task cards use subject art selectively.
- Focus Mode minimizes illustration density.
- Mascot never blocks task content or answer controls.
- Use approved master assets, never regenerate assets at runtime.
- Scene labels remain HTML/UI text, never baked into scene images.

## Responsive image slots

Each approved environment should support:
- wide hero: 16:7 to 16:9
- card: approximately 4:3
- mobile hero: approximately 4:5 or 9:16 crop

Prefer crops from one approved master over separately regenerated compositions.

## Component implications

The token layer is designed for:
- Button
- IconButton
- Card
- SubjectCard
- EnvironmentHero
- ProgressIndicator
- AnswerOption
- Input
- HintPanel
- ExplanationPanel
- SessionHeader
- Stop/Leave control
- Modal/Dialog
- MascotMessage

The next phase defines these as reusable components rather than styling screens ad hoc.
