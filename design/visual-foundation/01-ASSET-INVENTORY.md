# Mees Asset Inventory — Production Roadmap

This is the planning checklist for the visual library. It is intentionally broader than the current registry.

## P0 — Brand foundation
These assets are required before visual implementation is considered canonical.
- Primary horizontal logo: Mees head + wordmark
- Wordmark only
- Mascot head mark
- App icon light/dark
- Favicon
- Canonical full-body base Mees
- Canonical head close-up
- Front, 3/4 and side character references

## P0 — Core mascot states
- neutral/standard
- curious
- thinking
- calm
- helping
- explaining
- focused
- happy
- proud/success without gamification
- session closing/resting

## P1 — Contextual mascot scenes
- backpack / discovering
- cap / outdoors
- book / reading
- pointer / explaining
- magnifying glass / investigating
- map / exploring
- notebook / working
- compass / navigating
- maths context
- language/reading context
- world/nature context
- creative context

## P1 — Core environmental scenes
Create reusable scenes in the approved B+C+D language:
- forest path
- mountains/valley
- meadow
- coast/lighthouse
- classroom/reading corner
- discovery/work table
- volcano/geology
- calm abstract landscape for older groups

Each scene should have variants or crops suitable for hero cards and wide backgrounds without baking UI text into the image.

## P1 — Subject illustration family
- Rekenen
- Taal/lezen
- Wereldoriëntatie/ontdekken
- Creatief
- later additional subjects as product scope expands

## P1 — UI icon family
Icons are separate from mascot illustrations.
- home
- learn
- discover
- goals/progress
- profile
- back
- close/stop
- more
- hint/help
- calm screen
- audio/voice later
- math
- reading/language
- world/nature
- creative
- worksheet/paper
- tutor/human help

## P2 — Exercise-support illustrations
Only create when the educational interaction requires them.
- number-line decorative/support visuals
- grouping/counting objects
- simple quantities
- measurement contexts
- money contexts
- clocks/time contexts
- geometry contexts

Semantic educational diagrams should generally be rendered by code, not baked into decorative images.

## P2 — Empty / system states
- welcome
- no activity yet
- session complete
- paused
- offline/error, calm and non-alarming
- parent approval waiting where applicable

## Age-expression coverage
Do not create six unrelated asset libraries. For each major family, verify it works in:
- Group 3–4: richer, warmer, more narrative
- Group 5–6: balanced
- Group 7–8: calmer, selective illustration, still unmistakably Mees

## Production order
1. Canonical logo + base Mees
2. Core expressions/poses
3. Core UI icons
4. First 4 environmental scenes
5. Subject family
6. Contextual mascot variants
7. Exercise-support assets as demanded by real learning flows
8. Long-tail/system states

## Definition of done for an asset
An asset is done only when:
- it matches the approved base character/style;
- accidental anatomy/accessories are absent;
- transparent/background behavior is correct;
- it works at its intended size;
- it has a stable ID and filename;
- master and web formats exist where applicable;
- it is entered in ASSET-LIBRARY.md;
- visual QA is approved.


## Approved P0 visual set — 2026-09-30

The latest reviewed P0 asset direction is approved as the production target.

### Brand
- MEES-BRAND-HEAD-001 — compact Mees
- MEES-BRAND-LOGO-HORIZONTAL-001 — compact Mees + wordmark
- MEES-BRAND-APPICON — required at 1024, 512, 256 and 128 px
- MEES-BRAND-FAVICON — compact small-size mark

### Character
- MEES-MASCOT-BASE-001
- MEES-MASCOT-WAVE-001
- MEES-MASCOT-CURIOUS-001
- MEES-MASCOT-THINKING-001
- MEES-MASCOT-EXPLAIN-001
- MEES-MASCOT-BOOK-001
- MEES-MASCOT-BACKPACK-001
- MEES-MASCOT-HAPPY-001
- MEES-MASCOT-WINK-001
- MEES-MASCOT-SURPRISED-001
- MEES-MASCOT-EXCITED-001
- MEES-MASCOT-CALM-001
- MEES-MASCOT-SLEEP-001
- MEES-MASCOT-CELEBRATE-001

### Props / contextual illustration
- lightbulb
- magnifier
- book
- backpack
- cap

### Important correction
The generated sheet also contained star/check/cross/question symbols. These are **not automatically approved as product UI icons**. Mees avoids generic reward/gamification patterns and negative “wrong” signaling. Functional UI icons must follow the UI component/icon system and educational interaction rules.

### Production requirement
Approval of the visual set does not mean individual binary assets already exist in the repository. Each production asset must still be exported as its own transparent file, visually checked, registered in ASSET-LIBRARY.md and only then marked approved for implementation.
