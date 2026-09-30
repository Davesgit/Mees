# Implementation Boundary

> Status: startpunt voor Codex / implementatie-agent  
> Doel: duidelijk maken wat nu veilig gebouwd kan worden en welke keuzes nog niet stilzwijgend in code mogen worden vastgezet.

## 1. Wat nu voldoende ontworpen is

Een implementatie-agent kan nu beginnen met:
- project skeleton;
- design-token structuur;
- generieke UI primitives;
- synthetische testdata loader;
- Learning Event types;
- evidence types;
- Learner State types;
- simulator harness;
- Basic Exercise Engine prototype;
- Number Line prototype;
- scenario/golden tests.

## 2. Wat nog niet als productiefeit geldt

Niet hardcoderen als definitieve onderwijswaarheid:
- testleerdoelen;
- testvragen;
- mastery thresholds;
- recency thresholds;
- tutor thresholds;
- curriculum/group mapping;
- evidence weights.

Deze onderdelen zijn expliciet synthetisch of nog te kalibreren.

## 3. Eerst simulator, dan database

De eerste engine-implementatie moet met in-memory/synthetische fixtures kunnen draaien.

Bouw niet eerst een complexe productie-Supabase-structuur.

Reden:
- contracts kunnen nog verfijnd worden;
- thresholds moeten worden getest;
- testfeedback moet goedkoop verwerkt kunnen worden.

## 4. Pure functions waar mogelijk

Kernlogica liefst als pure, testbare functies:

    deriveEvidence(events)
    evaluateMastery(evidence, goal, modelConfig)
    chooseNextAction(state, context, engineConfig)

Geen databasecalls of UI-mutaties binnen deze kernfuncties.

## 5. Scheiding

Houd minimaal gescheiden:

    domain/
      learning-goals
      questions
      events
      evidence
      learner-state

    learning-engine/
      mastery
      adaptive
      interventions
      simulator

    exercises/
      basic
      number-line

    ui/
      primitives
      exercise-shell

Exacte mappen mogen aansluiten op het gekozen framework, maar verantwoordelijkheden blijven gescheiden.

## 6. Config boven verborgen constants

Kalibratiewaarden komen in versieerbare configuratie.

Niet:

    if successes >= 3 // magic

Wel conceptueel:

    masteryConfig.minimumIndependentEvidence

met tests en rationale.

## 7. Reason codes

Alle belangrijke enginebeslissingen leveren machineleesbare reason codes.

Deze zijn onderdeel van tests.

Voorbeelden:
- insufficient_evidence;
- need_independent_evidence;
- insufficient_variation;
- conflicting_evidence;
- prerequisite_unknown;
- intervention_exhausted;
- technical_invalidity.

## 8. Geen LLM dependency

Simulator, mastery en adaptive core moeten zonder externe AI API werken.

Geen prompt als verborgen businesslogic.

## 9. Geen echte kinddata

Gebruik uitsluitend de fixtures in test-data totdat privacy, auth en data-architectuur expliciet voor implementatie zijn goedgekeurd.

## 10. Definition of Ready voor serverdata

Voor Supabase-productieschema:
- event schema stabiel genoeg;
- state derivation getest;
- parent/child/tutor autorisatiemodel ontworpen;
- RLS-plan gereviewd;
- retentie/verwijdering ontworpen;
- dev/preview/prod scheiding vastgesteld.

## 11. Definition of Ready voor pilot

Zie docs/02-MVP-1-PLAN.md en learning-engine/SIMULATION-PLAN.md.

Geen echte pilot omdat de UI "er al goed uitziet". De leermotor en dataveiligheid moeten aantoonbaar klaar zijn.

## 12. Ontwerpprincipe

**Code mag open ontwerpvragen zichtbaar maken, maar mag ze niet stilletjes beantwoorden.**
