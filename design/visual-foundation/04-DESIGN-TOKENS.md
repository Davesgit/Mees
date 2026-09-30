# Mees Design Tokens v2

Status: active production foundation
Date: 2026-09-30

## Purpose

V2 is calm, child-friendly and content-first. Shared tokens create the visual hierarchy. Screen-specific overrides should be exceptional.

## Core color roles

Production CSS is the source of truth.

- `--mees-canvas: #f8fafc` — application canvas
- `--mees-surface: #ffffff` — cards and controls
- `--mees-surface-soft: #f3f7fb` — quiet secondary surface
- `--mees-text: #173d70` — primary dark-blue text
- `--mees-muted: #61758d` — secondary text
- `--mees-primary: #2f7cf4` — primary action
- `--mees-primary-hover: #2369d5` — primary hover
- `--mees-border: #dce6f0` — structural border
- `--mees-mint: #e9f7ef` — calm correct/supportive state
- `--mees-warm: #fff5df` — hint surface
- `--mees-info: #edf7fd` — retry/information surface
- `--mees-lavender: #f7f0fa` — restrained subject surface

Pastels are context surfaces, never a reward language. Incorrect answers do not use punitive red.

## Typography

Primary UI direction: Nunito Sans with rounded/system fallbacks.

- large Home heading: responsive 32–45px
- exercise prompt: responsive 29–38px
- section heading: about 23px
- body: 16px baseline
- support text: 12–14px
- numeric input: about 32px

Age profiles change scale and density, not typeface or identity.

## Shape

- controls: 12px radius
- standard cards: 16px
- feature/exercise cards: 18px
- pills only for compact metadata where the shape is meaningful

V2 avoids the oversized rounded-card language of V1.

## Elevation

Default UI elevation is none. Use border, spacing and surface contrast first. Shadows are reserved for overlays/dialogs that actually float above content.

## Interaction

- minimum target: 44×44px
- common child-facing action: 46–50px high
- keyboard focus: visible blue focus ring
- disabled controls remain clearly legible
- completed answer controls are locked to prevent accidental state changes
- do not present inactive UI as clickable

## Motion

Motion explains state change only:
- fast: 120ms
- normal: 180ms
- feedback entrance: tiny fade/3px shift
- respect reduced motion

No confetti, reward bursts, streak animation or looping attention effects.

## Layout

- app shell: max 980px
- Focus Mode/session content: max 760px
- active exercise uses one dominant content card
- Home may use one restrained abstract mascot/brand cluster
- scenic worlds are not the default background

## Focus Mode

Global navigation disappears during an active task. Keep only brand, factual session progress and Stoppen. Mascot art is normally absent from the exercise card. Hint, retry and explanation panels remain compact and subordinate to the problem.

## Home

Home may show subject choices and one clear “today” action. Only implemented destinations receive interactive affordances. Planned subjects may be visible as non-interactive “Binnenkort” cards.

## Mascot and illustration

V2 mascot assets use the approved calm flat/soft-shaded direction and canonical open eyes. Expression comes from posture, head angle, wings and stance. Until individual V2 production assets pass visual QA, the approved compact legacy brand head may be used only as a temporary bridge.

## Non-gamification lock

Do not add stars, trophies, points, XP, streaks, rankings, reward meters, celebratory confetti or tracked praise. Functional progress such as “Vraag 3 van 6” is allowed.
