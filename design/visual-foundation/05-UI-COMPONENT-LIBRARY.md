# Mees UI Component Library v1

Status: implementation foundation
Date: 2026-09-30

## Principle
Components express the Mees design system consistently. Screens compose components; screens do not invent their own button, card, feedback or navigation language.

## Core components

### Button
Variants: primary, secondary, quiet. Minimum target 44x44px. Primary is reserved for the clearest next action.

### Card
Default surface for grouped information. Featured cards may use richer illustration and larger radius, but retain readable text contrast.

### SubjectCard
Subject identity + short real UI label. Illustration never contains the label itself.

### EnvironmentHero
Responsive scene slot for Home/Discover. Text and actions remain HTML layered independently from the illustration.

### ProgressIndicator
Calm factual progress such as “Vraag 3 van 6”. No score, streak, ranking or reward meter.

### AnswerOption
Large child-friendly answer target. Selected, focus and disabled states are explicit. Incorrect attempts do not become punitive red states.

### HintPanel
Supportive contextual help that keeps the task visible where possible.

### ExplanationPanel
Clear explanation after the intervention ladder calls for it. May use another representation.

### SessionHeader
Minimal Focus Mode header: progress plus an explicit stop/leave control. No global navigation during an active task.

### MascotMessage
Optional supportive Mees message. The mascot assists and never competes with the task.

### Dialog
Reserved for genuine interruptions or consequential choices.

## Accessibility
- semantic native controls first
- keyboard reachable
- visible focus
- 44px minimum targets
- readable contrast
- reduced motion honored
- state is never conveyed by color alone

## Implementation boundary
This library controls presentation and interaction semantics. It does not decide pedagogy. Hint/explanation/prerequisite decisions remain learning-engine responsibilities.
