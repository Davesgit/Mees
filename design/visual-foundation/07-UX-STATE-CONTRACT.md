# Mees UX State Contract v1

Status: production baseline

## Core principle
The child should always know what the next action means. Controls do not change meaning between exercise types.

## Exercise state sequence
1. Answering: primary is Controleren and disabled until there is input/selection. Secondary is Hint.
2. Incorrect: calm feedback asks the child to look again. The answer stays editable and Hint remains optional.
3. Hint: first support is Hint. If more support exists, the action becomes Nog een hint. After the final hint, the hint action disappears.
4. Retry: changing the answer returns the task to answering state. Existing support remains visible as context.
5. Correct: primary becomes Verder, Hint disappears, feedback confirms without reward mechanics, and a short explanation may appear.
6. Continue: Verder always advances the learning route. In a prerequisite route it can return to the original goal automatically.

## Number line parity
The number line follows the same contract as numeric input: no Controleren before selection, same hint language, same feedback, same meaning of Verder.

## Stop
Stoppen is always available in Focus Mode. It is recorded as a session intervention and opens a neutral closure screen. The child can resume from that screen.

## Content hierarchy
Question > answer interaction > actions > support/feedback.
No scenic illustration in active tasks. Mascot presence stays small and non-instructional.

## Non-gamification
No XP, streaks, stars, scores, reward meters, confetti, rankings or performance percentages.
Functional progress such as Vraag 2 van 5 is allowed.
