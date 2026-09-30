# First Complete Mees Flow

Status: implementation in progress
Date: 2026-09-30

## Flow
Home → Voor jou vandaag → Focus Mode exercise → optional hint → feedback/explanation → next exercise → calm session end.

## Screen responsibilities

### Home
Choice/navigation is visible. The child sees one primary recommendation and a small amount of supporting context.

### Focus Mode
Global navigation disappears. Keep:
- Mees brand
- factual progress
- explicit Stoppen control
- one task
- answer interaction
- contextual support

### Support
Hints and explanations appear inside the task flow. They do not open a noisy secondary navigation layer.

### End
End calmly. No confetti, points, streak, ranking or pressure to continue.

## Current implementation
The real React web flow now uses the v1 button, feedback, session-header and focus-shell primitives. Existing learning-engine behavior remains authoritative.

## Remaining visual integration
- replace temporary CSS bird/brand with approved asset masters once binary assets are committed
- connect approved environment/subject art to Home
- finish AnswerOption component integration where question types support options
- visually compare deployed flow against approved Mees reference direction at matching viewport sizes
