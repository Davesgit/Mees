# Basic Exercise Engine

> Status: MVP 1 exercise contract

## 1. Scope

De Basic Engine behandelt opdrachten zonder gespecialiseerde visuele manipulator.

Eerste response types:
- integer;
- decimal later indien nodig;
- short text;
- single choice.

De engine is een renderer van het Question Contract, geen opslagplaats voor onderwijscontent.

## 2. Input

Conceptueel:

    question_id
    question_version
    learning_goal_id
    prompt
    speakable_prompt
    response_schema
    validation
    hints
    explanation
    semantic_parameters

## 3. States

    presenting
    answering
    validating
    incorrect_can_retry
    showing_hint
    showing_explanation
    completed

UI-state is niet hetzelfde als Learner State.

## 4. Numeric input

- grote leesbare cijfers;
- passend mobiel toetsenbord;
- toetsenbordbediening desktop;
- geen antwoord valideren op iedere toetsaanslag;
- herstelbare invoer;
- lege invoer is geen incorrect leerantwoord.

## 5. Choice

Choices worden alleen gebruikt wanneer het vraagtype pedagogisch passend is.

Randomiseer volgorde alleen wanneer semantiek dat toestaat en leg de concrete instance vast.

## 6. Validation

Validatie komt uit expliciete vraagregels.

De component verzint geen alternatieve correcte antwoorden.

Validatorversie wordt waar relevant in Learning Events bewaard.

## 7. Hints

De engine toont hints in contractvolgorde.

Het kind ziet niet noodzakelijk "Hint niveau 1".

Iedere hintactie produceert een betekenisvol event met support level.

## 8. Feedback

Correct:
- rustig;
- kort;
- geen scorefeest.

Incorrect:
- neutraal;
- passende vervolgstap;
- geen diagnose.

## 9. Read-aloud

Prompt en relevante tekst kunnen worden voorgelezen.

Wiskundige uitspraak wordt apart getest zodat symbolen begrijpelijk worden uitgesproken.

## 10. Events

Minimaal:
- question_presented;
- answer_submitted;
- hint_requested;
- explanation_presented;
- attempt_completed;
- attempt_stopped.

Geen event per keypress.

## 11. Accessibility

- labels gekoppeld aan inputs;
- zichtbare focus;
- foutmelding programmatisch gekoppeld;
- Enter/submit voorspelbaar;
- kleur niet als enige feedback;
- voldoende grote controls.

## 12. Tests

Minimaal:
- correct integer;
- incorrect → hint → correct;
- leeg submitten;
- toetsenbord;
- read-aloud;
- stoppen;
- technische validatorfout;
- duplicate submit bescherming;
- lange Nederlandse prompt;
- rustige modus.

## 13. Ontwerpprincipe

**De Basic Engine maakt eenvoudige vragen eenvoudig. Hij voegt geen interfacecomplexiteit toe die niet nodig is om te denken en te antwoorden.**
